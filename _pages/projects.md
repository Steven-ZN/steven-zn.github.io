---
permalink: /projects/
title: "Projects"
layout: single
author_profile: true
toc: true
toc_label: "Contents"
description: "Research code and open-source projects by Nuojunxi (Steven) Zhang in medical imaging, computer vision, and LLM tooling."
---

Selected research code and open-source tools. Most repositories live on [GitHub](https://github.com/Steven-ZN).

## Research Projects

### Detector Response Estimation Without Flat Fields
*CT reconstruction · calibration · 2026 – Present*

Flat-field scans are the standard means of calibrating an X-ray detector, but they are not always available or current. This project develops a multi-scale scheme that estimates the detector response directly from projection data, and characterizes the measurement conditions that govern estimation accuracy. Evaluated on the 2DeteCT experimental dataset, the method targets response accuracy and ROI bias in the reconstruction.

**Stack:** Python, PyTorch, tomographic reconstruction toolchain, multi-GPU compute<br>
**Status:** abstract under review at SPIE Medical Imaging 2027

### DSAL-Net: Dual-Stage Active Learning for Medical Segmentation
*Weakly supervised learning · medical imaging · 2024 – 2025*

DSAL-Net addresses the annotation bottleneck in breast ultrasound segmentation by deriving pixel-level supervision from image-level labels in two coordinated stages. CAM candidates are stabilized with HSV-based contour constraints, the retained high-reliability subset is refined into pseudo masks by SAM, and a Mean Teacher segmenter is trained on them under iterative uncertainty-based sampling.

- **68.25% IoU** and **79.39% DSC** on BUSI
- Published as first author at IEEE BIBM 2025
- Extended into a dual-branch activation-map-refinement journal manuscript, under review

**Stack:** PyTorch, SAM, OpenCV<br>
[Repository](https://github.com/Steven-ZN/DSAL)

### Medfusion: Synthetic Breast Ultrasound Generation
*Diffusion models · VAE · medical imaging · 2024*

Extends the open-source Medfusion framework with pathology-aware training, so that generated ultrasound images preserve tumor-inclusive anatomical structure. The pipeline trains a latent VAE embedder together with a conditional diffusion model at 512×512, with distributed training and configurable sampling for downstream augmentation experiments.

**Stack:** Diffusion models, VAE, PyTorch<br>
[Repository](https://github.com/Steven-ZN/Medfusion_Fake_Image)

### HandSense-360: Real-Time Gesture Recognition
*Computer vision · rehabilitation · 2023*

MediaPipe-based real-time multi-hand tracking for a rehabilitation assessment system, with custom OpenCV integration for precision measurement and feedback. Presented at WKU Research Day.

**Stack:** MediaPipe, OpenCV, Python<br>
[Repository](https://github.com/Steven-ZN/HandSense-360)

---

## Open-Source Tools

### arXivPush: Automated arXiv Digest
An end-to-end pipeline that fetches, deduplicates, summarizes, and translates new arXiv papers into bilingual daily digests, delivered through Discord. Built on Python automation with local LLM summarization (Ollama + Qwen2.5).

**Reach:** 16+ stars, 3 forks, 2.6K+ views across communities<br>
[Repository](https://github.com/Steven-ZN/ArxivPush)

### DeepTeacher: Local Multimodal Learning Assistant
A privacy-preserving study assistant that runs entirely on-device, combining LLaVA-Phi3 for screen understanding with DeepSeek-R1 for feedback. Captures the screen, reasons over what it sees, and responds in natural language without sending anything to a remote API.

**Stack:** LLaVA-Phi3 3.8B, DeepSeek-R1, computer vision, local inference<br>
[Repository](https://github.com/Steven-ZN/DeepTeacher)

### MagicSub: LLM Subtitle Translation
Context-aware subtitle translation with batch processing, timing synchronization, and support for SRT / VTT / ASS formats.

[Repository](https://github.com/Steven-ZN/MagicSub)

---

## Collaboration

I'm open to collaborations on medical image reconstruction, label-efficient segmentation, and imaging physics. [Get in touch](/contact/).
