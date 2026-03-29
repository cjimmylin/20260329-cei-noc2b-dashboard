/* ============================================================
   Tapestry Census Explorer — Charts (Response 1)
   Plain JS, no ES6 modules. ECharts dark theme.
   All data from pre-computed CENSUS constant in data.js.
   Addresses: P12 (interpretive titles in HTML, not here),
              P17 (confidence badges in findings renderer)
   ============================================================ */

var ECHARTS_THEME = {
    textColor:      '#94a3b8',
    axisLineColor:  '#334155',
    splitLineColor: '#1e293b',
    tooltipBg:      'rgba(15,23,42,0.95)',
    tooltipBorder:  '#334155'
};

var COLORS = {
    families: ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#22d3ee'],
    orgTypes: ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#ef4444', '#ec4899', '#8b5cf6', '#f97316', '#14b8a6', '#38bdf8', '#22c55e'],
    binding:  ['#ef4444', '#f59e0b', '#6366f1', '#22d3ee', '#94a3b8'],
    layers:   ['#6366f1', '#10b981', '#f59e0b']
};

var ACCENT_PALETTE = [
    '#6366f1','#22c55e','#f59e0b','#ef4444','#22d3ee',
    '#ec4899','#f97316','#8b5cf6','#14b8a6','#38bdf8',
    '#a78bfa','#fb923c','#34d399','#fbbf24','#f472b6'
];

