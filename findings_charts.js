/* ============================================================
   Findings Deep Dive — Charts, Evidence Tables & Arguments
   Uses FINDINGS_DATA (findings_data.js) and FINDINGS_TEXTS
   (findings_texts.js). Renders into panes defined in index.html.
   ============================================================ */

var CLUSTER_COLORS = {
    'Innovation-State':   '#6366f1',
    'Residual/Thin':      '#94a3b8',
    'Sacred-Traditional': '#f59e0b',
    'Rights-Advocacy':    '#10b981',
    'Professional':       '#ec4899',
    'Risk-Regulatory':    '#ef4444'
};

var ORGTYPE_COLORS = {
    'government':          '#6366f1',
    'intergovernmental':   '#22d3ee',
    'industry':            '#f59e0b',
    'civil_society':       '#10b981',
    'academic':            '#8b5cf6',
    'professional':        '#ec4899',
    'religious':           '#f97316',
    'multistakeholder':    '#14b8a6',
    'indigenous':          '#22c55e',
    'national_ethics_body':'#38bdf8',
    'labor':               '#a78bfa'
};

var TRADITION_COLORS = {
    'Indigenous':     '#22c55e',
    'Islamic':        '#f59e0b',
    'Christian':      '#6366f1',
    'Jewish':         '#8b5cf6',
    'Hindu/Buddhist': '#ec4899',
    'African':        '#f97316'
};

function _fTooltip() {
    return {
        backgroundColor: 'rgba(15,23,42,0.95)',
        borderColor: '#334155',
        textStyle: { color: '#f1f5f9' }
    };
}

function _fMkChart(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var c = echarts.init(el);
    window._charts.push(c);
    return c;
}

function _prettyLabel(s) {
    return s.replace(/_/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

/* ==================================================================
   MASTER DISPATCHER
   ================================================================== */

function renderFindingCharts(fid) {
    switch (fid) {
        case 'f1':  renderF1Charts(); break;
        case 'f2':  renderF2Charts(); break;
        case 'f3':  renderF3Charts(); break;
        case 'f4':  renderF4Charts(); break;
        case 'f5':  renderF5Charts(); break;
        case 'f6':  renderF6Charts(); break;
        case 'f7':  renderF7Charts(); break;
        case 'f8':  renderF8Charts(); break;
        case 'f9':  renderF9Charts(); break;
        case 'f10': renderF10Charts(); break;
        case 'noc2': renderNoC2Charts(); break;
        case 'noc2b': renderNoC2bCharts(); break;
    }
}

/* ==================================================================
   F1: Enforcement Gap
   Chart 1: Binding nature distribution for Rights-Advocacy cluster
   Chart 2: Enforcement mechanisms by cluster
   ================================================================== */

function renderF1Charts() {
    var d = FINDINGS_DATA.f1;
    if (!d) return;

    // Chart 1: Stacked bar of binding_by_cluster
    var chart1 = _fMkChart('chart-f1-1');
    if (chart1) {
        var clusters = Object.keys(d.binding_by_cluster);
        var bindingTypes = {};
        clusters.forEach(function(cl) {
            var obj = d.binding_by_cluster[cl];
            for (var k in obj) { if (obj.hasOwnProperty(k)) bindingTypes[k] = true; }
        });
        var btKeys = Object.keys(bindingTypes);
        var palette = ['#ef4444','#f59e0b','#6366f1','#22d3ee','#94a3b8','#10b981','#ec4899','#8b5cf6','#f97316'];

        var series = btKeys.map(function(bt, i) {
            return {
                name: _prettyLabel(bt),
                type: 'bar',
                stack: 'total',
                emphasis: { focus: 'series' },
                itemStyle: { color: palette[i % palette.length] },
                data: clusters.map(function(cl) { return d.binding_by_cluster[cl][bt] || 0; })
            };
        });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 120, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: clusters, axisLabel: { color: '#94a3b8', fontSize: 11 } },
            series: series
        });
    }

    // Chart 2: Enforcement mechanisms by cluster (grouped bar, top 6 mechanisms)
    var chart2 = _fMkChart('chart-f1-2');
    if (chart2 && d.enforcement_by_cluster) {
        var enfClusters = Object.keys(d.enforcement_by_cluster);
        // Find top mechanisms across all clusters
        var mechTotals = {};
        enfClusters.forEach(function(cl) {
            var obj = d.enforcement_by_cluster[cl];
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) mechTotals[k] = (mechTotals[k] || 0) + obj[k];
            }
        });
        var topMechs = Object.keys(mechTotals).sort(function(a,b) { return mechTotals[b]-mechTotals[a]; }).slice(0, 8);

        var enfSeries = enfClusters.map(function(cl, i) {
            return {
                name: cl,
                type: 'bar',
                itemStyle: { color: CLUSTER_COLORS[cl] || ACCENT_PALETTE[i] },
                data: topMechs.map(function(m) { return d.enforcement_by_cluster[cl][m] || 0; })
            };
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 140, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'value', name: '% of cluster', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: topMechs.map(_prettyLabel), axisLabel: { color: '#94a3b8', fontSize: 11 }, inverse: true },
            series: enfSeries
        });
    }
}

/* ==================================================================
   F2: Industry Voluntarism
   Chart 1: Binding nature by org type (stacked bar)
   Chart 2: Binding pct by org type (100% stacked)
   ================================================================== */

function renderF2Charts() {
    var d = FINDINGS_DATA.f2;
    if (!d) return;

    var chart1 = _fMkChart('chart-f2-1');
    if (chart1 && d.binding_by_orgtype) {
        var orgTypes = Object.keys(d.binding_by_orgtype);
        var bindTypes = {};
        orgTypes.forEach(function(ot) {
            var obj = d.binding_by_orgtype[ot];
            for (var k in obj) { if (obj.hasOwnProperty(k)) bindTypes[k] = true; }
        });
        var btKeys = Object.keys(bindTypes);
        var palette = ['#ef4444','#f59e0b','#6366f1','#22d3ee','#94a3b8'];

        var series = btKeys.map(function(bt, i) {
            return {
                name: _prettyLabel(bt),
                type: 'bar',
                stack: 'total',
                emphasis: { focus: 'series' },
                itemStyle: { color: palette[i % palette.length] },
                data: orgTypes.map(function(ot) { return d.binding_by_orgtype[ot][bt] || 0; })
            };
        });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 130, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: orgTypes.map(_prettyLabel), axisLabel: { color: '#94a3b8', fontSize: 11 } },
            series: series
        });
    }

    // Chart 2: % breakdown by org type
    var chart2 = _fMkChart('chart-f2-2');
    if (chart2 && d.binding_pct_by_orgtype) {
        var otKeys = Object.keys(d.binding_pct_by_orgtype);
        var btSet = {};
        otKeys.forEach(function(ot) {
            var obj = d.binding_pct_by_orgtype[ot];
            for (var k in obj) { if (obj.hasOwnProperty(k)) btSet[k] = true; }
        });
        var btArr = Object.keys(btSet);
        var palette2 = ['#ef4444','#f59e0b','#6366f1','#22d3ee','#94a3b8','#10b981'];

        var series2 = btArr.map(function(bt, i) {
            return {
                name: _prettyLabel(bt),
                type: 'bar',
                stack: 'pct',
                emphasis: { focus: 'series' },
                itemStyle: { color: palette2[i % palette2.length] },
                data: otKeys.map(function(ot) { return d.binding_pct_by_orgtype[ot][bt] || 0; })
            };
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 130, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'value', max: 100, name: '%', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: otKeys.map(_prettyLabel), axisLabel: { color: '#94a3b8', fontSize: 11 } },
            series: series2
        });
    }
}

/* ==================================================================
   F3: Temporal Precedence
   Chart 1: Debut year by org type (bar)
   Chart 2: Cumulative statements by org type (line)
   ================================================================== */

