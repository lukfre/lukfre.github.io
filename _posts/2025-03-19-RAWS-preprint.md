---
title: "Right Answer, Wrong Score -- Paper Preprint"
excerpt_separator: "<!--more-->"
categories:
  - Publications
tags:
  - MCQA
  - Evaluation
  - LLMs
---
📄 Read the full paper on ACL Proceedings or on arXiv 

[![ACL](https://img.shields.io/badge/ACL-2025-red)](https://aclanthology.org/2025.findings-acl.950/)
[![arXiv](https://img.shields.io/badge/arXiv-paper-b31b1b.svg)](https://arxiv.org/abs/2503.14996) 
[![MMLU-Adversarial HuggingFace Dataset](https://img.shields.io/badge/%F0%9F%A4%97%20MMLU--Adversarial-Dataset-FCD21D)](https://huggingface.co/datasets/sapienzanlp/MMLU-Adversarial) 
[![GitHub](https://img.shields.io/badge/GitHub-Official Repository-blue)](https://github.com/Andrew-Wyn/metaQAeval) 
<!--more-->

## Can we truly trust LLM evaluation scores? 🤔

Multiple-Choice Question Answering is one of the most widely used benchmarks for assessing LLMs across domains like math, science, commonsense reasoning and general knowledge. 
Since answer choices are predefined, **evaluating models seems straightforward**. 
However, our latest research reveals that current evaluation strategies introduce inconsistencies that may lead to incorrect conclusions about model performance.

In our paper, "**Right Answer, Wrong Score: Uncovering the Inconsistencies of LLM Evaluation in Multiple-Choice Question Answering**", we conduct a systematic analysis of how different answer extraction methods influence reported accuracy. 
Our study highlights **several critical challenges that affect the reliability** of LLM evaluation.

**Our Key Findings**:  
  1. Traditional evaluation strategies **underestimate** LLM performance 
  2. A **trade-off exists between enforcing** format constraints (for easy evaluation) and **allowing** free-form text (for better reasoning)
  3. LLM-based answer **extractors** are **prone to systematic errors**

We show that the way in which answers are extracted can significantly impact reported accuracy, raising concerns about the robustness of existing MCQA benchmarks. 
**Our findings highlight the need for more reliable and standardized evaluation strategies to ensure fair model comparison**.


👏 Huge thanks to all my co-authors! 

~ Francesco Maria Molfese, Luca Moroni, Luca Gioffré, Alessandro Scirè, Simone Conia and Roberto Navigli.
{: .notice--info}