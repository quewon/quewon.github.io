---
layout: index.md
---

<style>
    @media (max-width: 600px) {
        aside {
            display: none;
        }
    }
</style>

{% if source %}
    *originally posted on [{{ source-name }}]({{ source }})*
{% endif %}

<div class="post">
    {{ content }}
</div>