/* ---- Data Adapter Layer ----
   Transforms data.js actual structure into the format each chart expects.
   This avoids changing either the generator or the chart render functions.
*/
function _adaptData() {
    if (typeof CENSUS === 'undefined') return;
    var C = CENSUS;

    // --- Tab 1: Overview ---
    // layerCoverage: flat obj -> { labels, counts }
    if (C.overview && C.overview.layerCoverage) {
        var lc = C.overview.layerCoverage;
        C.overview.layerCoverage = {
            labels: ['All three', 'Ont + Tax', 'Genome + Tax', 'Genome + Ont', 'Tax only', 'Ont only', 'Genome only', 'None'],
            counts: [lc.allThree||0, lc.ontAndTax||0, lc.gnAndTax||0, lc.gnAndOnt||0, lc.taxOnly||0, lc.ontOnly||0, lc.gnOnly||0, lc.none||0]
        };
    }

    // timelineByOrgType -> overview.growthArea { years, series: [{name, data}] }
    if (C.overview && C.overview.timelineByOrgType) {
        var tl = C.overview.timelineByOrgType;
        var seriesArr = [];
        for (var org in tl.series) {
            if (tl.series.hasOwnProperty(org)) {
                seriesArr.push({ name: org.replace(/_/g, ' '), data: tl.series[org] });
            }
        }
        // Sort by total count descending
        seriesArr.sort(function(a,b) {
            var sa = a.data.reduce(function(s,v){return s+v;},0);
            var sb = b.data.reduce(function(s,v){return s+v;},0);
            return sb - sa;
        });
        C.overview.growthArea = { years: tl.years, series: seriesArr };
    }

    // --- Tab 2: Institutional ---
    if (C.institutional) {
        // orgRegionMatrix -> orgRegionHeatmap { xLabels, yLabels, data: [[x,y,val]], max }
        if (C.institutional.orgRegionMatrix) {
            var orm = C.institutional.orgRegionMatrix;
            var heatData = [], hmax = 0;
            for (var yi = 0; yi < orm.orgTypes.length; yi++) {
                for (var xi = 0; xi < orm.regions.length; xi++) {
                    var v = orm.matrix[yi][xi];
                    heatData.push([xi, yi, v]);
                    if (v > hmax) hmax = v;
                }
            }
            C.institutional.orgRegionHeatmap = { xLabels: orm.regions, yLabels: orm.orgTypes, data: heatData, max: hmax };
        }

        // orgBindingMatrix -> orgBindingBar { orgTypes, bindingTypes, series: [{name, data}] }
        if (C.institutional.orgBindingMatrix) {
            var obm = C.institutional.orgBindingMatrix;
            var bSeries = obm.bindings.map(function(bn, bi) {
                return { name: bn.replace(/_/g, ' '), data: obm.orgTypes.map(function(_, oi) { return obm.matrix[oi][bi]; }) };
            });
            C.institutional.orgBindingBar = { orgTypes: obm.orgTypes.map(function(o){return o.replace(/_/g,' ');}), bindingTypes: obm.bindings, series: bSeries };
        }

        // geoScopeDonut -> geoScope
        if (C.institutional.geoScopeDonut) {
            C.institutional.geoScope = C.institutional.geoScopeDonut;
        }

        // statementTypeTreemap -> stmtTypes
        if (C.institutional.statementTypeTreemap) {
            C.institutional.stmtTypes = C.institutional.statementTypeTreemap;
        }
    }

    // --- Tab 3: Temporal ---
    if (C.temporal) {
        // cumulativeGrowth -> cumulativeCurve { years, values, milestones }
        if (C.temporal.cumulativeGrowth) {
            C.temporal.cumulativeCurve = {
                years: C.temporal.cumulativeGrowth.years,
                values: C.temporal.cumulativeGrowth.cumulative,
                milestones: (C.temporal.milestones || []).map(function(m) {
                    // Find cumulative value at milestone year
                    var idx = C.temporal.cumulativeGrowth.years.indexOf(m.year);
                    return { year: m.year, label: m.label, value: idx >= 0 ? C.temporal.cumulativeGrowth.cumulative[idx] : m.count };
                })
            };
        }

        // timelineByOrgType -> stackedArea (reuse overview data)
        if (C.overview && C.overview.growthArea) {
            C.temporal.stackedArea = C.overview.growthArea;
        } else if (C.overview && C.overview.timelineByOrgType) {
            var tl2 = C.overview.timelineByOrgType;
            var sa2 = [];
            for (var org2 in tl2.series) {
                if (tl2.series.hasOwnProperty(org2)) sa2.push({name: org2.replace(/_/g,' '), data: tl2.series[org2]});
            }
            C.temporal.stackedArea = { years: tl2.years, series: sa2 };
        }

        // bindingOverTime -> bindingTime { years, series: [{name, data}] }
        if (C.temporal.bindingOverTime) {
            var bot = C.temporal.bindingOverTime;
            var btSeries = [];
            for (var bn2 in bot.series) {
                if (bot.series.hasOwnProperty(bn2)) {
                    btSeries.push({ name: bn2.replace(/_/g, ' '), data: bot.series[bn2] });
                }
            }
            C.temporal.bindingTime = { years: bot.years, series: btSeries };
        }

        // orgYearBandHeatmap -> orgYearband { xLabels, yLabels, data, max }
        if (C.temporal.orgYearBandHeatmap) {
            var oyb = C.temporal.orgYearBandHeatmap;
            var oybData = [], oybMax = 0;
            for (var oi2 = 0; oi2 < oyb.orgTypes.length; oi2++) {
                for (var bi2 = 0; bi2 < oyb.yearBands.length; bi2++) {
                    var vv = oyb.matrix[oi2][bi2];
                    oybData.push([bi2, oi2, vv]);
                    if (vv > oybMax) oybMax = vv;
                }
            }
            C.temporal.orgYearband = { xLabels: oyb.yearBands, yLabels: oyb.orgTypes.map(function(o){return o.replace(/_/g,' ');}), data: oybData, max: oybMax };
        }

        // languageDiversity -> langDiversity { years, values }
        if (C.temporal.languageDiversity) {
            C.temporal.langDiversity = { years: C.temporal.languageDiversity.years, values: C.temporal.languageDiversity.uniqueLangs };
        }
    }

    // --- Tab 4: Cross-Layer (fix camelCase) ---
    if (C.crossLayer && !C.crosslayer) {
        C.crosslayer = {};

        // layerOverlap -> { labels, counts }
        if (C.crossLayer.layerOverlap) {
            var lo = C.crossLayer.layerOverlap;
            C.crosslayer.layerOverlap = {
                labels: ['All three', 'Ont + Tax', 'Genome + Tax', 'Genome + Ont', 'Tax only', 'Ont only', 'Genome only', 'None'],
                counts: [lo.all||0, lo.ontAndTax||0, lo.gnAndTax||0, lo.gnAndOnt||0, lo.taxOnly||0, lo.ontOnly||0, lo.gnOnly||0, lo.none||0]
            };
        }

        // coverageByOrgType -> coverageOrgType { orgTypes, series: [{name, data}] }
        if (C.crossLayer.coverageByOrgType) {
            var cot = C.crossLayer.coverageByOrgType;
            C.crosslayer.coverageOrgType = {
                orgTypes: cot.orgTypes.map(function(o){return o.replace(/_/g,' ');}),
                series: [
                    { name: 'Genome', data: cot.gn },
                    { name: 'Ontology', data: cot.ont },
                    { name: 'Taxonomy', data: cot.tax }
                ]
            };
        }

        // coverageByRegion -> coverageRegion { regions, series: [{name, data}] }
        if (C.crossLayer.coverageByRegion) {
            var cor = C.crossLayer.coverageByRegion;
            C.crosslayer.coverageRegion = {
                regions: cor.regions,
                series: [
                    { name: 'Genome', data: cor.gn },
                    { name: 'Ontology', data: cor.ont },
                    { name: 'Taxonomy', data: cor.tax }
                ]
            };
        }
    }

    // --- Tab 5: Gaps ---
    if (C.gaps) {
        // coverageHeatmap: { orgTypes, regions, matrix } -> { xLabels, yLabels, data, max }
        if (C.gaps.coverageHeatmap && C.gaps.coverageHeatmap.orgTypes) {
            var gch = C.gaps.coverageHeatmap;
            var gchData = [], gchMax = 0;
            for (var gi = 0; gi < gch.orgTypes.length; gi++) {
                for (var gj = 0; gj < gch.regions.length; gj++) {
                    var gv = gch.matrix[gi][gj];
                    gchData.push([gj, gi, gv]);
                    if (gv > gchMax) gchMax = gv;
                }
            }
            C.gaps.coverageHeatmap = { xLabels: gch.regions, yLabels: gch.orgTypes.map(function(o){return o.replace(/_/g,' ');}), data: gchData, max: gchMax };
        }

        // thinStatements -> thinStmts { labels, values }
        if (C.gaps.thinStatements && C.gaps.thinStatements.byOrgType) {
            var ts = C.gaps.thinStatements.byOrgType;
            C.gaps.thinStmts = { labels: ts.labels.map(function(o){return o.replace(/_/g,' ');}), values: ts.counts };
        }

        // bindingGaps: array -> heatmap or bar format
        if (Array.isArray(C.gaps.bindingGaps) && C.gaps.bindingGaps.length > 0) {
            // Convert to org x binding heatmap
            var bgOrgs = [], bgBindings = [];
            C.gaps.bindingGaps.forEach(function(item) {
                if (bgOrgs.indexOf(item.orgType) === -1) bgOrgs.push(item.orgType);
                if (item.binding && bgBindings.indexOf(item.binding) === -1) bgBindings.push(item.binding);
            });
            // If items have binding field, make heatmap; else make bar
            if (bgBindings.length > 0) {
                var bgData = [], bgMax2 = 0;
                bgOrgs.forEach(function(org, oi3) {
                    bgBindings.forEach(function(bn3, bi3) {
                        var found = C.gaps.bindingGaps.filter(function(item) { return item.orgType === org && item.binding === bn3; });
                        var cnt = found.length > 0 ? found[0].count : 0;
                        bgData.push([bi3, oi3, cnt]);
                        if (cnt > bgMax2) bgMax2 = cnt;
                    });
                });
                C.gaps.bindingGaps = { xLabels: bgBindings.map(function(b){return b.replace(/_/g,' ');}), yLabels: bgOrgs.map(function(o){return o.replace(/_/g,' ');}), data: bgData, max: bgMax2 };
            } else {
                // Simple bar: count gaps per org type
                var gapCounts = {};
                C.gaps.bindingGaps.forEach(function(item) {
                    if (!item.hasLegallyBinding) {
                        gapCounts[item.orgType] = (gapCounts[item.orgType] || 0) + 1;
                    }
                });
                var gapLabels = Object.keys(gapCounts);
                var gapValues = gapLabels.map(function(k) { return gapCounts[k]; });
                C.gaps.bindingGaps = { labels: gapLabels.map(function(o){return o.replace(/_/g,' ');}), values: gapValues };
            }
        }

        // yearGaps: { years, counts } -> { years, values }
        if (C.gaps.yearGaps && C.gaps.yearGaps.counts) {
            C.gaps.yearGaps = { years: C.gaps.yearGaps.years, values: C.gaps.yearGaps.counts };
        }
    }

    // --- Tab 6: Profiles ---
    if (C.profiles) {
        // bindingByOrgType -> bindingProfile { orgTypes, series: [{name, data}] }
        if (C.profiles.bindingByOrgType) {
            var bp = C.profiles.bindingByOrgType;
            var bpSeries = [];
            for (var bk in bp.series) {
                if (bp.series.hasOwnProperty(bk)) {
                    bpSeries.push({ name: bk.replace(/_/g, ' '), data: bp.series[bk] });
                }
            }
            C.profiles.bindingProfile = { orgTypes: bp.orgTypes.map(function(o){return o.replace(/_/g,' ');}), series: bpSeries };
        }

        // geoScopeByOrgType -> geoScopeProfile
        if (C.profiles.geoScopeByOrgType) {
            var gsp = C.profiles.geoScopeByOrgType;
            var gspSeries = [];
            for (var gk in gsp.series) {
                if (gsp.series.hasOwnProperty(gk)) {
                    gspSeries.push({ name: gk.replace(/_/g, ' '), data: gsp.series[gk] });
                }
            }
            C.profiles.geoScopeProfile = { orgTypes: gsp.orgTypes.map(function(o){return o.replace(/_/g,' ');}), series: gspSeries };
        }

        // stmtTypeByOrgType -> stmtTypeProfile { xLabels, yLabels, data, max }
        if (C.profiles.stmtTypeByOrgType) {
            var stp = C.profiles.stmtTypeByOrgType;
            var stpData = [], stpMax = 0;
            for (var si = 0; si < stp.orgTypes.length; si++) {
                for (var sj = 0; sj < stp.topTypes.length; sj++) {
                    var sv = stp.matrix[si][sj];
                    stpData.push([sj, si, sv]);
                    if (sv > stpMax) stpMax = sv;
                }
            }
            C.profiles.stmtTypeProfile = { xLabels: stp.topTypes, yLabels: stp.orgTypes.map(function(o){return o.replace(/_/g,' ');}), data: stpData, max: stpMax };
        }
    }

    // --- Tab 7: Explorer ---
    // Explorer statement fields: { k,t,o,ot,r,y,bn,gs,hasGn,hasOnt,hasTax } -> { key,title,orgType,region,year,binding,genome,ont,tax }
    if (C.explorer && C.explorer.statements && C.explorer.statements.length > 0) {
        var first = C.explorer.statements[0];
        if (first.k !== undefined && first.key === undefined) {
            C.explorer.statements = C.explorer.statements.map(function(s) {
                return { key: s.k, title: s.t, orgType: s.ot, region: s.r, year: s.y, binding: s.bn, genome: s.hasGn, ont: s.hasOnt, tax: s.hasTax };
            });
        }
    }
}

