---
name:  SIR-Summ Extractive Narrative Summarizer
excerpt_separator: "<!--more-->"
categories: 
  - Education
tags: [NLP, Python, GNN, Automatic Summarization]
header:
  overlay_image: "../../assets/images/sirsum.png" 
  overlay_filter: 0.5
  show_overlay_excerpt: false

---
Master Thesis defended on October, 2023.
<!--more-->
SIR-Summ (*Structured Information Representation for Summarization*) is an **extractive summarizer of narrative short texts** (fairy tales and short stories) I developed for my master thesis project at Sapienza University of Rome, with Prof. Roberto Navigli as my advisor.
It was trained on the **FairySum** portion of the much larger Echoes from Alexandria dataset \[1\].

<img src="../../assets/images/sirsum.png" alt="SIR-sum" width="500"/>

The main idea was to leverage (i) the semantics of the text using SRL, (ii) the entity information obtained by a coreference pipeline, and (iii) grammatics retrieved by depencency parsing.
With these information, it is possible to build a graph for each story, on which a GNN-based classfier can be trained to select the *important sentence*, so to output an extractive summary of the story in input.


\[1\]: [Echoes from Alexandria: A Large Resource for Multilingual Book Summarization (Scirè et al., Findings 2023)](https://aclanthology.org/2023.findings-acl.54/)