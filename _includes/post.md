---
layout: base.html
title: post
dateFormat: "%Y.%m.%d"
---

{% comment %} index.md {% endcomment %}

<nav>
    <button style="margin-right: 1ch" onclick="history.back()">↩</button>
    {%- assign pages = page.url | split: "/" -%}
    {%- for folder in pages -%}
        {%- if forloop.first -%}
            <a href="/">home</a>
        {%- elsif forloop.last -%}
            <span class="current-page-link"> · {{ title | default: folder }}</span>
        {%- else -%}
            <span> · </span>
            {%- assign path = pages | slice: 0, forloop.index | join: '/' -%}
            {%- assign page = collections.all | getPage: path -%}
            <a href="{{ path }}">{{ page.data.title | default: folder }}</a>
        {%- endif -%}
    {%- endfor -%}
</nav>

<div class="right-aligned">
    index

    <div class="index">
        {% for post in collections[collection] reversed %}
        <div>
            <span>{{ post.date | date: dateFormat }}</span>
            <span>
                {%- if post.data.title == title and post.date == date -%}
                    *{{ post.data.title }}*
                {%- else -%}
                    [{{ post.data.title }}](
                        {%- if post.data.redirect -%}
                            {{ post.data.redirect }}
                        {%- else -%}
                            {{ post.page.url }}
                        {%- endif -%}
                    )
                {%- endif -%}
            </span>
        </div>{% endfor %}
    </div>
</div>

<style>
    .index div {
        display: flex;
        gap: 2ch;
    }

    @media (min-width: 80rem) {
        .right-aligned {
            position: fixed;
            top: 0;
            right: 0;
            width: calc(40rem + var(--body-margin) * 2);
            height: 100vh;
            padding: var(--body-margin);
            box-sizing: border-box;

            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow: -moz-scrollbars-none;
            overflow-y: scroll;

            overscroll-behavior: contain;
        }
        .right-aligned::-webkit-scrollbar {
            display: none;
        }
        .current-page-link {
            display: none;
        }
        .index p {
            margin: 0;
        }
    }

    @media (max-width: 80rem) {
        .right-aligned {
            display: none;
        }
    }
</style>

{% comment %} post {% endcomment %}

{% if source %}
    *originally posted on [{{ source-name }}]({{ source }})*
{% endif %}

<div class="post">
    {{ content }}
</div>

<style>
    .post {
        font-family: serif;
        text-align: justify;
        line-height: 1.2em;
    }
    @media (max-device-width: 1000px) {
        .post {
            font-family: serif;
            font-size: 1.3em;
        }
    }
</style>