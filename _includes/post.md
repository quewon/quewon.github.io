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