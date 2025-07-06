---
title: "Projects"
layout: single
permalink: /projects/
---

{% assign project_posts = site.posts | where: "categories", "projects" %}

<div class="entries-grid">
  {% for post in project_posts %}
    <div class="grid__item">
      <article class="archive__item">
        {% if post.header.teaser %}
          <div class="archive__item-teaser">
            <img src="{{ post.header.teaser | relative_url }}" alt="">
          </div>
        {% endif %}
        <h2 class="archive__item-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        {% if post.excerpt %}
          <p class="archive__item-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        {% endif %}
        {% if post.date %}
          <p class="archive__item-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
        {% endif %}
      </article>
    </div>
  {% endfor %}
</div>