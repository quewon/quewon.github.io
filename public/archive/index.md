---
layout: index.md
title: archive
---

{% for post in collections.archive reversed %} {{ post.date | date: "%Y" }}&nbsp; [{{ post.data.title }}](
    {%- if post.data.redirect -%}
        {{ post.data.redirect }}
    {%- else -%}
        {{ post.page.url }}
    {%- endif -%}
)  
{% endfor %}