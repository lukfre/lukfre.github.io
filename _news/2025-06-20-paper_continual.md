---
layout: paper
title: >
    🇮🇹 Paper accepted at CLiC-it 2025: <i>What We Learned from Continually Training Minerva</i>
date: 2025-07-21
inline: false
related_posts: false
bib_key: moroni-etal-2025-learned
flag: 🇮🇹
logo: assets/img/logo_ClicIt_2025.png
logo_width: 30%
venue: CLiC-it Conference 2025
venue_url: https://clic2025.unica.it/
city: Cagliari
city_url: https://www.openstreetmap.org/relation/39837
shields:
  - { label: Conference, message: "CLiC--it 2025", color: forestgreen, url: "https://clic2025.unica.it/Vol-XXXX/71_main_long.pdf" }
  - { label: "%F0%9F%A4%97 Dataset", message: INDAQA, color: FCD21D, url: "https://huggingface.co/datasets/sapienzanlp/indaqa" }
  - { label: "%F0%9F%A4%97 Dataset", message: "ITALIC--Gen", color: FCD21D, url: "https://huggingface.co/datasets/sapienzanlp/ITALIC-gen" }
---

# What We Learned from Continually Training Minerva: Insights for Italian LLM Development

Training large language models for less-represented languages presents unique challenges.
In this work, we investigated how different data recipes and context length extensions affect Italian LLM performance.

We used [Minerva-7B](https://huggingface.co/sapienzanlp/Minerva-7B-base-v1.0), a fully open-source bilingual model, pretrained on 50% Italian and 50% English content, to test three data recipes during continual pretraining: mathematical, encyclopedic, and copyrighted literary content from both Italian and English. We also explored extending the model's context window to handle longer documents.

To evaluate long-context understanding, we created **INDAQA**, the <u>I</u>talian <u>N</u>arrative <u>Da</u>taset for <u>Q</u>uestion-<u>A</u>nswering, the first narrative long-context benchmark for Italian.

**Our Key Findings**:

1. _Context Extension Beats Brute Force_:
   Extending Minerva's context window to handle chapter- or book-length texts achieved state-of-the-art performance on long Italian documents. Our models outperformed both Italian-adapted models fine-tuned from English foundations and models trained on many more trillion tokens.
   The takeaway: strategic continual pretraining on well-designed Italian data can compete with—and surpass—the brute-force approach of adapting massive English-centric models.
2. _Multiple-Choice Tests Mislead on Cultural Knowledge_
   When testing cultural knowledge using multiple-choice questions, results were misleading—models could score well through pattern matching without genuine understanding.
   But with open-ended question answering, where models generate free-form responses, Minerva excelled and surpassed all competitors. For fair evaluation of language-specific capabilities, we need formats that truly test comprehension and generation.

We contribute INDAQA to the community and demonstrate the importance of evaluation format when assessing language-specific models.

---

*[LLM]: Large Language Model
*[OE]: Open-ended, also known as _free-form_
