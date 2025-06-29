---
layout: index.md
title: q1's writing
eleventyExcludeFromCollections: true
---

[pots (short interactive fiction practice)](https://quewon.github.io/pots/)  
{% for post in collections.text reversed %} {{ post.date | date: "%Y.%m.%d" }}&nbsp; [{{ post.data.title }}](
    {%- if post.data.redirect -%}
        {{ post.data.redirect }}
    {%- else -%}
        {{ post.page.url }}
    {%- endif -%}
)  
{% endfor %}