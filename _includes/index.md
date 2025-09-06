---
layout: navbar.html
collection: all
dateFormat: "%Y-%m-%d"
---

<style>
    aside {
        position: fixed; 
        top: 0; 
        right: 0;
        padding: var(--body-margin);
        box-sizing: border-box;
        width: 50vw;
        height: 100vh;
        -ms-overflow-style: none;
        scrollbar-width: none;
        overflow: -moz-scrollbars-none;
        overflow-y: scroll;
    }

    main {
        max-width: calc(50vw - var(--body-margin) * 2);
    }

    @media (max-width: 600px) {
        aside {
            position: relative;
            padding: 0;
            height: unset;
            width: unset;
        }

        main {
            max-width: unset;
        }
    }
</style>

<main>
    {{ content }}
</main>

<aside class="monospace">

    index

    <ul>
    {% for post in collections[collection] reversed %}
        <li>
            {%- if post.page.url == page.url -%}
                <i>
                    {%- if post.data.title -%}
                        {{ post.data.title }}
                    {%- else -%}
                        {{ post.date | date: dateFormat }}
                    {%- endif %}
                </i>
            {%- else -%}
                [{%- if post.data.title -%}
                        {{ post.data.title }}
                    {%- else -%}
                        {{ post.date | date: dateFormat }}
                    {%- endif %}](<
                    {%- if post.data.redirect -%}
                        {{ post.data.redirect }}
                    {%- else -%}
                        {{ post.page.url }}
                    {%- endif -%}
                >)
            {%- endif -%}
        </li>
    {%- endfor -%}
    </ul>
</aside>