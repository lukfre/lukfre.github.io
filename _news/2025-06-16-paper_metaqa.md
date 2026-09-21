---
layout: paper
title: >
  🇦🇹 Paper accepted at ACL 2025: <i>Right Answer, Wrong Score</i>
date: 2025-06-16
inline: false
related_posts: false
bib_key: molfese-etal-2025-right
flag: 🇦🇹
logo: assets/img/acl2025_id-square_black_600x600.png
logo_width: 30%
venue: ACL Findings 2025
venue_url: https://aclanthology.org/2025.findings-acl.950/
city: Vienna
city_url: https://www.openstreetmap.org/relation/109166
shields:
  - { label: Conference, message: ACL 2025, color: red, url: "https://2025.aclweb.org/" }
  - { label: Paper, message: arXiv, color: b31b1b, url: "https://arxiv.org/abs/2503.14996" }
  - { label: Paper, message: ACL--anthology, color: "008080", url: "https://aclanthology.org/2025.findings-acl.950/" }
  - { label: "%F0%9F%A4%97 Dataset", message: MMLU--Adversarial, color: FCD21D, url: "https://huggingface.co/datasets/sapienzanlp/MMLU-Adversarial" }
  - { label: GitHub, message: Code, color: blue, url: "https://github.com/Andrew-Wyn/metaQAeval" }
---

# Can we truly trust LLM evaluation scores?

Multiple-Choice Question Answering is one of the most widely used benchmarks for assessing LLMs across domains like math, science, commonsense reasoning and general knowledge.
Since answer choices are predefined, **evaluating models seems straightforward**.
However, our latest research reveals that current evaluation strategies introduce inconsistencies that may lead to incorrect conclusions about model performance.

In our paper, "**Right Answer, Wrong Score: Uncovering the Inconsistencies of LLM Evaluation in Multiple-Choice Question Answering**", we conduct a systematic analysis of how different answer extraction methods influence reported accuracy.
Our study highlights **several critical challenges that affect the reliability** of LLM evaluation.

## Key Findings

1. Traditional evaluation strategies **underestimate** LLM performance
2. A **trade-off exists between enforcing** format constraints (for easy evaluation) and **allowing** free-form text (for better reasoning)
3. LLM-based answer **extractors** are **prone to systematic errors**

We show that the way in which answers are extracted can significantly impact reported accuracy, raising concerns about the robustness of existing MCQA benchmarks.
**Our findings highlight the need for more reliable and standardized evaluation strategies to ensure fair model comparison**.
