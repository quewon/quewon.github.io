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