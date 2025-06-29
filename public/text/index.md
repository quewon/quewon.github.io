---
layout: index.md
title: text
---

{% for post in collections.text reversed %}
    <div>
        <span>{{ post.date | date: "%Y.%m.%d" }}</span>
        <span>
            [{{ post.data.title }}](
                {%- if post.data.redirect -%}
                    {{ post.data.redirect }}
                {%- else -%}
                    {{ post.page.url }}
                {%- endif -%}
            )
        </span>
    </div>{% endfor %}

<style>
    div {
        position: relative;
        display: flex;
        gap: 2ch;
    }
</style>