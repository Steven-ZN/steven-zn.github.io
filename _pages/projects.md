---
permalink: /projects/
title: "Projects"
layout: single
author_profile: true
toc: true
toc_label: "Contents"
---

Selected research code and open-source tools. Most repositories live on [GitHub](https://github.com/Steven-ZN).

## Research Projects

### Detector Response Estimation Without Flat Fields
*CT reconstruction · calibration · 2026 – present*

Flat-field scans are the standard way to calibrate an X-ray detector, but they are not always available, current, or trustworthy. This project asks how much of the detector response can be recovered from the projection data itself — and, more importantly, where that recovery fails. Working on the 2DeteCT experimental dataset, I characterize the failure modes of existing self-calibration approaches on real measurements and develop a multi-scale response estimation scheme aimed at response accuracy and ROI bias in the reconstruction.

**Stack:** Python, PyTorch, tomographic reconstruction toolchain, multi-GPU compute<br>
**Status:** abstract under review at SPIE Medical Imaging 2027

### DSAL-Net — Dual-Stage Active Learning for Medical Segmentation
*Weakly supervised learning · medical imaging · 2024 – 2025*

DSAL-Net attacks the annotation bottleneck in breast ultrasound segmentation: instead of pixel masks, it starts from image-level labels and builds usable supervision in two stages. CAM candidates are stabilized with HSV-based contour constraints, the surviving high-quality ones are refined into pseudo labels by SAM, and a Mean Teacher segmenter consumes them under iterative uncertainty-based sampling.

- **68.25% IoU** and **79.39% DSC** on BUSI
- Published as first author at IEEE BIBM 2025
- Extended into a dual-branch activation-map-refinement journal manuscript, under review

**Stack:** PyTorch, SAM, OpenCV<br>
[Repository](https://github.com/Steven-ZN/DSAL)

### Medfusion — Synthetic Breast Ultrasound Generation
*Diffusion models · VAE · medical imaging · 2024*

Extended the open-source Medfusion framework with pathology-aware training so that generated ultrasound images contain realistic, tumor-inclusive structure rather than plausible-looking noise. Trains a latent VAE embedder plus a conditional diffusion model at 512×512, with distributed training and configurable sampling for downstream augmentation experiments.

**Stack:** Diffusion models, VAE, PyTorch<br>
[Repository](https://github.com/Steven-ZN/Medfusion_Fake_Image)

### HandSense-360 — Real-Time Gesture Recognition
*Computer vision · rehabilitation · 2023*

MediaPipe-based real-time multi-hand tracking for a rehabilitation assessment system, with custom OpenCV integration for precision measurement and feedback. Presented at WKU Research Day.

**Stack:** MediaPipe, OpenCV, Python<br>
[Repository](https://github.com/Steven-ZN/HandSense-360)

---

## Open-Source Tools

### arXivPush — Automated arXiv Digest
An end-to-end pipeline that fetches, deduplicates, summarizes, and translates new arXiv papers into bilingual daily digests, delivered through Discord. Built on Python automation with local LLM summarization (Ollama + Qwen2.5).

**Reach:** 16+ stars, 3 forks, 2.6K+ views across communities<br>
[Repository](https://github.com/Steven-ZN/ArxivPush)

### DeepTeacher — Local Multimodal Learning Assistant
A privacy-preserving study assistant that runs entirely on-device, combining LLaVA-Phi3 for screen understanding with DeepSeek-R1 for feedback. Captures the screen, reasons over what it sees, and responds in natural language without sending anything to a remote API.

**Stack:** LLaVA-Phi3 3.8B, DeepSeek-R1, computer vision, local inference<br>
[Repository](https://github.com/Steven-ZN/DeepTeacher)

### MagicSub — LLM Subtitle Translation
Context-aware subtitle translation with batch processing, timing synchronization, and support for SRT / VTT / ASS formats.

[Repository](https://github.com/Steven-ZN/MagicSub)

---

## Collaboration

I'm open to collaborations on medical image reconstruction, label-efficient segmentation, and imaging physics. [Get in touch](/contact/).
