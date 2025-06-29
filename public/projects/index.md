---
layout: index.md
title: q1's projects
eleventyExcludeFromCollections: true
---

{% for post in collections.project reversed %} {{ post.date | date: "%Y.%m.%d" }}&nbsp; [{{ post.data.title }}](
    {%- if post.data.redirect -%}
        {{ post.data.redirect }}
    {%- else -%}
        {{ post.page.url }}
    {%- endif -%}
)  
{% endfor %}