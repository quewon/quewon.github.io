---
layout: base.html
title: index
dateFormat: "%Y.%m.%d"
collection: all
---

<nav>
    <button style="margin-right: 1ch" onclick="history.back()">↩</button>
    {%- assign pages = page.url | split: "/" -%}
    {%- for folder in pages -%}
        {%- if forloop.first -%}
            <a href="/">home</a>
        {%- elsif forloop.last -%}
            {{ title | default: folder }}
        {%- else -%}
            {%- assign path = pages | slice: 0, forloop.index | join: '/' -%}
            {%- assign page = collections.all | getPage: path -%}
            <a href="{{ path }}">{{ page.data.title | default: folder }}</a>
        {%- endif -%}
        {% unless forloop.last %} · {% endunless %}
    {%- endfor -%}
</nav>

{% for post in collections[collection] reversed %}
    <div>
        <span>{{ post.date | date: dateFormat }}</span>
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
        display: flex;
        gap: 2ch;
    }
</style>