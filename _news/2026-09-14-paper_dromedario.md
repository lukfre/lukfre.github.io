---
layout: paper
title: >
    🇮🇹 Paper accepted at CLiC-it 2026: <i>Dromedario 3</i>&nbsp; 🐪
date: 2026-09-14
inline: false
related_posts: false
bib_key: gioffre-2026-dromedario3
flag: 🇮🇹
logo: assets/img/logo_ClicIt_2026.png
logo_width: 50%
venue: CLiC-it Conference 2026
venue_url: https://clic2026.unipa.it/
city: Palermo
city_url: https://www.openstreetmap.org/relation/39513
shields:
  - { label: Conference, message: "CLiC--it 2026", color: forestgreen, url: "https://clic2026.unipa.it/accepted-papers/" }
  - { label: "%F0%9F%A4%97 Dataset", message: "Dromedario 3", color: FCD21D, url: "https://huggingface.co/datasets/sapienzanlp/dromedario-3-sft-dataset" }
  - { label: GitHub, message: Code, color: blue, url: "https://github.com/sapienzanlp/" }
---

<center>
    <div style="width: 30%; overflow: hidden;">
        {% include figure.liquid loading="eager" path="assets/img/dromedario.alpha.png" class="img-fluid rounded" %}
    </div>
</center>

# Dromedario 3

Dromedario 3 is a large-scale Italian instruction-tuning dataset built from the [Tülu 3 SFT mixture](https://arxiv.org/abs/2411.15124v5) through a documented pipeline of taxonomy-based filtering, translation, and post-translation quality control. 
We validate Dromedario 3 training two models, [Minerva 7B](https://huggingface.co/sapienzanlp/Minerva-7B-base-v1.0) and [Llama 3 8B](https://arxiv.org/abs/2407.21783) on different recipes, and we found that Italian SFT improves the performance of models with stronger Italian pretraining of up to 30% compared to the original Tülu 3 mixture.

This result suggests that **language-specific SFT data matters**; in this context, translated English data of silver quality is a first step toward building more capable Italian models.