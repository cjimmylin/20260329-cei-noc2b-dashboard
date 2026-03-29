/* ============================================================
   Tapestry Census Explorer — App Controller (Response 1-BG)
   Tab switching, filters, theme toggle, explorer search,
   how-to-read toggle (P19)
   Literature-contextualized version
   ============================================================ */

var activeTab = 'overview';
var _tabInited = {};
if (!window._charts) window._charts = [];

// ---- Filter State ----
var currentFilters = { orgType: 'all', region: 'all', yearBand: 'all', binding: 'all' };

// Tabs that show the filter bar
var FILTERABLE_TABS = { institutional: 1, temporal: 1, crosslayer: 1, gaps: 1, profiles: 1 };

// ---- Chart Registry ----
function disposeAllCharts() {
    (window._charts || []).forEach(function (c) {
        try { c.dispose(); } catch (e) { /* ignore */ }
    });
    window._charts = [];
}

function resizeCharts() {
    (window._charts || []).forEach(function (c) {
        try { c.resize(); } catch (e) { /* ignore */ }
    });
}

// ---- Tab Switching ----
function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });

    var pane = document.getElementById('pane-' + tabId);
    var btn = document.querySelector('[data-tab="' + tabId + '"]');
    if (pane) pane.classList.add('active');
    if (btn) btn.classList.add('active');

    activeTab = tabId;

    // Show/hide filter bar
    var filterBar = document.getElementById('filter-bar');
    if (filterBar) {
        if (FILTERABLE_TABS[tabId]) {
            filterBar.classList.add('visible');
        } else {
            filterBar.classList.remove('visible');
        }
    }

    if (!_tabInited[tabId]) {
        _tabInited[tabId] = true;
        initTab(tabId);
    }

    setTimeout(resizeCharts, 50);
}

function renderTabGuide(tab) {
    var el = document.getElementById('guide-' + tab);
    if (!el || typeof TAB_GUIDES === 'undefined') return;
    var g = TAB_GUIDES[tab];
    if (!g || el.innerHTML) return; // only render once
    el.classList.add('guide-collapsed');
    var html = '<div class="guide-toggle" onclick="this.parentElement.classList.toggle(\'guide-collapsed\')">';
    html += '<h3>' + g.title + ' <span class="guide-arrow">\u25BC</span></h3></div>';
    html += '<div class="guide-content">';
    html += '<p class="guide-intro">' + g.intro + '</p>';
    if (g.methodology) {
        html += '<h4>How This Data Was Generated</h4>';
        html += '<p>' + g.methodology + '</p>';
    }
    if (g.charts && g.charts.length) {
        html += '<h4>What the Charts Show</h4><ul>';
        g.charts.forEach(function(c) { html += '<li>' + c + '</li>'; });
        html += '</ul>';
    }
    if (g.takeaways && g.takeaways.length) {
        html += '<h4>Key Takeaways</h4><ul>';
        g.takeaways.forEach(function(t) { html += '<li>' + t + '</li>'; });
        html += '</ul>';
    }
    html += '</div>';
    el.innerHTML = html;
}

function initTab(tab) {
    renderTabGuide(tab);
    switch (tab) {
        case 'overview':
            renderLayerCoverage();
            renderGrowthArea();
            renderOrgTreemap();
            renderRegionBar();
            renderHeadlineFindings();
            renderNarrative('overview');
            break;
        case 'institutional':
            renderOrgRegionHeatmap();
            renderOrgBindingBar();
            renderTopCountries();
            renderGeoScope();
            renderStmtTypes();
            renderTabFindings('institutional');
            renderNarrative('institutional');
            break;
        case 'temporal':
            renderTemporalArea();
            renderCumulativeCurve();
            renderBindingTime();
            renderOrgYearband();
            renderLangDiversity();
            renderTabFindings('temporal');
            renderNarrative('temporal');
            break;
        case 'crosslayer':
            renderLayerOverlap();
            renderCoverageOrgType();
            renderCoverageRegion();
            renderNarrative('crosslayer');
            break;
        case 'gaps':
            renderCoverageHeatmap();
            renderThinStmts();
            renderBindingGaps();
            renderYearGaps();
            renderTabFindings('gaps');
            renderNarrative('gaps');
            break;
        case 'profiles':
            renderBindingProfile();
            renderGeoScopeProfile();
            renderStmtTypeProfile();
            renderTabFindings('profiles');
            renderNarrative('profiles');
            break;
        case 'findings':
            initFindingsSubtabs();
            switchFindingSubtab('f1');
            break;
        case 'explorer':
            renderExplorerTable();
            populateExplorerFilters();
            break;
    }
}

// ---- Findings Deep Dive Subtab Switching ----
var _findingInited = {};

function initFindingsSubtabs() {
    document.querySelectorAll('.findings-subtab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            switchFindingSubtab(this.getAttribute('data-finding'));
        });
    });
}

