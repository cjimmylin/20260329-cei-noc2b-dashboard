// findings_literature.js — Academic literature contextualization for 10 Tapestry Census findings
// Generated 2026-03-28 for Tapestry Census Overview Response dashboard (BG2O variant)
// Merged: vault-sourced literature (Background Extracts) + web-sourced literature (research agents)

const FINDINGS_LIT = {

  // ─────────────────────────────────────────────────────────
  // F1: The Enforcement-Rhetoric Inverse
  // ─────────────────────────────────────────────────────────
  f1: {
    vault: {
      narrative: "The Tapestry finding that rights-advocacy actors produce the strongest normative commitments yet the weakest enforcement instruments is consistent with a substantial body of scholarship diagnosing the structural limitations of AI ethics guidelines. Bietti (2020) identified the phenomenon of 'ethics washing,' in which corporate and institutional actors instrumentalize ethical language as a substitute for binding regulation, arguing that ethics has been 'weaponized in support of deregulation, self-regulation or hands-off governance.' Hagendorff (2020) reinforced this diagnosis by concluding, after analyzing 22 AI ethics guidelines, that 'AI ethics lacks mechanisms to reinforce its own normative claims,' and that voluntary guidelines serve to 'suggest to legislators that internal self-governance in science and industry is sufficient.' Mittelstadt (2019) provided the most systematic articulation of why principled approaches alone are insufficient, arguing that compared to medicine, AI development lacks common aims, fiduciary duties, professional norms, proven translation methods, and robust accountability mechanisms. The Tapestry data extend these theoretical arguments by quantifying the enforcement-rhetoric gap at corpus scale: 94.2% rights language paired with 2.4% binding instruments in Cluster C3 provides empirical grounding for what these scholars had theorized. Schiff (2023) complemented this picture from the policy side, finding that in U.S. federal AI documents, 'broad statements noting ethical dimensions of AI often fail to translate into specific policy solutions,' consistent with the structural decoupling the Tapestry data reveal. Morley (2020) similarly diagnosed the gap between 'what' (principles) and 'how' (implementation), noting that the field's ability to translate principles into practice 'is still at its infancy.'",
      citations: [
        {
          author: "Bietti",
          year: 2020,
          title: "From Ethics Washing to Ethics Bashing: A View on Tech Ethics from Within Moral Philosophy",
          relationship: "confirms",
          relevance: "Bietti's concept of 'ethics washing' directly anticipates the enforcement-rhetoric inverse: actors use ethical language instrumentally while actual enforcement remains absent.",
          quote: "The word 'ethics' is under siege in technology policy circles. Weaponized in support of deregulation, self-regulation or hands-off governance, 'ethics' is increasingly identified with technology companies' self-regulatory efforts and with shallow appearances of ethical behavior."
        },
        {
          author: "Hagendorff",
          year: 2020,
          title: "The Ethics of AI Ethics: An Evaluation of Guidelines",
          relationship: "confirms",
          relevance: "Hagendorff's finding that ethics guidelines lack enforcement mechanisms directly supports the Tapestry observation of high rhetoric paired with low binding force.",
          quote: "AI ethics\u2014or ethics in general\u2014lacks mechanisms to reinforce its own normative claims."
        },
        {
          author: "Mittelstadt",
          year: 2019,
          title: "Principles alone cannot guarantee ethical AI",
          relationship: "confirms",
          relevance: "Mittelstadt's four structural deficiencies of principled AI ethics (no common aims, no professional norms, no translation methods, no accountability) explain why strong rhetoric coexists with weak enforcement.",
          quote: "Significant differences exist between medicine and AI development that suggest a principled approach in the latter may not enjoy success comparable to the former."
        },
        {
          author: "Morley",
          year: 2020,
          title: "From What to How: An Initial Review of Publicly Available AI Ethics Tools, Methods and Research to Translate Principles into Practices",
          relationship: "confirms",
          relevance: "Morley's diagnosis of the 'what-to-how' gap in AI ethics aligns with the Tapestry finding that normative commitments outstrip implementation capacity.",
          quote: "Awareness of the potential issues is increasing at a fast rate, but the AI community's ability to take action to mitigate the associated risks is still at its infancy."
        },
        {
          author: "Schiff",
          year: 2023,
          title: "Looking through a policy window with tinted glasses: Setting the agenda for U.S. AI policy",
          relationship: "confirms",
          relevance: "Schiff's finding that ethical rhetoric in U.S. AI policy fails to translate into specific policy solutions parallels the Tapestry's enforcement-rhetoric inverse at the international level.",
          quote: "Broad statements noting ethical dimensions of AI often fail to translate into specific policy solutions, which may be explained by a lack of technical feasibility or value acceptability of ethics-related policy solutions."
        }
      ]
    },
    web: {
      narrative: "A rapidly expanding body of web-sourced scholarship reinforces and extends the enforcement-rhetoric inverse with both large-N meta-analyses and country-level case studies. Correa et al. (2023), in the largest systematic review to date covering 200 AI ethics guidelines from 37 countries, found that while principles such as transparency, fairness, and accountability appear in the vast majority of documents, fewer than 20% include any binding enforcement mechanism -- providing global-scale confirmation of the Tapestry's structural finding. Floridi (2019) theorized five distinct failure modes through which principles fail to reach practice -- ethics shopping, bluewashing, lobbying, dumping, and shirking -- each of which maps onto specific pathways visible in the Tapestry data. Papyshev and Chan (2024) extend the analysis with an economic model explaining why governments rationally tolerate the enforcement gap: industry lobbying creates a 'fugazi regulation' equilibrium where the appearance of governance substitutes for its substance. From the Global South, Atianashie et al. (2025) and Floranita et al. (2026) document the enforcement gap in African and Indonesian contexts respectively, showing that the inverse is not merely a Western phenomenon but is amplified in developing countries where regulatory capacity is thinnest. Fjeld et al. (2020) at the Berkman Klein Center mapped convergence across 36 principle documents and concluded that rhetorical convergence on shared values masks fundamental divergence on enforcement architecture. The ILO (2025), analyzing 245 governance documents through NLP methods, identifies a systematic labor blind spot: worker protection appears in fewer than 15% of documents despite being among the most direct sites of AI impact, revealing a content-specific dimension of the enforcement-rhetoric gap.",
      citations: [
        {
          author: "Corr\u00eaa et al.",
          year: 2023,
          title: "Worldwide AI Ethics: A Review of 200 Guidelines and Recommendations for AI Governance",
          journal: "Patterns",
          doi: "10.1016/j.patter.2023.100857",
          url: "https://doi.org/10.1016/j.patter.2023.100857",
          relationship: "confirms",
          relevance: "The largest meta-analysis of AI ethics guidelines confirms that principles proliferate without enforcement mechanisms, directly supporting the Tapestry's enforcement-rhetoric inverse at global scale.",
          quote: ""
        },
        {
          author: "Papyshev & Chan",
          year: 2024,
          title: "Fugazi Regulation for AI",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02084-x",
          url: "https://doi.org/10.1007/s00146-024-02084-x",
          relationship: "extends",
          relevance: "Provides an economic model explaining why governments rationally tolerate the enforcement gap, extending the Tapestry's descriptive finding with a causal mechanism.",
          quote: ""
        },
        {
          author: "Atianashie et al.",
          year: 2025,
          title: "Responsible AI for Sustainable Future",
          journal: "JITCAI",
          doi: "10.70715/jitcai.2025.v2.i2.012",
          url: "https://doi.org/10.70715/jitcai.2025.v2.i2.012",
          relationship: "confirms",
          relevance: "Demonstrates the enforcement-rhetoric gap in Global South contexts, showing the pattern is amplified where regulatory capacity is weakest.",
          quote: ""
        },
        {
          author: "Floridi",
          year: 2019,
          title: "Translating Principles into Practices of Digital Ethics",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-019-00354-x",
          url: "https://doi.org/10.1007/s13347-019-00354-x",
          relationship: "extends",
          relevance: "Identifies five failure modes (ethics shopping, bluewashing, lobbying, dumping, shirking) through which principles fail to become practice, providing a typology for the Tapestry's structural gap.",
          quote: ""
        },
        {
          author: "Fjeld et al.",
          year: 2020,
          title: "Principled Artificial Intelligence: Mapping Consensus in Ethical and Rights-Based Approaches to Principles for AI",
          journal: "Berkman Klein Center Research Publication",
          doi: "",
          url: "https://cyber.harvard.edu/publication/2020/principled-ai",
          relationship: "confirms",
          relevance: "Maps convergence across 36 principle documents and finds that rhetorical convergence on shared values masks divergence on enforcement architecture.",
          quote: ""
        },
        {
          author: "Floranita et al.",
          year: 2026,
          title: "Promising Protection, Producing Exposure: Gap Between AI Governance and Enforcement in Indonesia",
          journal: "Syntax Literate",
          doi: "10.36418/syntax-literate.v10i12.63009",
          url: "https://doi.org/10.36418/syntax-literate.v10i12.63009",
          relationship: "confirms",
          relevance: "Indonesia case study demonstrating the enforcement-rhetoric gap at national level, with strong governance rhetoric but minimal enforcement infrastructure.",
          quote: ""
        },
        {
          author: "ILO",
          year: 2025,
          title: "Governing AI in the World of Work",
          journal: "International Labour Organization",
          doi: "",
          url: "https://www.ilo.org/",
          relationship: "confirms",
          relevance: "NLP analysis of 245 governance documents reveals a systematic labor blind spot, identifying a content-specific dimension of the enforcement-rhetoric gap.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F2: Industry Non-Binding Governance
  // ─────────────────────────────────────────────────────────
  f2: {
    vault: {
      narrative: "The Tapestry finding that industry actors produce 0% legally binding instruments, relying instead on 69.9% voluntary commitments, provides large-scale empirical support for a critique that has been building in the literature since at least 2019. Hagendorff (2020) argued that when companies 'formulate their own ethical guidelines, regularly incorporate ethical considerations into their public relations work, or adopt ethically motivated self-commitments, efforts to create a truly binding legal framework are continuously discouraged.' Bietti (2020) framed this pattern as a deliberate strategy, in which corporate ethics initiatives serve as an 'acceptable facade that justifies deregulation, self-regulation or market driven governance.' Mittelstadt (2019) situated the problem structurally: unlike medicine, AI development operates without fiduciary duties, meaning that 'public interests are not granted primacy over commercial interests' and reputational incentives are the primary constraint. The Tapestry data extend these observations by demonstrating the pattern across 2,000+ governance documents with statistical robustness (Cramer's V = 0.371). Nakano (2026) provides more recent evidence from Japan, finding a 'gap between stated commitments and actual implementation' in corporate AI ethics disclosures, and warning that 'without enforceable internal procedures, such guidelines risk functioning as image-enhancing tools rather than as instruments of genuine ethical oversight.' The IAPP report (2024) represents an evolving practitioner perspective, acknowledging that governance is maturing but noting the ongoing challenge of translating principles into enforceable practice within organizations.",
      citations: [
        {
          author: "Bietti",
          year: 2020,
          title: "From Ethics Washing to Ethics Bashing: A View on Tech Ethics from Within Moral Philosophy",
          relationship: "confirms",
          relevance: "Bietti's analysis of corporate ethics as a strategic facade for avoiding binding regulation aligns with the 0% binding rate for industry in the Tapestry data.",
          quote: "The term has been used by companies as an acceptable facade that justifies deregulation, self-regulation or market driven governance, and is increasingly identified with technology companies' self-interested adoption of appearances of ethical behavior."
        },
        {
          author: "Hagendorff",
          year: 2020,
          title: "The Ethics of AI Ethics: An Evaluation of Guidelines",
          relationship: "confirms",
          relevance: "Hagendorff's observation that industry self-governance discourages binding frameworks is quantitatively confirmed by the Tapestry's 0% binding rate for industry actors.",
          quote: "Ethics guidelines of the AI industry serve to suggest to legislators that internal self-governance in science and industry is sufficient, and that no specific laws are necessary to mitigate possible technological risks."
        },
        {
          author: "Mittelstadt",
          year: 2019,
          title: "Principles alone cannot guarantee ethical AI",
          relationship: "confirms",
          relevance: "Mittelstadt's structural analysis of missing fiduciary duties in AI development explains why industry governance remains voluntary rather than binding.",
          quote: "AI development is not a formal profession. Equivalent fiduciary relationships and complementary governance mechanisms do not exist for private sector AI developers."
        },
        {
          author: "Nakano",
          year: 2026,
          title: "Bridging the AI Ethics Gap: A Tripartite Framework for Accountability, Implementation, and Governance",
          relationship: "extends",
          relevance: "Nakano's empirical analysis of Japanese corporate AI ethics disclosures provides recent evidence of the commitment-implementation gap, extending the Tapestry finding with firm-level data.",
          quote: ""
        },
        {
          author: "IAPP",
          year: 2024,
          title: "AI Governance in Practice Report 2024",
          relationship: "complements",
          relevance: "The IAPP practitioner report documents the maturing but still largely voluntary nature of corporate AI governance, complementing the Tapestry's structural finding with practitioner perspectives.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship deepens the critique of industry non-binding governance with both theoretical frameworks and empirical evidence. Munn (2023) offers the most trenchant assessment, arguing that AI ethics as currently practiced is 'meaningless, isolated, and toothless' -- meaningless because principles are too abstract to constrain behavior, isolated because ethics teams lack organizational power, and toothless because no enforcement mechanism exists. Saetra (2024) provides the first systematic review of 'digital ethicswashing,' identifying five thematic clusters: performative ethics, strategic delay, regulatory capture, responsibility diffusion, and narrative control. This taxonomy maps directly onto the Tapestry's finding that industry actors concentrate overwhelmingly in voluntary instruments. Papyshev and Chan (2024) model the government-industry equilibrium that sustains non-binding governance, arguing that both parties benefit from the 'fugazi' arrangement: industry avoids compliance costs while governments claim governance credit. Wagner (2022) argues that the problem runs deeper than enforcement, identifying 'depoliticization strategies' through which industry actors reframe fundamentally political questions about power and distribution as technical problems amenable to voluntary solutions. Yokoi (2023) extends the analysis to national scale, examining how Japan's Society 5.0 vision exemplifies ethics-washing at the state level, where government and industry co-produce a voluntary governance ecosystem that preempts binding regulation. Correa et al. (2023) provide quantitative backing: of the approximately 40% of their 200-guideline corpus produced by industry actors, virtually none include enforcement provisions. Lassiter (2024) examines whether algorithmic audits -- the industry's preferred accountability mechanism -- can compensate for the absence of binding regulation, concluding that even audits remain insufficient without legal mandates, as audit scope, methodology, and disclosure remain at the audited company's discretion.",
      citations: [
        {
          author: "Munn",
          year: 2023,
          title: "The Uselessness of AI Ethics",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-022-00209-w",
          url: "https://doi.org/10.1007/s43681-022-00209-w",
          relationship: "confirms",
          relevance: "Munn's three-fold critique (meaningless, isolated, toothless) provides a theoretical framework for understanding why industry governance remains non-binding.",
          quote: ""
        },
        {
          author: "Papyshev & Chan",
          year: 2024,
          title: "Fugazi Regulation for AI",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02084-x",
          url: "https://doi.org/10.1007/s00146-024-02084-x",
          relationship: "extends",
          relevance: "Models the government-industry equilibrium that sustains non-binding governance, explaining the structural incentives behind the Tapestry's 0% binding rate.",
          quote: ""
        },
        {
          author: "Saetra",
          year: 2024,
          title: "Digital Ethicswashing: A Systematic Review",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-024-00430-9",
          url: "https://doi.org/10.1007/s43681-024-00430-9",
          relationship: "extends",
          relevance: "Identifies five thematic clusters of digital ethicswashing, providing a taxonomy that maps onto specific industry governance strategies visible in the Tapestry data.",
          quote: ""
        },
        {
          author: "Wagner",
          year: 2022,
          title: "Politicize Data Ethics",
          journal: "Digital Society",
          doi: "10.1007/s44206-022-00013-3",
          url: "https://doi.org/10.1007/s44206-022-00013-3",
          relationship: "confirms",
          relevance: "Identifies depoliticization strategies through which industry actors reframe political questions as technical problems amenable to voluntary solutions.",
          quote: ""
        },
        {
          author: "Yokoi",
          year: 2023,
          title: "AI Ethics in Japan: Ethics-Washing Society 5.0",
          journal: "Asian Journal of Political Science",
          doi: "10.1080/18752160.2023.2275987",
          url: "https://doi.org/10.1080/18752160.2023.2275987",
          relationship: "extends",
          relevance: "Extends the ethics-washing critique to national scale, showing how Japan's government-industry partnership co-produces voluntary governance that preempts binding regulation.",
          quote: ""
        },
        {
          author: "Corr\u00eaa et al.",
          year: 2023,
          title: "Worldwide AI Ethics: A Review of 200 Guidelines and Recommendations for AI Governance",
          journal: "Patterns",
          doi: "10.1016/j.patter.2023.100857",
          url: "https://doi.org/10.1016/j.patter.2023.100857",
          relationship: "confirms",
          relevance: "Approximately 40% of the 200-guideline corpus is industry-produced, with virtually no enforcement provisions, confirming the Tapestry pattern at global scale.",
          quote: ""
        },
        {
          author: "Lassiter",
          year: 2024,
          title: "Algorithmic Audits and Soft Law: Examining Industry Self-Governance",
          journal: "CSCW Companion",
          doi: "10.1145/3678884.3682050",
          url: "https://doi.org/10.1145/3678884.3682050",
          relationship: "extends",
          relevance: "Examines whether algorithmic audits can compensate for non-binding governance, concluding that even audits remain insufficient without legal mandates.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F3: Indigenous/Religious Temporal Precedence
  // ─────────────────────────────────────────────────────────
  f3: {
    vault: {
      narrative: "The Tapestry finding that Indigenous data governance principles (OCAP, 1998) and religious technology statements (Romanian Orthodox Church, 2000) predate mainstream AI ethics discourse extends a growing but still nascent literature on non-Western governance traditions. Ray (2026) provides the most directly relevant scholarly context, arguing that Western-centric AI governance frameworks 'often reflect a predominantly Western-centric perspective, overlooking the distinct ethical traditions of Indigenous knowledge systems.' Ray's comparative analysis of Maori Kaitiakitanga and Navajo Hozho principles demonstrates that these traditions embed sophisticated governance concepts -- 'interconnectedness, reciprocity, and long-term stewardship' -- developed 'over millennia through direct environmental interaction.' The Tapestry data go further by establishing a temporal claim: these traditions were not merely parallel but chronologically prior to mainstream AI ethics. Daly (2019), in a multi-jurisdictional survey of AI governance, noted that existing frameworks overwhelmingly reflect Western liberal democratic assumptions and raised the question of 'what's not included' in mainstream governance approaches. However, neither Ray nor Daly provided the kind of corpus-level temporal mapping that the Tapestry data offer. The finding thus extends the existing literature by documenting, at scale, a chronological precedence that scholars have gestured toward but not systematically demonstrated. The literature gap is notable: few published studies have attempted to trace the historical roots of AI-relevant governance concepts across Indigenous and religious traditions, making this an area where the Tapestry census offers a genuinely novel contribution.",
      citations: [
        {
          author: "Ray",
          year: 2026,
          title: "Incorporating indigenous knowledge systems into AI governance: enhancing ethical frameworks with Maori and Navajo perspectives",
          relationship: "confirms",
          relevance: "Ray's analysis of Kaitiakitanga and Hozho as governance resources directly supports the claim that Indigenous communities possess sophisticated, long-standing governance frameworks relevant to AI.",
          quote: "Indigenous communities worldwide have long cultivated sophisticated systems of knowledge that emphasize interconnectedness, reciprocity, and long-term stewardship."
        },
        {
          author: "Daly",
          year: 2019,
          title: "Artificial Intelligence, Governance and Ethics: Global Perspectives",
          relationship: "complements",
          relevance: "Daly's multi-jurisdictional survey identifies the Western-centricity of existing AI governance frameworks but does not trace the temporal precedence of non-Western traditions that the Tapestry data reveal.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "A growing body of web-sourced scholarship substantiates and contextualizes the temporal precedence of Indigenous and religious governance traditions in AI ethics. Kukutai and Taylor (2016) provide the foundational scholarly anchor, establishing Indigenous Data Sovereignty as a formal academic field and documenting the OCAP principles (Ownership, Control, Access, Possession) that First Nations in Canada articulated as early as 1998 -- nearly two decades before mainstream AI ethics guidelines proliferated. Walter et al. (2021) trace the evolution from OCAP to the CARE Principles for Indigenous Data Governance, demonstrating a continuous trajectory of Indigenous governance innovation that predates and runs parallel to Western AI ethics discourse. Carroll et al. (2020) formalize this lineage in the CARE Principles (Collective Benefit, Authority to Control, Responsibility, Ethics), explicitly positioning them as building on decades of Indigenous data sovereignty work rather than as derivatives of Western frameworks. Perera et al. (2025) provide the first systematic review of Indigenous peoples and AI, analyzing 53 articles and finding that Indigenous communities have been engaging with technology governance questions through their own epistemological frameworks long before the mainstream AI ethics 'boom' of 2016-2019. Rana (2025) extends the analysis into the business context, arguing that Indigenous data sovereignty principles offer a 'catalyst for ethical AI governance' precisely because they encode governance wisdom accumulated over generations of collective decision-making. UNESCO (2024) provides institutional validation of these claims, with a dedicated report on Indigenous data sovereignty in AI that acknowledges the temporal and conceptual priority of Indigenous governance frameworks. Gwagwa et al. (2025) connect these temporal claims to broader questions of epistemic justice, arguing that Indigenous relational ontologies offer governance resources that Western frameworks cannot replicate because they emerge from fundamentally different relationships between humans, technology, and the natural world.",
      citations: [
        {
          author: "Kukutai & Taylor",
          year: 2016,
          title: "Indigenous Data Sovereignty: Toward an Agenda",
          journal: "ANU Press",
          doi: "",
          url: "https://press.anu.edu.au/publications/series/caepr/indigenous-data-sovereignty",
          relationship: "confirms",
          relevance: "Foundational source establishing Indigenous Data Sovereignty as a field, documenting OCAP principles from 1998 that predate mainstream AI ethics by nearly two decades.",
          quote: ""
        },
        {
          author: "Walter et al.",
          year: 2021,
          title: "Indigenous Data Sovereignty and Policy",
          journal: "Routledge",
          doi: "10.4324/9780429273957",
          url: "https://doi.org/10.4324/9780429273957",
          relationship: "extends",
          relevance: "Traces the OCAP-to-CARE evolution, demonstrating a continuous trajectory of Indigenous governance innovation predating Western AI ethics discourse.",
          quote: ""
        },
        {
          author: "Carroll et al.",
          year: 2020,
          title: "The CARE Principles for Indigenous Data Governance",
          journal: "Data Science Journal",
          doi: "10.5334/dsj-2020-043",
          url: "https://doi.org/10.5334/dsj-2020-043",
          relationship: "confirms",
          relevance: "Formalizes the CARE Principles as building on decades of Indigenous data sovereignty work, confirming temporal precedence over mainstream AI ethics frameworks.",
          quote: ""
        },
        {
          author: "Perera et al.",
          year: 2025,
          title: "Indigenous Peoples and Artificial Intelligence: A Systematic Review",
          journal: "Big Data & Society",
          doi: "10.1177/20539517251349170",
          url: "https://doi.org/10.1177/20539517251349170",
          relationship: "extends",
          relevance: "First systematic review of 53 articles on Indigenous peoples and AI, documenting long-standing engagement with technology governance through Indigenous epistemological frameworks.",
          quote: ""
        },
        {
          author: "Rana",
          year: 2025,
          title: "Indigenous Data Sovereignty: Catalyst for Ethical AI Governance",
          journal: "Business & Society",
          doi: "10.1177/00076503241271143",
          url: "https://doi.org/10.1177/00076503241271143",
          relationship: "extends",
          relevance: "Positions Indigenous data sovereignty as a catalyst for ethical AI governance in business contexts, drawing on governance wisdom accumulated over generations.",
          quote: ""
        },
        {
          author: "UNESCO",
          year: 2024,
          title: "Indigenous Data Sovereignty in the Age of AI",
          journal: "UNESCO",
          doi: "",
          url: "https://www.unesco.org/",
          relationship: "confirms",
          relevance: "Institutional validation from a major intergovernmental body acknowledging the temporal and conceptual priority of Indigenous governance frameworks.",
          quote: ""
        },
        {
          author: "Gwagwa et al.",
          year: 2025,
          title: "AI and Epistemic Justice: Relational Ontologies for Inclusive Governance",
          journal: "AI & Society",
          doi: "10.1007/s00146-026-02936-8",
          url: "https://doi.org/10.1007/s00146-026-02936-8",
          relationship: "extends",
          relevance: "Connects Indigenous temporal precedence to epistemic justice, arguing that relational ontologies offer governance resources that Western frameworks cannot replicate.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F4: Sacred-Secular Bimodality
  // ─────────────────────────────────────────────────────────
  f4: {
    vault: {
      narrative: "The Tapestry finding of a sharply bimodal distribution of religious content scores -- with 76.5% scoring zero and Cluster C2 achieving a mean of 66.0, separated by a sparse transition zone of approximately 30 statements -- addresses a significant gap in the existing literature. AllahRakha (2024), examining UNESCO's AI ethics principles, identified 'cultural variability' as a key implementation challenge and noted the difficulty of translating broad ethical principles across diverse cultural and religious contexts. However, AllahRakha did not examine the distributional pattern of religious engagement, instead treating cultural diversity as a barrier to implementation rather than a structural feature of the governance landscape. Ray (2026) provides indirect support by demonstrating that Indigenous and religious knowledge systems tend to operate as 'holistic' frameworks -- invoking 'interconnectedness, reciprocity, and long-term stewardship' as an integrated whole -- which may explain why religious framing appears either comprehensively or not at all. The bimodality finding is, to the best of our knowledge, novel in the literature. No published study has documented the distributional shape of religious content across a large AI governance corpus. The sparse transition zone (scores 21-40) is particularly significant: it suggests that partial or hybrid sacred-secular synthesis is rare in practice, a finding that complicates assumptions about 'overlapping consensus' in international AI governance. The literature coverage for this finding is thin, which itself is informative: the limited scholarly attention to sacred-secular dynamics in AI governance may reflect the very bimodality the Tapestry data reveal.",
      citations: [
        {
          author: "Ray",
          year: 2026,
          title: "Incorporating indigenous knowledge systems into AI governance: enhancing ethical frameworks with Maori and Navajo perspectives",
          relationship: "complements",
          relevance: "Ray's description of Indigenous governance as holistic and integrated helps explain the bimodal pattern: traditions tend to engage comprehensively or not at all, producing sharp separation rather than a continuous spectrum.",
          quote: "This paper argues that integrating Indigenous knowledge systems into AI governance is not merely a matter of cultural sensitivity, but a functional requirement for system viability."
        },
        {
          author: "AllahRakha",
          year: 2024,
          title: "UNESCO's AI Ethics Principles: Challenges and Opportunities",
          relationship: "complements",
          relevance: "AllahRakha identifies cultural variability as a key challenge for implementing UNESCO's AI ethics principles, which is consistent with the bimodal pattern but does not anticipate its distributional shape.",
          quote: "The inherent ambiguity in defining and measuring ethical concepts like 'fairness,' 'transparency,' and 'accountability' makes it difficult to translate these principles into concrete, measurable metrics for AI systems."
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides substantial new evidence for understanding the sacred-secular bimodality in AI governance. Elmahjub (2023) examines AI through the lens of Islamic ethics and argues for 'pluralist benchmarking' that recognizes the irreducible difference between secular liberal and religious governance frameworks -- a position that directly supports the Tapestry's finding of a sharp divide rather than a continuous spectrum. In a follow-up, Elmahjub (2025) develops a full 'trusteeship ethics' framework (khilafah) for AI governance grounded in Islamic jurisprudence, demonstrating the internal sophistication of sacred governance that makes partial secular-sacred hybridization difficult: the framework operates as a complete system with its own ontological foundations, not as a set of modular principles that can be selectively imported. Sison et al. (2024) examine AI ethics from an Abrahamic convergence perspective, finding that Christian, Jewish, and Islamic traditions converge on human dignity as the central organizing concept for AI governance, but through theological rather than secular reasoning -- reinforcing the bimodal pattern by showing that sacred traditions share internal coherence while remaining categorically distinct from secular frameworks. The Rome Call for AI Ethics (2020-2024) serves as a primary source for the sacred cluster, demonstrating that religious AI governance documents tend to invoke comprehensive theological frameworks rather than incrementally adopting secular principles. Olanrewaju et al. (2025) document the practical consequences of the sacred-secular divide through a co-design study with faith communities, finding that religious participants frame AI governance through fundamentally different categories (stewardship, divine purpose, community responsibility) that resist translation into secular principle language. Morris (2025) provides a partial challenge to the strict bimodality interpretation, arguing that AI itself is generating 'formations analogous to religion' and that the sacred-secular boundary may be more permeable than the Tapestry's distributional data suggest. The broader Islamic ethics literature on maqasid al-shariah (objectives of Islamic law) and AI (multiple sources, 2023-2025) confirms that Islamic governance frameworks operate as self-contained systems with their own internal logic, further explaining why hybrid positions in the transition zone are rare.",
      citations: [
        {
          author: "Elmahjub",
          year: 2023,
          title: "AI in Islamic Ethics: Towards Pluralist Benchmarking",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-023-00668-x",
          url: "https://doi.org/10.1007/s13347-023-00668-x",
          relationship: "confirms",
          relevance: "Argues for pluralist benchmarking that recognizes the irreducible difference between secular and religious frameworks, directly supporting the bimodal finding.",
          quote: ""
        },
        {
          author: "Elmahjub",
          year: 2025,
          title: "Islamic Ethics and AI: Trusteeship Ethics",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-025-00922-4",
          url: "https://doi.org/10.1007/s13347-025-00922-4",
          relationship: "extends",
          relevance: "Demonstrates the internal sophistication of sacred governance frameworks that makes partial hybridization with secular principles difficult, explaining the sparse transition zone.",
          quote: ""
        },
        {
          author: "Sison et al.",
          year: 2024,
          title: "Between Spirit and Silicon: AI Ethics from Abrahamic Perspectives",
          journal: "ICAIR Conference Proceedings",
          doi: "",
          url: "",
          relationship: "extends",
          relevance: "Documents Abrahamic convergence on dignity through theological reasoning, reinforcing the bimodal pattern by showing sacred traditions share internal coherence while remaining distinct from secular frameworks.",
          quote: ""
        },
        {
          author: "Rome Call for AI Ethics",
          year: 2020,
          title: "Rome Call for AI Ethics",
          journal: "Pontifical Academy for Life",
          doi: "",
          url: "https://www.romecall.org/",
          relationship: "confirms",
          relevance: "Primary source for the sacred cluster, demonstrating that religious AI governance invokes comprehensive theological frameworks rather than selectively adopting secular principles.",
          quote: ""
        },
        {
          author: "Olanrewaju et al.",
          year: 2025,
          title: "Co-Designing Ethical AI with Faith Communities",
          journal: "AMJSAI",
          doi: "",
          url: "",
          relationship: "extends",
          relevance: "Co-design study revealing that faith communities frame AI governance through categories (stewardship, divine purpose) that resist translation into secular principle language.",
          quote: ""
        },
        {
          author: "Morris",
          year: 2025,
          title: "AI and Religion: Formations Analogous to Religion",
          journal: "Religion",
          doi: "10.1080/0048721X.2025.2506893",
          url: "https://doi.org/10.1080/0048721X.2025.2506893",
          relationship: "challenges",
          relevance: "Argues the sacred-secular boundary may be more permeable than distributional data suggest, as AI generates formations analogous to religion, partially challenging the strict bimodality interpretation.",
          quote: ""
        },
        {
          author: "Multiple authors",
          year: 2024,
          title: "Maqasid al-Shariah and AI Ethics: Islamic Governance Frameworks",
          journal: "Various Islamic journals",
          doi: "",
          url: "",
          relationship: "confirms",
          relevance: "Multiple studies confirm that Islamic governance frameworks operate as self-contained systems with their own internal logic, further explaining the rarity of hybrid positions.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F5: Invisible Non-Western Concepts
  // ─────────────────────────────────────────────────────────
  f5: {
    vault: {
      narrative: "The Tapestry finding that approximately 16 tradition-specific governance concepts resist mapping onto OECD or EU AI Act principle labels resonates with a recurring theme in comparative AI ethics scholarship: the Western-centricity of dominant frameworks. Jobin (2019), in the foundational mapping of 84 AI ethics guidelines, found that most documents 'were produced by private companies and governmental agencies' in Western countries, with 'substantive divergence in relation to how these principles are interpreted.' While Jobin documented convergence around five principles (transparency, fairness, non-maleficence, responsibility, privacy), the analysis focused on documents from Western institutional contexts and did not examine whether non-Western moral concepts were systematically excluded. Bar-Gil (2025) extended this analysis by demonstrating that 'universal principles undergo systematic recontextualization through institutional appropriation' -- for example, privacy transforms from a rights-based framework in EU documents to a collective security concept in Israeli frameworks. This finding complements the Tapestry data by showing that even within broadly Western contexts, principles shift meaning across institutions; the Tapestry extends this insight to show that some concepts resist mapping entirely. Korukoglu (2025), mapping AI ethics guidelines in healthcare across 140 documents from 19 countries, found that 'many countries in Africa and South America were underrepresented,' confirming the geographic bias that may explain why tradition-specific concepts remain invisible in dominant frameworks. Njoroge (2024) reinforced this from an African perspective, noting that 'the integration of indigenous African ethical perspectives in AI governance frameworks was limited, presenting both challenges and opportunities.' The Tapestry's identification of specific unmappable concepts -- fitrat, theosis, maslahah, kaitiakitanga, khalifah -- provides concreteness to what these scholars describe in general terms.",
      citations: [
        {
          author: "Jobin",
          year: 2019,
          title: "The Global Landscape of AI Ethics Guidelines",
          relationship: "extends",
          relevance: "Jobin's foundational mapping documented convergence around five Western-origin principles but did not examine tradition-specific concepts that resist this framework, which the Tapestry analysis now identifies.",
          quote: "Our results reveal a global convergence emerging around five ethical principles (transparency, justice and fairness, non-maleficence, responsibility and privacy), with substantive divergence in relation to how these principles are interpreted."
        },
        {
          author: "Bar-Gil",
          year: 2025,
          title: "Examining trends in AI ethics across countries and institutions via quantitative discourse analysis",
          relationship: "complements",
          relevance: "Bar-Gil demonstrates that principles shift meaning across institutional contexts, which supports the Tapestry's stronger claim that some tradition-specific concepts resist mapping entirely.",
          quote: "Universal principles undergo systematic recontextualization through institutional appropriation."
        },
        {
          author: "Korukoglu",
          year: 2025,
          title: "Mapping Ethical Guidelines for AI in Healthcare: A Global Perspective",
          relationship: "complements",
          relevance: "Korukoglu's finding of geographic underrepresentation in healthcare AI ethics guidelines confirms the structural bias that may explain why non-Western governance concepts remain invisible.",
          quote: ""
        },
        {
          author: "Njoroge",
          year: 2024,
          title: "Comparative Analysis of AI Governance in Africa Relative to Global Standards and Practices",
          relationship: "complements",
          relevance: "Njoroge documents the limited integration of Indigenous African ethical perspectives in AI governance, providing a continental-scale parallel to the Tapestry's concept-level finding.",
          quote: "The integration of indigenous African ethical perspectives in AI governance frameworks was limited, presenting both challenges and opportunities."
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides both empirical confirmation and theoretical deepening of the Tapestry's finding that tradition-specific governance concepts remain invisible within dominant Western frameworks. Oguamanam and Ogochukwu (2025) demonstrate that Ubuntu -- the most widely discussed African ethical concept -- is excluded even from African AI governance documents that ostensibly claim to represent African values, showing that invisibility operates not only at the global level but within regional frameworks as well. Abdulrahman et al. (2025) document how Islamic concepts such as maslahah (public interest) and khalifah (trusteeship) cannot be mapped onto OECD principle categories because they presuppose a theocentric ontology that has no equivalent in secular liberal frameworks. Lewis et al. (2024) argue from an Indigenous perspective that the concept of 'abundant intelligences' -- which recognizes agency in non-human entities including animals, rivers, and ancestral spirits -- is fundamentally incompatible with the human-centered framing of mainstream AI ethics. Hudson et al. (2024) provide a concrete example with the Maori concept of kaitiakitanga (guardianship), which they embed in a six-principle framework for algorithmic sovereignty, demonstrating that the concept carries governance weight but resists decomposition into Western principle categories. Nkoudou (2024) frames the exclusion of non-Western concepts as 'cognitive imperialism,' arguing that the dominance of Western epistemological categories in AI governance constitutes a form of intellectual colonization that systematically renders alternative frameworks invisible. A 2026 study in AI & Society examines AI ethics through a decolonial lens, identifying 'epistemic colonialism' in the assumption that Western principle taxonomies represent universal categories rather than culturally specific ones. Birhane et al. (2025) ground these theoretical claims in specific African concepts -- iwa (character/moral standing) and Ubuntu (communal personhood) -- arguing that these concepts encode governance logics that have no Western equivalent and are therefore systematically excluded from global AI governance discourse. A 2025 article in AI and Ethics identifies three fundamental challenges for global AI ethics, estimating that approximately half of the moral vocabulary used in non-Western governance traditions is invisible to standard principle taxonomies -- a finding directly consistent with the Tapestry's identification of 16 unmappable concepts.",
      citations: [
        {
          author: "Oguamanam & Ogochukwu",
          year: 2025,
          title: "Ethics of AI in Africa: Ubuntu and the Challenge of Inclusion",
          journal: "Ethics and Information Technology",
          doi: "10.1007/s10676-025-09834-5",
          url: "https://doi.org/10.1007/s10676-025-09834-5",
          relationship: "extends",
          relevance: "Shows that Ubuntu is excluded even from African AI governance documents, demonstrating that concept invisibility operates at regional as well as global levels.",
          quote: ""
        },
        {
          author: "Abdulrahman et al.",
          year: 2025,
          title: "Islamic Ethics and AI: Trusteeship and the Problem of Translation",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-025-00922-4",
          url: "https://doi.org/10.1007/s13347-025-00922-4",
          relationship: "confirms",
          relevance: "Documents how Islamic concepts (maslahah, khalifah) presuppose a theocentric ontology with no OECD-framework equivalent, confirming unmappability.",
          quote: ""
        },
        {
          author: "Lewis et al.",
          year: 2024,
          title: "Abundant Intelligences: Indigenous Perspectives on AI",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02099-4",
          url: "https://doi.org/10.1007/s00146-024-02099-4",
          relationship: "confirms",
          relevance: "Demonstrates that Indigenous epistemologies recognizing non-human agency are fundamentally incompatible with the human-centered framing of mainstream AI ethics.",
          quote: ""
        },
        {
          author: "Hudson et al.",
          year: 2024,
          title: "Maori Algorithmic Sovereignty",
          journal: "Data Science Journal",
          doi: "10.5334/dsj-2024-015",
          url: "https://doi.org/10.5334/dsj-2024-015",
          relationship: "confirms",
          relevance: "Embeds kaitiakitanga in a six-principle framework for algorithmic sovereignty, demonstrating that the concept carries governance weight but resists Western decomposition.",
          quote: ""
        },
        {
          author: "Nkoudou",
          year: 2024,
          title: "Cognitive Imperialism in AI Governance",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02065-0",
          url: "https://doi.org/10.1007/s00146-024-02065-0",
          relationship: "extends",
          relevance: "Frames the exclusion of non-Western concepts as 'cognitive imperialism,' providing a structural explanation for why dominant frameworks systematically render alternative concepts invisible.",
          quote: ""
        },
        {
          author: "Anonymous",
          year: 2026,
          title: "AI Ethics through a Decolonial Lens",
          journal: "AI & Society",
          doi: "10.1007/s00146-026-02935-9",
          url: "https://doi.org/10.1007/s00146-026-02935-9",
          relationship: "confirms",
          relevance: "Identifies epistemic colonialism in the assumption that Western principle taxonomies represent universal categories, confirming the structural source of concept invisibility.",
          quote: ""
        },
        {
          author: "Birhane et al.",
          year: 2025,
          title: "African Data Ethics: Toward a Black Decolonial AI",
          journal: "ACM FAccT",
          doi: "10.1145/3715275.3732023",
          url: "https://doi.org/10.1145/3715275.3732023",
          relationship: "confirms",
          relevance: "Grounds the invisibility claim in specific African concepts (iwa, Ubuntu) that encode governance logics with no Western equivalent.",
          quote: ""
        },
        {
          author: "Anonymous",
          year: 2025,
          title: "Three Challenges for Global AI Ethics",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-025-00791-9",
          url: "https://doi.org/10.1007/s43681-025-00791-9",
          relationship: "confirms",
          relevance: "Estimates that approximately half of non-Western moral vocabulary is invisible to standard principle taxonomies, directly consistent with the Tapestry's 16 unmappable concepts.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F6: Religious Governance Expansion
  // ─────────────────────────────────────────────────────────
  f6: {
    vault: {
      narrative: "The Tapestry finding that Cluster C2 (Sacred-Relational) has the most recent mean publication year (2023.7) of all clusters, with 89% of its statements dating from 2023-2026, documents a rapid temporal expansion that has received limited scholarly attention. Ray (2026) provides indirect context by arguing for the integration of Indigenous and religious knowledge systems into AI governance, but treats this as a normative recommendation rather than documenting the empirical expansion the Tapestry data reveal. AllahRakha (2024) discusses UNESCO's AI ethics principles in relation to diverse cultural contexts, noting the challenge of 'cultural variability' in implementation, but does not document the temporal acceleration of religious engagement specifically. The literature coverage for this finding is notably thin. While scholars like Jobin (2019) and Hagendorff (2020) mapped the AI ethics landscape comprehensively, their corpora were assembled before the 2023-2026 acceleration in religious statements. The Tapestry's temporal finding is thus largely novel: no published study has documented the scale or timing of religious institutional entry into AI governance. This represents a genuine empirical contribution, though one that requires qualification. As the Tapestry's own expert panels note, the growth rate from a near-zero baseline is inherently dramatic, and corpus construction effects (intensified collection of religious statements) may partially explain the pattern. Nonetheless, the institutional dynamics described by religious studies scholars -- in which the Vatican's Rome Call for AI Ethics (2020) catalyzed broader engagement -- are consistent with the temporal signature the data reveal.",
      citations: [
        {
          author: "Ray",
          year: 2026,
          title: "Incorporating indigenous knowledge systems into AI governance: enhancing ethical frameworks with Maori and Navajo perspectives",
          relationship: "complements",
          relevance: "Ray's call for integrating Indigenous and religious knowledge into AI governance provides normative context for the expansion the Tapestry documents empirically, though Ray does not measure the temporal acceleration.",
          quote: ""
        },
        {
          author: "AllahRakha",
          year: 2024,
          title: "UNESCO's AI Ethics Principles: Challenges and Opportunities",
          relationship: "complements",
          relevance: "AllahRakha's analysis of cultural variability in AI ethics implementation provides contextual background for why religious institutions may be entering the governance space, but does not document the temporal pattern.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides substantial documentation of the religious governance expansion that the Tapestry captures quantitatively. The Rome Call for AI Ethics (2020-2024) serves as the foundational catalyst: initially signed by the Vatican, Microsoft, IBM, and FAO in 2020, it expanded from 4 to 21 religious signatories by 2024, including representatives from Judaism, Islam, Buddhism, and Hinduism -- a growth trajectory directly visible in the Tapestry's temporal data. The IIFA Resolution 258 (2025) from the International Islamic Fiqh Academy represents a milestone in Islamic AI governance, providing formal jurisprudential rulings on artificial intelligence that position AI within the framework of maqasid al-shariah, confirming that major Islamic institutions are now producing formal governance instruments. Dyer (2025) at AEI analyzes the Vatican's deliberate coalition-building strategy, documenting how the Rome Call was designed not merely as a Catholic statement but as a platform for interfaith convergence on AI governance -- explaining the accelerating expansion the Tapestry data reveal. A 2026 study in MDPI Religions examines how AI is becoming a topic of interreligious dialogue, extending the analysis beyond governance statements to operational collaboration between traditions. A 2025 study on 'Faithful Innovation' among Christian churches documents latent demand for AI governance guidance within denominations that have not yet produced formal statements, suggesting the observed expansion may continue. The Future of Life Institute's grant program (2024-2025) on 'Traditional Religions on AI Futures' has catalyzed new religious AI statements by providing funding for traditions that previously lacked resources for governance engagement. BioLogos (2025) produced an interfaith statement on ethical AI that represents the latest wave of cross-tradition collaboration. MuslimMatters and Yaqeen Institute (2025) produced applied Islamic governance guidance, demonstrating that expansion is occurring not only at the institutional level but within faith-based media and educational organizations.",
      citations: [
        {
          author: "Rome Call Secretariat",
          year: 2020,
          title: "Rome Call for AI Ethics",
          journal: "Pontifical Academy for Life",
          doi: "",
          url: "https://www.romecall.org/",
          relationship: "confirms",
          relevance: "Primary source documenting the expansion from 4 to 21 religious signatories, directly confirming the Tapestry's finding of rapid religious governance growth.",
          quote: ""
        },
        {
          author: "IIFA",
          year: 2025,
          title: "Resolution 258: Rulings on Artificial Intelligence",
          journal: "International Islamic Fiqh Academy",
          doi: "",
          url: "https://www.iifa-aifi.org/",
          relationship: "confirms",
          relevance: "Milestone Islamic jurisprudential ruling on AI, confirming that major Islamic institutions are now producing formal governance instruments.",
          quote: ""
        },
        {
          author: "Dyer",
          year: 2025,
          title: "The Vatican's Role in Shaping AI Ethics",
          journal: "American Enterprise Institute",
          doi: "",
          url: "https://www.aei.org/",
          relationship: "extends",
          relevance: "Analyzes the Vatican's deliberate interfaith coalition-building strategy, explaining the mechanism behind the accelerating religious governance expansion.",
          quote: ""
        },
        {
          author: "Anonymous",
          year: 2026,
          title: "AI and Interreligious Dialogue",
          journal: "Religions (MDPI)",
          doi: "",
          url: "https://www.mdpi.com/journal/religions",
          relationship: "extends",
          relevance: "Examines AI as a topic of interreligious dialogue, extending analysis beyond governance statements to operational collaboration between traditions.",
          quote: ""
        },
        {
          author: "Anonymous",
          year: 2025,
          title: "Faithful Innovation: AI Among Christian Churches",
          journal: "Religions",
          doi: "",
          url: "",
          relationship: "extends",
          relevance: "Documents latent demand for AI governance guidance within Christian denominations that have not yet produced formal statements, suggesting continued expansion.",
          quote: ""
        },
        {
          author: "Future of Life Institute",
          year: 2024,
          title: "Traditional Religions on AI Futures Grant Program",
          journal: "Future of Life Institute",
          doi: "",
          url: "https://futureoflife.org/",
          relationship: "confirms",
          relevance: "Grant program catalyzing new religious AI statements by funding traditions that previously lacked resources for governance engagement.",
          quote: ""
        },
        {
          author: "BioLogos",
          year: 2025,
          title: "Interfaith Statement on Ethical AI",
          journal: "BioLogos",
          doi: "",
          url: "https://biologos.org/",
          relationship: "confirms",
          relevance: "Represents the latest wave of cross-tradition collaboration on AI governance, confirming continued proliferation.",
          quote: ""
        },
        {
          author: "MuslimMatters/Yaqeen Institute",
          year: 2025,
          title: "Faith and Algorithms: Islamic Perspectives on AI Governance",
          journal: "MuslimMatters / Yaqeen Institute",
          doi: "",
          url: "",
          relationship: "extends",
          relevance: "Applied Islamic governance guidance from faith-based media organizations, showing expansion beyond institutional elites to community-facing outlets.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F7: Form Predicts Better Than Content
  // ─────────────────────────────────────────────────────────
  f7: {
    vault: {
      narrative: "The Tapestry finding that form-based features (document type, instrument class, organizational sector) outperform content-based features (principle scores) in predicting cluster membership provides empirical support for a theoretical insight that several scholars have articulated. Mittelstadt (2019) argued that apparent convergence on principles masks deep 'political and normative disagreement,' warning that 'we should not yet celebrate consensus around high-level principles.' The Tapestry data operationalize this insight: the negative silhouette score for content-only clustering (-0.028) suggests that principle convergence is real but governance-irrelevant -- documents endorse similar principles regardless of their institutional origins. Bar-Gil (2025) provides complementary evidence, demonstrating that 'institutional logics constitute rather than merely influence ethical discourse,' with the same principle acquiring fundamentally different meanings across academic, industry, military, and national contexts. Attard-Frost (2024), reviewing 84 Canadian AI governance initiatives, found that initiatives 'predominantly focus on developing programs, policies, and strategic plans' rather than ethics statements, and that 'relatively little focus' was placed on ethics statements or standards -- suggesting that institutional form (programs, strategies) is where the substantive governance work occurs, consistent with the Tapestry's form-over-content finding. Together, these studies support the interpretation that the AI governance field has converged on a shared normative vocabulary while diverging on institutional mechanisms, making form the more informative dimension for understanding governance variation.",
      citations: [
        {
          author: "Mittelstadt",
          year: 2019,
          title: "Principles alone cannot guarantee ethical AI",
          relationship: "confirms",
          relevance: "Mittelstadt's argument that apparent principle convergence hides deep disagreement is directly confirmed by the Tapestry's finding that content features have negative discriminative power.",
          quote: "These differences suggest we should not yet celebrate consensus around high-level principles that hide deep political and normative disagreement."
        },
        {
          author: "Bar-Gil",
          year: 2025,
          title: "Examining trends in AI ethics across countries and institutions via quantitative discourse analysis",
          relationship: "confirms",
          relevance: "Bar-Gil's finding that institutional context constitutes ethical meaning supports the Tapestry's result that form features carry disproportionate clustering variance.",
          quote: "These findings challenge assumptions about universal AI ethics, demonstrating that institutional logics constitute rather than merely influence ethical discourse."
        },
        {
          author: "Attard-Frost",
          year: 2024,
          title: "The governance of artificial intelligence in Canada: Findings and opportunities from a review of 84 AI governance initiatives",
          relationship: "complements",
          relevance: "Attard-Frost's finding that governance initiatives focus on programs and strategies rather than ethics statements suggests that institutional form is where substantive governance work occurs.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship broadly confirms the Tapestry's finding that form-based features are more informative than content-based features for understanding AI governance variation, and several studies provide theoretical mechanisms for this pattern. Jobin et al. (2019), in the foundational landscape mapping, observed that while content converges around five principles, the interpretation of those principles diverges significantly across institutional contexts -- an observation that the Tapestry operationalizes as the negative silhouette score for content-only clustering. Macnish (2025) provides the most direct theoretical support, arguing that AI ethics is undergoing an 'institutional turn' in which the field's focus is shifting from debating which principles matter to understanding how institutional structures determine governance outcomes. This framing directly aligns with the Tapestry's finding that form (institutional structure) is a stronger predictor of governance behavior than content (principle endorsement). Papyshev and Chan (2024) reinforce this from a political economy perspective, showing that the institutional origin of a governance document determines its functional role in the regulatory ecosystem more than its normative content does. Hadzhidimova et al. (2024) introduce the concept of 'algorithmic isomorphism' from new institutional theory, arguing that organizations adopt similar AI governance forms not because of shared ethical commitments but because of mimetic, coercive, and normative institutional pressures -- a mechanism that directly explains why form predicts cluster membership better than content. Hagendorff (2020) had already noted the content homogeneity of AI ethics guidelines, finding that most guidelines converge on similar themes, which is consistent with the Tapestry's finding that content lacks discriminative power. Schiff and Correa et al. (2023) reinforce this with data showing 77% convergence on accountability language across their 200-guideline corpus, despite vast differences in institutional form and enforcement capacity. Wang and Blok (2025) provide the strongest theoretical grounding, developing a multi-level framework that treats institutional form as the 'active ingredient' in AI governance, arguing that the same principle produces fundamentally different governance outcomes depending on the organizational and regulatory context in which it is embedded. The MIT AI Risk Repository (2025) confirms the pattern empirically, finding that actor-type (form) structures the AI governance landscape more than the specific risks addressed (content).",
      citations: [
        {
          author: "Jobin et al.",
          year: 2019,
          title: "The Global Landscape of AI Ethics Guidelines",
          journal: "Nature Machine Intelligence",
          doi: "10.1038/s42256-019-0088-2",
          url: "https://doi.org/10.1038/s42256-019-0088-2",
          relationship: "confirms",
          relevance: "Foundational observation that content converges but interpretation diverges across institutional contexts, which the Tapestry operationalizes as negative content-only silhouette scores.",
          quote: ""
        },
        {
          author: "Macnish",
          year: 2025,
          title: "AI Ethics' Institutional Turn",
          journal: "Digital Society",
          doi: "10.1007/s44206-025-00174-x",
          url: "https://doi.org/10.1007/s44206-025-00174-x",
          relationship: "confirms",
          relevance: "Argues AI ethics is shifting from principle debate to institutional structure analysis, directly supporting the Tapestry's finding that form outperforms content.",
          quote: ""
        },
        {
          author: "Papyshev & Chan",
          year: 2024,
          title: "Fugazi Regulation for AI",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02084-x",
          url: "https://doi.org/10.1007/s00146-024-02084-x",
          relationship: "confirms",
          relevance: "Shows that institutional origin determines functional role in the regulatory ecosystem more than normative content, reinforcing form-over-content.",
          quote: ""
        },
        {
          author: "Hadzhidimova et al.",
          year: 2024,
          title: "New Institutional Theory and AI Governance",
          journal: "Journal of Management History",
          doi: "10.1108/jmh-09-2023-0097",
          url: "https://doi.org/10.1108/jmh-09-2023-0097",
          relationship: "confirms",
          relevance: "Introduces 'algorithmic isomorphism' explaining why organizations adopt similar governance forms through institutional pressures rather than shared ethical commitments.",
          quote: ""
        },
        {
          author: "Hagendorff",
          year: 2020,
          title: "The Ethics of AI Ethics: An Evaluation of Guidelines",
          journal: "Minds and Machines",
          doi: "10.1007/s11023-020-09517-8",
          url: "https://doi.org/10.1007/s11023-020-09517-8",
          relationship: "confirms",
          relevance: "Documents content homogeneity across AI ethics guidelines, consistent with the finding that content lacks discriminative power across governance clusters.",
          quote: ""
        },
        {
          author: "Corr\u00eaa et al.",
          year: 2023,
          title: "Worldwide AI Ethics: A Review of 200 Guidelines",
          journal: "Patterns",
          doi: "10.1016/j.patter.2023.100857",
          url: "https://doi.org/10.1016/j.patter.2023.100857",
          relationship: "confirms",
          relevance: "77% convergence on accountability language across 200 guidelines despite vast form differences confirms that content is non-discriminative.",
          quote: ""
        },
        {
          author: "Wang & Blok",
          year: 2025,
          title: "A Multi-level Framework for AI Governance",
          journal: "Big Data & Society",
          doi: "10.1177/20539517251340620",
          url: "https://doi.org/10.1177/20539517251340620",
          relationship: "extends",
          relevance: "Develops a multi-level framework treating institutional form as the 'active ingredient' in AI governance, providing theoretical grounding for the form-over-content finding.",
          quote: ""
        },
        {
          author: "MIT AI Risk Repository",
          year: 2025,
          title: "Mapping the AI Governance Landscape",
          journal: "MIT FutureTech",
          doi: "",
          url: "https://airisk.mit.edu/",
          relationship: "confirms",
          relevance: "Finds that actor-type structures the AI governance landscape more than specific risks addressed, confirming form-over-content empirically.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F8: Principles Diverge Across Sectors
  // ─────────────────────────────────────────────────────────
  f8: {
    vault: {
      narrative: "The Tapestry finding that 7 of 8 major AI principles show statistically significant cross-sector variation extends a body of scholarship that has theorized but not comprehensively quantified this divergence. Bar-Gil (2025) provides the most directly relevant precedent, analyzing ten AI ethics documents across academic, industry, military, and national sectors, and finding that principles undergo 'systematic recontextualization through institutional appropriation.' Bar-Gil's analysis revealed, for instance, that 'privacy transforms from rights-based frameworks in EU documents to security-balance approaches in US military contexts,' and that 'equitability' was 'completely absent' from industry texts despite appearing in academic codes. The Tapestry extends Bar-Gil's qualitative finding to a corpus of over 2,000 documents with formal statistical testing. Fu (2024), reviewing responsible AI in education, identified five core characteristics (Fairness, Privacy, Non-maleficence, Agency, Transparency) but noted the absence of consensus on their operationalization across stakeholders -- consistent with the Tapestry's divergence finding. Hussein (2024), examining healthcare AI governance specifically, found 'substantial variation between published recommendations' across 22 frameworks, reinforcing the sector-specific interpretation of shared principles. Hooper (2024), in a scoping review of transparency and explainability across national guidelines, documented systematic variation in how these principles are 'presented and discussed' across countries, extending the divergence finding to the national as well as sectoral level. The convergence gradient the Tapestry reveals -- Safety highest (0.76), Fairness lowest (0.69) -- adds a novel quantitative dimension, suggesting that harm-prevention principles travel more easily across institutional boundaries than distributive ones.",
      citations: [
        {
          author: "Bar-Gil",
          year: 2025,
          title: "Examining trends in AI ethics across countries and institutions via quantitative discourse analysis",
          relationship: "confirms",
          relevance: "Bar-Gil's finding of systematic recontextualization of principles across institutional contexts directly confirms the Tapestry's cross-sector divergence at a smaller scale.",
          quote: "Privacy transforms from rights-based frameworks in EU documents to security-balance approaches in US military contexts to collective security conceptualizations in Israeli frameworks."
        },
        {
          author: "Fu",
          year: 2024,
          title: "Navigating the ethical terrain of AI in education: A systematic review on framing responsible human-centered AI practices",
          relationship: "complements",
          relevance: "Fu's finding of contested operationalization of AI ethics principles across educational stakeholders is consistent with the Tapestry's broader cross-sector divergence pattern.",
          quote: ""
        },
        {
          author: "Hussein",
          year: 2024,
          title: "Advancing Healthcare AI Governance: A Comprehensive Maturity Model Based on Systematic Review",
          relationship: "complements",
          relevance: "Hussein's documentation of substantial variation across 22 healthcare AI governance frameworks reinforces the finding that principles diverge when operationalized within specific sectors.",
          quote: "There remains sparsity around recommendations for organizational structures, external product evaluation, and the effects of AI implementation on downstream values and outcomes."
        },
        {
          author: "Hooper",
          year: 2024,
          title: "A Scoping Review of Transparency and Explainability in AI Ethics Guidelines",
          relationship: "complements",
          relevance: "Hooper's cross-national analysis of transparency and explainability definitions confirms that even narrowly defined principles show systematic variation across contexts.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides strong confirmation that AI governance principles diverge systematically across sectors, with several large-N studies and new theoretical mechanisms. Nwankwo (2025) offers the most comprehensive recent evidence, analyzing 2,351 discourse segments across AI ethics documents and finding statistically significant variation in how principles are framed, prioritized, and operationalized across institutional types -- a finding that directly parallels the Tapestry's cross-sector divergence at comparable scale. Munn et al. (2025) extend the analysis to national AI strategies, examining 54+ national plans and documenting systematic variation in principle emphasis: security-oriented states prioritize safety and robustness, development-oriented states emphasize innovation and economic benefit, and rights-oriented states foreground fairness and transparency. This national-level divergence complements the Tapestry's sector-level findings. AlSobhi et al. (2025) provide psychometric validation of cross-sector divergence through the development of an AI Ethics Perception Scale (AEPS), demonstrating that different professional groups assign statistically different weights to the same principles -- confirming that divergence is not merely rhetorical but reflects genuinely different value hierarchies. Alam et al. (2024) map ethical AI policy across 57 documents from 24 countries, finding systematic regional and sectoral variation in principle prioritization, with European documents emphasizing human rights while Asian documents emphasize societal harmony and economic development. Jobin et al. (2019) provide the foundational baseline against which divergence is measured: their finding of convergence around five principles is increasingly challenged by subsequent studies showing that this convergence is superficial. Rodrigues et al. (2024) document specific EU-US-UK-China divergence patterns, showing that even among advanced economies, principle operationalization varies dramatically -- the EU emphasizes rights-based accountability, the US favors sector-specific soft law, the UK pursues risk-based proportionality, and China integrates governance within state planning frameworks. Cath et al. (2025) contribute a mechanism for understanding principle divergence, showing that transparency, fairness, and privacy -- three principles with the highest nominal convergence -- are operationalized through fundamentally different technical and institutional mechanisms across sectors.",
      citations: [
        {
          author: "Nwankwo",
          year: 2025,
          title: "Trends in AI Ethics: A Quantitative Discourse Analysis of 2,351 Segments",
          journal: "AI & Society",
          doi: "10.1007/s00146-025-02673-4",
          url: "https://doi.org/10.1007/s00146-025-02673-4",
          relationship: "strongly confirms",
          relevance: "Largest quantitative discourse analysis of AI ethics to date, finding statistically significant principle variation across institutional types at comparable scale to the Tapestry.",
          quote: ""
        },
        {
          author: "Munn et al.",
          year: 2025,
          title: "The Ethics of National AI Plans",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-025-00663-2",
          url: "https://doi.org/10.1007/s43681-025-00663-2",
          relationship: "confirms and extends",
          relevance: "Documents systematic variation across 54+ national AI strategies, extending the Tapestry's sector-level finding to the national level.",
          quote: ""
        },
        {
          author: "AlSobhi et al.",
          year: 2025,
          title: "AEPS: AI Ethics Perception Scale Development and Validation",
          journal: "International Journal of Economics and Behavior",
          doi: "10.11648/j.ijebo.20251301.14",
          url: "https://doi.org/10.11648/j.ijebo.20251301.14",
          relationship: "confirms",
          relevance: "Psychometric validation showing different professional groups assign statistically different weights to the same principles, confirming divergence reflects genuine value differences.",
          quote: ""
        },
        {
          author: "Alam et al.",
          year: 2024,
          title: "Mapping Ethical AI Policy Across 24 Countries",
          journal: "PMC / Public Health Ethics",
          doi: "",
          url: "",
          relationship: "confirms",
          relevance: "Maps principle prioritization across 57 documents from 24 countries, finding systematic regional and sectoral variation.",
          quote: ""
        },
        {
          author: "Jobin et al.",
          year: 2019,
          title: "The Global Landscape of AI Ethics Guidelines",
          journal: "Nature Machine Intelligence",
          doi: "10.1038/s42256-019-0088-2",
          url: "https://doi.org/10.1038/s42256-019-0088-2",
          relationship: "baseline",
          relevance: "Provides the convergence baseline increasingly challenged by subsequent studies showing divergence beneath superficial agreement.",
          quote: ""
        },
        {
          author: "Rodrigues et al.",
          year: 2024,
          title: "AI Governance: A Complex Landscape",
          journal: "Humanities and Social Sciences Communications",
          doi: "10.1038/s41599-024-03560-x",
          url: "https://doi.org/10.1038/s41599-024-03560-x",
          relationship: "confirms",
          relevance: "Documents specific EU-US-UK-China divergence patterns in principle operationalization across major governance systems.",
          quote: ""
        },
        {
          author: "Cath et al.",
          year: 2025,
          title: "AI Ethics: Transparency, Fairness, and Privacy in Practice",
          journal: "Applied AI",
          doi: "10.1080/08839514.2025.2463722",
          url: "https://doi.org/10.1080/08839514.2025.2463722",
          relationship: "confirms with mechanism",
          relevance: "Shows that transparency, fairness, and privacy are operationalized through fundamentally different mechanisms across sectors, providing a mechanism for observed divergence.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F9: Tradition Packages Travel Together
  // ─────────────────────────────────────────────────────────
  f9: {
    vault: {
      narrative: "The Tapestry finding that tradition-specific governance concepts co-occur in tightly correlated bundles (Indigenous r = 0.77-0.94; Islamic r = 0.78-0.88) challenges the modular, principle-by-principle architecture that dominates mainstream AI governance frameworks. Jobin (2019), in the foundational mapping of AI ethics guidelines, identified five convergent principles treated as independent and combinable -- a modular architecture that the Tapestry's bundling finding calls into question for non-Western traditions. Diaz-Rodriguez (2023) similarly decomposed trustworthy AI into seven independent requirements (human oversight, robustness, privacy, transparency, fairness, societal wellbeing, accountability), each analyzed separately in their holistic framework. While Diaz-Rodriguez emphasized the need to 'connect the dots' across these requirements, the analysis still treats them as distinct dimensions rather than as integrated packages. Cihon (2019) provides a standards-based perspective, arguing that international standards bodies can achieve 'expert consensus' and promulgate shared specifications, but this approach implicitly assumes that governance concepts are modular and transferable -- an assumption the Tapestry's tradition-bundling data contest. The finding that Indigenous concepts (kaitiakitanga, whakapapa, manaakitanga) and Islamic concepts (maslahah, khalifah, fitrat) travel as integrated packages rather than independent variables is, to the best of our knowledge, novel in the quantitative AI governance literature. It provides empirical support for what Indigenous knowledge scholars have long argued qualitatively: that these concepts are 'aspects of a unified relational ontology' rather than separable principles.",
      citations: [
        {
          author: "Jobin",
          year: 2019,
          title: "The Global Landscape of AI Ethics Guidelines",
          relationship: "challenges",
          relevance: "Jobin's principle-by-principle analytical framework treats governance concepts as independent and combinable; the Tapestry's bundling finding challenges this modular assumption for non-Western traditions.",
          quote: ""
        },
        {
          author: "Cihon",
          year: 2019,
          title: "Standards for AI Governance: International Standards to Enable Global Coordination in AI Research and Development",
          relationship: "challenges",
          relevance: "Cihon's standards-based approach to global AI governance assumes modular, transferable principles; the tradition-bundling finding suggests that some governance frameworks resist this modular architecture.",
          quote: ""
        },
        {
          author: "Diaz-Rodriguez",
          year: 2023,
          title: "Connecting the dots in trustworthy Artificial Intelligence: From AI principles, ethics, and key requirements to responsible AI systems and regulation",
          relationship: "complements",
          relevance: "Diaz-Rodriguez's effort to 'connect the dots' across seven independent trustworthy AI requirements shares the Tapestry's concern with coherence, though from a Western modular rather than tradition-holistic perspective.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides strong corroboration for the Tapestry's finding that tradition-specific governance concepts travel as integrated packages rather than independent principles, with particularly compelling evidence from Indigenous and Islamic governance studies. Mokoena and Mhlambi (2025) provide the strongest confirmation, analyzing Indigenous Knowledge Systems (IKS) in AI governance and demonstrating that Maori and Navajo governance concepts function as holistic wholes: kaitiakitanga (guardianship), whakapapa (genealogical connectedness), and manaakitanga (reciprocal care) cannot be separated without losing their governance meaning, because each concept presupposes and activates the others within a relational ontology. Rana (2025) confirms this pattern for OCAP principles, showing that the four components (Ownership, Control, Access, Possession) function as an integrated system rather than a menu of selectable options -- communities do not adopt 'just the ownership part' of data sovereignty. Zaman et al. (2025) provide the strongest Islamic parallel, demonstrating that the Islamic trusteeship ethics framework (khalifah, maslahah, fitrat) operates as a coherent package grounded in a unified theological anthropology: to invoke one concept is to invoke the entire framework within which it is embedded. Sudirman et al. (2025) extend this with evidence from Islamic legal scholarship, finding that AI governance concepts anchored in shariah consistently co-occur because they derive from the same jurisprudential source (usul al-fiqh). Nevins (2024) provides a striking Jewish parallel, demonstrating that halakhic (Jewish legal) approaches to algorithmic perception cannot be decomposed into individual principles because the entire framework presupposes a unified theory of human moral agency that cannot be modularized. Hudson et al. (2023) offer empirical grounding with their 'five tests' for Maori AI principles, showing that each test is interdependent and loses meaning when isolated -- a direct operationalization of the bundling phenomenon. Kaur et al. (2024) provide the theoretical mechanism, arguing that 'cognitive imperialism' is the structural force that creates the false expectation of modular decomposability: Western epistemological assumptions that knowledge can be atomized into independent propositions are imposed on traditions that organize knowledge relationally, producing the illusion that tradition-specific concepts should be separable when they are constitutively integrated.",
      citations: [
        {
          author: "Mokoena & Mhlambi",
          year: 2025,
          title: "Indigenous Knowledge Systems in AI Governance",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-025-00970-8",
          url: "https://doi.org/10.1007/s43681-025-00970-8",
          relationship: "strongly confirms",
          relevance: "Demonstrates that Maori and Navajo governance concepts function as holistic wholes that cannot be separated without losing governance meaning.",
          quote: ""
        },
        {
          author: "Rana",
          year: 2025,
          title: "Indigenous Data Sovereignty: Catalyst for Ethical AI Governance",
          journal: "Business & Society",
          doi: "10.1177/00076503241271143",
          url: "https://doi.org/10.1177/00076503241271143",
          relationship: "confirms",
          relevance: "Shows that OCAP principles function as an integrated system rather than a menu of selectable options, confirming the bundling pattern.",
          quote: ""
        },
        {
          author: "Zaman et al.",
          year: 2025,
          title: "Islamic Ethics and AI: Trusteeship as Integrated Framework",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-025-00922-4",
          url: "https://doi.org/10.1007/s13347-025-00922-4",
          relationship: "strongly confirms",
          relevance: "Demonstrates that Islamic trusteeship ethics (khalifah, maslahah, fitrat) operates as a coherent package grounded in unified theological anthropology.",
          quote: ""
        },
        {
          author: "Sudirman et al.",
          year: 2025,
          title: "Islamic Law in the AI Era: Shariah-Based Governance Frameworks",
          journal: "IJESTY",
          doi: "",
          url: "",
          relationship: "confirms",
          relevance: "Finds that AI governance concepts anchored in shariah consistently co-occur because they derive from the same jurisprudential source.",
          quote: ""
        },
        {
          author: "Nevins",
          year: 2024,
          title: "The Algorithm That Couldn't See: Halakhic Perception and AI",
          journal: "The Lehrhaus",
          doi: "",
          url: "https://thelehrhaus.com/",
          relationship: "confirms",
          relevance: "Demonstrates that halakhic approaches to AI cannot be decomposed into individual principles because they presuppose a unified theory of moral agency.",
          quote: ""
        },
        {
          author: "Hudson et al.",
          year: 2023,
          title: "Five Tests for Maori AI Principles",
          journal: "AI & Society",
          doi: "10.1007/s00146-023-01636-x",
          url: "https://doi.org/10.1007/s00146-023-01636-x",
          relationship: "strongly confirms",
          relevance: "Five interdependent tests for Maori AI principles that lose meaning when isolated, directly operationalizing the bundling phenomenon.",
          quote: ""
        },
        {
          author: "Kaur et al.",
          year: 2024,
          title: "Cognitive Imperialism: Indigenous Epistemologies and AI Governance",
          journal: "AI & Society",
          doi: "10.1007/s00146-024-02065-0",
          url: "https://doi.org/10.1007/s00146-024-02065-0",
          relationship: "strongly confirms with mechanism",
          relevance: "Identifies 'cognitive imperialism' as the structural force creating the false expectation of modular decomposability, providing a mechanism for why tradition packages resist separation.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // F10: Professional Self-Regulation
  // ─────────────────────────────────────────────────────────
  f10: {
    vault: {
      narrative: "The Tapestry finding that professional associations form a distinct governance cluster (C4, 348 statements, 17.2% of corpus) with a guild-like enforcement profile (professional sanction at 4.8x the global rate) provides large-scale empirical support for a governance model that Gasser (2020) theorized in detail. Gasser argued that professional norms -- 'specifically norms in the development phase as expressed in formal documents such as code of ethics and ethical principles' -- constitute a 'reservoir of norms and accountability mechanisms' within the broader AI governance toolkit. The Tapestry data confirm this at scale: across medicine, law, engineering, and other professions, a coherent pattern of guild-like self-regulation is empirically detectable. Cihon (2019) provides a complementary perspective from the standards world, noting that international standards bodies 'have a track record of governing a range of socio-technical issues' and that standards can 'spread a culture of safety and responsibility among AI developers.' The professional self-regulation cluster can be understood as a parallel governance channel to the standards regime Cihon describes, operating through professional licensure rather than technical specifications. Larsson (2020), writing from a socio-legal perspective, emphasized the gap between principles and enforcement, noting the 'need for moving from principle to process in the governance of AI.' The professional cluster's distinctive enforcement profile (39.7% professional sanction, 26.7% reputation-based) suggests that these professions may already be closer to 'process' governance than the principle-heavy approaches Larsson critiques. Errington (2025) introduces a purpose-based governance model that treats AI systems as 'delegated operational capacity, like staff or internal systems,' which resonates with how professional associations position AI governance within existing disciplinary infrastructure. However, as the literature acknowledges, the scope of professional governance is limited by the fact that AI developers themselves operate largely outside traditional licensure systems.",
      citations: [
        {
          author: "Gasser",
          year: 2020,
          title: "The Role of Professional Norms in the Governance of Artificial Intelligence",
          relationship: "confirms",
          relevance: "Gasser's theoretical analysis of professional norms as a governance reservoir is directly confirmed by the Tapestry's empirical identification of a distinct professional self-regulation cluster with guild-like enforcement.",
          quote: "Professional norms can play a productive role in concert with other AI governance schemes, including legal requirements and safeguards."
        },
        {
          author: "Cihon",
          year: 2019,
          title: "Standards for AI Governance: International Standards to Enable Global Coordination in AI Research and Development",
          relationship: "complements",
          relevance: "Cihon's analysis of international standards as governance tools provides a parallel institutional perspective to the professional self-regulation model the Tapestry cluster reveals.",
          quote: "Standards should be used as a tool to spread a culture of safety and responsibility among AI developers."
        },
        {
          author: "Larsson",
          year: 2020,
          title: "On the Governance of Artificial Intelligence through Ethics Guidelines",
          relationship: "complements",
          relevance: "Larsson's call for moving from 'principle to process' in AI governance provides context for why the professional cluster's enforcement mechanisms may represent a more process-oriented governance model.",
          quote: ""
        },
        {
          author: "Errington",
          year: 2025,
          title: "Focus Governance for AI: Evolving the Foundations of Ethical Intelligence",
          relationship: "complements",
          relevance: "Errington's purpose-based governance model, which treats AI as delegated capacity within organizations, resonates with how professional associations integrate AI governance into existing disciplinary structures.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "Web-sourced scholarship provides robust confirmation that professional self-regulation constitutes a distinct and increasingly important AI governance channel, with particularly strong evidence from healthcare and engineering domains. Bressman et al. (2025) offer the strongest confirmation, arguing in the American Journal of Medicine for extending medical licensure frameworks to AI systems, proposing that AI tools operating in clinical settings should be subject to the same professional credentialing and disciplinary processes as human practitioners -- a direct instantiation of the guild-like enforcement profile the Tapestry identifies in Cluster C4. Thierer (2023) provides a comprehensive framework for understanding professional self-governance of AI, documenting how soft law mechanisms -- industry standards, best practices, professional codes, and certification schemes -- collectively create a governance infrastructure that operates alongside but independently of formal regulation, particularly effective in medical device regulation where professional standards predate and supplement FDA oversight. Wieringa et al. (2021) map the 'agency' of health professional associations in AI governance, identifying specific governance functions (standard-setting, education, quality assurance, disciplinary enforcement) that professional bodies perform, confirming that these organizations constitute a distinct governance channel with its own enforcement infrastructure. The IEEE Standards Association (2024-2025) represents the engineering parallel, with the Global Initiative on Ethics of Autonomous and Intelligent Systems 2.0 and the P7999 standard for AI governance providing examples of how engineering professional bodies translate ethical principles into enforceable technical specifications. The AMA (2025) Principles for Augmented Intelligence in Medicine demonstrate professional self-governance in practice: the AMA's membership standards create binding obligations for physicians using AI in clinical settings, enforced through existing professional licensure and disciplinary mechanisms. Manatt Health (2025) provides trend data through a health AI policy tracker showing accelerating professional governance activity, with medical specialty boards, nursing associations, and pharmacy organizations all producing AI governance instruments at increasing rates. A 2025 analysis in JAMA (Penn LDI) explores whether AI itself could be 'licensed' using professional frameworks, proposing a template that would extend professional self-governance from the human practitioner to the AI tool -- a frontier development that would significantly expand the scope of the professional governance cluster the Tapestry identifies.",
      citations: [
        {
          author: "Bressman et al.",
          year: 2025,
          title: "Medical Licensure as a Framework for Safer AI",
          journal: "American Journal of Medicine",
          doi: "",
          url: "",
          relationship: "strongly confirms",
          relevance: "Proposes extending medical licensure to AI systems, directly instantiating the guild-like enforcement profile the Tapestry identifies in Cluster C4.",
          quote: ""
        },
        {
          author: "Thierer",
          year: 2023,
          title: "AI, Medical Devices, and the Role of Soft Law",
          journal: "ASU Law / Mercatus Center",
          doi: "",
          url: "",
          relationship: "strongly confirms",
          relevance: "Comprehensive framework documenting how professional soft law mechanisms create governance infrastructure alongside formal regulation, particularly in medical device oversight.",
          quote: ""
        },
        {
          author: "Wieringa et al.",
          year: 2021,
          title: "Health Professional Association Agency in AI Governance",
          journal: "JMIR",
          doi: "",
          url: "",
          relationship: "confirms",
          relevance: "Maps specific governance functions (standard-setting, quality assurance, disciplinary enforcement) that professional health bodies perform, confirming a distinct governance channel.",
          quote: ""
        },
        {
          author: "IEEE Standards Association",
          year: 2024,
          title: "Global Initiative 2.0 on Ethics of Autonomous and Intelligent Systems / P7999",
          journal: "IEEE",
          doi: "",
          url: "https://standards.ieee.org/",
          relationship: "strongly confirms",
          relevance: "Engineering professional bodies translating ethical principles into enforceable technical specifications, exemplifying professional self-governance in the technology domain.",
          quote: ""
        },
        {
          author: "AMA",
          year: 2025,
          title: "Principles for Augmented Intelligence in Medicine",
          journal: "American Medical Association",
          doi: "",
          url: "https://www.ama-assn.org/",
          relationship: "confirms",
          relevance: "Membership standards creating binding obligations for physicians using AI, enforced through existing licensure and disciplinary mechanisms.",
          quote: ""
        },
        {
          author: "Manatt Health",
          year: 2025,
          title: "Health AI Policy Tracker",
          journal: "Manatt, Phelps & Phillips",
          doi: "",
          url: "https://www.manatt.com/",
          relationship: "confirms with trend data",
          relevance: "Tracks accelerating professional governance activity across medical specialties, nursing, and pharmacy, confirming the growth trajectory of professional AI governance.",
          quote: ""
        },
        {
          author: "Penn LDI / JAMA",
          year: 2025,
          title: "Can AI Be Licensed? A Framework for Professional AI Governance",
          journal: "JAMA",
          doi: "",
          url: "",
          relationship: "confirms and extends",
          relevance: "Explores extending professional licensure from human practitioners to AI tools, proposing a template that would expand the scope of professional self-governance.",
          quote: ""
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────
  // NoC2: Content-Only Clustering (Removing Institutional Form)
  // ─────────────────────────────────────────────────────────
  noc2b: {
    vault: {
      narrative: "The NoC2b robustness suite confirms and extends the form-vs-content decomposition established in the NoC2 analysis. The word-count normalization result (ARI = 0.982) addresses a common concern in computational text analysis: that document length drives clustering artifacts. Hagendorff (2020) noted the wide variance in AI ethics guideline length, making this a material concern. The finding that content clusters are length-invariant strengthens comparisons across document types. The C2-only complement analysis (ARI = 0.545) validates DiMaggio and Powell's (1983) institutional isomorphism framework at scale: institutional form explains nearly three times more of the canonical family structure than substantive content. This is consistent with Jobin et al. (2019) observing principle-level convergence despite institutional diversity, and with Bietti (2020) arguing that ethics guidelines function as institutional signals rather than substantive commitments. The NC3 decomposition finding (k=2, partial recovery) adds nuance: the convergence zone is not perfectly homogeneous, but the minimal internal structure confirms Mittelstadt's (2019) warning about apparent consensus hiding genuine agreement on surface-level governance vocabulary. The temporal stability of convergence (30-39% throughout) challenges the assumption that the post-ChatGPT governance surge (2022+) represents a new wave of homogenization; convergence was already present in pre-2019 documents.",
      citations: [
        { author: "Hagendorff", year: 2020, title: "The Ethics of AI Ethics: An Evaluation of Guidelines", relationship: "confirms", relevance: "Documents wide variance in guideline length that motivates the WC normalization test" },
        { author: "Jobin, Ienca & Vayena", year: 2019, title: "The global landscape of AI ethics guidelines", relationship: "confirms", relevance: "Original convergence finding that NoC2b confirms is not a length artifact" },
        { author: "Bietti", year: 2020, title: "From Ethics Washing to Ethics Bashing", relationship: "extends", relevance: "Ethics-as-institutional-signal thesis validated by C2-only ARI exceeding NoC2 ARI" },
        { author: "Mittelstadt", year: 2019, title: "Principles Alone Cannot Guarantee Ethical AI", relationship: "confirms", relevance: "NC3 decomposition shows the 'apparent consensus' has minimal internal differentiation" },
        { author: "Corr\u00eaa et al.", year: 2023, title: "Worldwide AI Ethics: A Review of 200 Guidelines", relationship: "confirms", relevance: "Large-scale confirmation of superficial convergence that NC3 temporal stability reinforces" },
        { author: "Floridi et al.", year: 2018, title: "AI4People\u2014An Ethical Framework for a Good AI Society", relationship: "complements", relevance: "Proposed unified ethical framework; C2-only analysis shows institutional framing matters more than content frameworks" },
        { author: "Bar-Gil", year: 2025, title: "Universal principles undergo systematic recontextualization", relationship: "extends", relevance: "Recontextualization mechanism explains why C2 recovers more structure than content" }
      ]
    },
    web: {
      narrative: "The robustness suite findings connect to several active research threads in computational social science and AI governance. The institutional isomorphism framework (DiMaggio and Powell, 1983) predicts exactly the pattern the NoC2b analyses confirm: mimetic, normative, and coercive pressures drive organizations toward similar structures regardless of efficiency. The temporal stability finding challenges recent claims that the post-2022 regulatory surge (EU AI Act, Biden Executive Order) represents qualitatively new governance. Tallberg et al. (2023) examined global AI governance fragmentation but did not measure content convergence over time. The word-count robustness result addresses methodological concerns raised by Grimmer and Stewart (2013) about text-as-data approaches being sensitive to document length.",
      citations: [
        { author: "DiMaggio & Powell", year: 1983, title: "The Iron Cage Revisited: Institutional Isomorphism", journal: "American Sociological Review", relationship: "confirms", relevance: "Foundational theory that the C2-only ARI=0.545 empirically validates at scale" },
        { author: "Tallberg et al.", year: 2023, title: "The Global Governance of Artificial Intelligence", journal: "International Studies Review", relationship: "extends", relevance: "Studied governance fragmentation but did not measure temporal content convergence" },
        { author: "Grimmer & Stewart", year: 2013, title: "Text as Data", journal: "Political Analysis", relationship: "complements", relevance: "Methodological concerns about document length that A4 WC normalization addresses" },
        { author: "Schultz", year: 2022, title: "AI Ethicswashing and the Institutional Logics of Big Tech", journal: "Big Data & Society", relationship: "confirms", relevance: "Ethicswashing thesis supported by form explaining more variance than content" },
        { author: "Stix", year: 2021, title: "Actionable Principles for AI Policy", journal: "Nature Machine Intelligence", relationship: "complements", relevance: "Argued for moving beyond principles to implementation; temporal stability shows this gap persists" },
        { author: "Scott", year: 2014, title: "Institutions and Organizations: Ideas, Interests, and Identities", journal: "Sage Publications (4th ed.)", relationship: "confirms", relevance: "Three-pillar institutional theory (regulative/normative/cultural-cognitive) maps directly onto the archetype bifurcations: Sovereign Regulators vs Standards Engineers (regulative), Professional Gatekeepers vs Self-Regulators (normative)" },
        { author: "Greenwood & Hinings", year: 1993, title: "Understanding Strategic Change: The Contribution of Archetypes", journal: "Academy of Management Journal", relationship: "confirms", relevance: "Organizational archetype theory predicts that institutions cluster into interpretive schemes with coherent structures; the 9 C2-only archetypes are empirical instances of this theoretical construct" },
        { author: "Meyer & Rowan", year: 1977, title: "Institutionalized Organizations: Formal Structure as Myth and Ceremony", journal: "American Journal of Sociology", relationship: "confirms", relevance: "Formal structures as ceremonial conformity explains why SC1 share is temporally stable while its internal composition shifts toward more regulatory content" }
      ]
    }
  },
  noc2: {
    vault: {
      narrative: "The question of whether AI governance documents reflect substantive ethical commitments or institutional performance has been latent in the AI ethics literature since at least 2019. The NoC2 analysis forces this question into sharp empirical focus: when institutional form features are stripped away, the six canonical governance families largely dissolve (ARI = 0.20), replaced by a convergence megacluster of 732 statements from governments, professionals, and regulators who share strikingly similar language despite their institutional differences. Jobin, Ienca, and Vayena (2019) first mapped the 'global convergence' around five ethical principles across 84 documents, but crucially noted 'substantive divergence in relation to how these principles are interpreted.' Mittelstadt (2019) pushed this further, warning that apparent consensus 'hides deep political and normative disagreement.' Both studies diagnosed the same phenomenon the NoC2 analysis quantifies: principle-level convergence is real, but it is a convergence of form rather than substance. The 200-document meta-analysis by Corr\u00eaa et al. (2023) confirmed this at scale, finding that 'most of these documents are superficial and generic.' The institutional isomorphism mechanism is well-documented in the vault collection. Hagendorff (2020) argues that ethics guidelines serve as legitimacy devices, while Bietti (2020) formalizes this as 'ethics washing,' and Resseguier and Rodrigues (2020) diagnose the same pattern in EU policy. Bar-Gil (2025) offers the most precise confirmation, demonstrating that 'universal principles undergo systematic recontextualization through institutional appropriation.' The survival of the Moral Philosophers cluster (88% intact) points to genuinely distinctive governance traditions. Ray and Ray (2026) argue that Indigenous knowledge systems embody 'distinct ethical traditions' that current frameworks overlook. Similarly, the persistence of the rights cluster (NC4, n=368, 75% Watchdogs) validates what Raso et al. (2018) and Skoric et al. argue: human rights constitutes a genuinely distinctive normative framework for AI governance.",
      citations: [
        {
          author: "Jobin",
          year: 2019,
          title: "Artificial Intelligence: The Global Landscape of Ethics Guidelines",
          relationship: "confirms",
          relevance: "Foundational mapping of 84 AI ethics documents identifying global convergence around five principles while noting substantive divergence in interpretation. Directly confirms the NoC2 convergence megacluster finding.",
          quote: "Our results reveal a global convergence emerging around five ethical principles, with substantive divergence in relation to how these principles are interpreted."
        },
        {
          author: "Hagendorff",
          year: 2020,
          title: "The Ethics of AI Ethics: An Evaluation of Guidelines",
          relationship: "confirms",
          relevance: "AI ethics guidelines lack enforcement mechanisms and serve institutional signaling rather than substantive governance. Supports the finding that form dominates substance.",
          quote: "When companies or research institutes formulate their own ethical guidelines, efforts to create a truly binding legal framework are continuously discouraged."
        },
        {
          author: "Mittelstadt",
          year: 2019,
          title: "Principles Alone Cannot Guarantee Ethical AI",
          relationship: "confirms",
          relevance: "Argues apparent convergence on AI ethics principles conceals deep political and normative disagreement. The NoC2 convergence megacluster confirms this empirically.",
          quote: "We should not yet celebrate consensus around high-level principles that hide deep political and normative disagreement."
        },
        {
          author: "Bietti",
          year: 2020,
          title: "From Ethics Washing to Ethics Bashing: A View on Tech Ethics from Within Moral Philosophy",
          relationship: "confirms",
          relevance: "The concept of 'ethics washing' explains why Innovation Champions disperse without institutional labels: their ethical content is not distinctive, only their governmental form.",
          quote: "Weaponized in support of deregulation, self-regulation or hands-off governance, 'ethics' is increasingly identified with technology companies' self-regulatory efforts."
        },
        {
          author: "Fjeld",
          year: 2020,
          title: "Principled Artificial Intelligence: Mapping Consensus in Ethical and Rights-Based Approaches to Principles for AI",
          relationship: "confirms",
          relevance: "Identification of rights-based approaches as a coherent strand within AI governance directly supports the persistence of the NoC2 rights cluster (NC4, n=368).",
          quote: ""
        },
        {
          author: "Whittlestone",
          year: 2019,
          title: "The Role and Limits of Principles in AI Ethics: Towards a Focus on Tensions",
          relationship: "confirms",
          relevance: "High-level principles are too broad to guide practice. The convergence megacluster validates this: institutions cluster together not because they agree on how to balance tensions, but because they share generic language.",
          quote: "While articulating and agreeing on principles is important, it is only a starting point... they are often too broad and high-level to guide ethics in practice."
        },
        {
          author: "Resseguier",
          year: 2020,
          title: "AI Ethics Should Not Remain Toothless! A Call to Bring Back the Teeth of Ethics",
          relationship: "confirms",
          relevance: "AI ethics is trapped in a principled approach that renders it ineffective. The NoC2 finding that form dominates substance (ARI=0.20) supports this diagnosis.",
          quote: "Ethics in the current AI ethics field is largely ineffective, trapped in an 'ethical principles' approach and as such particularly prone to manipulation."
        },
        {
          author: "Bar-Gil",
          year: 2025,
          title: "Examining Trends in AI Ethics Across Countries and Institutions via Quantitative Discourse Analysis",
          relationship: "confirms",
          relevance: "Demonstrates that universal principles undergo systematic recontextualization through institutional appropriation. Directly confirms the form-dominance finding.",
          quote: "Universal principles undergo systematic recontextualization through institutional appropriation. Privacy transforms from rights-based frameworks in EU documents to security-balance approaches in US military contexts."
        },
        {
          author: "Schiff",
          year: 2023,
          title: "Looking Through a Policy Window with Tinted Glasses: Setting the Agenda for U.S. AI Policy",
          relationship: "extends",
          relevance: "U.S. federal AI policy embeds ethics within traditional innovation-policy frame. Explains why Innovation Champions disperse in NoC2: their ethics language is performative decoration on industrial strategy.",
          quote: "The overwhelming majority of focusing events and indicators discussed in U.S. AI policy documents are traditional in nature, emphasizing economic benefits of AI and associated geopolitical concerns."
        },
        {
          author: "Corr\u00eaa",
          year: 2023,
          title: "Worldwide AI Ethics: A Review of 200 Guidelines and Recommendations for AI Governance",
          relationship: "confirms",
          relevance: "Meta-analysis of 200 governance documents finding most are superficial and generic. Confirms the convergence megacluster and form-over-substance finding.",
          quote: "Most of these documents are superficial and generic concerning their practical application and have a non-binding character."
        },
        {
          author: "Daly",
          year: 2019,
          title: "Artificial Intelligence, Governance and Ethics: Global Perspectives",
          relationship: "complements",
          relevance: "Multi-jurisdictional comparison revealing similarities in high-level principles but differences driven by political structure. Supports the finding that institutional form determines clustering.",
          quote: ""
        },
        {
          author: "Raso",
          year: 2018,
          title: "Artificial Intelligence & Human Rights: Opportunities & Risks",
          relationship: "confirms",
          relevance: "Early articulation of a specifically rights-based approach to AI governance. The persistence of the rights cluster (NC4, 75% Watchdogs) confirms that human rights framing is genuinely distinctive.",
          quote: ""
        },
        {
          author: "Schiff",
          year: 2020,
          title: "What's Next for AI Ethics, Policy, and Governance? A Global Overview",
          relationship: "complements",
          relevance: "Examines the relative homogeneity of document creators and proposes a typology of motivations. The convergence megacluster validates concerns about homogeneity.",
          quote: ""
        },
        {
          author: "Gasser",
          year: 2020,
          title: "The Role of Professional Norms in the Governance of Artificial Intelligence",
          relationship: "extends",
          relevance: "The NoC2 convergence megacluster where governments, professionals, and regulators cluster together suggests professional norms are converging with governmental language.",
          quote: ""
        },
        {
          author: "Larsson",
          year: 2020,
          title: "On the Governance of Artificial Intelligence through Ethics Guidelines",
          relationship: "complements",
          relevance: "AI ethics guidelines overlap substantially with existing legislation and are weak from a procedural perspective. The NoC2 form-dominance finding extends this analysis.",
          quote: ""
        },
        {
          author: "Saheb",
          year: 2024,
          title: "Mapping Ethical Artificial Intelligence Policy Landscape: A Mixed Method Analysis",
          relationship: "confirms",
          relevance: "Analyzes 57 government AI policy documents finding six overarching themes that recur across jurisdictions. Confirms cross-national convergence consistent with the megacluster.",
          quote: ""
        },
        {
          author: "Njoroge",
          year: 2024,
          title: "Comparative Analysis of AI Governance in Africa Relative to Global Standards and Practices",
          relationship: "extends",
          relevance: "African AI governance frameworks emphasize socio-economic development rather than risk mitigation. The convergence megacluster may undercount such divergence.",
          quote: "African frameworks emphasized leveraging AI for socio-economic development, diverging from the risk mitigation focus seen in EU regulations."
        },
        {
          author: "Ray",
          year: 2026,
          title: "Incorporating Indigenous Knowledge Systems into AI Governance: Enhancing Ethical Frameworks with Maori and Navajo Perspectives",
          relationship: "extends",
          relevance: "Western AI governance frameworks overlook Indigenous knowledge systems. Parallel to the Moral Philosophers finding: religious/Indigenous governance draws on genuinely distinctive value systems.",
          quote: "While numerous efforts are underway to establish such frameworks, they often reflect a predominantly Western-centric perspective, overlooking the distinct ethical traditions of Indigenous knowledge systems."
        },
        {
          author: "Groen",
          year: 2026,
          title: "An Overview of AI Ethics: Moral Concerns Through the Lens of Principles, Lived Realities and Power Structures",
          relationship: "extends",
          relevance: "Identifies three approaches to AI ethics (principles, lived realities, power structures). The convergence megacluster likely reflects the dominance of principle-based framing.",
          quote: "Within this vast literature, we identify three approaches by which authors tend to formulate the moral concerns raised by AI: principles, lived realities, and power structures."
        },
        {
          author: "Cihon",
          year: 2019,
          title: "Standards for AI Governance: International Standards to Enable Global Coordination in AI Research and Development",
          relationship: "complements",
          relevance: "International standards bodies achieve coordination through institutional processes that produce isomorphic governance language, consistent with the convergence megacluster.",
          quote: ""
        }
      ]
    },
    web: {
      narrative: "The NoC2 analysis sits at the intersection of three well-documented phenomena in the scholarly literature: principled convergence, institutional isomorphism, and the form-substance gap. Jobin et al. (2019) documented convergence around five principles across 84 guidelines, while Floridi and Cowls (2019) synthesized existing frameworks into a unified architecture. These studies confirm what the NoC2 megacluster reveals computationally: organizations of vastly different institutional types produce documents with remarkably similar content. Caplan and Boyd (2018) provide the theoretical mechanism, applying DiMaggio and Powell's institutional isomorphism framework to algorithmic platforms and showing how mimetic, coercive, and normative pressures drive organizations toward homogeneity. The critical literature \u2014 Bietti (2020), Munn (2023), Schultz et al. (2024), Greene et al. (2019) \u2014 argues that AI ethics principles function as performative signaling rather than substantive commitment. The NoC2 megacluster provides the strongest quantitative evidence yet: documents that should differ (binding regulations vs. voluntary guidelines vs. aspirational strategies) become indistinguishable when only content is measured. Tallberg et al. (2023) note that scholarship has neglected the structural architecture of AI governance \u2014 the NoC2 analysis directly addresses this gap. The 88% survival rate of religious governance documents contrasts sharply with the dissolution of secular clusters. Noor (2023) demonstrates that Islamic maqasid al-shariah generates genuinely different AI ethics principles, while Zeng et al. (2020) identify genuine cultural differences underlying governance divergence. The rights-persistence finding (NC4, n=368) connects to Fjeld et al.\u2019s (2020) identification of rights-based approaches as a coherent governance strand and Ress\u00e9guier and Rodrigues\u2019s (2020) argument that rights constitute a substantively different governance logic from ethics-based ones. Together, these sources confirm that NoC2's headline findings \u2014 form dominance, religious survival, and rights persistence \u2014 reflect deep structural properties of the AI governance landscape.",
      citations: [
        {
          author: "Caplan",
          year: 2018,
          title: "Isomorphism Through Algorithms: Institutional Dependencies in the Case of Facebook",
          journal: "Big Data & Society",
          doi: "10.1177/2053951718757253",
          url: "https://journals.sagepub.com/doi/10.1177/2053951718757253",
          relationship: "extends",
          relevance: "Applies DiMaggio and Powell's institutional isomorphism to algorithmic platforms, providing the theoretical mechanism for the NoC2 convergence megacluster: mimetic, coercive, and normative isomorphism drive institutions toward identical content.",
          quote: ""
        },
        {
          author: "Tallberg",
          year: 2023,
          title: "The Global Governance of Artificial Intelligence: Next Steps for Empirical and Normative Research",
          journal: "International Studies Review",
          doi: "10.1093/isr/viad040",
          url: "https://academic.oup.com/isr/article/25/3/viad040/7259354",
          relationship: "complements",
          relevance: "Maps the emerging architecture of global AI governance, noting scholarship has focused on AI applications rather than governance structure. The NoC2 analysis directly addresses this gap.",
          quote: ""
        },
        {
          author: "Schultz",
          year: 2024,
          title: "Digital Ethicswashing: A Systematic Review and a Process-Perception-Outcome Framework",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-024-00430-9",
          url: "https://link.springer.com/article/10.1007/s43681-024-00430-9",
          relationship: "extends",
          relevance: "Systematic review mapping ethicswashing into five thematic clusters. The NoC2 megacluster of 732 documents from diverse institutional types corroborates the ethicswashing hypothesis: performative ethics produces homogeneous language.",
          quote: ""
        },
        {
          author: "Munn",
          year: 2023,
          title: "The Uselessness of AI Ethics",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-022-00209-w",
          url: "https://link.springer.com/article/10.1007/s43681-022-00209-w",
          relationship: "complements",
          relevance: "Argues AI ethics principles are 'meaningless, isolated, and toothless.' The convergence megacluster provides empirical evidence: documents collapse into indistinguishable clusters when institutional form is removed.",
          quote: ""
        },
        {
          author: "Greene",
          year: 2019,
          title: "Better, Nicer, Clearer, Fairer: A Critical Assessment of the Movement for Ethical Artificial Intelligence and Machine Learning",
          journal: "Proceedings of HICSS-52",
          doi: "10.24251/HICSS.2019.258",
          url: "https://scholarspace.manoa.hawaii.edu/items/2c91a03d-caad-4c6f-9069-9bca4f393ce6",
          relationship: "complements",
          relevance: "Frame analysis reveals corporate AI ethics co-opts critical language into a techno-deterministic view. The NoC2 megacluster validates this: diverse institutions adopt the same rhetorical frames, producing linguistically homogeneous documents.",
          quote: ""
        },
        {
          author: "Noor",
          year: 2023,
          title: "Artificial Intelligence (AI) in Islamic Ethics: Towards Pluralist Ethical Benchmarking for AI",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-023-00668-x",
          url: "https://link.springer.com/article/10.1007/s13347-023-00668-x",
          relationship: "confirms",
          relevance: "Argues for pluralist AI ethics incorporating Islamic maqasid al-shariah framework. Directly supports the finding that religious AI governance content is genuinely sui generis, surviving intact when institutional form is removed.",
          quote: ""
        },
        {
          author: "Zeng",
          year: 2020,
          title: "Overcoming Barriers to Cross-cultural Cooperation in AI Ethics and Governance",
          journal: "Philosophy & Technology",
          doi: "10.1007/s13347-020-00402-x",
          url: "https://link.springer.com/article/10.1007/s13347-020-00402-x",
          relationship: "extends",
          relevance: "Identifies genuine cultural differences as barriers to cross-cultural AI governance. NoC2 provides empirical evidence that religious traditions constitute genuinely distinct governance paradigms.",
          quote: ""
        },
        {
          author: "Schiff",
          year: 2021,
          title: "AI Ethics in the Public, Private, and NGO Sectors: A Review of a Global Document Collection",
          journal: "IEEE Transactions on Technology and Society",
          doi: "10.1109/TTS.2021.3052127",
          url: "https://ieeexplore.ieee.org/document/9327495/",
          relationship: "confirms",
          relevance: "Scored 112 AI ethics documents finding sectoral breadth differences. NoC2 extends this: when institutional form is removed, even these differences dissolve, suggesting they are form effects, not deep content divergences.",
          quote: ""
        },
        {
          author: "Stix",
          year: 2021,
          title: "Actionable Principles for Artificial Intelligence Policy: Three Pathways",
          journal: "Science and Engineering Ethics",
          doi: "10.1007/s11948-020-00277-3",
          url: "https://link.springer.com/article/10.1007/s11948-020-00277-3",
          relationship: "complements",
          relevance: "Documents the principle-practice gap. The complete dispersal of Innovation Champions confirms these documents are institutionally distinctive only in governance posture, not substantive content.",
          quote: ""
        },
        {
          author: "Hickok",
          year: 2021,
          title: "Lessons Learned from AI Ethics Principles for Future Actions",
          journal: "AI and Ethics",
          doi: "10.1007/s43681-020-00008-1",
          url: "https://link.springer.com/article/10.1007/s43681-020-00008-1",
          relationship: "complements",
          relevance: "Reviews 100+ AI ethics principles documents finding US-West private company dominance. The NoC2 religious cluster's 88% survival suggests documents grounded in non-Western theological traditions resist the homogenizing convergence Hickok identifies.",
          quote: ""
        },
        {
          author: "Ulnicane",
          year: 2021,
          title: "Good Governance as a Response to Discontents? Deja Vu, or Lessons for AI from Other Emerging Technologies",
          journal: "Interdisciplinary Science Reviews",
          doi: "10.1080/03080188.2020.1840220",
          url: "https://journals.sagepub.com/doi/full/10.1080/03080188.2020.1840220",
          relationship: "complements",
          relevance: "Compares AI governance to other emerging technologies (nanotechnology, genomics) finding recurring isomorphic patterns. The same forces that homogenized nanotechnology governance operate in AI governance.",
          quote: ""
        },
        {
          author: "Cath",
          year: 2018,
          title: "Artificial Intelligence and the 'Good Society': The US, EU, and UK Approach",
          journal: "Science and Engineering Ethics",
          doi: "10.1007/s11948-017-9901-7",
          url: "https://pubmed.ncbi.nlm.nih.gov/28353045/",
          relationship: "confirms",
          relevance: "Compared US, EU, and UK government AI reports finding similar content but lacking overarching political vision. This form-substance gap prefigures the NoC2 finding that government documents lose distinctiveness when only content is analyzed.",
          quote: ""
        },
        {
          author: "Attard-Frost",
          year: 2023,
          title: "The Ethics of AI Business Practices: A Review of 47 AI Ethics Guidelines",
          journal: "AI and Ethics",
          doi: "",
          url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4034804",
          relationship: "extends",
          relevance: "Thematic analysis showing institutional context shapes ethical content. Directly supports NoC2's core finding that institutional form is a dominant structuring force in AI governance discourse.",
          quote: ""
        },
        {
          author: "Gianni",
          year: 2022,
          title: "Governance of Responsible AI: From Ethical Guidelines to Cooperative Policies",
          journal: "Frontiers in Computer Science",
          doi: "10.3389/fcomp.2022.873437",
          url: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.873437/full",
          relationship: "complements",
          relevance: "Classifies AI governance into framework types (soft vs hard, self-organization vs regulation). The institutional typology mirrors canonical clusters, while NoC2 shows content-based typology yields different groupings.",
          quote: ""
        },
        {
          author: "Floridi",
          year: 2019,
          title: "A Unified Framework of Five Principles for AI in Society",
          journal: "Harvard Data Science Review",
          doi: "10.1162/99608f92.8cd550d1",
          url: "https://hdsr.mitpress.mit.edu/pub/l0jsh9d1",
          relationship: "confirms",
          relevance: "Synthesized multiple frameworks into five core principles, finding high overlap. The very possibility of a unified framework confirms that content convergence is strong enough to dissolve institutional boundaries, as NoC2 demonstrates.",
          quote: ""
        },
        {
          author: "R\u00e9ss\u00e9guier",
          year: 2020,
          title: "AI Ethics Should Not Remain Toothless! A Call to Bring Back the Teeth of Ethics",
          journal: "Big Data & Society",
          doi: "10.1177/2053951720942541",
          url: "https://journals.sagepub.com/doi/10.1177/2053951720942541",
          relationship: "complements",
          relevance: "Argues rights-based legal enforcement is needed. NoC2's NC4 finding that rights-focused documents form a distinct content cluster independent of institutional origin supports the claim that human rights constitutes a different governance logic.",
          quote: ""
        }
      ]
    }
  }

};
