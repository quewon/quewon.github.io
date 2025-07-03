---
layout: base.html
title: index
dateFormat: "%Y.%m.%d"
collection: all
---

<style>
    @media (min-width: 55rem) {
        header {
            position: fixed; 
            margin: var(--body-margin);
            top: 0;
            left: 0;
        }
        header p {
            margin-top: 0;
        }
        body {
            margin-left: auto;
        }
    }
</style>

<header>
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
</header>

index

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