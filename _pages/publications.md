---
permalink: /publications/
title: "Publications"
---
{::options parse_block_html="true" /}

## Preprints
Can't spoiler them yet! :eyes:

## 2025

- Luca Moroni\*, Tommaso Bonomo, <u>Luca Gioffré</u>, Lu Xu, Domenico Fedele, Leonardo Colosi, Andrei Stefan Bejgu, Alessandro Scirè and Roberto Navigli. 2025. **What we Learned from Continually Training Minerva: a Case Study on Italian.** In *Proceedings of the 10th Italian Conference on Computational Linguistics (CLiC-it 2025)*, pages xxx–xxx, Cagliari, Italy. CEUR Workshop Proceedings.
[![CLiC-it](https://img.shields.io/badge/CLiC--it-2025-red)](https://clic2025.unica.it/Vol-XXXX/71_main_long.pdf)
[![INDAQA HuggingFace Dataset](https://img.shields.io/badge/%F0%9F%A4%97%20INDAQA-Dataset-FCD21D)](https://huggingface.co/datasets/sapienzanlp/indaqa) 
[![ITALIC-Gen HuggingFace Dataset](https://img.shields.io/badge/%F0%9F%A4%97%20ITALIC--Gen-Dataset-FCD21D)](https://huggingface.co/datasets/sapienzanlp/ITALIC-gen)<details>
*We explore continual pretraining strategies to improve Italian-language performance using Minerva by testing different data mixtures (mathematical, encyclopedic, and narrative) and extended context windows.*
*We introduce INDAQA, a new Italian narrative QA benchmark, and find that both data composition and longer context significantly enhance performance on Italian tasks.*
*We also convert the [ITALIC](https://aclanthology.org/2025.naacl-long.68/) benchmark from MC to OE format to disentangle whether models struggle with format adherence or with recalling cultural knowledge.*</details>


- Tommaso Bonomo\*, <u>Luca Gioffré</u>\*, and Roberto Navigli. 2025. **LiteraryQA: Towards Effective Evaluation of Long-document Narrative QA** In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, pages xxx–xxx, Suzhou, China. Association for Computational Linguistics.
[![EMNLP](https://img.shields.io/badge/EMNLP-2025-green)]()
[![LiteraryQA HuggingFace Dataset](https://img.shields.io/badge/%F0%9F%A4%97%20LiteraryQA-Dataset-FCD21D)](https://huggingface.co/datasets/sapienzanlp/LiteraryQA) <details>
*We introduce LiteraryQA, a high-quality subset of [NarrativeQA](https://aclanthology.org/Q18-1023/) that addresses the benchmark's reliability issues through systematic cleaning of documents and validation of question-answer pairs.* 
*Our meta-evaluation reveals that traditional n-gram metrics poorly correlate with human judgment, while LLM-based evaluation, even using smaller open-weight models, achieves strong agreement with human rankings.* 
*We provide benchmark results for state-of-the-art long-context LLMs and establish best practices for evaluating narrative question answering systems.*</details>


- Francesco Maria Molfese, Luca Moroni, <u>Luca Gioffré</u>, Alessandro Scirè, Simone Conia, and Roberto Navigli. 2025. **Right Answer, Wrong Score: Uncovering the Inconsistencies of LLM Evaluation in Multiple-Choice Question Answering.** In *Findings of the Association for Computational Linguistics: ACL 2025*, pages 18477–18494, Vienna, Austria. Association for Computational Linguistics.
[![ACL](https://img.shields.io/badge/ACL-2025-red)](https://aclanthology.org/2025.findings-acl.950/)
[![arXiv](https://img.shields.io/badge/arXiv-paper-b31b1b.svg)](https://arxiv.org/abs/2503.14996) 
[![MMLU-Adversarial HuggingFace Dataset](https://img.shields.io/badge/%F0%9F%A4%97%20MMLU--Adversarial-Dataset-FCD21D)](https://huggingface.co/datasets/sapienzanlp/MMLU-Adversarial) 
[![GitHub](https://img.shields.io/badge/GitHub-Official Repository-blue)](https://github.com/Andrew-Wyn/metaQAeval)
[![post](https://img.shields.io/badge/Blog-Presentation Post-green)]({% link _posts/2025-03-19-RAWS-preprint.md %}) <details>
*Traditional MCQA evaluation strategies often underestimate LLM capabilities, while LLM-based answer extractors are prone to systematic errors.* 
*Moreover, there exists a fundamental trade-off between constraining a model's output to simplify answer extraction and allowing it to freely generate to improve reasoning.* 
*These findings call for standardized evaluation methodologies and highlight the need for more reliable and consistent MCQA evaluation practices.*</details>

---
*[LLM]: Large Language Model
*[MC]: Multiple-Choice
*[OE]: Open-ended (also known as free-form)
*[MCQA]: Multiple-Choice Question Answering
*[NarrativeQA]: Kočiský et al., TACL 2018
*[ITALIC]: Seveso et al., NAACL 2025