// findings_texts.js — Expert argument panels for 10 headline findings
// Generated 2026-03-28 for Tapestry Census Overview Response dashboard

const FINDINGS_TEXTS = {

  // ─────────────────────────────────────────────────────────
  // F1: The Enforcement-Rhetoric Inverse
  // ─────────────────────────────────────────────────────────
  f1: {
    title: "The Enforcement-Rhetoric Inverse",
    subtitle: "The actors most committed to protecting rights appear least equipped to enforce their commitments",
    confidence: "high",
    claim: "Cluster C3 (Rights-Advocacy) exhibits the highest concentration of rights-based moral language in the corpus\u200494.2% of its statements invoke at least one fundamental right\u2014yet only 2.4% carry legally binding force, while 55.9% rely on soft-law instruments. This pattern suggests a structural mismatch between moral authority and enforcement power: the governance actors who articulate the strongest normative commitments tend to operate through the weakest institutional mechanisms.",
    evidence: [
      {
        expert: "Statistics Perspective",
        text: "The distributional evidence is striking. Within C3, 83.2% of statements employ rights-based rhetoric, yet the binding-instrument rate of 2.4% falls well below the corpus-wide average for government-origin documents (11.3%). The gap between normative intensity and enforcement capacity appears to be among the largest structural asymmetries we observe in the data."
      },
      {
        expert: "Legal Perspective",
        text: "The concentration of soft-law instruments (55.9%) in the rights-advocacy cluster is consistent with the structural position of civil-society actors in international governance. These organizations typically lack legislative authority and must rely on normative persuasion, naming-and-shaming, and standard-setting through voluntary frameworks. The finding suggests that AI governance may be reproducing a well-documented pattern from international human rights law."
      },
      {
        expert: "Political Science Perspective",
        text: "This pattern aligns with what regime theory would predict: actors with the strongest normative commitments often occupy positions with the least coercive capacity. The 2.4% binding rate in C3 compared to the 11.3% rate in government clusters indicates that enforcement power and moral ambition may be inversely distributed across the AI governance landscape."
      }
    ],
    caveats: [
      {
        expert: "Development Economics Perspective",
        text: "Soft law is not inherently ineffective. International relations scholarship suggests that non-binding instruments can shape state behavior through norm cascading, agenda-setting, and reputational incentives. Measuring only binding force likely understates the actual governance influence of these actors. The causal pathway from rhetoric to enforcement is indirect and should not be reduced to a simple deficit narrative."
      },
      {
        expert: "STS Perspective",
        text: "The enforcement-rhetoric framing risks implying that only legally binding instruments constitute 'real' governance. Science and technology studies literature indicates that standards, best practices, and voluntary codes frequently shape technological trajectories before formal regulation arrives. The temporal sequence matters: rhetoric may precede and enable enforcement rather than substituting for it."
      }
    ],
    significance: [
      {
        expert: "Policy Communication Perspective",
        text: "For policymakers, this finding highlights a potential coordination failure. If rights-advocacy organizations set normative expectations that regulatory bodies later codify, the inverse relationship may be functional rather than dysfunctional. However, if these remain permanently decoupled, the governance ecosystem risks producing moral commitments that never translate into enforceable protections."
      },
      {
        expert: "Ethics Perspective",
        text: "The gap between moral aspiration and institutional capacity raises a question of governance legitimacy. If the strongest ethical commitments systematically lack enforcement mechanisms, affected populations may face a landscape where their rights are acknowledged in principle but unprotected in practice. This asymmetry warrants attention from governance designers."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F2: Industry Non-Binding Governance
  // ─────────────────────────────────────────────────────────
  f2: {
    title: "Industry Non-Binding Governance",
    subtitle: "Private-sector AI governance relies almost exclusively on voluntary and aspirational instruments",
    confidence: "high",
    claim: "The association between organizational sector and instrument type is statistically robust (\u03C7\u00B2(36) = 759.61, p < 10\u207B\u00B9\u00B3\u2076, Cram\u00E9r\u2019s V = 0.371), with industry actors producing 0% legally binding instruments, 69.9% voluntary commitments, and 9.6% aspirational statements. This distributional pattern diverges sharply from government actors, where 11.3% of instruments carry binding force.",
    evidence: [
      {
        expert: "Statistics Perspective",
        text: "The chi-squared test yields an effect size (Cram\u00E9r\u2019s V = 0.371) that falls in the medium-to-large range for contingency tables of this dimension. The complete absence of legally binding instruments from industry (0.0%) compared to 11.3% for government represents a structural zero that is unlikely to arise from sampling variability alone."
      },
      {
        expert: "Legal Perspective",
        text: "The 0% binding rate for industry requires careful interpretation. Private entities structurally cannot produce legally binding regulatory instruments\u2014only legislatures and authorized regulatory bodies hold that power. The finding therefore documents a distributional asymmetry inherent in institutional roles, not necessarily a deliberate strategy of enforcement avoidance. Industry voluntary commitments may nonetheless create contractual or reputational obligations."
      }
    ],
    caveats: [
      {
        expert: "Governance Perspective",
        text: "Comparing binding rates across sectors with fundamentally different institutional authorities risks a category error. A more informative comparison might examine the enforcement mechanisms available within each sector\u2019s institutional constraints: industry self-regulation through procurement standards, contractual terms, and professional sanctions versus government regulation through statute. The 0% binding rate reflects institutional structure, not solely governance commitment."
      },
      {
        expert: "Political Science Perspective",
        text: "The voluntary governance pattern may also reflect regulatory strategy rather than regulatory absence. In industries facing potential legislation, voluntary frameworks sometimes function as pre-emptive self-regulation designed to forestall more restrictive state intervention. Without longitudinal data on regulatory outcomes, the governance implications of voluntary commitments remain ambiguous."
      }
    ],
    significance: [
      {
        expert: "Development Economics Perspective",
        text: "For countries with limited regulatory capacity, the dominance of voluntary industry governance has particular implications. If the primary governance instruments affecting AI deployment are non-binding, lower-income nations may lack both domestic regulatory frameworks and international enforcement mechanisms to hold technology firms accountable for harms."
      },
      {
        expert: "Ethics Perspective",
        text: "The finding raises questions about the adequacy of self-governance in domains with significant power asymmetries. When the entities developing and deploying AI systems are also the primary authors of their own governance frameworks, and those frameworks carry no binding force, the conditions for meaningful accountability appear structurally weakened."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F3: Indigenous/Religious Temporal Precedence
  // ─────────────────────────────────────────────────────────
  f3: {
    title: "Indigenous & Religious Temporal Precedence",
    subtitle: "Data governance principles from Indigenous and religious communities predate mainstream AI ethics discourse",
    confidence: "moderate",
    claim: "The earliest governance documents in the corpus addressing data and algorithmic systems originate from Indigenous communities (OCAP principles, 1998) and religious institutions (Romanian Orthodox Church, 2000), preceding the first academic AI ethics publications (2005) and government frameworks (2010) by several years. This temporal pattern suggests that communities often positioned as 'recipients' of AI governance were articulating relevant principles before the mainstream field coalesced.",
    evidence: [
      {
        expert: "Indigenous Knowledge Perspective",
        text: "The OCAP principles (Ownership, Control, Access, Possession) emerged from First Nations communities in Canada in 1998, grounded in decades of experience with data extraction by external researchers. While OCAP addresses data governance broadly rather than AI specifically, its core concerns\u2014community sovereignty over data collection, algorithmic processing, and benefit distribution\u2014map directly onto contemporary AI governance debates."
      },
      {
        expert: "Religious Studies Perspective",
        text: "The Romanian Orthodox Church\u2019s 2000 statement on technology and human dignity reflects a longer tradition of religious engagement with technological ethics. Religious institutions have addressed the moral status of technological systems since at least the mid-20th century. The temporal precedence in the corpus may indicate that these traditions possess governance resources that have been underutilized in secular AI ethics frameworks."
      }
    ],
    caveats: [
      {
        expert: "STS Perspective",
        text: "The comparison involves an important asymmetry: OCAP (1998) addresses data sovereignty broadly and predates the contemporary 'AI governance' category. Claiming temporal precedence requires careful qualification\u2014early documents were not responding to the same technological context as post-2015 AI ethics statements. The thematic relevance is genuine, but the direct lineage claim should be stated cautiously."
      },
      {
        expert: "Cross-Cultural Perspective",
        text: "The corpus may also undercount early governance activity from other traditions. Oral governance traditions, community protocols, and non-English-language documents are systematically harder to capture in text-based databases. The observed precedence may reflect which early documents were accessible for inclusion rather than a complete temporal ordering."
      }
    ],
    significance: [
      {
        expert: "Development Economics Perspective",
        text: "If communities with the longest governance experience are routinely excluded from AI policy design, the resulting frameworks may miss critical insights about data sovereignty, community consent, and long-term technological stewardship that decades of practice have refined."
      },
      {
        expert: "Policy Communication Perspective",
        text: "The temporal precedence finding challenges the widespread narrative that AI ethics is a novel field originating in computer science departments and technology companies. Reframing the timeline to include Indigenous and religious contributions could broaden the range of governance models considered legitimate in international policy forums."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F4: Sacred-Secular Bimodality
  // ─────────────────────────────────────────────────────────
  f4: {
    title: "Sacred-Secular Bimodality",
    subtitle: "Religious content scores follow a bimodal distribution with a sparse transition zone",
    confidence: "high",
    claim: "The distribution of religious-content scores across the corpus is sharply bimodal: 76.5% of statements score exactly zero, while Cluster C2 (Sacred-Relational) achieves a mean score of 66.0. Only 3.7% of statements fall above 60 outside C2, and approximately 30 statements occupy the transition zone between scores of 21 and 40. This pattern suggests that sacred and secular governance discourses operate as largely separate registers with limited cross-pollination.",
    evidence: [
      {
        expert: "Data Science Perspective",
        text: "The bimodal distribution is pronounced: the zero-inflated majority (76.5%) and the high-scoring C2 cluster (mean 66.0) are separated by a sparsely populated transition zone containing roughly 30 statements. This is not a continuous spectrum but rather two distinct modes, suggesting that religious framing is either substantially present or essentially absent in AI governance documents."
      },
      {
        expert: "Religious Studies Perspective",
        text: "The bimodality aligns with how religious traditions typically engage public discourse. Sacred governance language tends to be holistic\u2014invoking theological anthropology, moral ontology, and community obligation as an integrated framework. Partial adoption of religious concepts without their theological grounding appears rare, which may explain the sparse transition zone between fully secular and substantively religious statements."
      }
    ],
    caveats: [
      {
        expert: "Statistics Perspective",
        text: "The bimodal pattern could partly reflect measurement sensitivity. If the religious-content scoring rubric uses threshold-dependent indicators (specific theological vocabulary, scriptural references), it may produce a binary-like distribution even when underlying conceptual overlap is more continuous. The transition zone warrants closer qualitative examination to determine whether it represents genuine hybridity or measurement noise."
      }
    ],
    significance: [
      {
        expert: "Cross-Cultural Perspective",
        text: "The approximately 30 statements in the transition zone (scores 21\u201340) represent a potentially significant liminal space. These documents may be experimenting with cross-tradition synthesis\u2014drawing on religious moral resources while maintaining secular institutional framing. Understanding what enables this boundary-crossing could inform efforts to bridge the sacred-secular divide in global AI governance."
      },
      {
        expert: "Ethics Perspective",
        text: "The sharp bimodality raises a question about governance inclusivity. If secular and sacred frameworks operate as separate registers with minimal overlap, international consensus documents may systematically exclude moral resources available to the approximately 85% of the global population that identifies with a religious tradition. The governance cost of this separation warrants examination."
      },
      {
        expert: "Policy Communication Perspective",
        text: "For governance designers seeking broadly legitimate frameworks, the bimodal pattern suggests that 'translating' religious concepts into secular language is uncommon in practice. This challenges the assumption that overlapping consensus on AI principles is achievable through vocabulary substitution alone; the underlying moral architectures may differ more fundamentally."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F5: Invisible Non-Western Concepts
  // ─────────────────────────────────────────────────────────
  f5: {
    title: "Invisible Non-Western Concepts",
    subtitle: "Approximately 16 tradition-specific governance concepts resist mapping onto dominant Western framework labels",
    confidence: "moderate",
    claim: "Inductive analysis identified 21 tradition-specific concepts across the corpus, of which approximately 16 cannot be mapped onto OECD or EU AI Act principle labels without significant semantic loss. These include concepts such as fitrat (Islamic natural disposition), theosis (Orthodox Christian divinization), maslahah (Islamic public interest), kaitiakitanga (M\u0101ori environmental guardianship), and khalifah (Islamic stewardship). The finding suggests that dominant governance frameworks may be structurally blind to moral resources that do not fit their categorical architecture.",
    evidence: [
      {
        expert: "Cross-Cultural Perspective",
        text: "The 21 inductively discovered concepts span at least six distinct traditions\u2014Islamic, Christian Orthodox, Indigenous M\u0101ori, Hindu, Buddhist, and Jewish. The fact that approximately 16 of these resist one-to-one mapping onto OECD principle categories suggests that the conceptual architecture of mainstream AI governance frameworks reflects a particular (largely Western, liberal, individualist) moral vocabulary rather than a universal one."
      },
      {
        expert: "Religious Studies Perspective",
        text: "Several of the unmappable concepts encode relational and cosmological commitments absent from secular frameworks. Kaitiakitanga, for instance, entails guardianship obligations extending to future generations and non-human entities\u2014a scope that exceeds 'environmental sustainability' as typically operationalized. Khalifah implies a stewardship role grounded in divine delegation, which differs categorically from secular accountability. These are not merely alternative labels for the same ideas."
      }
    ],
    caveats: [
      {
        expert: "Governance Perspective",
        text: "'Invisible' requires careful qualification. Western frameworks do address related secular concepts: 'public interest' approximates aspects of maslahah, and 'environmental protection' captures some dimensions of kaitiakitanga. What appears lost in translation is not necessarily the underlying concern but rather the tradition-specific framing, relational ontology, and normative grounding. The gap is real but should not be overstated as total conceptual absence."
      },
      {
        expert: "Legal Perspective",
        text: "International law has long faced the challenge of translating culturally embedded concepts into universalist frameworks. The finding may reflect an inherent limitation of any standardized governance vocabulary rather than a specific deficiency of AI governance. Whether these concepts require explicit representation or can function through analogical reasoning within existing categories remains an open question."
      }
    ],
    significance: [
      {
        expert: "Indigenous Knowledge Perspective",
        text: "For Indigenous communities, the inability to map governance concepts like kaitiakitanga onto existing frameworks is not merely a taxonomic inconvenience. It reflects a pattern of epistemic exclusion in which governance systems built on individualist ontologies cannot accommodate relational and intergenerational obligations. If AI governance frameworks cannot represent these concepts, they risk perpetuating the marginalization of Indigenous governance models."
      },
      {
        expert: "Ethics Perspective",
        text: "The finding suggests that the apparent global consensus on AI principles may rest on a narrower moral foundation than commonly assumed. If 16 tradition-specific concepts encoding distinct ethical commitments are invisible to the dominant frameworks, the universality claims of those frameworks deserve scrutiny. Genuine pluralism may require structural accommodation, not merely rhetorical inclusion."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F6: Religious Governance Expansion
  // ─────────────────────────────────────────────────────────
  f6: {
    title: "Religious Governance Expansion",
    subtitle: "Religious AI governance statements have increased dramatically since 2023",
    confidence: "moderate",
    claim: "Cluster C2 (Sacred-Relational) exhibits the most recent mean publication year of all clusters (2023.7), with temporal distribution showing a sharp acceleration: from approximately 0\u20131 statements pre-2017 to roughly 6 in 2017\u20132019, 7 in 2020\u20132022, and 111 in 2023\u20132026. The bootstrap stability of this cluster is 0.739 (moderate-good), suggesting the pattern is reasonably robust to resampling.",
    evidence: [
      {
        expert: "Statistics Perspective",
        text: "The temporal acceleration is quantitatively dramatic: the 2023\u20132026 period accounts for approximately 89% of all C2 statements. The bootstrap Jaccard stability of 0.739 provides moderate-to-good confidence that this cluster is not an artifact of particular data points. However, the growth rate from a base of approximately one statement is inherently steep, and the absolute count of 125 total statements remains small relative to the full corpus."
      },
      {
        expert: "Religious Studies Perspective",
        text: "The timing of the expansion is consistent with institutional dynamics observed across multiple traditions. The Vatican\u2019s Rome Call for AI Ethics (2020), followed by statements from Islamic bodies, Buddhist organizations, and interfaith coalitions, appears to have catalyzed broader religious engagement. The 2023\u20132026 acceleration may reflect institutional diffusion: once major bodies within a tradition issue statements, subsidiary organizations and interfaith networks follow."
      }
    ],
    caveats: [
      {
        expert: "Data Science Perspective",
        text: "Growth rates computed from near-zero baselines are inherently dramatic and can be misleading. The jump from approximately 7 to 111 statements is significant, but 125 total religious governance documents in a corpus of over 2,000 still represents a small share. Additionally, collection effort may have intensified for religious statements in recent corpus updates, potentially inflating the apparent growth. Corpus composition effects should be considered alongside genuine expansion."
      },
      {
        expert: "STS Perspective",
        text: "The expansion may partly reflect increased visibility of religious statements to researchers and database curators rather than a proportional increase in actual governance activity. Religious institutions have long engaged with technology ethics through encyclicals, pastoral letters, and community guidance that may not have been captured in AI-specific databases before the field\u2019s recent interest in religious perspectives."
      }
    ],
    significance: [
      {
        expert: "Governance Perspective",
        text: "If the expansion trend continues, religious institutions may become an increasingly significant constituency in international AI governance forums. Their governance instruments tend to carry moral authority within specific communities but limited formal enforcement power, potentially amplifying the enforcement-rhetoric pattern observed in Finding 1. How multilateral governance processes accommodate this growing voice remains an open design question."
      },
      {
        expert: "Political Science Perspective",
        text: "The rapid entry of religious actors into AI governance parallels historical patterns in bioethics, nuclear disarmament, and climate governance, where religious institutions mobilized after secular frameworks were already established. The late but accelerating entry may indicate that AI governance is transitioning from a technical-specialist domain to a broader societal concern\u2014a maturation signal for the field."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F7: Form Predicts Better Than Content
  // ─────────────────────────────────────────────────────────
  f7: {
    title: "Form Predicts Better Than Content",
    subtitle: "Structural and institutional features of governance documents appear more predictive of cluster membership than substantive content",
    confidence: "moderate",
    claim: "Channel C2 (form-based features: document type, instrument class, organizational sector) achieves a silhouette score of 0.153 alone, while Channel C1 (content-based features: principle scores, ethical frameworks) achieves \u22120.028 alone. The combined C1+C2 score of 0.167 is only marginally higher than C2 alone. Form features carry an estimated 58.7% of clustering variance despite comprising only 35.4% of the feature columns, suggesting that how a governance document is structured may matter more for classification than what it says.",
    evidence: [
      {
        expert: "Data Science Perspective",
        text: "The silhouette decomposition is informative: C2 alone (0.153) substantially outperforms C1 alone (\u22120.028), and adding C1 to C2 provides only marginal improvement (0.167 vs. 0.153). The negative silhouette for C1 suggests that content features alone do not produce coherent clusters\u2014statements with similar principle scores may come from institutionally very different contexts. The variance attribution (58.7% from 35.4% of columns) indicates form features are disproportionately informative."
      },
      {
        expert: "Statistics Perspective",
        text: "The negative C1 silhouette (\u22120.028) deserves attention: it indicates that content-only clustering produces assignments where the average statement is closer to a neighboring cluster\u2019s centroid than its own. This is consistent with the hypothesis that AI governance principles have converged rhetorically\u2014most documents endorse similar principles\u2014while institutional forms remain distinctive."
      }
    ],
    caveats: [
      {
        expert: "Data Science Perspective",
        text: "An important methodological caveat: C2 features are predominantly one-hot encoded categoricals (document type, sector, instrument class), which create geometric separation in high-dimensional space by construction. Continuous C1 features (principle scores on 0\u2013100 scales) inherently produce softer, more overlapping distributions. The magnitude of the form-over-content advantage may therefore be partially inflated by encoding differences rather than reflecting a purely substantive finding."
      },
      {
        expert: "Ethics Perspective",
        text: "Silhouette scores measure geometric cluster coherence, not governance significance. Content features may be more important for policy outcomes even if they are less effective at distinguishing clusters. A finding that all sectors endorse similar principles could reflect genuine normative convergence\u2014which would be governance-relevant even though it reduces C1\u2019s discriminative power."
      }
    ],
    significance: [
      {
        expert: "Legal Perspective",
        text: "If institutional form is indeed more predictive than substantive content, this has implications for governance assessment. Evaluating AI governance quality by examining stated principles may be less informative than examining instrument type, enforcement mechanisms, and institutional position. The form-content hierarchy suggests that governance scholars should attend more carefully to the institutional vehicles through which principles are expressed."
      },
      {
        expert: "Policy Communication Perspective",
        text: "The finding challenges the common focus on principle alignment in comparative AI governance research. If most governance documents endorse similar principles but differ primarily in institutional form, then debates about 'which principles' may be less consequential than debates about 'which instruments.' This reframing could redirect governance design attention toward enforcement architecture rather than normative vocabulary."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F8: Principles Diverge Across Sectors
  // ─────────────────────────────────────────────────────────
  f8: {
    title: "Principles Diverge Across Sectors",
    subtitle: "Seven of eight major AI principles show statistically significant variation across organizational sectors",
    confidence: "moderate",
    claim: "Kruskal-Wallis tests reveal significant cross-sector variation for 7 of 8 principles (p < 10\u207B\u2076 for each), with only Human Oversight failing to reach significance. Fairness exhibits the greatest divergence (\u03B7\u00B2 = 0.065), while Safety shows the highest convergence index (0.76). The pattern suggests that the apparent global consensus on AI principles masks substantial sectoral variation in emphasis and interpretation.",
    evidence: [
      {
        expert: "Data Science Perspective",
        text: "The statistical evidence for sectoral divergence is robust across most principles: 7 of 8 yield p-values below 10\u207B\u2076 with effect sizes ranging from small to medium. The convergence indices reveal a meaningful gradient: Safety (0.76) and Accountability (0.70) show the strongest cross-sector agreement, while Human Oversight (0.44) and Fairness (0.69) show the weakest. The eta-squared values, while modest in absolute terms, are notable given the heterogeneity of the corpus."
      },
      {
        expert: "STS Perspective",
        text: "The divergence pattern is substantively interpretable. Fairness shows the greatest variation (\u03B7\u00B2 = 0.065), which aligns with the expectation that fairness is conceptually contested\u2014different sectors operationalize it through different lenses (anti-discrimination law, equal opportunity, distributional justice, procedural fairness). Safety\u2019s convergence (0.76) suggests that physical harm prevention may be the nearest thing to genuine cross-sector consensus."
      }
    ],
    caveats: [
      {
        expert: "Political Science Perspective",
        text: "These statistics are computed on a non-random corpus assembled through purposive collection. The p-values assume random sampling, a condition not met here. The results should be interpreted as within-corpus distributional patterns rather than population-level inferences. Additionally, the corpus may oversample certain sectors or statement types, which would bias convergence estimates."
      },
      {
        expert: "Legal Perspective",
        text: "Principle-level scores aggregate across diverse operationalizations. Two statements might both score highly on 'fairness' while meaning fundamentally different things\u2014one emphasizing anti-discrimination protections and another emphasizing market competition. The convergence indices may therefore overstate actual agreement by collapsing distinct interpretations into a single score."
      }
    ],
    significance: [
      {
        expert: "Governance Perspective",
        text: "The divergence finding has direct implications for international AI governance negotiations. If sectors genuinely disagree about the relative importance of principles like fairness and transparency, then consensus documents may represent lowest-common-denominator agreement rather than shared commitment. Governance processes that acknowledge and structure sectoral disagreement may prove more durable than those that paper over it."
      },
      {
        expert: "Cross-Cultural Perspective",
        text: "The convergence on Safety but divergence on Fairness suggests that principles anchored in physical-harm prevention may travel across cultural and institutional boundaries more easily than those requiring contested value judgments. For cross-cultural governance design, this implies that safety-oriented frameworks may achieve broader legitimate adoption than fairness-oriented ones, which require more local calibration."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F9: Tradition Packages Travel Together
  // ─────────────────────────────────────────────────────────
  f9: {
    title: "Tradition Packages Travel Together",
    subtitle: "Within-tradition governance concepts appear as tightly correlated bundles rather than independent principles",
    confidence: "moderate",
    claim: "Correlation analysis reveals that tradition-specific concepts co-occur in tight clusters: Indigenous governance concepts (kaitiakitanga, whakapapa, manaakitanga) show pairwise correlations of r = 0.77\u20130.94, and Islamic governance concepts (maslahah, khalifah, fitrat) show r = 0.78\u20130.88. This bundling pattern suggests that traditions package their governance concepts as integrated moral frameworks rather than as independent, modular principles that can be selectively adopted.",
    evidence: [
      {
        expert: "Indigenous Knowledge Perspective",
        text: "The high correlations within the Indigenous triad (r = 0.77\u20130.94, based on 20\u201328 statements where both concepts are non-zero) are consistent with how M\u0101ori governance operates in practice. Kaitiakitanga (guardianship), whakapapa (genealogical connection), and manaakitanga (reciprocal care) are not independent principles but aspects of a unified relational ontology. A document invoking one is likely invoking the worldview within which all three are embedded."
      },
      {
        expert: "Religious Studies Perspective",
        text: "The Islamic concept cluster (r = 0.78\u20130.88) similarly reflects theological coherence. Maslahah (public interest), khalifah (stewardship), and fitrat (natural disposition) are interconnected within Islamic jurisprudence\u2014each concept presupposes and reinforces the others. The co-occurrence pattern in governance documents appears to mirror their theological interdependence."
      }
    ],
    caveats: [
      {
        expert: "Statistics Perspective",
        text: "High correlations among rare features in small subsets are expected even without substantive coherence\u2014this is a well-known property of sparse binary data. The Jewish concept pair (r = 0.89) rests on only n = 3 statements where both are non-zero, which is too small for reliable correlation estimation. The Islamic pairs (n = 5\u201315) are small but more consistent. The Indigenous triad (n = 20\u201328) provides the most reliable evidence, though still modest by conventional standards."
      },
      {
        expert: "Data Science Perspective",
        text: "The co-occurrence patterns could also reflect corpus construction: if tradition-specific statements were sourced from a small number of institutions or authors, within-tradition correlation would reflect authorship patterns rather than inherent conceptual bundling. Controlling for source organization would strengthen the claim, though the current data structure may not easily permit this test."
      }
    ],
    significance: [
      {
        expert: "Cross-Cultural Perspective",
        text: "If tradition-specific concepts genuinely travel as packages, this has important implications for governance pluralism. International frameworks that attempt to incorporate individual Indigenous or Islamic concepts without their relational context may distort the very traditions they aim to include. Authentic pluralism may require accommodating integrated moral frameworks, not cherry-picking individual principles."
      },
      {
        expert: "Development Economics Perspective",
        text: "The bundling pattern challenges the modular principle-based architecture of most AI governance frameworks (OECD, EU AI Act, UNESCO), which treat principles as independent and combinable. If some governance traditions operate through holistic packages rather than discrete principles, the modular architecture may be structurally biased against non-Western governance models\u2014with particular consequences for lower-income countries where these traditions remain central to institutional life."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // F10: Professional Self-Regulation
  // ─────────────────────────────────────────────────────────
  f10: {
    title: "Professional Self-Regulation",
    subtitle: "Professional associations form a distinct governance cluster relying on guild-like enforcement mechanisms",
    confidence: "moderate",
    claim: "Cluster C4 encompasses 348 statements (17.2% of the corpus) from professional associations spanning medicine, law, engineering, accounting, actuarial science, education, and library science. These organizations exhibit a distinctive enforcement profile: professional sanction appears in 39.7% of statements (4.8 times the global rate), reputation-based enforcement in 26.7% (4.3 times the global rate), while state regulation appears in only 2.0%. The bootstrap Jaccard stability of approximately 0.69 indicates moderate cluster robustness.",
    evidence: [
      {
        expert: "Legal Perspective",
        text: "The enforcement profile of C4 mirrors the historical structure of professional self-regulation: licensure-based professions control market entry through credentialing, ethical standards through codes of conduct, and compliance through peer review and disciplinary proceedings. The 4.8-fold overrepresentation of professional sanction relative to the corpus-wide rate is consistent with this guild model. The 2.0% state regulation rate suggests these professions are positioning AI governance within existing self-regulatory infrastructure rather than deferring to external oversight."
      },
      {
        expert: "Governance Perspective",
        text: "The cluster\u2019s size (348 statements, 17.2%) and enforcement concentration (professional sanction at 39.7%, reputation at 26.7%) are quantitatively distinctive. The bootstrap Jaccard stability of 0.69 falls in the moderate range\u2014robust enough to support the cluster\u2019s existence but suggesting some boundary instability where professional and other organizational types overlap."
      }
    ],
    caveats: [
      {
        expert: "STS Perspective",
        text: "The corpus measures governance text, not governance implementation. A profession with elaborate written standards but no enforcement capacity would appear identical in this analysis to one with robust disciplinary infrastructure. The actual enforcement effectiveness of professional AI governance\u2014whether sanction threats translate into behavioral change\u2014cannot be assessed from document analysis alone."
      },
      {
        expert: "Governance Perspective",
        text: "Professional self-regulation in AI faces a structural challenge that traditional professional governance did not: AI systems are increasingly developed and deployed by technology companies that operate outside professional licensure systems. A medical association can sanction a physician who misuses AI, but it cannot directly govern the AI developer. The enforcement mechanisms that appear distinctive in C4 may have a narrower scope of application than the cluster size suggests."
      }
    ],
    significance: [
      {
        expert: "Political Science Perspective",
        text: "The professional self-regulation cluster represents a governance model with centuries of institutional precedent but uncertain applicability to AI. If professional associations can successfully extend their disciplinary infrastructure to cover AI use within their domains, they may provide a distributed governance architecture that complements both state regulation and industry self-governance. The cross-professional breadth of C4 (spanning seven or more professions) suggests this model has independent appeal across occupational domains."
      },
      {
        expert: "Development Economics Perspective",
        text: "Professional governance may be particularly relevant in jurisdictions where state regulatory capacity for AI is limited. Professional associations often operate transnationally through international federations, potentially providing governance infrastructure that functions across borders. However, the strength of professional governance varies enormously by country and profession, and the cluster\u2019s evidence draws primarily from well-resourced professional bodies in high-income countries."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // NoC2: Content-Only Clustering
  // ─────────────────────────────────────────────────────────
  noc2b: {
    title: "NoC2 Robustness Suite (NoC2b)",
    subtitle: "Eight follow-up analyses confirm and extend the form-vs-content decomposition",
    confidence: "moderate",
    claim: "The NoC2 finding \u2014 that canonical policy families are driven primarily by institutional form rather than substantive content \u2014 is robust across four independent tests. Word-count normalization leaves content clusters virtually unchanged (ARI = 0.982). Form alone recovers 2.8x more canonical structure than content alone (C2-only ARI = 0.545 vs NoC2 ARI = 0.197). The NC3 convergence megacluster (n=732) has minimal internal structure (optimal k=2, partial family recovery), confirming genuine content convergence. And temporal analysis reveals that convergence is NOT accelerating \u2014 NC3\u2019s share has been stable at 30\u201339% since the corpus begins, though cluster composition does shift significantly over time (\u03c7\u00b2 p < 0.001).",
    evidence: [
      {
        expert: "A4: Word-Count Normalization",
        text: "Document length does not confound the NoC2 content clusters. After OLS residualization of 125 C1 score columns against log\u2082(word count), the resulting k=5 clustering is nearly identical to raw NoC2 (ARI = 0.982, mean Jaccard = 0.980). All five content clusters survive with Jaccard \u2265 0.948. The mean absolute correlation between word count and content scores is just 0.046 \u2014 negligible. This eliminates a potential artifact: the content-only clustering is not an artifact of longer documents scoring higher on governance concepts."
      },
      {
        expert: "A5: C2-Only Clustering (The Complement)",
        text: "Clustering on institutional form alone (123 C2 columns) produces ARI = 0.545 vs canonical families \u2014 nearly three times the explanatory power of content alone (0.197). The C2-only optimal k is 9 (not 6), suggesting finer institutional distinctions than the canonical families capture. Four of six families remain INTACT under form-only clustering: Innovation Champions (84.5%), Moral Philosophers (90.4%), Rulebook Writers (66.7%), and Early Signals (62.5%). Only Watchdogs (50.7%) and Guilds (46.6%) fragment. Cramer\u2019s V = 0.55 indicates a strong \u2014 but not deterministic \u2014 association between form and content clusters, consistent with the STS caveat that form and substance are co-produced."
      },
      {
        expert: "A6: NC3 Megacluster Decomposition",
        text: "The convergence megacluster (n=732) has only weak internal structure. The optimal sub-clustering is k=2 (silhouette 0.198), with bootstrap stability of 0.773. SC0 (n=403) is a mixed governance cluster with no dominant canonical family (33% Innovation Champions, 28% Guilds, 17% Rulebook Writers). SC1 (n=329) skews toward Rulebook Writers (54.1%) and Guilds (32.5%). This PARTIAL recovery of canonical boundaries means the convergence zone is not perfectly homogeneous \u2014 there is a regulatory-leaning sub-group \u2014 but the overall conclusion holds: three institutional types produce largely interchangeable governance content."
      },
      {
        expert: "A7: Temporal Trajectory",
        text: "Contrary to the isomorphism-acceleration hypothesis, NC3\u2019s share of the corpus has been remarkably stable: 39.4% pre-2019, 29.8% in 2019\u20132021, 39.3% in 2022\u20132023, and 37.0% in 2024+. The dip in 2019\u20132021 may reflect the surge of distinctive early-adoption documents during the post-OECD-Principles period. However, the chi-squared test is highly significant (p = 4.2 \u00d7 10\u207b\u2077), confirming that cluster composition does change over time. The most striking temporal shift is NC0 (Religious Content) growing from 1.0% pre-2019 to 8.2% in 2024+ \u2014 reflecting the corpus\u2019s expanding coverage of faith-based AI governance."
      },
      {
        expert: "A5b: Nine Institutional Archetypes",
        text: "C2-only clustering at k=9 resolves finer institutional distinctions hidden by the full genome. Guilds bifurcate into Self-Regulators (industry self-governance, n=169) and Professional Gatekeepers (practitioner standards with sanction authority, n=190). Rulebook Writers split into Sovereign Regulators (national enforcement, n=351) and Standards Engineers (technical specifications, n=154). Sacred Authorities remain sui generis at 98.3% Moral Philosophers."
      },
      {
        expert: "A6/A7: NC3 Temporal Decomposition",
        text: "The regulatory sub-group (SC1) within NC3 is NOT growing \u2014 its share ranges from 41.3% to 55.2% across time bins (chi-squared p=0.061, not significant). However, SC1\u2019s internal composition is deepening: Rulebook Writers increased from 19% to 63% of SC1 between pre-2019 and 2024+. The convergence zone is compositionally stable but qualitatively shifting toward more regulatory content."
      }
    ],
    caveats: [
      {
        expert: "Methodological Perspective",
        text: "The C2-only ARI of 0.545 is high but not perfect, and the C2 matrix uses 9 clusters vs canonical 6. This means form alone does NOT perfectly reproduce the families \u2014 content does contribute, just less so. The NoC2 and C2-only analyses are not strictly complementary (ARI is not additive), so the 0.197 + 0.545 framing should be treated as directional, not exact."
      },
      {
        expert: "Temporal Perspective",
        text: "The temporal analysis is constrained by corpus construction: the 2024+ bin contains 49% of all statements, reflecting the Tapestry database\u2019s recency bias in collection. NC3 stability may partly reflect collection strategy rather than genuine policy dynamics. A time-controlled sample would be needed to definitively test convergence acceleration."
      }
    ],
    significance: [
      {
        expert: "Policy Implications",
        text: "The robustness suite establishes that the form-content decomposition is not an artifact of any single methodological choice. The convergence finding \u2014 that governments, professional bodies, and regulators produce substantively similar AI governance content \u2014 is robust to document length correction, survives the complement test, shows only minimal internal differentiation in the megacluster, and is temporally stable. This strengthens the case for studying AI governance diversity through institutional lenses rather than content analysis alone."
      },
      {
        expert: "Research Design Implications",
        text: "The NC3 temporal stability (30\u201339% throughout) suggests that content convergence is a structural feature of the AI governance landscape, not a recent trend. Researchers should not assume that increasing regulatory activity (the 2024+ surge) produces increasing homogeneity \u2014 the convergence was already present in the earliest documents."
      }
    ]
  },
  noc2: {
    title: "Content-Only Clustering (NoC2 Analysis)",
    subtitle: "Removing institutional form reveals that governance families are primarily shaped by WHO writes them, not WHAT they say",
    confidence: "moderate",
    claim: "When institutional form features (governance posture, binding nature, org type indicators) are removed from the 347-dimension Governance Genome, leaving only 224 content-driven dimensions, the canonical 6-family structure largely dissolves (ARI = 0.197). Four families retain partial coherence through content alone, but Innovation Champions completely disperses (only 35.8% in any single content cluster), and a convergence megacluster (n=732) absorbs fragments from three families \u2014 suggesting that governments, professional bodies, and regulators use remarkably similar AI governance language despite their institutional differences.",
    evidence: [
      {
        expert: "Statistics Perspective",
        text: "The ARI of 0.197 between canonical and NoC2 clusterings is only marginally above random assignment (ARI = 0). This indicates that content features alone produce a fundamentally different partitioning of the governance space. The silhouette drop from 0.155 to 0.100 at k=6 confirms that content-only clusters are less geometrically compact. The NoC2 optimal k is 5 (silhouette 0.129), not 6, suggesting content-only features support fewer natural groupings than the full feature set."
      },
      {
        expert: "Political Science Perspective",
        text: "The complete dispersal of Innovation Champions (entropy 1.70, only 35.8% in any single content cluster) is the most striking finding. National AI strategies are held together by their institutional identity as state-authored forward-looking documents, not by distinctive substantive content. When the \u2018national strategy\u2019 label is removed, their content scatters across innovation, governance, and rights themes \u2014 suggesting these documents are institutionally rather than substantively coherent."
      },
      {
        expert: "Religious Studies Perspective",
        text: "Moral Philosophers\u2019 survival (88.0% intact in NC0, entropy 0.64) demonstrates that religious governance content is genuinely sui generis. NC0 is 95.7% pure Moral Philosophers, driven by Christian/Catholic tradition markers, human dignity emphasis, and faith-science engagement. This is not institutional packaging \u2014 religious bodies produce substantively distinctive AI governance analysis that no other institutional type replicates."
      },
      {
        expert: "Governance Perspective",
        text: "The NC3 convergence megacluster (n=732) absorbs Innovation Champions (153), Guilds (219), and Rulebook Writers (248). Three institutional types \u2014 government agencies, professional associations, and regulatory bodies \u2014 appear to converge on similar governance content when their institutional identity is stripped away. This is evidence that institutional diversity may overstate substantive diversity."
      },
      {
        expert: "Data Science Perspective",
        text: "NC2 (n=276) is defined primarily by C3 anchor embeddings rather than C1 concept scores, suggesting that semantic embedding similarity captures governance patterns not reflected in keyword-based concept scoring. This cluster likely represents documents with similar rhetorical structure and framing rather than topical content."
      }
    ],
    caveats: [
      {
        expert: "STS Perspective",
        text: "Form and substance are co-produced \u2014 they cannot be cleanly separated. Removing C2 removes information that genuinely correlates with content (religious bodies write about dignity because they are religious, not coincidentally). The NoC2 analysis is a useful thought experiment but should not be interpreted as revealing \u2018true\u2019 content groupings beneath institutional \u2018noise\u2019."
      },
      {
        expert: "Computational Social Science Perspective",
        text: "The encoding asymmetry between C2 (mostly one-hot categorical, 68 of 123 columns) and C1 (continuous scores, 125 columns) means removing C2 changes the feature geometry, not just the content. Cosine distance behaves differently with fewer binary dimensions. Some of the ARI drop may be methodological rather than substantive."
      }
    ],
    significance: [
      {
        expert: "Ethics Perspective",
        text: "The convergence finding has direct implications for the ethics-washing debate. If governments, corporations, and professional bodies produce substantively similar AI governance language, this could mean either (a) genuine normative convergence on AI governance principles, or (b) performative adoption of shared vocabulary without substantive commitment. The NoC2 analysis cannot distinguish these interpretations, but it establishes the empirical fact of content convergence."
      },
      {
        expert: "Cross-Cultural Perspective",
        text: "That religious and rights-based content survive institutional form removal while innovation content does not suggests a hierarchy of substantive distinctiveness: moral traditions and human rights frameworks carry genuine content signatures, while innovation governance may be more of an institutional performance than a content category."
      }
    ]
  }

};