function renderF3Charts() {
    var d = FINDINGS_DATA.f3;
    if (!d) return;

    var chart1 = _fMkChart('chart-f3-1');
    if (chart1 && d.debut_by_orgtype) {
        var entries = [];
        for (var ot in d.debut_by_orgtype) {
            if (d.debut_by_orgtype.hasOwnProperty(ot)) {
                entries.push({ name: _prettyLabel(ot), year: d.debut_by_orgtype[ot] });
            }
        }
        entries.sort(function(a, b) { return a.year - b.year; });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 140, right: 30, top: 20, bottom: 30 },
            xAxis: { type: 'value', min: 1996, max: 2020, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: entries.map(function(e) { return e.name; }), axisLabel: { color: '#94a3b8', fontSize: 11 }, inverse: true },
            series: [{
                type: 'bar',
                data: entries.map(function(e, i) {
                    return { value: e.year, itemStyle: { color: ACCENT_PALETTE[i % ACCENT_PALETTE.length] } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 11, formatter: function(p) { return p.value; } }
            }]
        });
    }

    // Chart 2: Cumulative lines
    var chart2 = _fMkChart('chart-f3-2');
    if (chart2 && d.cumulative_by_orgtype) {
        var years = d.cumulative_by_orgtype.years;
        var seriesData = d.cumulative_by_orgtype.series;
        var otNames = Object.keys(seriesData);
        // Sort by final value descending, show top 6
        otNames.sort(function(a, b) {
            var la = seriesData[b], lb = seriesData[a];
            return la[la.length - 1] - lb[lb.length - 1];
        });
        var topOt = otNames.slice(0, 6);

        var lineSeries = topOt.map(function(ot, i) {
            return {
                name: _prettyLabel(ot),
                type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle: { width: 2 },
                itemStyle: { color: ORGTYPE_COLORS[ot] || ACCENT_PALETTE[i] },
                data: seriesData[ot]
            };
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis' }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 50, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'category', data: years.map(String), axisLabel: { color: '#94a3b8' }, axisTick: { alignWithLabel: true } },
            yAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: lineSeries
        });
    }
}

/* ==================================================================
   F4: Sacred-Secular Divide
   Chart 1: Histogram of sacred-secular scores
   Chart 2: Cluster comparison (mean sacred score)
   ================================================================== */

function renderF4Charts() {
    var d = FINDINGS_DATA.f4;
    if (!d) return;

    var chart1 = _fMkChart('chart-f4-1');
    if (chart1 && d.histogram) {
        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 60, right: 20, top: 20, bottom: 40 },
            xAxis: { type: 'category', data: d.histogram.bins, axisLabel: { color: '#94a3b8' } },
            yAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: [{
                type: 'bar',
                data: d.histogram.counts.map(function(v, i) {
                    return { value: v, itemStyle: { color: i === 0 ? '#94a3b8' : (i >= 4 ? '#f59e0b' : '#6366f1') } };
                }),
                barMaxWidth: 60
            }]
        });
    }

    // Chart 2: Cluster stats
    var chart2 = _fMkChart('chart-f4-2');
    if (chart2 && d.by_cluster) {
        var clNames = Object.keys(d.by_cluster);
        clNames.sort(function(a, b) { return d.by_cluster[b].mean - d.by_cluster[a].mean; });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 140, right: 40, top: 20, bottom: 30 },
            xAxis: { type: 'value', name: 'Mean Sacred Score', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: clNames, axisLabel: { color: '#94a3b8', fontSize: 11 }, inverse: true },
            series: [{
                type: 'bar',
                data: clNames.map(function(cl) {
                    return { value: d.by_cluster[cl].mean, itemStyle: { color: CLUSTER_COLORS[cl] || '#94a3b8' } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 11, formatter: function(p) { return p.value.toFixed(1); } },
                barMaxWidth: 40
            }]
        });
    }
}

/* ==================================================================
   F5: Conceptual Marginalization
   Chart 1: Tradition-specific concept prevalence (bar)
   Chart 2: OECD visibility (pie)
   ================================================================== */

function renderF5Charts() {
    var d = FINDINGS_DATA.f5;
    if (!d) return;

    var chart1 = _fMkChart('chart-f5-1');
    if (chart1 && d.concepts) {
        var concepts = d.concepts.slice(0, 15);
        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 180, right: 40, top: 20, bottom: 30 },
            xAxis: { type: 'value', name: '% of statements', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: {
                type: 'category',
                data: concepts.map(function(c) { return _prettyLabel(c.name) + ' (' + c.tradition + ')'; }),
                axisLabel: { color: '#94a3b8', fontSize: 11 },
                inverse: true
            },
            series: [{
                type: 'bar',
                data: concepts.map(function(c) {
                    return { value: c.activation_pct, itemStyle: { color: TRADITION_COLORS[c.tradition] || '#94a3b8' } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 10, formatter: function(p) { return p.value + '%'; } },
                barMaxWidth: 30
            }]
        });
    }

    // Chart 2: OECD visibility pie
    var chart2 = _fMkChart('chart-f5-2');
    if (chart2 && d.concepts) {
        var visible = 0, notVisible = 0;
        d.concepts.forEach(function(c) {
            if (c.oecd_visible) visible++;
            else notVisible++;
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'item' }),
            legend: { bottom: 10, textStyle: { color: '#94a3b8' } },
            series: [{
                type: 'pie',
                radius: ['35%', '65%'],
                center: ['50%', '45%'],
                label: { color: '#94a3b8', formatter: '{b}: {c} ({d}%)' },
                data: [
                    { value: visible, name: 'Has OECD/EU Equivalent', itemStyle: { color: '#10b981' } },
                    { value: notVisible, name: 'No Equivalent', itemStyle: { color: '#ef4444' } }
                ]
            }]
        });
    }
}

/* ==================================================================
   F6: Religious Governance Surge
   Chart 1: C2 (Sacred-Traditional) by year (bar)
   Chart 2: All clusters by period (grouped bar)
   ================================================================== */

function renderF6Charts() {
    var d = FINDINGS_DATA.f6;
    if (!d) return;

    var chart1 = _fMkChart('chart-f6-1');
    if (chart1 && d.c2_by_year) {
        var years = Object.keys(d.c2_by_year).sort();
        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 50, right: 20, top: 20, bottom: 30 },
            xAxis: { type: 'category', data: years, axisLabel: { color: '#94a3b8' } },
            yAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: [{
                type: 'bar',
                data: years.map(function(y) {
                    return { value: d.c2_by_year[y], itemStyle: { color: '#f59e0b' } };
                }),
                barMaxWidth: 40
            }]
        });
    }

    // Chart 2: All clusters by period stacked bar
    var chart2 = _fMkChart('chart-f6-2');
    if (chart2 && d.all_clusters_by_period) {
        var periods = Object.keys(d.all_clusters_by_period);
        var clusterSet = {};
        periods.forEach(function(p) {
            var obj = d.all_clusters_by_period[p];
            for (var k in obj) { if (obj.hasOwnProperty(k)) clusterSet[k] = true; }
        });
        var clKeys = Object.keys(clusterSet);

        var stackSeries = clKeys.map(function(cl) {
            return {
                name: cl,
                type: 'bar',
                stack: 'total',
                emphasis: { focus: 'series' },
                itemStyle: { color: CLUSTER_COLORS[cl] || '#94a3b8' },
                data: periods.map(function(p) { return d.all_clusters_by_period[p][cl] || 0; })
            };
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 80, right: 20, top: 20, bottom: 60 },
            xAxis: { type: 'category', data: periods, axisLabel: { color: '#94a3b8' } },
            yAxis: { type: 'value', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: stackSeries
        });
    }
}

/* ==================================================================
   F7: Form-Content Asymmetry
   Chart 1: Ablation silhouette scores (bar)
   Chart 2: Variance by channel (bar + line)
   ================================================================== */

