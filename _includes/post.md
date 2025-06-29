---
layout: base.html
title: post
---

{%- if source -%}
originally posted on [{{ source-name }}]({{ source }})
<hr>
{%- endif -%}

<div class="post">
{{ content }}
</div>

<style>
    .post {
        font-family: 'Arial', sans-serif;
        font-size: 1.2em;
        line-height: 1.35em;
    }
</style>