function switchFindingSubtab(fid) {
    document.querySelectorAll('.finding-pane').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.findings-subtab-btn').forEach(function(b) { b.classList.remove('active'); });

    var pane = document.getElementById('finding-' + fid);
    var btn = document.querySelector('[data-finding="' + fid + '"]');
    if (pane) pane.classList.add('active');
    if (btn) btn.classList.add('active');

    if (!_findingInited[fid]) {
        _findingInited[fid] = true;
        initFindingTab(fid);
    }
    setTimeout(resizeCharts, 50);
}

function initFindingTab(fid) {
    // Render charts (from findings_charts.js)
    if (typeof renderFindingCharts === 'function') renderFindingCharts(fid);
    // Render evidence table
    if (typeof renderFindingTable === 'function') renderFindingTable(fid);
    // Render literature context (from findings_charts.js / findings_literature.js)
    if (typeof renderFindingLiterature === 'function') renderFindingLiterature(fid);
    // Render expert arguments
    if (typeof renderFindingArguments === 'function') renderFindingArguments(fid);
}

// ---- Filter Bar ----
function populateFilterDropdowns() {
    if (typeof CENSUS === 'undefined') return;
    var filters = CENSUS.filters || {};

    var orgSel = document.getElementById('filter-orgtype');
    var regSel = document.getElementById('filter-region');
    var ybSel = document.getElementById('filter-yearband');
    var bindSel = document.getElementById('filter-binding');

    function fillSelect(sel, values) {
        if (!sel || !values) return;
        // Keep the "All" option, add the rest
        values.forEach(function (v) {
            var opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v.replace(/_/g, ' ');
            sel.appendChild(opt);
        });
    }

    fillSelect(orgSel, filters.orgTypes || []);
    fillSelect(regSel, filters.regions || []);
    fillSelect(ybSel, filters.yearBands || []);
    fillSelect(bindSel, filters.bindingNatures || []);
}

function onFilterChange() {
    var orgSel = document.getElementById('filter-orgtype');
    var regSel = document.getElementById('filter-region');
    var ybSel = document.getElementById('filter-yearband');
    var bindSel = document.getElementById('filter-binding');

    currentFilters.orgType = orgSel ? orgSel.value : 'all';
    currentFilters.region = regSel ? regSel.value : 'all';
    currentFilters.yearBand = ybSel ? ybSel.value : 'all';
    currentFilters.binding = bindSel ? bindSel.value : 'all';

    // Re-init current tab with new filters
    _tabInited[activeTab] = false;
    _tabInited[activeTab] = true;
    initTab(activeTab);
}

function resetFilters() {
    var orgSel = document.getElementById('filter-orgtype');
    var regSel = document.getElementById('filter-region');
    var ybSel = document.getElementById('filter-yearband');
    var bindSel = document.getElementById('filter-binding');

    if (orgSel) orgSel.value = 'all';
    if (regSel) regSel.value = 'all';
    if (ybSel) ybSel.value = 'all';
    if (bindSel) bindSel.value = 'all';

    currentFilters = { orgType: 'all', region: 'all', yearBand: 'all', binding: 'all' };
    onFilterChange();
}

// ---- Explorer Search + Filters ----
function filterExplorerTable() {
    var tbody = document.getElementById('explorer-tbody');
    if (!tbody) return;
    var rows = tbody.querySelectorAll('tr');

    var q = (document.getElementById('explorer-search').value || '').toLowerCase().trim();
    var fOt = (document.getElementById('exp-filter-orgtype') || {}).value || '';
    var fR = (document.getElementById('exp-filter-region') || {}).value || '';
    var fY = (document.getElementById('exp-filter-year') || {}).value || '';
    var fBn = (document.getElementById('exp-filter-binding') || {}).value || '';
    var fSt = (document.getElementById('exp-filter-stmttype') || {}).value || '';
    var fDst = (document.getElementById('exp-filter-srctype') || {}).value || '';
    var fExt = (document.getElementById('exp-filter-extract') || {}).value || '';
    var fWc = (document.getElementById('exp-filter-wordcount') || {}).value || '';
    var fFam = (document.getElementById('exp-filter-family') || {}).value || '';
    var fNc = (document.getElementById('exp-filter-noc2') || {}).value || '';
    var visible = 0;

    rows.forEach(function (row) {
        var show = true;
        if (q) {
            var text = row.textContent.toLowerCase();
            if (text.indexOf(q) === -1) show = false;
        }
        if (show && fOt && row.getAttribute('data-ot') !== fOt) show = false;
        if (show && fR && row.getAttribute('data-r') !== fR) show = false;
        if (show && fY && row.getAttribute('data-y') !== fY) show = false;
        if (show && fBn && row.getAttribute('data-bn') !== fBn) show = false;
        if (show && fSt && row.getAttribute('data-st') !== fSt) show = false;
        if (show && fDst && row.getAttribute('data-dst') !== fDst) show = false;
        if (show && fExt && row.getAttribute('data-ext') !== fExt) show = false;
        if (show && fFam && row.getAttribute('data-fam') !== fFam) show = false;
        if (show && fNc && row.getAttribute('data-nc') !== fNc) show = false;
        if (show && fWc) {
            var wc = parseInt(row.getAttribute('data-wc') || '0', 10);
            if (fWc === 'lte500' && wc > 500) show = false;
            else if (fWc === '500-1000' && (wc <= 500 || wc > 1000)) show = false;
            else if (fWc === '1000-1500' && (wc <= 1000 || wc > 1500)) show = false;
            else if (fWc === '1500-2000' && (wc <= 1500 || wc > 2000)) show = false;
            else if (fWc === 'gt2000' && wc <= 2000) show = false;
        }

        if (show) {
            row.classList.remove('hidden');
            visible++;
        } else {
            row.classList.add('hidden');
        }
    });

    var countEl = document.getElementById('explorer-count');
    if (countEl) {
        countEl.textContent = visible + ' of ' + rows.length + ' statements';
    }
}