function renderF7Charts() {
    var d = FINDINGS_DATA.f7;
    if (!d) return;

    var chart1 = _fMkChart('chart-f7-1');
    if (chart1 && d.ablation) {
        var labels = d.ablation.map(function(a) { return a.channels; });
        var silRefit = d.ablation.map(function(a) { return a.sil_refit; });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 80, right: 20, top: 20, bottom: 30 },
            xAxis: { type: 'category', data: labels, axisLabel: { color: '#94a3b8', fontSize: 11 } },
            yAxis: { type: 'value', name: 'Silhouette Score', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: [{
                type: 'bar',
                data: silRefit.map(function(v) {
                    return { value: v, itemStyle: { color: v >= 0.1 ? '#10b981' : (v >= 0 ? '#f59e0b' : '#ef4444') } };
                }),
                barMaxWidth: 50,
                label: { show: true, position: 'top', color: '#94a3b8', fontSize: 10, formatter: function(p) { return p.value.toFixed(3); } }
            }]
        });
    }

    // Chart 2: Variance share by channel
    var chart2 = _fMkChart('chart-f7-2');
    if (chart2 && d.variance_by_channel) {
        var channels = d.variance_by_channel.map(function(v) { return v.channel; });
        var sharePct = d.variance_by_channel.map(function(v) { return v.share_pct; });
        var colsPct = d.variance_by_channel.map(function(v) { return (v.cols / 347 * 100).toFixed(1); });
        var chColors = ['#ec4899', '#6366f1', '#f59e0b', '#22d3ee'];

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis' }),
            legend: { bottom: 0, textStyle: { color: '#94a3b8' } },
            grid: { left: 60, right: 60, top: 20, bottom: 50 },
            xAxis: { type: 'category', data: channels, axisLabel: { color: '#94a3b8', fontSize: 11 } },
            yAxis: [
                { type: 'value', name: '% of Variance', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
                { type: 'value', name: '% of Features', axisLabel: { color: '#94a3b8' }, splitLine: { show: false } }
            ],
            series: [
                {
                    name: 'Variance Share',
                    type: 'bar',
                    data: sharePct.map(function(v, i) { return { value: v, itemStyle: { color: chColors[i] } }; }),
                    barMaxWidth: 50
                },
                {
                    name: 'Feature Share',
                    type: 'line',
                    yAxisIndex: 1,
                    symbol: 'circle',
                    symbolSize: 8,
                    lineStyle: { color: '#94a3b8', type: 'dashed' },
                    itemStyle: { color: '#94a3b8' },
                    data: colsPct.map(Number)
                }
            ]
        });
    }
}

/* ==================================================================
   F8: Principles Divergence
   Chart 1: ANOVA results (horizontal bar of eta-squared)
   Chart 2: Convergence index (horizontal bar)
   ================================================================== */

function renderF8Charts() {
    var d = FINDINGS_DATA.f8;
    if (!d) return;

    var chart1 = _fMkChart('chart-f8-1');
    if (chart1 && d.anova) {
        var sorted = d.anova.slice().sort(function(a, b) { return b.eta_sq - a.eta_sq; });
        var labels = sorted.map(function(a) { return a.principle; });
        var etas = sorted.map(function(a) { return a.eta_sq; });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' },
                formatter: function(params) {
                    var item = sorted[params[0].dataIndex];
                    return '<b>' + item.principle + '</b><br/>eta^2: ' + item.eta_sq + '<br/>p: ' + item.p_value;
                }
            }),
            grid: { left: 120, right: 30, top: 20, bottom: 30 },
            xAxis: { type: 'value', name: 'eta-squared', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: labels, axisLabel: { color: '#94a3b8', fontSize: 12 }, inverse: true },
            series: [{
                type: 'bar',
                data: etas.map(function(v) {
                    return { value: v, itemStyle: { color: v > 0.01 ? '#6366f1' : '#94a3b8' } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 10, formatter: function(p) { return p.value.toFixed(3); } },
                barMaxWidth: 30
            }]
        });
    }

    // Chart 2: Convergence index
    var chart2 = _fMkChart('chart-f8-2');
    if (chart2 && d.convergence) {
        var cSorted = d.convergence.slice().sort(function(a, b) { return b.ci - a.ci; });
        var cLabels = cSorted.map(function(c) { return c.principle; });
        var cVals = cSorted.map(function(c) { return c.ci; });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 120, right: 30, top: 20, bottom: 30 },
            xAxis: { type: 'value', min: 0, max: 1, name: 'Convergence Index', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: cLabels, axisLabel: { color: '#94a3b8', fontSize: 12 }, inverse: true },
            series: [{
                type: 'bar',
                data: cVals.map(function(v) {
                    var c = v >= 0.7 ? '#10b981' : (v >= 0.5 ? '#f59e0b' : '#ef4444');
                    return { value: v, itemStyle: { color: c } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 10, formatter: function(p) { return p.value.toFixed(3); } },
                barMaxWidth: 30
            }]
        });
    }
}

/* ==================================================================
   F9: Tradition Coherence
   Chart 1: Correlation heatmap for concept pairs
   Chart 2: Concept prevalence by tradition (bar)
   ================================================================== */

function renderF9Charts() {
    var d = FINDINGS_DATA.f9;
    if (!d) return;

    var chart1 = _fMkChart('chart-f9-1');
    if (chart1 && d.correlations) {
        // Group by tradition for display
        var corrs = d.correlations;
        var labels = corrs.map(function(c) { return c.pair.replace(/ x /g, '\nvs '); });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' },
                formatter: function(params) {
                    var item = corrs[params[0].dataIndex];
                    return '<b>' + item.pair + '</b><br/>r (both>0): ' + item.r_both.toFixed(3) + '<br/>r (either>0): ' + item.r_either.toFixed(3) + '<br/>n: ' + item.n_both + '<br/>Tradition: ' + item.tradition;
                }
            }),
            grid: { left: 200, right: 40, top: 20, bottom: 30 },
            xAxis: { type: 'value', min: -0.6, max: 1, name: 'Pearson r', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: labels, axisLabel: { color: '#94a3b8', fontSize: 10 }, inverse: true },
            series: [{
                type: 'bar',
                data: corrs.map(function(c) {
                    return { value: c.r_either, itemStyle: { color: TRADITION_COLORS[c.tradition] || '#94a3b8' } };
                }),
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 10, formatter: function(p) { return p.value.toFixed(2); } },
                barMaxWidth: 25
            }]
        });
    }

    // Chart 2: Concept prevalence by tradition
    var chart2 = _fMkChart('chart-f9-2');
    if (chart2 && d.concept_counts) {
        var concepts = d.concept_counts;
        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            grid: { left: 180, right: 40, top: 20, bottom: 30 },
            xAxis: { type: 'value', name: 'Statements (n)', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: {
                type: 'category',
                data: concepts.map(function(c) { return _prettyLabel(c.name); }),
                axisLabel: { color: '#94a3b8', fontSize: 10 },
                inverse: true
            },
            series: [{
                type: 'bar',
                data: concepts.map(function(c) {
                    return { value: c.n_nonzero, itemStyle: { color: TRADITION_COLORS[c.tradition] || '#94a3b8' } };
                }),
                barMaxWidth: 25,
                label: { show: true, position: 'right', color: '#94a3b8', fontSize: 9, formatter: function(p) { return p.value; } }
            }]
        });
    }
}

/* ==================================================================
   F10: Professional Self-Regulation
   Chart 1: C4 vs global enforcement (paired bar)
   Chart 2: C4 org composition (pie)
   ================================================================== */

