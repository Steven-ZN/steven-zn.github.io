---
permalink: /projects/
title: "Projects"
layout: single
classes: wide
author_profile: true
---

{% comment %}
从 _data/projects.yml 读取卡片数据
{% endcomment %}

## Featured

{% include feature_row id="featured" type="left" %}

---

## LLM & Agents

{% include feature_row id="llm" %}

---

## Medical Imaging & CV

{% include feature_row id="medcv" %}
