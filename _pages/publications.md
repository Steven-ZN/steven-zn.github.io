---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
toc: true
toc_label: "Contents"
---

\* denotes first author. A full CV is available [here]({{ "/assets/documents/Nuojunxi_Zhang_CV.pdf" | relative_url }}).

## Conference Papers

**Segmenting What Matters: A Dual-Stage Active Learning Framework for Weakly Supervised Breast Ultrasound Segmentation**<br>
**Nuojunxi Zhang**\*, Meng Xu, Guanchao Tong, Kuan Huang<br>
*IEEE International Conference on Bioinformatics and Biomedicine (BIBM)*, December 2025

A dual-stage framework that turns image-level labels into usable pixel supervision for breast ultrasound: CAM candidates are filtered with HSV-based contour constraints, refined into pseudo labels with SAM, and consumed by a Mean Teacher segmenter under iterative uncertainty-based sampling. Reaches 68.25% IoU and 79.39% DSC on BUSI.

## Under Review

**Estimating Detector Response Without Flat Fields: Its Failures and Solutions**<br>
**Nuojunxi Zhang**\*, Ahmed Lamidi, Boyang Li, Xin Qian, Yi Sheng<br>
*SPIE Medical Imaging 2027* — submitted August 2026

An analysis of when flat-field-free detector response estimation breaks down on real CT measurements, and a multi-scale response estimation scheme that restores accurate response recovery and reduces ROI bias in the reconstructed volume.

**Segmenting with Reliable Guidance: Dual-Branch AMR and CAM-Guided Learning for Weakly Supervised Breast Ultrasound Segmentation**<br>
**Nuojunxi Zhang**\*, Kuan Huang<br>
*Manuscript under review at a peer-reviewed journal*

Extends weakly supervised breast ultrasound segmentation with a dual-branch activation-map-refinement design, using CAM-guided consistency to improve mask reliability without pixel-level annotation.

## Presentations

**Vision-Based Rehabilitation System for Parkinson's Patients** (poster)<br>
Yifan Zhu, Lianjie Zhu, **Nuojunxi Zhang**<br>
*Research Day, Wenzhou-Kean University*, April 2023 — **Best Oral Presentation Award**

## Research Directions

My current work sits at two ends of the medical imaging pipeline. On the **acquisition and reconstruction** side, I study how detector calibration errors propagate into CT reconstructions, and how much of that calibration can be recovered from the measurements themselves when flat-field scans are unavailable or unreliable. On the **analysis** side, I work on cutting the annotation cost of medical image segmentation — using weak labels, active sampling, and foundation-model priors instead of exhaustive pixel-level masks.

Both directions share the same premise: clinically useful models have to be built from the data that hospitals actually have, not from the data that benchmarks assume.
