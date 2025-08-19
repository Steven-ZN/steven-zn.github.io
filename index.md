---
layout: splash
title: "Hi, I’m Steven — Computer Vision & WSIS"
header:
overlay_image: /images/banner.jpg # 建议一张有层次的 Banner（非纯色，避免单调）
overlay_filter: 0.25 # 蒙层透明度
actions:
- label: "View Projects"
url: "/projects/"
- label: "Read Blog"
url: "/blog/"
intro:
- excerpt: "I work on weakly supervised segmentation (CAM → pseudo masks), active learning, and consistency training. Building PhDTracking.com."
feature_row:
- image_path: /images/banner.jpg
alt: "WSIS Pipeline"
title: "WSIS Pipeline"
excerpt: "AMR → CAM → pseudo masks → Mean Teacher. Our dual‑stage AL stabilizes HSV selection."
url: "/projects/#wsis"
btn_label: "Details"
btn_class: "btn--primary"
- image_path: /images/banner.jpg
alt: "PhDTracking.com"
title: "PhDTracking.com"
excerpt: "A platform to match students ↔ faculty, scrape positions, and track outreach."
url: "/projects/#phdtracking"
btn_label: "Case Study"
btn_class: "btn--primary"
- image_path: /images/banner.jpg
alt: "Publications"
title: "Publications"
excerpt: "BMVC/BIBM submissions; medical imaging segmentation and AL."
url: "/about/#publications"
btn_label: "See List"
btn_class: "btn--primary"
---


{% include feature_row %}
