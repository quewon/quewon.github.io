---
layout: base.html
title: post
---

{%- if source -%}
*originally posted on [{{ source-name }}]({{ source }})*  
<br>
{%- endif -%}

<div class="post">
{{ content }}
</div>

<style>
    .post p, li {
        font-family: serif;
        font-size: 1.3em;
        line-height: 1.35em;
    }
</style>