function renderF10Charts() {
    var d = FINDINGS_DATA.f10;
    if (!d) return;

    var chart1 = _fMkChart('chart-f10-1');
    if (chart1 && d.c4_enforcement && d.global_enforcement) {
        // Merge keys and show paired comparison
        var allMechs = {};
        for (var k in d.c4_enforcement) { if (d.c4_enforcement.hasOwnProperty(k)) allMechs[k] = true; }
        for (var k2 in d.global_enforcement) { if (d.global_enforcement.hasOwnProperty(k2)) allMechs[k2] = true; }
        // Sort by C4 value descending
        var mechKeys = Object.keys(allMechs).sort(function(a, b) {
            return (d.c4_enforcement[b] || 0) - (d.c4_enforcement[a] || 0);
        }).slice(0, 10);

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { bottom: 0, textStyle: { color: '#94a3b8' } },
            grid: { left: 160, right: 20, top: 20, bottom: 50 },
            xAxis: { type: 'value', name: '% of cluster/corpus', axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: mechKeys.map(_prettyLabel), axisLabel: { color: '#94a3b8', fontSize: 11 }, inverse: true },
            series: [
                {
                    name: 'Professional (C4)',
                    type: 'bar',
                    itemStyle: { color: '#ec4899' },
                    data: mechKeys.map(function(m) { return d.c4_enforcement[m] || 0; })
                },
                {
                    name: 'Global Average',
                    type: 'bar',
                    itemStyle: { color: '#94a3b8' },
                    data: mechKeys.map(function(m) { return d.global_enforcement[m] || 0; })
                }
            ]
        });
    }

    // Chart 2: C4 org composition pie
    var chart2 = _fMkChart('chart-f10-2');
    if (chart2 && d.c4_org_composition) {
        var pieData = [];
        for (var ot in d.c4_org_composition) {
            if (d.c4_org_composition.hasOwnProperty(ot)) {
                pieData.push({
                    value: d.c4_org_composition[ot],
                    name: _prettyLabel(ot),
                    itemStyle: { color: ORGTYPE_COLORS[ot] || '#94a3b8' }
                });
            }
        }
        pieData.sort(function(a, b) { return b.value - a.value; });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'item' }),
            legend: { type: 'scroll', bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            series: [{
                type: 'pie',
                radius: ['30%', '60%'],
                center: ['50%', '45%'],
                label: { color: '#94a3b8', formatter: '{b}: {c}', fontSize: 11 },
                data: pieData
            }]
        });
    }
}


/* ==================================================================
   NoC2: Content-Only Clustering
   Chart 1: Silhouette comparison line chart (canonical vs NoC2)
   Chart 2: Cross-tabulation heatmap (6 families x 5 NoC2 clusters)
   ================================================================== */

function renderNoC2Charts() {
    var d = FINDINGS_DATA.noc2;
    if (!d) return;

    // Chart 1: Silhouette comparison line chart
    var chart1 = _fMkChart('chart-noc2-1');
    if (chart1 && d.silhouette_comparison) {
        var kVals = Object.keys(d.silhouette_comparison).map(Number).sort(function(a,b){return a-b;});
        var canonicalData = kVals.map(function(k) { return d.silhouette_comparison[String(k)].canonical; });
        var noc2Data = kVals.map(function(k) { return d.silhouette_comparison[String(k)].noc2; });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis' }),
            legend: { data: ['Canonical (all channels)', 'NoC2 (content only)'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 11 } },
            grid: { left: 60, right: 30, top: 40, bottom: 60 },
            xAxis: {
                type: 'category',
                data: kVals.map(String),
                name: 'k',
                nameTextStyle: { color: '#94a3b8' },
                axisLabel: { color: '#94a3b8' }
            },
            yAxis: {
                type: 'value',
                name: 'Silhouette',
                nameTextStyle: { color: '#94a3b8' },
                axisLabel: { color: '#94a3b8' },
                splitLine: { lineStyle: { color: '#1e293b' } }
            },
            series: [
                {
                    name: 'Canonical (all channels)',
                    type: 'line',
                    data: canonicalData,
                    itemStyle: { color: '#6366f1' },
                    lineStyle: { width: 2.5 },
                    symbol: 'circle',
                    symbolSize: 6,
                    markPoint: {
                        data: [{ name: 'k=6 (canonical best)', coord: ['6', 0.1551], itemStyle: { color: '#6366f1' }, label: { formatter: 'k=6\n0.155', fontSize: 10, color: '#f1f5f9' } }],
                        symbolSize: 40
                    }
                },
                {
                    name: 'NoC2 (content only)',
                    type: 'line',
                    data: noc2Data,
                    itemStyle: { color: '#f59e0b' },
                    lineStyle: { width: 2.5, type: 'dashed' },
                    symbol: 'diamond',
                    symbolSize: 6,
                    markPoint: {
                        data: [{ name: 'k=5 (NoC2 best)', coord: ['5', 0.1294], itemStyle: { color: '#f59e0b' }, label: { formatter: 'k=5\n0.129', fontSize: 10, color: '#f1f5f9' } }],
                        symbolSize: 40
                    }
                }
            ]
        });
    }

    // Chart 2: Cross-tabulation heatmap
    var chart2 = _fMkChart('chart-noc2-2');
    if (chart2 && d.cross_tab && d.family_names && d.noc2_labels) {
        var heatData = [];
        var maxVal = 0;
        for (var row = 0; row < d.cross_tab.length; row++) {
            for (var col = 0; col < d.cross_tab[row].length; col++) {
                var v = d.cross_tab[row][col];
                heatData.push([col, row, v]);
                if (v > maxVal) maxVal = v;
            }
        }

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'item',
                formatter: function(p) {
                    return d.family_names[p.value[1]] + ' → ' + d.noc2_labels[p.value[0]] + '<br/>Count: <strong>' + p.value[2] + '</strong>';
                }
            }),
            grid: { left: 150, right: 60, top: 20, bottom: 80 },
            xAxis: {
                type: 'category',
                data: d.noc2_labels,
                axisLabel: { color: '#94a3b8', fontSize: 10, rotate: 25 },
                splitArea: { show: true, areaStyle: { color: ['rgba(15,23,42,0.3)', 'rgba(15,23,42,0.5)'] } }
            },
            yAxis: {
                type: 'category',
                data: d.family_names,
                axisLabel: { color: '#94a3b8', fontSize: 11 },
                splitArea: { show: true, areaStyle: { color: ['rgba(15,23,42,0.3)', 'rgba(15,23,42,0.5)'] } }
            },
            visualMap: {
                min: 0,
                max: maxVal,
                calculable: true,
                orient: 'vertical',
                right: 0,
                top: 'center',
                inRange: { color: ['#0f172a', '#1e293b', '#334155', '#6366f1', '#818cf8', '#c7d2fe'] },
                textStyle: { color: '#94a3b8' }
            },
            series: [{
                type: 'heatmap',
                data: heatData,
                label: {
                    show: true,
                    color: '#f1f5f9',
                    fontSize: 12,
                    fontWeight: 'bold',
                    formatter: function(p) { return p.value[2] > 0 ? p.value[2] : ''; }
                },
                emphasis: {
                    itemStyle: { shadowBlur: 10, shadowColor: 'rgba(99,102,241,0.5)' }
                }
            }]
        });
    }
}


/* ==================================================================
   NoC2b: ROBUSTNESS SUITE CHARTS
   ================================================================== */