// Run adapter on load
_adaptData();

/* ---- Helpers ---- */
function _tooltip() {
    return {
        backgroundColor: ECHARTS_THEME.tooltipBg,
        borderColor: ECHARTS_THEME.tooltipBorder,
        textStyle: { color: '#f1f5f9' }
    };
}

function mkChart(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var c = echarts.init(el);
    window._charts.push(c);
    return c;
}

function _sortedEntries(obj) {
    var arr = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) arr.push({ n: k, c: obj[k] });
    }
    arr.sort(function(a, b) { return b.c - a.c; });
    return arr;
}

function _safeGet(path) {
    // Safely access CENSUS nested properties
    if (typeof CENSUS === 'undefined') return null;
    var parts = path.split('.');
    var obj = CENSUS;
    for (var i = 0; i < parts.length; i++) {
        if (obj === null || obj === undefined) return null;
        obj = obj[parts[i]];
    }
    return obj;
}


/* ==================================================================
   TAB 1 — CENSUS OVERVIEW
   ================================================================== */

/* 1. Layer Coverage — horizontal stacked bar */
function renderLayerCoverage() {
    var chart = mkChart('chart-layer-coverage');
    if (!chart) return;
    var d = _safeGet('overview.layerCoverage');
    if (!d) return;

    var barColors = ['#64748b', '#6366f1', '#10b981', '#f59e0b'];
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 100, right: 30, top: 20, bottom: 30 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category',
            data: d.labels,
            inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 12 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.counts.map(function(v, i) {
                return { value: v, itemStyle: { color: barColors[i] } };
            }),
            barMaxWidth: 30,
            label: {
                show: true, position: 'right',
                color: ECHARTS_THEME.textColor,
                formatter: function(p) { return p.value.toLocaleString(); }
            }
        }]
    });
}

/* 2. Growth Area — cumulative stacked area */
function renderGrowthArea() {
    var chart = mkChart('chart-growth-area');
    if (!chart) return;
    var d = _safeGet('overview.growthArea');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'line',
            stack: 'total',
            areaStyle: { opacity: 0.6 },
            emphasis: { focus: 'series' },
            smooth: true,
            symbol: 'none',
            data: s.data,
            itemStyle: { color: COLORS.orgTypes[i % COLORS.orgTypes.length] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis' }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 60, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'category', data: d.years, boundaryGap: false,
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: series
    });
}

/* 3. Org Type Treemap */
function renderOrgTreemap() {
    var chart = mkChart('chart-orgtype-treemap');
    if (!chart) return;
    var d = _safeGet('overview.orgTypeTreemap');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            formatter: function(p) {
                return '<strong>' + p.name + '</strong><br>' + p.value.toLocaleString() + ' statements';
            }
        }, _tooltip()),
        series: [{
            type: 'treemap',
            data: d,
            roam: false,
            breadcrumb: { show: false },
            label: {
                show: true,
                formatter: '{b}\n{c}',
                fontSize: 12,
                color: '#f1f5f9'
            },
            itemStyle: {
                borderColor: '#0f172a',
                borderWidth: 2,
                gapWidth: 2
            },
            levels: [{
                itemStyle: { borderColor: '#0f172a', borderWidth: 2, gapWidth: 2 }
            }]
        }]
    });
}

/* 4. Region Bar — horizontal with percentage annotations (P16) */
function renderRegionBar() {
    var chart = mkChart('chart-region-bar');
    if (!chart) return;
    var d = _safeGet('overview.regionBar');
    if (!d) return;

    // Calculate total for percentage annotation
    var total = d.values.reduce(function(s, v) { return s + v; }, 0);

    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 180, right: 60, top: 10, bottom: 10 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category',
            data: d.labels,
            inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.values.map(function(v) { return { value: v, itemStyle: { color: '#6366f1' } }; }),
            barMaxWidth: 22,
            label: {
                show: true, position: 'right',
                color: ECHARTS_THEME.textColor,
                formatter: function(p) {
                    var pct = total > 0 ? (p.value / total * 100).toFixed(1) : 0;
                    return p.value.toLocaleString() + ' (' + pct + '%)';
                }
            }
        }]
    });
}


/* ==================================================================
   TAB 2 — INSTITUTIONAL
   ================================================================== */

/* 5. Org x Region Heatmap */
function renderOrgRegionHeatmap() {
    var chart = mkChart('chart-org-region-heatmap');
    if (!chart) return;
    var d = _safeGet('institutional.orgRegionHeatmap');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            position: 'top',
            formatter: function(p) {
                return d.yLabels[p.value[1]] + ' / ' + d.xLabels[p.value[0]] + ': <strong>' + p.value[2] + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 160, right: 60, top: 10, bottom: 80 },
        xAxis: {
            type: 'category', data: d.xLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 10, rotate: 35 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'category', data: d.yLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        visualMap: {
            min: 0, max: d.max || 100,
            calculable: true, orient: 'vertical', right: 0, top: 'center',
            inRange: { color: ['#1e293b', '#6366f1', '#818cf8', '#c7d2fe'] },
            textStyle: { color: ECHARTS_THEME.textColor },
            seriesIndex: [0]
        },
        series: [{
            type: 'heatmap',
            data: d.data,
            label: {
                show: true, color: '#f1f5f9', fontSize: 10,
                formatter: function(p) { return p.value[2] > 0 ? p.value[2] : ''; }
            },
            emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.5)' } }
        }]
    });
}

/* 6. Org x Binding Grouped Bar */
function renderOrgBindingBar() {
    var chart = mkChart('chart-org-binding-bar');
    if (!chart) return;
    var d = _safeGet('institutional.orgBindingBar');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'bar',
            data: s.data,
            itemStyle: { color: COLORS.binding[i % COLORS.binding.length] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 160, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.orgTypes, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: series
    });
}

