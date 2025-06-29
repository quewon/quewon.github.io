---
layout: index.md
title: archive
eleventyExcludeFromCollections: true
---

{% for post in collections.project reversed %} {{ post.date | date: "%Y" }}&nbsp; [{{ post.data.title }}](
    {%- if post.data.redirect -%}
        {{ post.data.redirect }}
    {%- else -%}
        {{ post.page.url }}
    {%- endif -%}
)  
{% endfor %}