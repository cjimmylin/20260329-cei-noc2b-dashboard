// Census Dashboard — Expert Commentary & Major Findings (Response 1)
// Addresses: P1 (no named experts), P3 (hedged language), P8 (discipline labels only),
//            P13 (reframed 12% vs 75%), P17 (confidence tiers), P18 (C1 as residual)
// Source: 20260328-corpus-census-report.md (Tapestry Corpus Census Report)

const TAB_GUIDES = {

  overview: {
    title: "About This Tab: Census Overview",
    intro: "This tab provides a high-level portrait of the Tapestry database \u2014 3,044 AI governance statements from 3,460+ organizations across 107+ countries and 25+ languages (1998\u20132026). It answers four questions: how complete is the scoring coverage, how fast has governance output grown, which sectors produce the most statements, and where in the world does AI governance come from.",
    methodology: "Statements were collected via 12 discovery campaigns in 2026, including targeted searches, external database ingestion (AlgorithmWatch, OECD, LAIP, WAIE), and expert-guided gap-filling. Each statement was scored on up to three layers: the Governance Genome (226 dimensions, keyword + LLM hybrid scoring, 2,021 statements), the Ontology (82 concept axes, embedding-based, 1,611 statements), and the Unified Taxonomy (397 nodes, multi-level scoring, 2,694 statements).",
    charts: [
      "<strong>Scoring Coverage</strong> (horizontal bar) \u2014 Shows how many statements have each combination of scoring layers. Two-thirds (2,021) have all three layers, enabling robust cross-layer analysis.",
      "<strong>Growth Over Time</strong> (stacked area) \u2014 Annual AI governance output by institutional sector. The dramatic acceleration after 2017 reflects both genuine policy proliferation and the post-ChatGPT regulatory surge.",
      "<strong>Sector Distribution</strong> (treemap) \u2014 Proportional representation of each org type. Governments dominate (~33%), but 10 other sectors \u2014 including religious bodies, professional associations, and indigenous organizations \u2014 contribute meaningfully.",
      "<strong>Regional Distribution</strong> (horizontal bar) \u2014 Geographic concentration of governance production. Europe and North America account for ~55% of all statements, reflecting both real concentration and collection bias toward English-language sources."
    ],
    takeaways: [
      "Two-thirds of statements are fully scored across all three analytical layers",
      "AI governance output grew exponentially after 2017, with 64% of all statements from 2023\u20132026",
      "Governments dominate but are not alone \u2014 10 other institutional sectors produce AI governance",
      "The corpus over-represents Europe and North America (~55%); Africa, Latin America, and Middle East are underrepresented"
    ]
  },

  findings: {
    title: "About This Tab: Findings Deep Dive",
    intro: "This tab presents ten headline findings from the corpus census, plus two supplementary analyses (NoC2 and NoC2b) examining the form-vs-content decomposition. Each finding is tagged with a confidence level: HIGH (large sample, strong effect), MODERATE (solid evidence with known limitations), or INTERPRET WITH CAUTION (small sample or potential artifacts).",
    methodology: "Findings were derived from cross-tabulation of governance genome scores, binding nature, organization type, temporal metadata, and geographic scope. Statistical tests include chi-squared tests for independence, ANOVA for cross-sector variance, Cram\u00e9r\u2019s V for effect sizes, and Pearson correlations for concept co-occurrence. Each finding includes evidence tables, expert perspectives from multiple disciplinary lenses, methodological caveats, and academic literature context (both from the Tapestry vault and from broader scholarship).",
    charts: [],
    takeaways: [
      "Click any subtab (F1\u2013F10) to see the detailed evidence, expert commentary, and literature for each finding",
      "The NoC2 subtab explores what happens when institutional form is removed from the analysis \u2014 policy families largely dissolve",
      "The NoC2b subtab presents four robustness tests confirming the form-vs-content decomposition",
      "Confidence badges help calibrate how much weight to place on each finding"
    ]
  },

  institutional: {
    title: "About This Tab: Institutional Landscape",
    intro: "This tab examines how AI governance production varies across 11 institutional sectors (government, industry, religious, professional, academic, civil society, intergovernmental, indigenous, labor, multistakeholder, national ethics body) and 7 world regions. It reveals dramatic differences in who produces governance, what legal force it carries, which countries dominate, and what instruments are preferred.",
    methodology: "Data comes from the statement YAML metadata fields: org_type, region, binding_nature, issuing_country, geographic_scope, and statement_type. Cross-tabulations and grouped comparisons are computed from all 3,044 statements. The binding nature classification uses a controlled vocabulary of 5 categories (legally_binding, soft_law, advisory, voluntary, aspirational). Country assignments use the issuing_country ISO code.",
    charts: [
      "<strong>Org Type \u00d7 Region Heatmap</strong> \u2014 Shows which sectors are active in which regions. Darker cells = more statements. Reveals geographic concentration patterns (e.g., government governance clusters in Europe).",
      "<strong>Binding Nature by Sector</strong> (grouped bar) \u2014 Shows the legal force of governance by sector. The key finding: industry produces zero legally binding AI governance, while government produces the vast majority.",
      "<strong>Top Countries</strong> (horizontal bar) \u2014 Ranks countries by statement count. The US and UK together produce ~30% of all statements.",
      "<strong>Geographic Scope</strong> (donut) \u2014 Shows whether statements target national, regional, global, institutional, or subnational scope. Most governance is nationally scoped.",
      "<strong>Statement Types</strong> (bar) \u2014 Distribution of governance instruments: guidelines, frameworks, legislation, recommendations, etc."
    ],
    takeaways: [
      "Industry governance is 0% legally binding and 79.5% voluntary/aspirational",
      "Professional bodies operate a parallel governance system via licensure and peer accountability (39.7% use professional sanctions)",
      "The US and UK together produce ~30% of all governance statements",
      "75% of religious organizations searched had no qualifying AI governance statement"
    ]
  },

  temporal: {
    title: "About This Tab: Temporal Evolution",
    intro: "This tab tracks how the AI governance landscape has evolved from 1998 to 2026. It reveals four distinct governance eras, shows when different sectors entered the governance space, tracks whether advisory or binding instruments have gained ground over time, and measures language diversity alongside volume growth.",
    methodology: "Year is extracted from each statement\u2019s YAML metadata (date_issued or year field). Cumulative growth is computed annually. Binding nature distribution is tracked as a 100% stacked area to show proportional shifts. Language diversity counts unique languages per year. Milestone markers on the cumulative curve are manually placed for key events (EU AI Act, ChatGPT launch, OECD Principles, etc.).",
    charts: [
      "<strong>Annual Output by Sector</strong> (stacked area) \u2014 Shows which sectors are driving growth in each period. Government and civil society drive the 2023\u20132025 surge.",
      "<strong>Cumulative Growth Curve</strong> (line with milestones) \u2014 The corpus grew from ~100 to 3,000 statements in 8 years, with milestone markers for key governance events.",
      "<strong>Binding Nature Over Time</strong> (100% stacked area) \u2014 Shows the proportion of advisory, voluntary, soft law, and legally binding instruments each year. Advisory governance has dominated every year since 2017.",
      "<strong>Sector Emergence</strong> (heatmap) \u2014 Shows when each sector entered the governance space. Religious and professional governance emerged primarily after 2022.",
      "<strong>Language Diversity</strong> (line) \u2014 Tracks unique languages per year against statement volume. Language diversity lags far behind volume growth \u2014 governance remains heavily English."
    ],
    takeaways: [
      "Four governance eras: Nascent (pre-2017) \u2192 Explosion (2017\u20132019) \u2192 Regulatory Turn (2020\u20132022) \u2192 Maturation (2023\u20132026)",
      "Religious and professional governance emerged primarily after 2022",
      "Advisory instruments dominate every single year \u2014 the enforcement gap is structural, not temporary",
      "Language diversity lags behind volume: governance is ~85% English despite global rhetoric"
    ]
  },

  crosslayer: {
    title: "About This Tab: Cross-Layer Synthesis",
    intro: "This tab shows how the three analytical scoring layers \u2014 the Governance Genome (institutional form + content), the Ontology (concept space), and the Unified Taxonomy (hierarchical classification) \u2014 overlap across the corpus. It identifies where coverage is strong and where gaps exist by sector and region.",
    methodology: "Each statement has three boolean flags: hasGn (genome scored), hasOnt (ontology scored), hasTax (taxonomy scored). Coverage percentages are computed per org type and per region. The Governance Genome covers 2,021 of 3,044 statements (those with sufficient text extracts); the Ontology covers 1,611 (quality-gated subset); the Taxonomy covers 2,694.",
    charts: [
      "<strong>Layer Overlap</strong> (horizontal bar) \u2014 Shows the 8 possible coverage combinations. 2,021 statements have all three layers, enabling the richest cross-layer analysis.",
      "<strong>Coverage by Org Type</strong> (grouped bar) \u2014 Shows genome, ontology, and taxonomy coverage rates for each sector. Genome coverage varies most (due to later acquisition timing).",
      "<strong>Coverage by Region</strong> (grouped bar) \u2014 Shows coverage rates by world region. Ontology and taxonomy are near-complete everywhere; genome coverage is more uneven."
    ],
    takeaways: [
      "2,021 statements (66%) have all three scoring layers \u2014 the core analytical dataset",
      "Genome coverage varies by sector because genome scoring requires text extracts, which were acquired in later collection waves",
      "Ontology and taxonomy coverage are near-universal (>85%) across all regions and sectors"
    ]
  },

  gaps: {
    title: "About This Tab: Gap Analysis",
    intro: "This tab is a self-critique: it identifies where the Tapestry corpus has blind spots that limit the strength of claims. Gaps are geographic (which regions are underrepresented), sectoral (which org types produce thin content), enforcement-related (which combinations lack binding instruments), and temporal (where pre-2017 data is too sparse for historical claims).",
    methodology: "Sparse cells are identified in org_type \u00d7 region cross-tabulations. \u2018Thin\u2019 statements are flagged by low word count (body_word_count < 500 words). Binding gaps are computed per sector-region combination (cells with zero legally_binding instruments). Year gaps show annual statement counts to reveal where temporal claims rest on thin evidence.",
    charts: [
      "<strong>Coverage Heatmap</strong> (org type \u00d7 region) \u2014 Red cells indicate sparse or missing coverage. Africa, Latin America, and the Middle East have significant gaps in multiple sectors.",
      "<strong>Thin Statements</strong> (horizontal bar) \u2014 Shows which sectors produce disproportionately short, potentially less substantive statements.",
      "<strong>Binding Gaps</strong> (heatmap) \u2014 Shows which sector-region combinations have zero legally binding governance instruments. Most combinations lack any binding force.",
      "<strong>Year Gaps</strong> (bar) \u2014 Annual statement counts reveal that pre-2017 coverage is too sparse (<20 statements/year) for robust temporal claims."
    ],
    takeaways: [
      "Africa, Latin America, and Middle East are significantly underrepresented in the corpus",
      "Intergovernmental and industry statements are disproportionately thin (low word count)",
      "Most sector \u00d7 region combinations lack any legally binding AI governance instruments",
      "Pre-2017 data is too sparse to support strong historical claims \u2014 interpret early-era findings with caution"
    ]
  },

  profiles: {
    title: "About This Tab: Policy Family Profiles",
    intro: "This tab shows how the six governance families \u2014 Innovation Champions, Early Signals, Moral Philosophers, Watchdogs, Guilds, and Rulebook Writers \u2014 differ in their binding nature, geographic scope, and preferred governance instruments. These families were discovered via unsupervised clustering on the 347-dimension Governance Genome.",
    methodology: "Family assignments come from KMeans clustering (k=6) with cosine distance on the 2,021 genome-scored statements. The 347 dimensions span three channels: C1 (125 content scores), C2 (123 institutional form features), and C3 (45 semantic anchor embeddings). Profiles are computed as cross-tabulations of cluster membership against binding nature, geographic scope, and statement type. The six family names are interpretive labels assigned based on distinguishing content signatures.",
    charts: [
      "<strong>Binding Profile</strong> (100% stacked bar) \u2014 Shows the binding nature distribution for each org type. Only government produces significant legally binding governance; all other sectors are predominantly advisory or voluntary.",
      "<strong>Geographic Scope Profile</strong> (100% stacked bar) \u2014 Shows the target scope (national, regional, global, institutional) for each org type. Religious and indigenous governance is primarily institutional-scope, not national.",
      "<strong>Instrument Type Heatmap</strong> (org type \u00d7 statement type) \u2014 Shows which governance instruments each sector prefers. Government favors legislation; industry favors guidelines; professional bodies favor codes of conduct."
    ],
    takeaways: [
      "Only government produces significant legally binding AI governance \u2014 all other sectors rely on soft instruments",
      "Religious and indigenous governance targets institutional scope, not national policy",
      "Each sector has distinct instrument preferences: government=legislation, industry=guidelines, professional=codes of conduct",
      "The six families are statistical groupings, not definitive categories \u2014 some statements sit between families"
    ]
  },

  explorer: {
    title: "About This Tab: Statement Explorer",
    intro: "This tab lets you browse, filter, and inspect all 3,044 statements individually. Use the search bar to find statements by key or title, and the dropdown filters to narrow by organization type, region, year, binding nature, statement type, source type, extract availability, and word count. Click any row to open a detail popup showing the full metadata, abstract, LLM summary, and Governance Genome scores.",
    methodology: "Data is sourced from each statement\u2019s YAML frontmatter (38 metadata fields) and the Governance Genome coding batches (26 C2 institutional context fields). Cluster assignments (canonical k=6 family and NoC2 k=5 content cluster) are shown as color-coded badges in the popup header. The 2,021 genome-scored statements have full C2 context data; the remaining 1,023 show metadata only.",
    charts: [],
    takeaways: [
      "Use the 8 filter dropdowns to find specific statement subsets (e.g., all religious statements from Asia-Pacific with word count > 2,000)",
      "Click any row to see full metadata, abstract, and Governance Genome scores in a popup",
      "Hover over genome field labels in the popup for plain-language explanations of what each score means",
      "2,021 of 3,044 statements have genome scoring data; the remainder show \u2018Not genome-scored\u2019"
    ]
  }

};