/* 7. Top Countries */
function renderTopCountries() {
    var chart = mkChart('chart-top-countries');
    if (!chart) return;
    var d = _safeGet('institutional.topCountries');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 120, right: 30, top: 10, bottom: 10 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.labels, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.values.map(function(v, i) {
                return { value: v, itemStyle: { color: ACCENT_PALETTE[i % ACCENT_PALETTE.length] } };
            }),
            barMaxWidth: 18,
            label: {
                show: true, position: 'right',
                color: ECHARTS_THEME.textColor,
                formatter: function(p) { return p.value; }
            }
        }]
    });
}

/* 8. Geographic Scope Donut */
function renderGeoScope() {
    var chart = mkChart('chart-geo-scope');
    if (!chart) return;
    var d = _safeGet('institutional.geoScope');
    if (!d) return;

    var pieData = d.map(function(item, i) {
        return {
            value: item.value,
            name: item.name,
            itemStyle: { color: ACCENT_PALETTE[i % ACCENT_PALETTE.length] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({ trigger: 'item', formatter: '{b}: {c} ({d}%)' }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 11 }
        },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '45%'],
            avoidLabelOverlap: true,
            label: { show: false },
            emphasis: {
                label: {
                    show: true, fontSize: 14, fontWeight: 'bold',
                    formatter: function(p) { return p.name + '\n' + p.value; }
                }
            },
            data: pieData
        }]
    });
}

/* 9. Statement Types Treemap */
function renderStmtTypes() {
    var chart = mkChart('chart-stmt-types');
    if (!chart) return;
    var d = _safeGet('institutional.stmtTypes');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            formatter: function(p) {
                return '<strong>' + p.name + '</strong><br>' + p.value + ' statements';
            }
        }, _tooltip()),
        series: [{
            type: 'treemap',
            data: d.map(function(item, i) {
                return {
                    name: item.name,
                    value: item.value,
                    itemStyle: { color: ACCENT_PALETTE[i % ACCENT_PALETTE.length] }
                };
            }),
            roam: false,
            breadcrumb: { show: false },
            label: {
                show: true, formatter: '{b}\n{c}',
                fontSize: 11, color: '#f1f5f9'
            },
            itemStyle: { borderColor: '#0f172a', borderWidth: 2, gapWidth: 2 }
        }]
    });
}


/* ==================================================================
   TAB 3 — TEMPORAL
   ================================================================== */

/* 10. Temporal Stacked Area by Org Type */
function renderTemporalArea() {
    var chart = mkChart('chart-temporal-area');
    if (!chart) return;
    var d = _safeGet('temporal.stackedArea');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'line',
            stack: 'total',
            areaStyle: { opacity: 0.5 },
            emphasis: { focus: 'series' },
            smooth: false,
            symbol: 'none',
            data: s.data,
            itemStyle: { color: COLORS.orgTypes[i % COLORS.orgTypes.length] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis' }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 60, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'category', data: d.years, boundaryGap: false,
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: series
    });
}

/* 11. Cumulative S-Curve with milestone markPoints */
function renderCumulativeCurve() {
    var chart = mkChart('chart-cumulative-curve');
    if (!chart) return;
    var d = _safeGet('temporal.cumulativeCurve');
    if (!d) return;

    var markPointData = (d.milestones || []).map(function(m) {
        return {
            name: m.label,
            coord: [String(m.year), m.value],
            value: m.label,
            symbolSize: 6,
            label: {
                show: true, position: 'top',
                formatter: m.label,
                color: '#f59e0b', fontSize: 10
            }
        };
    });
    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis',
            formatter: function(params) {
                var p = params[0];
                return p.name + '<br>Cumulative: <strong>' + p.value.toLocaleString() + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 70, right: 20, top: 40, bottom: 30 },
        xAxis: {
            type: 'category', data: d.years.map(String), boundaryGap: false,
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: [{
            type: 'line',
            data: d.values,
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            lineStyle: { width: 3, color: '#6366f1' },
            itemStyle: { color: '#6366f1' },
            areaStyle: { opacity: 0.15, color: '#6366f1' },
            markPoint: { data: markPointData, symbol: 'pin', symbolSize: 30 }
        }]
    });
}

/* 12. Binding Nature Over Time — 100% stacked area */
function renderBindingTime() {
    var chart = mkChart('chart-binding-time');
    if (!chart) return;
    var d = _safeGet('temporal.bindingTime');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'line',
            stack: 'total',
            areaStyle: { opacity: 0.6 },
            emphasis: { focus: 'series' },
            smooth: false,
            symbol: 'none',
            data: s.data,
            itemStyle: { color: COLORS.binding[i % COLORS.binding.length] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis' }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 60, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'category', data: d.years, boundaryGap: false,
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value', max: 100,
            axisLabel: { color: ECHARTS_THEME.textColor, formatter: '{value}%' },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: series
    });
}

/* 13. Org Type x Year Band Heatmap */
function renderOrgYearband() {
    var chart = mkChart('chart-org-yearband');
    if (!chart) return;
    var d = _safeGet('temporal.orgYearband');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            position: 'top',
            formatter: function(p) {
                return d.yLabels[p.value[1]] + ' / ' + d.xLabels[p.value[0]] + ': <strong>' + p.value[2] + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 160, right: 60, top: 10, bottom: 40 },
        xAxis: {
            type: 'category', data: d.xLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'category', data: d.yLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        visualMap: {
            min: 0, max: d.max || 50,
            calculable: true, orient: 'vertical', right: 0, top: 'center',
            inRange: { color: ['#1e293b', '#10b981', '#22c55e', '#86efac'] },
            textStyle: { color: ECHARTS_THEME.textColor },
            seriesIndex: [0]
        },
        series: [{
            type: 'heatmap',
            data: d.data,
            label: {
                show: true, color: '#f1f5f9', fontSize: 10,
                formatter: function(p) { return p.value[2] > 0 ? p.value[2] : ''; }
            }
        }]
    });
}

/* 14. Language Diversity Line */
function renderLangDiversity() {
    var chart = mkChart('chart-lang-diversity');
    if (!chart) return;
    var d = _safeGet('temporal.langDiversity');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis',
            formatter: function(params) {
                var p = params[0];
                return p.name + '<br>Unique languages: <strong>' + p.value + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 60, right: 20, top: 20, bottom: 30 },
        xAxis: {
            type: 'category', data: d.years.map(String), boundaryGap: false,
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: [{
            type: 'line',
            data: d.values,
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: { width: 2, color: '#22d3ee' },
            itemStyle: { color: '#22d3ee' },
            areaStyle: { opacity: 0.1, color: '#22d3ee' }
        }]
    });
}


/* ==================================================================
   TAB 4 — CROSS-LAYER
   ================================================================== */

/* 15. Layer Overlap Bar */
function renderLayerOverlap() {
    var chart = mkChart('chart-layer-overlap');
    if (!chart) return;
    var d = _safeGet('crosslayer.layerOverlap');
    if (!d) return;

    var overlapColors = ['#6366f1', '#10b981', '#f59e0b', '#22d3ee', '#8b5cf6', '#ec4899', '#22c55e', '#64748b'];
    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 140, right: 40, top: 20, bottom: 20 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.labels, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.counts.map(function(v, i) {
                return { value: v, itemStyle: { color: overlapColors[i % overlapColors.length] } };
            }),
            barMaxWidth: 24,
            label: {
                show: true, position: 'right',
                color: ECHARTS_THEME.textColor,
                formatter: function(p) { return p.value.toLocaleString(); }
            }
        }]
    });
}

