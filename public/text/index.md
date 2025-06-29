---
layout: index.md
title: text
---

{% for post in collections.text reversed %} {{ post.date | date: "%Y.%m.%d" }}&nbsp; [{{ post.data.title }}](
    {%- if post.data.redirect -%}
        {{ post.data.redirect }}
    {%- else -%}
        {{ post.page.url }}
    {%- endif -%}
)  
{% endfor %}