const EXPERT_TEXTS = {

  // ═══════════════════════════════════════════════
  // TAB 1: CENSUS OVERVIEW
  // ═══════════════════════════════════════════════

  "findings": [
    {
      "num": 1,
      "title": "The Enforcement-Rhetoric Inverse",
      "confidence": "high",
      "body": "The data shows that documents with the richest human rights commitments (Rights-Advocacy family, 83.2% rights-based rhetoric) are overwhelmingly soft law (55.9%, only 2.4% legally binding), while documents with the strongest enforcement teeth (Risk-Regulatory family, 58.2% regulation) subordinate values to risk metrics. Evidence suggests a structural disconnect between normative ambition and legal force.",
      "stats": ["83.2% rights rhetoric", "2.4% legally binding", "58.2% regulation"]
    },
    {
      "num": 2,
      "title": "Industry Governance Is Overwhelmingly Non-Binding",
      "confidence": "high",
      "body": "Industry statements are 0% legally binding and 79.5% voluntary/aspirational. The data shows this pattern at an effect size 3\u00d7 larger than typical in governance studies, consistent with concerns about non-binding industry self-regulation.",
      "stats": ["0% legally binding", "V = 0.371", "p < 10\u207b\u00b9\u00b3\u2076"]
    },
    {
      "num": 3,
      "title": "Indigenous Governance Appears in the Corpus Before Government",
      "confidence": "moderate",
      "body": "In this dataset, indigenous organizations (debut 1998, FNIGC OCAP Principles) and religious bodies (debut 2000) appear before any government statement (debut 2010). This finding should be interpreted with caution: it reflects when documents entered the corpus, not necessarily when governance discussions began within these institutions. Prior surveys (Jobin 2019, Fjeld 2020) did not include these traditions.",
      "stats": ["1998 indigenous", "2000 religious", "2010 government"]
    },
    {
      "num": 4,
      "title": "Sacred-Secular Bimodality",
      "confidence": "high",
      "body": "The data shows that 76.5% of statements score exactly zero on sacred-secular dimensions, while 3.7% score above 60. Evidence suggests the governance space splits into two near-separate universes with a thin transition zone of ~30 statements where traditions could learn from each other.",
      "stats": ["76.5% at zero", "3.7% above 60", "~30 transitional"]
    },
    {
      "num": 5,
      "title": "Many Non-Western Governance Concepts Are Not Captured by Standard Frameworks",
      "confidence": "moderate",
      "body": "12 of 21 non-Western governance concepts discovered inductively by the Genome \u2014 including fitrat, theosis, maslahah, kaitiakitanga, ubuntu, and khalifah \u2014 are not detectable using standard Western frameworks (OECD, EU AI Act). This finding is consistent with known limitations of deductive coding approaches, though the exact count depends on operationalization choices.",
      "stats": ["12/21 not captured", "21 traditions found"]
    },
    {
      "num": 6,
      "title": "Religious Governance Expanded Rapidly",
      "confidence": "caution",
      "body": "From near-zero statements before 2017 to 111 in 2023\u20132026, religious governance appears to be the fastest-growing family (mean year 2023.7). However, this growth partly reflects targeted collection efforts in the Tapestry database. The Rome Call, IIFA Resolution 258, and seven denominational traditions created a governance constituency that was previously under-documented.",
      "stats": ["~18\u00d7 growth", "111 statements", "7 traditions"]
    },
    {
      "num": 7,
      "title": "Institutional Form Is a Stronger Predictor Than Content",
      "confidence": "moderate",
      "body": "Channel ablation shows that institutional form (C2: who wrote it, for whom, with what authority) achieves silhouette 0.153 alone, nearly matching the full 347-dimension model (0.155). Content alone (C1: what it says) achieves silhouette \u22120.028. This finding may partly reflect encoding artifacts in the content channel, but evidence suggests institutional form carries substantial predictive weight.",
      "stats": ["C2 sil = 0.153", "Full = 0.155", "C1 = \u22120.028"]
    },
    {
      "num": 8,
      "title": "Seven of Eight Principles Diverge Across Sectors",
      "confidence": "high",
      "body": "ANOVA results indicate 7/8 AI ethics principles show statistically significant cross-sector variance (p < 10\u207b\u2076). Only Human Oversight shows no significant variation \u2014 the one principle where evidence is consistent with Jobin\u2019s convergence thesis.",
      "stats": ["7/8 diverge", "p < 10\u207b\u2076", "CI: 0.42\u20130.76"]
    },
    {
      "num": 9,
      "title": "Tradition-Specific Concepts Travel as Packages",
      "confidence": "high",
      "body": "The data shows indigenous concepts (data sovereignty, ethics, reciprocity: r = 0.89\u20130.94), Islamic jurisprudential concepts (maqasid, maslahah, rahmah: r = 0.87\u20130.91), and Jewish legal concepts (halakhic, teshuvah: r = 0.90) form near-perfectly correlated clusters. Evidence suggests traditions apply entire epistemological systems, not modular principles.",
      "stats": ["r = 0.89\u20130.94", "r = 0.87\u20130.91", "r = 0.90"]
    },
    {
      "num": 10,
      "title": "Professional Self-Regulation as Parallel Governance",
      "confidence": "high",
      "body": "348 statements (17.2%) from professional bodies operate outside state enforcement: professional sanction at 39.7% (4.8\u00d7 global mean), reputation mechanisms at 26.7% (4.3\u00d7 global), state regulation at only 2.0%. The data shows medicine, law, and engineering are governing AI through licensure and peer accountability.",
      "stats": ["17.2% of corpus", "39.7% sanction", "2.0% state reg"]
    }
  ],

  "overview": [
    {
      "expert": "Interdisciplinary Synthesis",
      "text": "The Tapestry database constitutes one of the largest structured datasets of AI governance documents assembled to date: 3,044 statements from 3,460+ organizations spanning 107+ countries, 25+ languages, and 11 institutional sectors (1998\u20132026). Of these, 2,021 passed quality gating for Governance Genome 2.0 analysis (226 dimensions each), 1,611 were scored across 82 ontological concept axes, and ~2,694 received taxonomy scoring. Together these represent 615,121 structured data points \u2014 enabling a broad empirical portrait of global AI governance."
    },
    {
      "expert": "Ethics Perspective",
      "text": "The corpus reveals a governance landscape that appears philosophically pluralistic in theory but secular-liberal in practice. The five most-activated ontology concepts \u2014 secular humanist ethics (78.6%), safety risk management (68.8%), accountability liability (66.6%), privacy data governance (66.2%), and transparency explainability (63.7%) \u2014 all originate from the Western liberal tradition. Meanwhile, evidence suggests 12 of 21 non-Western governance concepts are not captured by standard analytical frameworks."
    },
    {
      "expert": "Data Science Perspective",
      "text": "The three-channel Genome architecture (C1 content, C2 form, C3 embeddings) reveals a counterintuitive finding: institutional form (C2, 123 columns) alone achieves silhouette 0.153, nearly matching the full 347-dimension model (0.155). Content alone (C1, 125 columns) achieves \u22120.028. Evidence suggests that what a document IS institutionally predicts its governance family better than what it SAYS about transparency, fairness, or accountability. This has potential implications for comparative studies that focus primarily on content analysis."
    }
  ],

  // ═══════════════════════════════════════════════
  // TAB 2: INSTITUTIONAL LANDSCAPE
  // ═══════════════════════════════════════════════

  "institutionalFindings": [
    {
      "title": "Industry Governance: 0% Legally Binding",
      "body": "Industry statements are 0% legally binding and 79.5% voluntary/aspirational (Chi-square(36) = 759.61, p < 10\u207b\u00b9\u00b3\u2036, Cram\u00e9r\u2019s V = 0.371). The data shows government at 36.6% hard law vs. 13.3% voluntary/aspirational. The effect size is 3\u00d7 larger than typical in governance studies.",
      "stats": ["V = 0.371", "0% industry binding"]
    },
    {
      "title": "Religious Absence Rate: 75%",
      "body": "Of 592 religious organizations searched, 444 (75%) had no qualifying AI governance statement \u2014 the highest absence rate of any sector in this dataset. By contrast, all 12 indigenous organizations searched had formal governance positions (0% absence), though the small sample size limits the strength of this comparison.",
      "stats": ["75% religious absent", "0% indigenous absent"]
    },
    {
      "title": "Professional Parallel Governance",
      "body": "348 statements (17.2%) from professional bodies use non-state enforcement: professional sanction at 39.7% (4.8\u00d7 global mean), reputation mechanisms at 26.7% (4.3\u00d7 global). The data shows this pattern spans medicine, law, engineering, accounting, actuarial science, education, and library science.",
      "stats": ["17.2% of corpus", "39.7% sanction rate"]
    },
    {
      "title": "Advisory Nature Dominates Global Governance",
      "body": "71.3% of all statements are advisory or voluntary. Only 6.6% carry legally binding force, almost entirely from government legislation. Evidence suggests soft law can still be influential: the OECD AI Principles (soft law) shaped the EU AI Act (binding law), so legal significance may be disproportionate to binding force.",
      "stats": ["71.3% advisory/voluntary", "6.6% legally binding"]
    }
  ],

  "institutional": [
    {
      "expert": "Legal Analysis Perspective",
      "text": "The binding nature distribution raises questions: 71.3% advisory or voluntary means the vast majority of global AI governance carries no legal force. Industry\u2019s 0% legally binding rate is consistent with concerns about non-binding self-regulation, at an effect size (V = 0.371) that is 3\u00d7 larger than typical governance studies. The data suggests that if voluntary commitments without enforcement are not governance but public relations, the \u2018self-regulation\u2019 defense may be empirically weak."
    },
    {
      "expert": "Political Science Perspective",
      "text": "Government dominance (990 statements, 32.5%) masks two important dynamics. First, Europe and North America account for 55% of all statements despite representing ~15% of global population. Second, professional bodies (329) and national ethics bodies (127) represent an emerging middle governance layer \u2014 operating through licensure and credentialing rather than legislation, building what amounts to a parallel governance infrastructure outside the state."
    },
    {
      "expert": "Development Economics Perspective",
      "text": "The 1,895+ structured negative findings are methodologically notable \u2014 few prior studies have systematically documented which organizations LACK AI governance positions. The 75% religious absence, 67% labor absence, and 0% indigenous absence (though the latter from a small sample of 12 organizations) help transform \u2018absence of evidence\u2019 into \u2018evidence of absence,\u2019 revealing the institutional landscape of AI governance engagement."
    }
  ],

  // ═══════════════════════════════════════════════
  // TAB 3: TEMPORAL EVOLUTION
  // ═══════════════════════════════════════════════

  "temporalFindings": [
    {
      "title": "Four Governance Eras",
      "body": "The data shows a temporal pattern consistent with four eras: Nascent (pre-2017, 20 stmts, 1.0%) \u2192 Explosion (2017-2019, 344, 17.0%) \u2192 Regulatory Turn (2020-2022, 355, 17.6%) \u2192 Maturation (2023-2026, 1,293, 64.0%). The most recent period contains nearly two-thirds of all governance output in the corpus.",
      "stats": ["64% in 2023\u20132026", "Peak: 2024"]
    },
    {
      "title": "Indigenous Governance Appears Before Government in the Corpus",
      "body": "Sector debut timeline in this dataset: Indigenous (1998) \u2192 Religious (2000) \u2192 Academic (2005) \u2192 Government (2010) \u2192 Industry (2014) \u2192 Civil Society (2014) \u2192 Multistakeholder (2015) \u2192 Labor (2018). This suggests earlier AI governance activity by non-state actors than captured by surveys such as Jobin (2019) and Fjeld (2020).",
      "stats": ["1998 indigenous", "2010 government", "12-year gap"]
    },
    {
      "title": "Religious Cluster: Rapid Expansion",
      "body": "Sacred-Traditional cluster (C2) grew from near-zero before 2017 to 8.6% of the governance field by 2023\u20132026. This appears to be the fastest-growing family, though the growth partly reflects targeted collection. The Rome Call for AI Ethics, IIFA Resolution 258, and seven denominational traditions created a governance constituency that was previously under-documented.",
      "stats": ["~18\u00d7 growth", "8.6% of field", "7 traditions"]
    },
    {
      "title": "The Regulatory Turn (2019\u20132020)",
      "body": "Evidence suggests the Risk-Regulatory family (C5) surged from 12.8% to 25.9% of statements between 2017-2019 and 2020-2022, overtaking Innovation-Optimist (C0). The EU AI Act, with 40 inter-statement citations, appears to be the gravitational center of global regulatory governance (consistent with the Brussels Effect thesis).",
      "stats": ["12.8% \u2192 25.9%", "40 EU AI Act citations"]
    }
  ],

  "temporal": [
    {
      "expert": "Political Science Perspective",
      "text": "The regulatory turn (C5 overtaking C0 between 2019\u20132020) is consistent with the GDPR\u2019s diffusion pattern \u2014 the \u2018Brussels Effect.\u2019 The EU AI Act, with 40 inter-statement citations, appears to be the gravitational center of global regulatory governance. National frameworks in Brazil, Canada, South Korea explicitly reference or mirror its risk-based classification. Evidence suggests institutional isomorphism: organizations in the same field come to resemble each other, converging within families while diverging across them."
    },
    {
      "expert": "Development Economics Perspective",
      "text": "The data suggests asymmetric diffusion timing may disadvantage the Global South. The EU AI Act creates de facto global standards that developing nations must comply with to participate in global technology markets \u2014 without having participated in their design. Africa\u2019s governance appears overwhelmingly Innovation-Optimist (69.7%), consistent with a \u2018growth first, govern later\u2019 pattern. The governance literature suggests institutional paths may be sticky \u2014 early framings tend to shape subsequent evolution."
    },
    {
      "expert": "Religious Studies Perspective",
      "text": "The rapid religious expansion is not a monolith. It spans the Rome Call\u2019s ecumenical convergence (Catholic, Jewish, Islamic, secular signatories), the IIFA Resolution 258\u2019s sophisticated Islamic jurisprudence, Orthodox Christian theosis-based governance, Protestant denominational responses, and indigenous relational ethics. Each brings distinct theological anthropology \u2014 different metaphysical foundations for human worth, with distinct implications for what AI may and may not do."
    }
  ],

  // ═══════════════════════════════════════════════
  // TAB 4: CROSS-LAYER SYNTHESIS
  // ═══════════════════════════════════════════════

  "crossLayer": [
    {
      "expert": "Statistics Perspective",
      "text": "The four scoring systems achieve noteworthy reliability for LLM-coded instruments. Genome ICC = 0.91 (excellent). Ontology ICC median = 0.854, with 54/82 concepts above 0.70. The silhouette of 0.155 at k=6 requires careful interpretation: in a 347-dimensional mixed-type feature space, distance concentration compresses silhouette scores toward zero. Multi-metric convergence (silhouette-max, DB-minimum, semantic coherence all at k=6) provides stronger evidence than the absolute value alone."
    },
    {
      "expert": "Data Science Perspective",
      "text": "The three layers capture genuinely distinct information. The Genome\u2019s C2 (form) carries 58.7% of total variance despite only 35.4% of columns. The Ontology\u2019s inductive discovery found 39 emergent concepts beyond the initial 43 seeds. The Taxonomy\u2019s 766-node hierarchical DAG provides a different organizational logic. Where they agree (e.g., all three identify a distinct religious/traditional governance cluster), the finding is more robust. Where they disagree, the divergence itself may be informative."
    },
    {
      "expert": "Science and Technology Studies Perspective",
      "text": "The cross-layer architecture suggests the six governance families may be responses to different PROBLEMS, not just different approaches to the same problem. Evidence suggests: C0 governs AI-as-opportunity. C3 governs AI-as-threat-to-rights. C5 governs AI-as-risk. C2 governs AI-as-spiritual-challenge. C4 governs AI-as-professional-practice. Each family\u2019s institutional form appears to constrain what governance it can imagine \u2014 sacred stewardship may enable prohibitions that managed risk cannot justify."
    }
  ],

  // ═══════════════════════════════════════════════
  // TAB 5: GAP ANALYSIS
  // ═══════════════════════════════════════════════

  "gapFindings": [
    {
      "title": "Global South Contributes About 12% of Statements",
      "body": "The Global South contributes about 12% of statements. This partly reflects search bias toward English-language sources and the correlation between governance production and institutional capacity. Europe (30%) and North America (25%) dominate. Africa contributes only 104 statements with 69.7% in Innovation-Optimist cluster. Comparative principle scores show the Global South is lower on Safety (\u22124.0), Privacy (\u22123.0), and Transparency (\u22123.6), though this may partly reflect collection methodology.",
      "stats": ["12% Global South", "69.7% Africa C0", "\u22124.0 Safety gap"]
    },
    {
      "title": "61.2% of Concept \u00d7 Org-Type Cells Are Near-Zero",
      "body": "The ontology gap matrix reveals deep-but-narrow specialization: most org types engage with only a handful of concepts. Evidence suggests 48 of 82 ontology concepts are \u2018frontier\u2019 \u2014 engaged by only 1\u20132 org types. Only 4 concepts appear to achieve \u2018consensus\u2019 status across >50% of org types.",
      "stats": ["61.2% near-zero", "48 frontier", "4 consensus"]
    },
    {
      "title": "Missing Religious Traditions",
      "body": "Hindu, Buddhist, and Confucian AI governance traditions are near-absent from the corpus despite rich philosophical resources (consciousness, interdependence, ren, ritual propriety). This likely reflects discovery bias toward Abrahamic traditions and English-language institutional outputs, not necessarily evidence of disengagement. Reform Judaism, Jain, and Shinto traditions also have near-zero formal AI governance in this dataset.",
      "stats": ["Hindu/Buddhist/Confucian \u2248 0", "Protestant 13.9%"]
    },
    {
      "title": "94 All-Zero Statements (Degraded Extracts)",
      "body": "94 genome-scored statements have all-zero content scores due to degraded text extracts (bot-blocked, corrupt PDF). These inflate the Residual/Thin-Aspirational cluster (C1) by an estimated 15\u201323%. Pre-2017 period (20 statements) is too small for robust temporal claims. The C1 cluster functions as a residual catch-all category with negative silhouette, meaning its members are on average closer to other clusters than to their own.",
      "stats": ["94 all-zero", "15\u201323% C1 inflation"]
    }
  ],

  "gaps": [
    {
      "expert": "Development Economics Perspective",
      "text": "The Global South\u2019s 12% share is both a collection gap and a structural gap. Some absence reflects discovery bias \u2014 Francophone/Lusophone African strategies exist but were not found by English-language searches. But much likely reflects genuine capacity constraints: producing AI governance requires institutional infrastructure, technical expertise, and political bandwidth. The 5.1:1 innovation-to-rights ratio in Africa suggests governance is overwhelmingly about what AI CAN do, not what it SHOULD NOT do."
    },
    {
      "expert": "Indigenous Knowledge Perspective",
      "text": "The 0% indigenous absence rate (all 12 orgs searched had statements) is noteworthy but should be interpreted cautiously \u2014 12 organizations is a very small sample. Indigenous governance operating through oral tradition, community consensus, and ceremony is largely invisible to document-based corpus methodology. The CARE Principles operationalize relational ethics in Western terms, but the underlying philosophy is not fully reducible to Western categories. Any future collection should follow FPIC (Free, Prior, and Informed Consent) protocols."
    },
    {
      "expert": "Religious Studies Perspective",
      "text": "The sacred-secular bimodality (76.5% zero, 3.7% above 60) is not merely a matter of different emphases \u2014 evidence suggests it reflects an epistemological divide. Secular governance starts from rights and risks; religious governance starts from theological anthropology. The absence of Hindu, Buddhist, and Confucian traditions likely reflects discovery bias toward Abrahamic traditions and English-language institutional outputs, not evidence of disengagement. The 30 statements in the sacred-secular transition zone deserve dedicated study as potential sites of interfaith-secular dialogue."
    }
  ],

  // ═══════════════════════════════════════════════
  // TAB 6: PROFILES
  // ═══════════════════════════════════════════════

  "profilesFindings": [
    {
      "title": "Six Policy Families",
      "body": "C0 Innovation-Optimist (427, 21.1%): national strategies, P13 Geopolitics = 20.9. C1 Residual/Thin-Aspirational (261, 12.9%): low specificity, negative silhouette \u2014 this is a catch-all category whose members are on average closer to other clusters. C2 Sacred-Traditional (125, 6.2%): P11 Religious Epistemology = 12.8, bootstrap stability 0.924 (most stable). C3 Rights-Advocacy (410, 20.3%): P04 Bias & Equity = 17.2. C4 Professional (348, 17.2%): parallel governance. C5 Risk-Regulatory (450, 22.3%): largest, P02/P03 highest.",
      "stats": ["6 families", "k=6 optimal", "sil = 0.155"]
    },
    {
      "title": "Innovation-Rights Mutual Exclusion",
      "body": "Evidence suggests innovation-led and rights-led development paradigms are empirically near-exclusive. C0: 80.6 innovation-led, 1.6 rights-based. C3: 67.8 rights-led, 2.7 innovation-first. The \u2018both/and\u2019 synthesis policymakers aspire to has not materialized in this data. The closest middle ground (C1, Residual/Thin-Aspirational) appears to achieve balance through vagueness rather than integration.",
      "stats": ["C0: 80.6 innovation", "C3: 67.8 rights"]
    },
    {
      "title": "Convergence Indices Quantify Divergence",
      "body": "Safety appears most convergent (CI = 0.761), Human Oversight most divergent (CI = 0.441). Sustainability is the most contested principle (CI = 0.42). The data shows that the convergence thesis holds at the level of principle LABELS (everyone mentions fairness) but does not hold at the level of emphasis, interpretation, and enforcement.",
      "stats": ["Safety CI = 0.76", "Oversight CI = 0.44"]
    }
  ],

  "profiles": [
    {
      "expert": "Governance Studies Perspective",
      "text": "The six-family model replaces the convergence narrative with something more empirically grounded. For a decade, comparative AI governance asked \u2018are AI ethics principles converging?\u2019 The data suggests: convergence is real at the level of principle LABELS (everyone mentions transparency, fairness) but absent at the level of emphasis, interpretation, and enforcement. Convergence indices (0.42\u20130.76) quantify what scholars have long suspected: nominal agreement masks systematic institutional divergence."
    },
    {
      "expert": "Cross-Cultural Research Perspective",
      "text": "Non-English documents (n=306) show distinct concept profiles, particularly in tradition-specific and sovereignty concepts. The term maslahah carries jurisprudential weight that \u2018public interest\u2019 does not; kaitiakitanga invokes relational obligations that \u2018stewardship\u2019 only approximates. Evidence suggests the 12 non-Western concepts not captured by deductive taxonomy represent not just vocabulary gaps but epistemological ones. The OECD Principles may not be universal frameworks \u2014 they may be culturally specific frameworks that achieved hegemonic status."
    },
    {
      "expert": "Policy Communication Perspective",
      "text": "The data suggests we should stop talking about \u2018global AI governance\u2019 as if it were one thing. It appears to be at least six things. The most important policy question may not be what the principles should be \u2014 the field has converged enough on that \u2014 but WHO has the authority to enforce them. The enforcement-rhetoric inverse is consistent with a central design flaw: rights advocates produce soft law, regulators produce risk-based rules. Evidence suggests no one is producing rights-based binding law at scale."
    }
  ]
};