/* 16. Coverage by Org Type — grouped bar */
function renderCoverageOrgType() {
    var chart = mkChart('chart-coverage-orgtype');
    if (!chart) return;
    var d = _safeGet('crosslayer.coverageOrgType');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'bar',
            data: s.data,
            itemStyle: { color: COLORS.layers[i] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis', axisPointer: { type: 'shadow' },
            formatter: function(params) {
                var html = params[0].name + '<br>';
                params.forEach(function(p) {
                    html += '<span style="display:inline-block;width:10px;height:10px;background:' + p.color + ';margin-right:6px;border-radius:2px;"></span>' + p.seriesName + ': ' + p.value.toFixed(1) + '%<br>';
                });
                return html;
            }
        }, _tooltip()),
        legend: {
            top: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 11 }
        },
        grid: { left: 160, right: 20, top: 30, bottom: 20 },
        xAxis: {
            type: 'value', max: 100,
            axisLabel: { color: ECHARTS_THEME.textColor, formatter: '{value}%' },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.orgTypes, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: series
    });
}

/* 17. Coverage by Region — grouped bar */
function renderCoverageRegion() {
    var chart = mkChart('chart-coverage-region');
    if (!chart) return;
    var d = _safeGet('crosslayer.coverageRegion');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'bar',
            data: s.data,
            itemStyle: { color: COLORS.layers[i] }
        };
    });
    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis', axisPointer: { type: 'shadow' },
            formatter: function(params) {
                var html = params[0].name + '<br>';
                params.forEach(function(p) {
                    html += '<span style="display:inline-block;width:10px;height:10px;background:' + p.color + ';margin-right:6px;border-radius:2px;"></span>' + p.seriesName + ': ' + p.value.toFixed(1) + '%<br>';
                });
                return html;
            }
        }, _tooltip()),
        legend: {
            top: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 11 }
        },
        grid: { left: 180, right: 20, top: 30, bottom: 20 },
        xAxis: {
            type: 'value', max: 100,
            axisLabel: { color: ECHARTS_THEME.textColor, formatter: '{value}%' },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.regions, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: series
    });
}


/* ==================================================================
   TAB 5 — GAP ANALYSIS
   ================================================================== */

/* 18. Coverage Heatmap (Org x Region) */
function renderCoverageHeatmap() {
    var chart = mkChart('chart-coverage-heatmap');
    if (!chart) return;
    var d = _safeGet('gaps.coverageHeatmap');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            position: 'top',
            formatter: function(p) {
                return d.yLabels[p.value[1]] + ' / ' + d.xLabels[p.value[0]] + ': <strong>' + p.value[2] + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 160, right: 80, top: 10, bottom: 80 },
        xAxis: {
            type: 'category', data: d.xLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 10, rotate: 35 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'category', data: d.yLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        visualMap: {
            min: 0, max: d.max || 100,
            calculable: true, orient: 'vertical', right: 0, top: 'center',
            inRange: { color: ['#ef4444', '#f59e0b', '#10b981', '#6366f1'] },
            textStyle: { color: ECHARTS_THEME.textColor },
            seriesIndex: [0]
        },
        series: [{
            type: 'heatmap',
            data: d.data,
            label: {
                show: true, color: '#f1f5f9', fontSize: 10,
                formatter: function(p) { return p.value[2] > 0 ? p.value[2] : ''; }
            }
        }]
    });
}

/* 19. Thin Statements Bar */
function renderThinStmts() {
    var chart = mkChart('chart-thin-stmts');
    if (!chart) return;
    var d = _safeGet('gaps.thinStmts');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 160, right: 30, top: 20, bottom: 20 },
        xAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.labels, inverse: true,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.values.map(function(v) { return { value: v, itemStyle: { color: '#ef4444' } }; }),
            barMaxWidth: 22,
            label: {
                show: true, position: 'right',
                color: ECHARTS_THEME.textColor,
                formatter: function(p) { return p.value; }
            }
        }]
    });
}

/* 20. Binding Nature Gaps */
function renderBindingGaps() {
    var chart = mkChart('chart-binding-gaps');
    if (!chart) return;
    var d = _safeGet('gaps.bindingGaps');
    if (!d) return;

    if (d.xLabels) {
        // Heatmap variant
        chart.setOption({
            tooltip: Object.assign({
                position: 'top',
                formatter: function(p) {
                    return d.yLabels[p.value[1]] + ' / ' + d.xLabels[p.value[0]] + ': <strong>' + (p.value[2] === 0 ? 'GAP' : p.value[2]) + '</strong>';
                }
            }, _tooltip()),
            grid: { left: 160, right: 60, top: 10, bottom: 60 },
            xAxis: {
                type: 'category', data: d.xLabels,
                axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11, rotate: 20 },
                axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
            },
            yAxis: {
                type: 'category', data: d.yLabels,
                axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
                axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
            },
            visualMap: {
                min: 0, max: d.max || 50,
                calculable: true, orient: 'vertical', right: 0, top: 'center',
                inRange: { color: ['#ef4444', '#f59e0b', '#22c55e'] },
                textStyle: { color: ECHARTS_THEME.textColor },
                seriesIndex: [0]
            },
            series: [{
                type: 'heatmap',
                data: d.data,
                label: {
                    show: true, color: '#f1f5f9', fontSize: 10,
                    formatter: function(p) { return p.value[2] > 0 ? p.value[2] : '0'; }
                }
            }]
        });
    } else {
        // Bar variant
        chart.setOption({
            tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
            grid: { left: 200, right: 30, top: 20, bottom: 20 },
            xAxis: {
                type: 'value',
                axisLabel: { color: ECHARTS_THEME.textColor },
                splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
            },
            yAxis: {
                type: 'category', data: d.labels, inverse: true,
                axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
                axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
            },
            series: [{
                type: 'bar',
                data: d.values.map(function(v) { return { value: v, itemStyle: { color: '#f59e0b' } }; }),
                barMaxWidth: 20
            }]
        });
    }
}

/* 21. Year Gaps Bar */
function renderYearGaps() {
    var chart = mkChart('chart-year-gaps');
    if (!chart) return;
    var d = _safeGet('gaps.yearGaps');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tooltip()),
        grid: { left: 60, right: 20, top: 20, bottom: 30 },
        xAxis: {
            type: 'category', data: d.years.map(String),
            axisLabel: { color: ECHARTS_THEME.textColor },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: ECHARTS_THEME.textColor },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        series: [{
            type: 'bar',
            data: d.values.map(function(v) { return { value: v, itemStyle: { color: '#f97316' } }; }),
            barMaxWidth: 20
        }]
    });
}


/* ==================================================================
   TAB 6 — PROFILES
   ================================================================== */

