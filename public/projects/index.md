---
layout: index.md
title: archive
---
    
{% for post in collections.archive reversed %}
    <div>
        <span>{{ post.date | date: "%Y" }}</span>
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