function populateExplorerFilters() {
    var stmts = (typeof CENSUS !== 'undefined' && CENSUS.explorer) ? CENSUS.explorer.statements : [];
    if (!stmts || !stmts.length) return;

    var orgTypes = {}, regions = {}, years = {}, bindings = {};
    var stmtTypes = {}, srcTypes = {}, families = {}, noc2Clusters = {};
    stmts.forEach(function(s) {
        if (s.orgType) orgTypes[s.orgType] = true;
        if (s.region) regions[s.region] = true;
        if (s.year) years[s.year] = true;
        if (s.binding) bindings[s.binding] = true;
        // Get statement_type, doc_source_type, family, noc2 from STMT_DETAILS
        if (typeof STMT_DETAILS !== 'undefined' && s.key && STMT_DETAILS[s.key]) {
            var sd = STMT_DETAILS[s.key];
            if (sd.st) stmtTypes[sd.st] = true;
            if (sd.dst) srcTypes[sd.dst] = true;
            if (sd.fam) families[sd.fam] = true;
            if (sd.nc) noc2Clusters[sd.nc] = true;
        }
    });

    function fill(id, vals, pretty) {
        var sel = document.getElementById(id);
        if (!sel) return;
        Object.keys(vals).sort().forEach(function(v) {
            var opt = document.createElement('option');
            opt.value = v;
            opt.textContent = pretty ? String(v).replace(/_/g, ' ') : v;
            sel.appendChild(opt);
        });
    }

    fill('exp-filter-orgtype', orgTypes, true);
    fill('exp-filter-region', regions, false);
    fill('exp-filter-year', years, false);
    fill('exp-filter-binding', bindings, true);
    fill('exp-filter-stmttype', stmtTypes, true);
    fill('exp-filter-srctype', srcTypes, true);
    fill('exp-filter-family', families, false);
    fill('exp-filter-noc2', noc2Clusters, false);
}

// ---- Theme Toggle ----
function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? null : 'light';
    if (next) {
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('census-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('census-theme');
    }

    // Re-render: dispose all charts, clear init state, re-init active tab
    disposeAllCharts();
    _tabInited = {};
    initTab(activeTab);

    setTimeout(resizeCharts, 100);
}

// ---- P19: How to Read Toggle ----
function toggleHowToRead() {
    var el = document.getElementById('how-to-read');
    if (el) {
        el.classList.toggle('collapsed');
    }
}

// ---- Resize Handler ----
var _resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(resizeCharts, 150);
});

// ---- Init on Load ----
document.addEventListener('DOMContentLoaded', function () {
    // Restore theme
    if (localStorage.getItem('census-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Populate filter dropdowns from data
    populateFilterDropdowns();

    // Wire tab buttons
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            switchTab(this.dataset.tab);
        });
    });

    // Wire filter controls
    document.querySelectorAll('.filter-select').forEach(function (sel) {
        sel.addEventListener('change', onFilterChange);
    });

    var resetBtn = document.getElementById('filter-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }

    // Wire explorer search + filters
    var searchInput = document.getElementById('explorer-search');
    if (searchInput) {
        searchInput.addEventListener('input', filterExplorerTable);
    }
    ['exp-filter-orgtype', 'exp-filter-region', 'exp-filter-year', 'exp-filter-binding', 'exp-filter-stmttype', 'exp-filter-srctype', 'exp-filter-extract', 'exp-filter-wordcount', 'exp-filter-family', 'exp-filter-noc2'].forEach(function(id) {
        var sel = document.getElementById(id);
        if (sel) sel.addEventListener('change', filterExplorerTable);
    });

    // Wire theme toggle
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Wire how-to-read toggle (P19)
    var howToReadToggle = document.getElementById('how-to-read-toggle');
    if (howToReadToggle) {
        howToReadToggle.addEventListener('click', toggleHowToRead);
    }

    // Init first tab
    switchTab('overview');
});
