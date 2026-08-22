---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
toc: true
toc_label: "Contents"
description: "Publications and manuscripts under review by Nuojunxi (Steven) Zhang, covering medical image segmentation and CT reconstruction and calibration."
---

\* denotes first author. A full CV is available [here]({{ "/assets/documents/Nuojunxi_Zhang_CV.pdf" | relative_url }}).

## Conference Papers

**Segmenting What Matters: A Dual-Stage Active Learning Framework for Weakly Supervised Breast Ultrasound Segmentation**<br>
**Nuojunxi Zhang**\*, Meng Xu, Guanchao Tong, Kuan Huang<br>
*IEEE International Conference on Bioinformatics and Biomedicine (BIBM)*, December 2025

A dual-stage pipeline that derives pixel-level supervision from image-level annotations for breast ultrasound. CAM candidates are filtered with HSV-based contour constraints, refined into pseudo masks with SAM, and used to train a Mean Teacher segmenter under iterative uncertainty-based sampling. The framework achieves 68.25% IoU and 79.39% DSC on BUSI.

## Under Review

**Estimating Detector Response Without Flat Fields: Its Failures and Solutions**<br>
**Nuojunxi Zhang**\*, Ahmed Lamidi, Boyang Li, Xin Qian, Yi Sheng<br>
*SPIE Medical Imaging 2027* — abstract under review, submitted August 2026

A multi-scale estimation scheme that recovers detector response directly from projection data when flat-field scans are unavailable, together with an analysis of the measurement conditions that govern its accuracy. The method improves response accuracy and mitigates ROI bias in the reconstructed volume.

**Segmenting with Reliable Guidance: Dual-Branch AMR and CAM-Guided Learning for Weakly Supervised Breast Ultrasound Segmentation**<br>
**Nuojunxi Zhang**\*, Kuan Huang<br>
*Manuscript under review at a peer-reviewed journal*

A dual-branch activation-map-refinement design that stabilizes CAM estimation, coordinated with CAM-guided consistency learning to mitigate error propagation into the segmentation stage. The pipeline improves pseudo-mask reliability without pixel-level annotation.

## Presentations

**Vision-Based Rehabilitation System for Parkinson's Patients** (poster)<br>
Yifan Zhu, Lianjie Zhu, **Nuojunxi Zhang**<br>
*Research Day, Wenzhou-Kean University*, April 2023 — **Best Oral Presentation Award**

## Research Directions

My work addresses two stages of the medical imaging pipeline. At the **acquisition and reconstruction** stage, I study how detector calibration errors propagate into CT reconstructions, and how much of that calibration can be recovered from the measurements themselves when flat-field scans are unavailable. At the **analysis** stage, I develop annotation-efficient segmentation methods that rely on weak labels, active sampling, and foundation-model priors rather than exhaustive pixel-level masks.

Both directions address the same underlying issue: errors introduced early in the pipeline are propagated to later stages and amplified during training. My aim is to identify where these errors originate and to mitigate them before they accumulate.