function renderNoC2bCharts() {
    var d = FINDINGS_DATA.noc2b;
    if (!d) return;

    // Okabe-Ito palette
    var OI = ['#E69F00','#56B4E9','#009E73','#F0E442','#0072B2','#D55E00','#CC79A7','#000000'];

    // ── Chart 1: A4 WC Normalization — NoC2 Cluster Survival (bar) ──
    var chart1 = _fMkChart('chart-noc2b-1');
    if (chart1 && d.a4_wc_noc2 && d.a4_wc_noc2.survival) {
        var names = d.a4_wc_noc2.survival.map(function(s) { return s.name; });
        var jaccards = d.a4_wc_noc2.survival.map(function(s) { return s.jaccard; });
        var pcts = d.a4_wc_noc2.survival.map(function(s) { return s.pct; });

        chart1.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var idx = params[0].dataIndex;
                    var s = d.a4_wc_noc2.survival[idx];
                    return '<strong>' + s.name + '</strong><br/>Jaccard: ' + s.jaccard + '<br/>Retained: ' + s.pct + '%';
                }
            }),
            legend: { data: ['Jaccard Index', '% Retained'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 11 } },
            grid: { left: 60, right: 60, top: 30, bottom: 60 },
            xAxis: {
                type: 'category',
                data: names,
                axisLabel: { color: '#94a3b8', fontSize: 10, rotate: 15 }
            },
            yAxis: [
                { type: 'value', name: 'Jaccard', min: 0.9, max: 1.0, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
                { type: 'value', name: '% Retained', min: 90, max: 100, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { show: false } }
            ],
            series: [
                { name: 'Jaccard Index', type: 'bar', data: jaccards, yAxisIndex: 0, itemStyle: { color: OI[2] }, barWidth: '35%' },
                { name: '% Retained', type: 'bar', data: pcts, yAxisIndex: 1, itemStyle: { color: OI[4] }, barWidth: '35%' }
            ],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'ARI vs NoC2 = 0.982 — WC has negligible effect', fill: '#22c55e', fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 2: A5 Form vs Content — ARI comparison + fragmentation ──
    var chart2 = _fMkChart('chart-noc2b-2');
    if (chart2 && d.a5_c2only) {
        var famNames = d.a5_c2only.fragmentation.map(function(f) { return f.name; });
        var famPcts = d.a5_c2only.fragmentation.map(function(f) { return f.pct; });
        var famColors = d.a5_c2only.fragmentation.map(function(f) {
            return f.status === 'INTACT' ? OI[2] : f.status === 'FRAGMENTED' ? OI[0] : OI[5];
        });

        chart2.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var idx = params[0].dataIndex;
                    var f = d.a5_c2only.fragmentation[idx];
                    return '<strong>' + f.name + '</strong><br/>% in dominant C2 cluster: ' + f.pct + '%<br/>Status: ' + f.status;
                }
            }),
            grid: { left: 140, right: 30, top: 50, bottom: 40 },
            xAxis: { type: 'value', name: '% in Dominant C2 Cluster', max: 100, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: famNames, axisLabel: { color: '#94a3b8', fontSize: 11 } },
            series: [{
                type: 'bar',
                data: famPcts.map(function(v, i) { return { value: v, itemStyle: { color: famColors[i] } }; }),
                label: { show: true, position: 'right', color: '#f1f5f9', fontSize: 11, formatter: function(p) { return p.value + '%'; } },
                markLine: {
                    data: [{ xAxis: 60, label: { formatter: 'INTACT threshold', color: '#94a3b8', fontSize: 10 }, lineStyle: { color: '#475569', type: 'dashed' } }],
                    silent: true
                }
            }],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'C2-only ARI=0.545 vs NoC2 ARI=0.197 — Form recovers 2.8x more structure', fill: OI[0], fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 3: A6 NC3 Megacluster Decomposition — stacked bar ──
    var chart3 = _fMkChart('chart-noc2b-3');
    if (chart3 && d.a6_nc3decomp && d.a6_nc3decomp.crosstab) {
        var subLabels = d.a6_nc3decomp.sub_clusters.map(function(sc) { return sc.id + ' (n=' + sc.n + ')'; });
        var fNames = d.a6_nc3decomp.family_names;
        var series = [];
        for (var fi = 0; fi < fNames.length; fi++) {
            series.push({
                name: fNames[fi],
                type: 'bar',
                stack: 'total',
                emphasis: { focus: 'series' },
                data: d.a6_nc3decomp.crosstab.map(function(row) { return row[fi]; }),
                itemStyle: { color: OI[fi % OI.length] }
            });
        }
        chart3.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis', axisPointer: { type: 'shadow' } }),
            legend: { data: fNames, bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 100, right: 30, top: 50, bottom: 70 },
            xAxis: { type: 'category', data: subLabels, axisLabel: { color: '#94a3b8', fontSize: 12 } },
            yAxis: { type: 'value', name: 'Count', nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: series,
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'k=2 optimal (sil=0.198) — PARTIAL recovery of canonical families', fill: OI[1], fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 4: A7 Temporal — NC3 % over time + stacked area ──
    var chart4 = _fMkChart('chart-noc2b-4');
    if (chart4 && d.a7_temporal) {
        var bins = d.a7_temporal.bins;
        chart4.setOption({
            tooltip: Object.assign(_fTooltip(), { trigger: 'axis' }),
            legend: { data: ['NC0: Religious', 'NC1: Thin', 'NC2: Embedding', 'NC3: Convergence', 'NC4: Rights'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 60, right: 30, top: 40, bottom: 70 },
            xAxis: { type: 'category', data: bins, axisLabel: { color: '#94a3b8' } },
            yAxis: { type: 'value', name: '% of Bin', max: 100, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8', formatter: '{value}%' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            series: [
                { name: 'NC0: Religious', type: 'line', stack: 'total', areaStyle: { opacity: 0.4 }, data: d.a7_temporal.nc0_pct, itemStyle: { color: OI[6] } },
                { name: 'NC1: Thin', type: 'line', stack: 'total', areaStyle: { opacity: 0.4 }, data: d.a7_temporal.nc1_pct, itemStyle: { color: OI[1] } },
                { name: 'NC2: Embedding', type: 'line', stack: 'total', areaStyle: { opacity: 0.4 }, data: d.a7_temporal.nc2_pct, itemStyle: { color: OI[0] } },
                { name: 'NC3: Convergence', type: 'line', stack: 'total', areaStyle: { opacity: 0.6 }, data: d.a7_temporal.nc3_pct, itemStyle: { color: OI[5] }, lineStyle: { width: 3 } },
                { name: 'NC4: Rights', type: 'line', stack: 'total', areaStyle: { opacity: 0.4 }, data: d.a7_temporal.nc4_pct, itemStyle: { color: OI[4] } }
            ],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'NC3 stable at 30-39% — convergence NOT accelerating (chi2 p<0.001)', fill: OI[5], fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 5: Nine Institutional Archetypes (horizontal bar) ──
    var FAMILY_COLORS = {
        'Innovation Champions': '#E69F00',
        'Early Signals': '#56B4E9',
        'Moral Philosophers': '#CC79A7',
        'Watchdogs': '#D55E00',
        'Guilds': '#009E73',
        'Rulebook Writers': '#0072B2'
    };

    var chart5 = _fMkChart('chart-noc2b-5');
    if (chart5 && d.archetypes) {
        var archNames = d.archetypes.map(function(a) { return a.name; }).reverse();
        var archNs = d.archetypes.map(function(a) { return a.n; }).reverse();
        var archColors = d.archetypes.map(function(a) { return FAMILY_COLORS[a.dominantFamily] || '#334155'; }).reverse();

        chart5.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var idx = params[0].dataIndex;
                    var a = d.archetypes.slice().reverse()[idx];
                    return '<strong>' + a.name + '</strong><br/>n = ' + a.n + '<br/>Dominant: ' + a.dominantFamily + ' (' + a.pct + '%)<br/>Cluster: ' + a.cluster;
                }
            }),
            grid: { left: 180, right: 60, top: 50, bottom: 40 },
            xAxis: { type: 'value', name: 'Cluster Size (n)', nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
            yAxis: { type: 'category', data: archNames, axisLabel: { color: '#94a3b8', fontSize: 11 } },
            series: [{
                type: 'bar',
                data: archNs.map(function(v, i) { return { value: v, itemStyle: { color: archColors[i] } }; }),
                label: { show: true, position: 'right', color: '#f1f5f9', fontSize: 11, formatter: function(p) { return 'n=' + p.value; } }
            }],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'C2-only k=9 — Finer institutional distinctions (color = dominant family)', fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 6: NC3 Temporal Decomposition — SC0 vs SC1 grouped bar + line ──
    var chart6 = _fMkChart('chart-noc2b-6');
    if (chart6 && d.nc3Temporal) {
        var bins6 = d.nc3Temporal.bins;
        chart6.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var html = '<strong>' + params[0].axisValue + '</strong>';
                    params.forEach(function(p) {
                        if (p.seriesType === 'bar') {
                            html += '<br/>' + p.marker + ' ' + p.seriesName + ': ' + p.value;
                        } else if (p.seriesType === 'line') {
                            html += '<br/>' + p.marker + ' SC1 share: ' + p.value + '%';
                        }
                    });
                    return html;
                }
            }),
            legend: { data: ['SC0: Mixed Governance', 'SC1: Regulatory Convergence', 'SC1 Share %'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 60, right: 60, top: 50, bottom: 60 },
            xAxis: { type: 'category', data: bins6, axisLabel: { color: '#94a3b8' } },
            yAxis: [
                { type: 'value', name: 'Count', nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
                { type: 'value', name: 'SC1 Share %', min: 0, max: 100, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8', formatter: '{value}%' }, splitLine: { show: false } }
            ],
            series: [
                { name: 'SC0: Mixed Governance', type: 'bar', data: d.nc3Temporal.sc0, itemStyle: { color: OI[1] }, barWidth: '30%' },
                { name: 'SC1: Regulatory Convergence', type: 'bar', data: d.nc3Temporal.sc1, itemStyle: { color: OI[5] }, barWidth: '30%' },
                {
                    name: 'SC1 Share %',
                    type: 'line',
                    yAxisIndex: 1,
                    data: d.nc3Temporal.sc1SharePct,
                    itemStyle: { color: OI[0] },
                    lineStyle: { width: 2 },
                    symbol: 'circle',
                    symbolSize: 8,
                    markLine: {
                        data: [{ yAxis: d.nc3Temporal.overallSc1Pct, label: { formatter: 'Overall SC1: ' + d.nc3Temporal.overallSc1Pct + '%', color: '#94a3b8', fontSize: 10 }, lineStyle: { color: '#475569', type: 'dashed' } }],
                        silent: true
                    }
                }
            ],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'NC3 Sub-Cluster Composition Over Time (\u03c7\u00b2 p=0.061, n.s.)', fill: OI[0], fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 7: A8 Within-Archetype Heterogeneity (grouped bar) ──
    var chart7 = _fMkChart('chart-noc2b-7');
    if (chart7 && d.a8_heterogeneity) {
        var hArch = d.a8_heterogeneity.archetypes;
        var hNames = hArch.map(function(a) { return a.name; });
        var hIntra = hArch.map(function(a) { return a.intraCosine; });
        var hSil = hArch.map(function(a) { return a.silhouette; });
        var hColors = hArch.map(function(a) {
            return a.silhouette < 0.05 ? '#ef4444' : a.silhouette < 0.15 ? OI[0] : OI[2];
        });

        chart7.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var idx = params[0].dataIndex;
                    var a = hArch[idx];
                    return '<strong>' + a.name + '</strong> (n=' + a.n + ')' +
                        '<br/>Intra-cluster cosine: ' + a.intraCosine.toFixed(3) +
                        '<br/>Silhouette: ' + a.silhouette.toFixed(3) +
                        '<br/>Nearest: ' + a.nearest + ' (d=' + a.nearestDist.toFixed(3) + ')';
                }
            }),
            legend: { data: ['Intra-Cluster Cosine Distance', 'Silhouette Score'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 60, right: 60, top: 50, bottom: 80 },
            xAxis: {
                type: 'category',
                data: hNames,
                axisLabel: { color: '#94a3b8', fontSize: 9, rotate: 30, interval: 0 }
            },
            yAxis: [
                { type: 'value', name: 'Cosine Distance', min: 0, max: 0.7, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { lineStyle: { color: '#1e293b' } } },
                { type: 'value', name: 'Silhouette', min: -0.05, max: 0.5, nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' }, splitLine: { show: false } }
            ],
            series: [
                {
                    name: 'Intra-Cluster Cosine Distance',
                    type: 'bar',
                    data: hIntra,
                    itemStyle: { color: OI[1] },
                    barWidth: '30%'
                },
                {
                    name: 'Silhouette Score',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: hSil.map(function(v, i) { return { value: v, itemStyle: { color: hColors[i] } }; }),
                    barWidth: '30%'
                }
            ],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'Separation ratio = 0.358 — overlapping clusters; C2_5 silhouette \u2248 0', fill: '#ef4444', fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }

    // ── Chart 8: A9 Bootstrap Stability CIs (error bar) ──
    var chart8 = _fMkChart('chart-noc2b-8');
    if (chart8 && d.a9_bootstrap) {
        var bArch = d.a9_bootstrap.archetypes;
        var bNames = bArch.map(function(a) { return a.name; });
        var bJaccards = bArch.map(function(a) { return a.jaccard; });
        var bLo = bArch.map(function(a) { return a.ci[0]; });
        var bHi = bArch.map(function(a) { return a.ci[1]; });
        var bColors = bArch.map(function(a) {
            return a.jaccard < 0.6 ? '#ef4444' : a.jaccard < 0.7 ? OI[0] : OI[2];
        });

        chart8.setOption({
            tooltip: Object.assign(_fTooltip(), {
                trigger: 'axis',
                formatter: function(params) {
                    var idx = params[0].dataIndex;
                    var a = bArch[idx];
                    return '<strong>' + a.name + '</strong>' +
                        '<br/>Jaccard: ' + a.jaccard.toFixed(3) +
                        '<br/>95% CI: [' + a.ci[0].toFixed(3) + ', ' + a.ci[1].toFixed(3) + ']' +
                        '<br/>% Unstable: ' + a.pctUnstable + '%';
                }
            }),
            legend: { data: ['Jaccard (500-iter)', '95% CI'], bottom: 0, textStyle: { color: '#94a3b8', fontSize: 10 } },
            grid: { left: 60, right: 30, top: 50, bottom: 80 },
            xAxis: {
                type: 'category',
                data: bNames,
                axisLabel: { color: '#94a3b8', fontSize: 9, rotate: 30, interval: 0 }
            },
            yAxis: {
                type: 'value',
                name: 'Jaccard Index',
                min: 0,
                max: 1.0,
                nameTextStyle: { color: '#94a3b8' },
                axisLabel: { color: '#94a3b8' },
                splitLine: { lineStyle: { color: '#1e293b' } }
            },
            series: [
                {
                    name: 'Jaccard (500-iter)',
                    type: 'bar',
                    data: bJaccards.map(function(v, i) { return { value: v, itemStyle: { color: bColors[i] } }; }),
                    barWidth: '50%'
                },
                {
                    name: '95% CI',
                    type: 'custom',
                    renderItem: function(params, api) {
                        var xVal = api.value(0);
                        var lo = api.value(1);
                        var hi = api.value(2);
                        var coordHi = api.coord([xVal, hi]);
                        var coordLo = api.coord([xVal, lo]);
                        var halfWidth = 8;
                        return {
                            type: 'group',
                            children: [
                                { type: 'line', shape: { x1: coordHi[0], y1: coordHi[1], x2: coordLo[0], y2: coordLo[1] }, style: { stroke: '#f1f5f9', lineWidth: 2 } },
                                { type: 'line', shape: { x1: coordHi[0] - halfWidth, y1: coordHi[1], x2: coordHi[0] + halfWidth, y2: coordHi[1] }, style: { stroke: '#f1f5f9', lineWidth: 2 } },
                                { type: 'line', shape: { x1: coordLo[0] - halfWidth, y1: coordLo[1], x2: coordLo[0] + halfWidth, y2: coordLo[1] }, style: { stroke: '#f1f5f9', lineWidth: 2 } }
                            ]
                        };
                    },
                    encode: { x: 0, y: [1, 2] },
                    data: bArch.map(function(a, i) { return [i, a.ci[0], a.ci[1]]; }),
                    z: 10
                }
            ],
            graphic: [{
                type: 'text',
                left: 'center',
                top: 5,
                style: { text: 'C2_5 weakest (0.576) but defensible — 26.4% swing to Principle Framers', fill: '#ef4444', fontSize: 12, fontWeight: 'bold' }
            }]
        });
    }
}


/* ==================================================================
   EVIDENCE TABLE RENDERER
   ================================================================== */

function renderFindingTable(fid) {
    var container = document.getElementById('table-' + fid);
    if (!container) return;
    var d = FINDINGS_DATA[fid];
    if (!d) { container.innerHTML = ''; return; }

    // Build evidence summary from key data points per finding
    var rows = _buildEvidenceRows(fid, d);
    if (!rows || rows.length === 0) { container.innerHTML = ''; return; }

    var html = '<h3 style="font-size:14px;font-weight:600;color:var(--text-secondary);margin-bottom:12px;">Evidence Summary</h3>';
    html += '<table class="evidence-table"><thead><tr>';
    html += '<th>Metric</th><th>Value</th><th>Source</th><th>n</th>';
    html += '</tr></thead><tbody>';

    rows.forEach(function(r) {
        html += '<tr>';
        html += '<td>' + r.metric + '</td>';
        html += '<td class="highlight">' + r.value + '</td>';
        html += '<td>' + r.source + '</td>';
        html += '<td>' + (r.n !== null && r.n !== undefined ? r.n : '-') + '</td>';
        html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function _buildEvidenceRows(fid, d) {
    var rows = [];
    switch (fid) {
        case 'f1':
            var ra = d.binding_by_cluster && d.binding_by_cluster['Rights-Advocacy'];
            if (ra) {
                var raTotal = 0; for (var k in ra) { raTotal += ra[k]; }
                var raBind = ra.legally_binding || 0;
                var raSoft = ra.soft_law || 0;
                rows.push({ metric: 'Rights-Advocacy total statements', value: raTotal, source: 'binding_by_cluster', n: raTotal });
                rows.push({ metric: 'Rights-Advocacy legally binding', value: raBind + ' (' + (raTotal ? (raBind/raTotal*100).toFixed(1) : 0) + '%)', source: 'binding_by_cluster', n: raTotal });
                rows.push({ metric: 'Rights-Advocacy soft law', value: raSoft + ' (' + (raTotal ? (raSoft/raTotal*100).toFixed(1) : 0) + '%)', source: 'binding_by_cluster', n: raTotal });
            }
            if (d.rhetoric_by_cluster && d.rhetoric_by_cluster['Rights-Advocacy']) {
                rows.push({ metric: 'Rights-Advocacy rights-based rhetoric', value: d.rhetoric_by_cluster['Rights-Advocacy'].rights_based + '%', source: 'rhetoric_by_cluster', n: null });
            }
            break;

        case 'f2':
            if (d.binding_by_orgtype && d.binding_by_orgtype.industry) {
                var ind = d.binding_by_orgtype.industry;
                rows.push({ metric: 'Industry legally binding instruments', value: ind.legally_binding || 0, source: 'binding_by_orgtype', n: null });
                rows.push({ metric: 'Industry voluntary', value: ind.voluntary || 0, source: 'binding_by_orgtype', n: null });
            }
            if (d.chi_square) {
                rows.push({ metric: 'Chi-squared statistic', value: d.chi_square.chi2 || '-', source: 'Statistical test', n: d.chi_square.n || null });
                rows.push({ metric: 'Cramer\'s V', value: d.chi_square.cramers_v || '-', source: 'Statistical test', n: null });
            }
            break;

        case 'f3':
            if (d.debut_by_orgtype) {
                var debOts = ['indigenous', 'religious', 'government', 'industry'];
                debOts.forEach(function(ot) {
                    if (d.debut_by_orgtype[ot]) {
                        rows.push({ metric: _prettyLabel(ot) + ' first statement', value: d.debut_by_orgtype[ot], source: 'debut_by_orgtype', n: null });
                    }
                });
            }
            break;

        case 'f4':
            if (d.histogram) {
                var total = d.histogram.counts.reduce(function(s,v){return s+v;}, 0);
                rows.push({ metric: 'Statements scoring zero', value: d.histogram.counts[0] + ' (' + (d.histogram.counts[0]/total*100).toFixed(1) + '%)', source: 'histogram', n: total });
            }
            if (d.by_cluster && d.by_cluster['Sacred-Traditional']) {
                var st = d.by_cluster['Sacred-Traditional'];
                rows.push({ metric: 'Sacred-Traditional mean score', value: st.mean, source: 'by_cluster', n: st.n });
                rows.push({ metric: 'Sacred-Traditional % above 60', value: st.pct_above60 + '%', source: 'by_cluster', n: st.n });
            }
            break;

        case 'f5':
            if (d.concepts) {
                var belowTwo = d.concepts.filter(function(c) { return c.activation_pct < 2; }).length;
                var noOecd = d.concepts.filter(function(c) { return !c.oecd_visible; }).length;
                rows.push({ metric: 'Concepts appearing in < 2% of statements', value: belowTwo + ' of ' + d.concepts.length, source: 'concept activation', n: 2021 });
                rows.push({ metric: 'Concepts with no OECD/EU equivalent', value: noOecd + ' of ' + d.concepts.length, source: 'oecd_visible flag', n: d.concepts.length });
                rows.push({ metric: 'Most prevalent concept', value: _prettyLabel(d.concepts[0].name) + ' (' + d.concepts[0].activation_pct + '%)', source: 'concept activation', n: d.concepts[0].n_nonzero });
            }
            break;

        case 'f6':
            if (d.c2_by_period) {
                for (var p in d.c2_by_period) {
                    rows.push({ metric: 'Sacred-Traditional ' + p, value: d.c2_by_period[p].count + ' (' + d.c2_by_period[p].share_pct + '% of period)', source: 'c2_by_period', n: null });
                }
            }
            break;

        case 'f7':
            if (d.ablation) {
                d.ablation.forEach(function(a) {
                    rows.push({ metric: a.channels + ' silhouette (refit)', value: a.sil_refit.toFixed(3), source: 'ablation', n: a.cols + ' cols' });
                });
            }
            break;

        case 'f8':
            if (d.anova) {
                d.anova.forEach(function(a) {
                    rows.push({ metric: a.principle, value: 'eta^2=' + a.eta_sq + ', p=' + a.p_value, source: 'Kruskal-Wallis', n: 2021 });
                });
            }
            break;

        case 'f9':
            if (d.correlations) {
                d.correlations.forEach(function(c) {
                    rows.push({ metric: c.pair, value: 'r=' + c.r_either.toFixed(3), source: c.tradition, n: c.n_either });
                });
            }
            break;

        case 'f10':
            if (d.c4_enforcement) {
                var topEnf = Object.keys(d.c4_enforcement).sort(function(a,b) { return d.c4_enforcement[b]-d.c4_enforcement[a]; }).slice(0,5);
                topEnf.forEach(function(m) {
                    rows.push({ metric: _prettyLabel(m), value: 'C4: ' + d.c4_enforcement[m] + '% vs Global: ' + (d.global_enforcement[m] || 0) + '%', source: 'enforcement comparison', n: null });
                });
            }
            break;

        case 'noc2':
            if (d.metrics) {
                rows.push({ metric: 'Adjusted Rand Index (ARI)', value: d.metrics.ari, source: 'clustering comparison', n: 2021 });
                rows.push({ metric: 'Normalized Mutual Info (NMI)', value: d.metrics.nmi, source: 'clustering comparison', n: 2021 });
                rows.push({ metric: 'Canonical silhouette (k=6)', value: d.metrics.canonical_sil, source: 'k-means', n: 2021 });
                rows.push({ metric: 'NoC2 silhouette (k=6)', value: d.metrics.noc2_sil_k6, source: 'k-means (content only)', n: 2021 });
                rows.push({ metric: 'NoC2 silhouette (k=5, optimal)', value: d.metrics.noc2_sil_k5, source: 'k-means (content only)', n: 2021 });
                rows.push({ metric: 'NoC2 optimal k', value: d.metrics.optimal_k, source: 'silhouette argmax', n: 2021 });
            }
            if (d.fragmentation) {
                d.fragmentation.forEach(function(f) {
                    rows.push({
                        metric: f.name + ' fragmentation',
                        value: f.pct_in_dominant + '% in dominant NC' + f.dominant_nc + ' (' + f.status + ')',
                        source: 'cross-tabulation',
                        n: f.n
                    });
                });
            }
            break;

        case 'noc2b':
            if (d.a4_wc_noc2) {
                rows.push({ metric: 'A4: ARI (WC-norm vs raw NoC2)', value: d.a4_wc_noc2.ari_vs_noc2, source: 'WC residualization', n: 2021 });
                rows.push({ metric: 'A4: Mean |r| (WC vs content scores)', value: d.a4_wc_noc2.mean_abs_r, source: 'Pearson correlation', n: 2021 });
                rows.push({ metric: 'A4: All 5 NoC2 clusters survived?', value: 'YES (min Jaccard 0.948)', source: 'survival analysis', n: 2021 });
            }
            if (d.a5_c2only) {
                rows.push({ metric: 'A5: ARI (C2-only vs canonical)', value: d.a5_c2only.ari_vs_canonical, source: 'form-only clustering', n: 2021 });
                rows.push({ metric: 'A5: ARI (NoC2 vs canonical)', value: d.a5_c2only.noc2_ari, source: 'content-only clustering', n: 2021 });
                rows.push({ metric: 'A5: Cramer\'s V (form \u00d7 content)', value: d.a5_c2only.cramers_v, source: 'chi-squared independence', n: 2021 });
                rows.push({ metric: 'A5: C2-only optimal k', value: d.a5_c2only.optimal_k, source: 'silhouette argmax', n: 2021 });
            }
            if (d.a6_nc3decomp) {
                rows.push({ metric: 'A6: NC3 optimal sub-k', value: d.a6_nc3decomp.optimal_k, source: 'silhouette on n=732 subset', n: 732 });
                rows.push({ metric: 'A6: NC3 sub-silhouette', value: d.a6_nc3decomp.silhouette, source: 'k-means on NC3', n: 732 });
                rows.push({ metric: 'A6: Family recovery', value: d.a6_nc3decomp.recovery, source: 'cross-tabulation', n: 732 });
                rows.push({ metric: 'A6: Bootstrap stability', value: d.a6_nc3decomp.bootstrap_jaccard, source: '100 bootstraps', n: 732 });
            }
            if (d.a7_temporal) {
                rows.push({ metric: 'A7: Chi-squared (temporal)', value: d.a7_temporal.chi2 + ' (p=' + d.a7_temporal.chi2_p.toExponential(1) + ')', source: 'chi2_contingency', n: 2021 });
                rows.push({ metric: 'A7: NC3 % pre-2019', value: d.a7_temporal.nc3_pct[0] + '%', source: 'temporal binning', n: d.a7_temporal.bin_n[0] });
                rows.push({ metric: 'A7: NC3 % 2024+', value: d.a7_temporal.nc3_pct[3] + '%', source: 'temporal binning', n: d.a7_temporal.bin_n[3] });
            }
            if (d.archetypes) {
                rows.push({ metric: 'A5b: C2-only archetypes', value: d.archetypes.length + ' archetypes at k=9', source: 'C2-only k-means', n: 2021 });
                rows.push({ metric: 'A5b: Sacred Authorities purity', value: '98.3% Moral Philosophers', source: 'archetype profiling', n: 115 });
                rows.push({ metric: 'A5b: Largest archetype', value: 'National Strategists (n=369)', source: 'archetype profiling', n: 369 });
            }
            if (d.nc3Temporal) {
                rows.push({ metric: 'A6/A7: SC1 share chi-squared', value: d.nc3Temporal.chi2 + ' (p=' + d.nc3Temporal.pValue + ', n.s.)', source: 'chi2 on NC3 sub-clusters', n: 732 });
                rows.push({ metric: 'A6/A7: SC1 overall share', value: d.nc3Temporal.overallSc1Pct + '%', source: 'NC3 temporal decomposition', n: 732 });
                rows.push({ metric: 'A6/A7: SC1 share range', value: d.nc3Temporal.sc1SharePct[3] + '% - ' + d.nc3Temporal.sc1SharePct[1] + '%', source: 'across 4 time bins', n: 732 });
            }
            break;
    }
    return rows;
}


/* ==================================================================
   EXPERT ARGUMENT RENDERER
   ================================================================== */

function renderFindingArguments(fid) {
    var container = document.getElementById('argument-' + fid);
    if (!container) return;
    if (typeof FINDINGS_TEXTS === 'undefined') { container.innerHTML = ''; return; }

    var t = FINDINGS_TEXTS[fid];
    if (!t) { container.innerHTML = ''; return; }

    var html = '';

    // Claim
    if (t.claim) {
        html += '<h4 class="argument-heading claim-heading">Central Claim</h4>';
        html += '<p class="argument-text">' + t.claim + '</p>';
    }

    // Evidence
    if (t.evidence && t.evidence.length) {
        html += '<h4 class="argument-heading evidence-heading">Expert Evidence</h4>';
        t.evidence.forEach(function(e) {
            html += '<div style="margin-bottom:12px;">';
            html += '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--cyan);margin-bottom:4px;">' + e.expert + '</div>';
            html += '<p class="argument-text">' + e.text + '</p>';
            html += '</div>';
        });
    }

    // Caveats
    if (t.caveats && t.caveats.length) {
        html += '<h4 class="argument-heading caveats-heading">Caveats &amp; Limitations</h4>';
        t.caveats.forEach(function(c) {
            html += '<div style="margin-bottom:12px;">';
            html += '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--warning);margin-bottom:4px;">' + c.expert + '</div>';
            html += '<p class="argument-text">' + c.text + '</p>';
            html += '</div>';
        });
    }

    // Significance
    if (t.significance && t.significance.length) {
        html += '<h4 class="argument-heading significance-heading">Significance</h4>';
        t.significance.forEach(function(s) {
            html += '<div style="margin-bottom:12px;">';
            html += '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--cyan);margin-bottom:4px;">' + s.expert + '</div>';
            html += '<p class="argument-text">' + s.text + '</p>';
            html += '</div>';
        });
    }

    container.innerHTML = html;
}


/* ==================================================================
   LITERATURE CONTEXT RENDERER
   Reads from FINDINGS_LIT (findings_literature.js) and renders
   into .literature-section elements in each finding pane.
   ================================================================== */

function renderFindingLiterature(fid) {
    var el = document.getElementById('literature-' + fid);
    if (!el || typeof FINDINGS_LIT === 'undefined' || !FINDINGS_LIT[fid]) {
        if (el) el.innerHTML = '<em>Literature context not yet available.</em>';
        return;
    }
    var lit = FINDINGS_LIT[fid];
    var html = '<h3 class="literature-heading">Where This Finding Sits in the Literature</h3>';

    // Render vault subsection
    if (lit.vault) {
        html += '<div class="literature-subsection">';
        html += '<div class="literature-subsection-heading vault">From the Tapestry Background Library</div>';
        html += '<div class="literature-narrative">' + lit.vault.narrative + '</div>';
        html += renderCitationTable(lit.vault.citations, false);
        html += renderQuotes(lit.vault.citations);
        html += '</div>';
    }

    // Render web subsection
    if (lit.web) {
        html += '<div class="literature-subsection">';
        html += '<div class="literature-subsection-heading web">Broader Scholarly Context — Peer-Reviewed & Official Sources</div>';
        html += '<div class="literature-narrative">' + lit.web.narrative + '</div>';
        html += renderCitationTable(lit.web.citations, true);
        html += renderQuotes(lit.web.citations);
        html += '</div>';
    }

    // Fallback for old single-narrative format
    if (!lit.vault && !lit.web && lit.narrative) {
        html += '<div class="literature-narrative">' + lit.narrative + '</div>';
        if (lit.citations) {
            html += renderCitationTable(lit.citations, false);
            html += renderQuotes(lit.citations);
        }
    }

    el.innerHTML = html;
}

function renderCitationTable(citations, showLinks) {
    if (!citations || !citations.length) return '';
    var html = '<table class="citation-table"><thead><tr>';
    html += '<th>Author</th><th>Year</th><th>Title</th><th>Relationship</th><th>Relevance</th>';
    if (showLinks) html += '<th>Source</th>';
    html += '</tr></thead><tbody>';

    citations.forEach(function(c) {
        var relClass = 'rel-' + (c.relationship || 'complements');
        html += '<tr>';
        html += '<td><strong>' + (c.author || '') + '</strong></td>';
        html += '<td>' + (c.year || '') + '</td>';
        html += '<td>' + (c.title || '') + '</td>';
        html += '<td><span class="citation-relationship ' + relClass + '">' + (c.relationship || '') + '</span></td>';
        html += '<td>' + (c.relevance || '') + '</td>';
        if (showLinks) {
            var link = '';
            if (c.doi) link = '<span class="citation-doi">DOI: ' + c.doi + '</span>';
            if (c.url) link += (link ? '<br>' : '') + '<a class="citation-link" href="' + c.url + '" target="_blank">Link ↗</a>';
            html += '<td>' + link + '</td>';
        }
        html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
}

function renderQuotes(citations) {
    if (!citations) return '';
    var quotes = citations.filter(function(c) { return c.quote && c.quote.length > 0; });
    if (quotes.length === 0) return '';
    var html = '';
    quotes.forEach(function(q) {
        html += '<div class="literature-quote">"' + q.quote + '"';
        html += '<span class="quote-source">— ' + q.author + ' (' + q.year + ')</span></div>';
    });
    return html;
}