/* 22. Binding Profile — 100% stacked bar by org type */
function renderBindingProfile() {
    var chart = mkChart('chart-binding-profile');
    if (!chart) return;
    var d = _safeGet('profiles.bindingProfile');
    if (!d) return;

    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'bar',
            stack: 'total',
            data: s.data,
            itemStyle: { color: COLORS.binding[i % COLORS.binding.length] },
            emphasis: { focus: 'series' }
        };
    });
    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis', axisPointer: { type: 'shadow' },
            formatter: function(params) {
                var html = params[0].name + '<br>';
                params.forEach(function(p) {
                    html += '<span style="display:inline-block;width:10px;height:10px;background:' + p.color + ';margin-right:6px;border-radius:2px;"></span>' + p.seriesName + ': ' + p.value.toFixed(1) + '%<br>';
                });
                return html;
            }
        }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 160, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'value', max: 100,
            axisLabel: { color: ECHARTS_THEME.textColor, formatter: '{value}%' },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.orgTypes,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: series
    });
}

/* 23. Geographic Scope Profile — stacked bar by org type */
function renderGeoScopeProfile() {
    var chart = mkChart('chart-geoscope-profile');
    if (!chart) return;
    var d = _safeGet('profiles.geoScopeProfile');
    if (!d) return;

    var scopeColors = ['#6366f1', '#22d3ee', '#10b981', '#f59e0b', '#ef4444'];
    var series = d.series.map(function(s, i) {
        return {
            name: s.name,
            type: 'bar',
            stack: 'total',
            data: s.data,
            itemStyle: { color: scopeColors[i % scopeColors.length] },
            emphasis: { focus: 'series' }
        };
    });
    chart.setOption({
        tooltip: Object.assign({
            trigger: 'axis', axisPointer: { type: 'shadow' },
            formatter: function(params) {
                var html = params[0].name + '<br>';
                params.forEach(function(p) {
                    html += '<span style="display:inline-block;width:10px;height:10px;background:' + p.color + ';margin-right:6px;border-radius:2px;"></span>' + p.seriesName + ': ' + p.value.toFixed(1) + '%<br>';
                });
                return html;
            }
        }, _tooltip()),
        legend: {
            type: 'scroll', bottom: 0,
            textStyle: { color: ECHARTS_THEME.textColor, fontSize: 10 }
        },
        grid: { left: 160, right: 20, top: 20, bottom: 50 },
        xAxis: {
            type: 'value', max: 100,
            axisLabel: { color: ECHARTS_THEME.textColor, formatter: '{value}%' },
            splitLine: { lineStyle: { color: ECHARTS_THEME.splitLineColor } }
        },
        yAxis: {
            type: 'category', data: d.orgTypes,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        series: series
    });
}

/* 24. Statement Type x Org Type Heatmap */
function renderStmtTypeProfile() {
    var chart = mkChart('chart-stmttype-profile');
    if (!chart) return;
    var d = _safeGet('profiles.stmtTypeProfile');
    if (!d) return;

    chart.setOption({
        tooltip: Object.assign({
            position: 'top',
            formatter: function(p) {
                return d.yLabels[p.value[1]] + ' / ' + d.xLabels[p.value[0]] + ': <strong>' + p.value[2] + '</strong>';
            }
        }, _tooltip()),
        grid: { left: 160, right: 80, top: 10, bottom: 100 },
        xAxis: {
            type: 'category', data: d.xLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 10, rotate: 45 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        yAxis: {
            type: 'category', data: d.yLabels,
            axisLabel: { color: ECHARTS_THEME.textColor, fontSize: 11 },
            axisLine: { lineStyle: { color: ECHARTS_THEME.axisLineColor } }
        },
        visualMap: {
            min: 0, max: d.max || 100,
            calculable: true, orient: 'vertical', right: 0, top: 'center',
            inRange: { color: ['#1e293b', '#8b5cf6', '#a78bfa', '#c4b5fd'] },
            textStyle: { color: ECHARTS_THEME.textColor },
            seriesIndex: [0]
        },
        series: [{
            type: 'heatmap',
            data: d.data,
            label: {
                show: true, color: '#f1f5f9', fontSize: 9,
                formatter: function(p) { return p.value[2] > 0 ? p.value[2] : ''; }
            }
        }]
    });
}


/* ==================================================================
   TAB 7 — EXPLORER
   ================================================================== */

/* 25. Explorer Table */
function renderExplorerTable() {
    var tbody = document.getElementById('explorer-tbody');
    if (!tbody) return;
    var stmts = _safeGet('explorer.statements');
    if (!stmts || !stmts.length) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:var(--text-muted);">No data available. Generate data.js first.</td></tr>';
        return;
    }

    var html = '';
    stmts.forEach(function(s) {
        var genomeBadge = s.genome ? '<span class="layer-badge genome">Yes</span>' : '<span class="layer-badge none">No</span>';
        var ontBadge = s.ont ? '<span class="layer-badge ont">Yes</span>' : '<span class="layer-badge none">No</span>';
        var taxBadge = s.tax ? '<span class="layer-badge tax">Yes</span>' : '<span class="layer-badge none">No</span>';

        var _sd = (typeof STMT_DETAILS !== 'undefined' && s.key) ? STMT_DETAILS[s.key] : null;
        html += '<tr data-key="' + (s.key || '') + '"'
              + ' data-ot="' + (s.orgType || '') + '"'
              + ' data-r="' + (s.region || '') + '"'
              + ' data-y="' + (s.year || '') + '"'
              + ' data-bn="' + (s.binding || '') + '"'
              + ' data-st="' + (_sd ? (_sd.st || 'unknown') : 'unknown') + '"'
              + ' data-dst="' + (_sd ? (_sd.dst || 'unscored') : 'unscored') + '"'
              + ' data-ext="' + (_sd ? (_sd.ext ? 'yes' : 'no') : '') + '"'
              + ' data-wc="' + (_sd ? (_sd.wc || 0) : 0) + '"'
              + ' data-fam="' + (_sd ? (_sd.fam || '') : '') + '"'
              + ' data-nc="' + (_sd ? (_sd.nc || '') : '') + '">'
              + '<td class="col-key">' + (s.key || '') + '</td>'
              + '<td class="col-title" title="' + (s.title || '').replace(/"/g, '&quot;') + '">' + (s.title || '') + '</td>'
              + '<td>' + (s.orgType || '').replace(/_/g, ' ') + '</td>'
              + '<td>' + (s.region || '') + '</td>'
              + '<td>' + (s.year || '') + '</td>'
              + '<td>' + (s.binding || '').replace(/_/g, ' ') + '</td>'
              + '<td>' + (_sd ? (_sd.st || '').replace(/_/g, ' ') : '') + '</td>'
              + '<td>' + genomeBadge + '</td>'
              + '<td>' + ontBadge + '</td>'
              + '<td>' + taxBadge + '</td>'
              + '</tr>';
    });
    tbody.innerHTML = html;

    // Add click handlers
    tbody.querySelectorAll('tr[data-key]').forEach(function(row) {
        row.addEventListener('click', function() {
            showStatementPopup(this.getAttribute('data-key'));
        });
    });

    var countEl = document.getElementById('explorer-count');
    if (countEl) {
        countEl.textContent = stmts.length + ' of ' + stmts.length + ' statements';
    }
}


/* ==================================================================
   STATEMENT DETAIL POPUP
   ================================================================== */

var _GN_LABELS = {
    'gn_governance_posture': 'Governance Posture',
    'gn_binding_nature': 'Binding Nature',
    'gn_rhetoric_primary': 'Rhetoric',
    'gn_specificity': 'Specificity',
    'gn_sector_scope': 'Sector Scope',
    'gn_temporal_orientation': 'Temporal Orientation',
    'gn_innovation_orientation': 'Innovation Orientation',
    'gn_addressee': 'Addressee',
    'gn_language_complexity': 'Language Complexity',
    'gn_normative_density': 'Normative Density',
    'gn_enforcement': 'Enforcement',
    'gn_stakeholder_breadth': 'Stakeholder Breadth',
    'gn_geographic_scope': 'Geographic Scope',
    'gn_authority_type': 'Authority Type',
    'gn_value_tensions': 'Value Tensions',
    'gn_document_maturity': 'Document Maturity',
    'gn_proportionality': 'Proportionality',
    'gn_cultural_rootedness': 'Cultural Rootedness',
    'gn_operational': 'Operational',
    'gn_intertextual': 'Intertextual',
    'gn_collective_individual': 'Collective/Individual',
    'gn_tech_specificity': 'Tech Specificity',
    'gn_epistemic_stance': 'Epistemic Stance',
    'gn_meta_governance': 'Meta-Governance',
    'gn_sacred_secular': 'Sacred-Secular',
    'gn_sociotechnical_imaginary': 'Sociotechnical Imaginary'
};

var _GN_TOOLTIPS = {
    'gn_governance_posture': 'The overall regulatory approach: principles-based, rights-based, risk-based, prohibition-based, or innovation-first',
    'gn_binding_nature': 'Legal force of the document: legally binding, soft law, advisory, voluntary, aspirational, or communal norm',
    'gn_rhetoric_primary': 'Dominant rhetorical framing: rights-based, risk-based, values-based, evidence-based, theological, anti-colonial, etc.',
    'gn_specificity': 'How specific and actionable the governance provisions are (0=vague principles, 100=detailed operational rules)',
    'gn_sector_scope': 'Which sector(s) the document targets: general/cross-sector, healthcare, defense, finance, education, etc.',
    'gn_temporal_orientation': 'Time horizon: backward-looking (reactive), present-focused, forward-looking (anticipatory), or intergenerational',
    'gn_innovation_orientation': 'Stance toward AI innovation (0=restrictive/precautionary, 100=strongly pro-innovation/promotional)',
    'gn_addressee': 'Who the document is directed at: governments, industry, developers, citizens, international community, etc.',
    'gn_language_complexity': 'Linguistic complexity of the document (0=plain language, 100=highly technical/legal jargon)',
    'gn_normative_density': 'How many distinct norms, principles, or obligations are packed into the document (0=sparse, 100=dense)',
    'gn_enforcement': 'Mechanisms for ensuring compliance: legislation, sanctions, audits, peer review, reputation, or none',
    'gn_stakeholder_breadth': 'Range of stakeholders consulted or addressed (0=single actor, 100=broad multi-stakeholder)',
    'gn_geographic_scope': 'Intended geographic reach: institutional, subnational, national, regional, or global',
    'gn_authority_type': 'Institutional authority of the issuing body: state, intergovernmental, professional, civil society, religious, indigenous, etc.',
    'gn_value_tensions': 'Degree to which the document acknowledges trade-offs between competing values (0=ignores tensions, 100=explicitly addresses)',
    'gn_document_maturity': 'Stage of the document: draft, consultation, adopted policy, implemented, or revised',
    'gn_proportionality': 'Whether governance measures are proportionate to the risks identified (0=disproportionate, 100=well-calibrated)',
    'gn_cultural_rootedness': 'How deeply grounded in a specific cultural, religious, or indigenous tradition (0=universal/secular, 100=deeply tradition-specific)',
    'gn_operational': 'How operationally actionable the document is (0=purely aspirational, 100=detailed implementation guidance)',
    'gn_intertextual': 'Degree of reference to other governance documents, standards, or frameworks (0=standalone, 100=heavily cross-referenced)',
    'gn_collective_individual': 'Whether rights/duties are framed collectively or individually (0=individual rights focus, 100=collective/communal focus)',
    'gn_tech_specificity': 'How specifically the document addresses particular AI technologies vs. AI in general (0=generic AI, 100=specific systems)',
    'gn_epistemic_stance': 'Knowledge framework: empirical/evidence-based, principle-based, tradition-based, revelation-based, or precautionary',
    'gn_meta_governance': 'Whether the document governs governance itself — e.g., how to create AI policies, coordinate regulators (0=no, 100=primarily meta)',
    'gn_sacred_secular': 'Position on the sacred-secular spectrum (0=fully secular/humanist, 100=grounded in sacred/religious authority)',
    'gn_sociotechnical_imaginary': 'The implicit vision of AI\'s role in society: managed risk, human flourishing, sacred stewardship, contested terrain, etc.'
};

var _FAMILY_COLORS = {
    'Innovation Champions': '#E69F00',
    'Early Signals': '#56B4E9',
    'Moral Philosophers': '#CC79A7',
    'Watchdogs': '#D55E00',
    'Guilds': '#009E73',
    'Rulebook Writers': '#0072B2'
};

function _esc(s) { return String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _pretty(s) { return String(s || '').replace(/_/g, ' '); }

function showStatementPopup(key) {
    if (typeof STMT_DETAILS === 'undefined') return;
    var d = STMT_DETAILS[key];
    if (!d) return;

    var overlay = document.getElementById('stmt-modal-overlay');
    var header = document.getElementById('stmt-modal-header');
    var body = document.getElementById('stmt-modal-body');

    // Header
    var famBadge = '';
    if (d.fam) {
        var famColor = _FAMILY_COLORS[d.fam] || '#334155';
        famBadge = '<span class="stmt-family" style="background:' + famColor + ';color:#fff;">' + _esc(d.fam) + '</span>';
    }
    var ncBadge = '';
    if (d.nc) {
        ncBadge = '<span class="stmt-family" style="background:#475569;">' + _esc(d.nc) + '</span>';
    }

    header.innerHTML = '<div class="stmt-key">' + _esc(key) + famBadge + ncBadge + '</div>'
        + '<h2>' + _esc(d.ft || d.io || key) + '</h2>';

    // Body
    var html = '';

    // -- Basic Info --
    html += '<h3>Statement Information</h3>';
    html += '<div class="stmt-detail-grid">';
    var fields = [
        ['Organization', d.io],
        ['Org Type', _pretty(d.ot)],
        ['Org Subtype', _pretty(d.os)],
        ['Country', d.ic],
        ['Region', d.r],
        ['Year', d.y || ''],
        ['Date Issued', d.di],
        ['Statement Type', _pretty(d.st)],
        ['Binding Nature', _pretty(d.bn)],
        ['Geographic Scope', _pretty(d.gs)],
        ['Status', _pretty(d.ss)],
        ['Language', d.lang]
    ];
    fields.forEach(function(f) {
        if (f[1]) {
            html += '<div class="label">' + f[0] + '</div><div class="value">' + _esc(f[1]) + '</div>';
        }
    });
    html += '</div>';

    // -- URL --
    if (d.url) {
        html += '<h3>Source</h3>';
        html += '<div class="stmt-detail-grid">';
        html += '<div class="label">URL</div><div class="value"><a href="' + _esc(d.url) + '" target="_blank" rel="noopener">' + _esc(d.url.length > 80 ? d.url.substring(0,77) + '...' : d.url) + '</a></div>';
        html += '</div>';
    }

    // -- Document --
    html += '<h3>Document</h3>';
    html += '<div class="stmt-detail-grid">';
    var docFields = [
        ['Page Count', d.pc || ''],
        ['Word Count', d.wc || ''],
        ['Body Word Count', d.bwc || ''],
        ['Acquired', d.acq ? 'Yes' : 'No'],
        ['Extract Created', d.ext ? 'Yes' : 'No'],
        ['Date Added', d.da || '']
    ];
    docFields.forEach(function(f) {
        if (f[1]) {
            html += '<div class="label">' + f[0] + '</div><div class="value">' + _esc(f[1]) + '</div>';
        }
    });
    if (d.src) {
        html += '<div class="label">Source Note</div><div class="value">' + _esc(d.src) + '</div>';
    }
    html += '</div>';

    // -- Abstract / Summary --
    if (d.abs) {
        html += '<h3>Abstract</h3>';
        html += '<div class="stmt-abstract">' + _esc(d.abs) + '</div>';
    }
    if (d.sum) {
        html += '<h3>LLM Summary</h3>';
        html += '<div class="stmt-abstract">' + _esc(d.sum) + '</div>';
    }

    // -- Genome Scores --
    if (d.gn) {
        html += '<h3>Governance Genome (C2 Context)</h3>';
        html += '<div class="stmt-genome-grid">';
        var gnKeys = Object.keys(d.gn).sort();
        gnKeys.forEach(function(gk) {
            var label = _GN_LABELS[gk] || _pretty(gk.replace('gn_', ''));
            var val = d.gn[gk];
            var valStr;
            if (Array.isArray(val)) {
                valStr = val.map(function(v) { return _pretty(v); }).join(', ');
            } else {
                valStr = _pretty(String(val));
            }
            var tip = _GN_TOOLTIPS[gk] || '';
            html += '<div class="gn-row"><span class="gn-label gn-tip" data-tip="' + _esc(tip) + '">' + label + '</span><span class="gn-value">' + _esc(valStr) + '</span></div>';
        });
        html += '</div>';
    } else {
        html += '<h3>Governance Genome</h3>';
        html += '<div style="color:#64748b;font-size:13px;font-style:italic;">This statement was not included in the Governance Genome scoring (2,021 of 3,044 statements scored).</div>';
    }

    body.innerHTML = html;

    // Show
    overlay.classList.add('active');
    body.scrollTop = 0;
}

function hideStatementPopup() {
    var overlay = document.getElementById('stmt-modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

// Wire up close handlers
document.addEventListener('DOMContentLoaded', function() {
    var closeBtn = document.getElementById('stmt-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', hideStatementPopup);

    var overlay = document.getElementById('stmt-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) hideStatementPopup();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') hideStatementPopup();
    });
});


/* ==================================================================
   NARRATIVE RENDERER
   ================================================================== */

function renderNarrative(tab) {
    var el = document.getElementById('narrative-' + tab);
    if (!el) return;
    // Try exact key, then camelCase variant
    var texts = (typeof EXPERT_TEXTS !== 'undefined') ? (EXPERT_TEXTS[tab] || EXPERT_TEXTS[tab.replace(/([a-z])([A-Z])/g, '$1$2')] || null) : null;
    // Also try: crosslayer -> crossLayer
    if (!texts && typeof EXPERT_TEXTS !== 'undefined') {
        for (var k in EXPERT_TEXTS) {
            if (k.toLowerCase() === tab.toLowerCase()) { texts = EXPERT_TEXTS[k]; break; }
        }
    }
    if (texts) {
        var entries = texts;
        if (Array.isArray(entries)) {
            var html = '';
            entries.forEach(function(entry) {
                html += '<div class="narrative-entry">'
                      + '<div class="narrative-expert">' + (entry.expert || '') + '</div>'
                      + '<p>' + (entry.text || '') + '</p>'
                      + '</div>';
            });
            el.innerHTML = html;
        } else {
            el.innerHTML = entries;
        }
    } else {
        el.innerHTML = '<em>Expert narrative not yet generated. Run the data generator to populate texts.js.</em>';
    }
}

/* ---- Findings Rendering (P17: confidence badges) ---- */

function _confidenceBadgeHTML(level) {
    if (!level) return '';
    var cssClass = 'confidence-moderate';
    var label = level.toUpperCase();
    if (level === 'high') {
        cssClass = 'confidence-high';
        label = 'HIGH CONFIDENCE';
    } else if (level === 'moderate') {
        cssClass = 'confidence-moderate';
        label = 'MODERATE';
    } else if (level === 'caution') {
        cssClass = 'confidence-caution';
        label = 'INTERPRET WITH CAUTION';
    }
    return '<span class="confidence-badge ' + cssClass + '">' + label + '</span>';
}

function renderHeadlineFindings() {
    var el = document.getElementById('findings-grid');
    if (!el || typeof EXPERT_TEXTS === 'undefined' || !EXPERT_TEXTS.findings) return;
    var html = '';
    EXPERT_TEXTS.findings.forEach(function(f) {
        var badge = _confidenceBadgeHTML(f.confidence);
        html += '<div class="finding-card">'
              + '<div class="finding-title"><span class="finding-number">' + f.num + '</span>' + f.title + badge + '</div>'
              + '<p class="finding-body">' + f.body + '</p>';
        if (f.stats && f.stats.length) {
            html += '<div style="padding-left:30px;margin-top:6px;">';
            f.stats.forEach(function(s) { html += '<span class="finding-stat">' + s + '</span> '; });
            html += '</div>';
        }
        html += '</div>';
    });
    el.innerHTML = html;
}

function renderTabFindings(tab) {
    // Map tab names to findings keys in EXPERT_TEXTS
    var keyMap = {
        'institutional': 'institutionalFindings',
        'temporal': 'temporalFindings',
        'gaps': 'gapFindings',
        'profiles': 'profilesFindings'
    };
    var key = keyMap[tab];
    if (!key) return;
    var el = document.getElementById('findings-list-' + tab);
    if (!el || typeof EXPERT_TEXTS === 'undefined' || !EXPERT_TEXTS[key]) return;
    var html = '';
    EXPERT_TEXTS[key].forEach(function(f) {
        html += '<div class="finding-card">'
              + '<div class="finding-title">' + f.title + '</div>'
              + '<p class="finding-body">' + f.body + '</p>';
        if (f.stats && f.stats.length) {
            html += '<div style="padding-left:0;margin-top:6px;">';
            f.stats.forEach(function(s) { html += '<span class="finding-stat">' + s + '</span> '; });
            html += '</div>';
        }
        html += '</div>';
    });
    el.innerHTML = html;
}
