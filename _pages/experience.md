---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
toc: true
toc_label: "Contents"
description: "Research, teaching, and leadership experience of Nuojunxi (Steven) Zhang at the University of South Florida, Kean University, and Wenzhou-Kean University."
---

## Research Experience

### Graduate Research Assistant — CT Reconstruction and Calibration
**University of South Florida**, Bellini College of AI, Cybersecurity and Computing | *Aug 2026 – Present*<br>
Advisor: Prof. Yi Sheng

- Studying detector response estimation for X-ray CT when flat-field calibration scans are unavailable, and characterizing where existing self-calibration methods break down on real scanner measurements
- Developed a multi-scale response estimation scheme evaluated on the 2DeteCT experimental CT dataset, targeting response accuracy and ROI bias in the reconstructed volume
- Running large-scale reconstruction and ablation sweeps across multi-GPU compute
- First-author abstract under review at SPIE Medical Imaging 2027

### Research Assistant — NSF-Funded Ultrasound Segmentation
**AI4Healthcare Lab, Kean University** | *Dec 2024 – Sept 2025*<br>
Advisor: Prof. Kuan Huang

- Designed a dual-stage active learning framework for weakly supervised tumor segmentation from image-level labels on breast ultrasound
- Built CAM filtering with HSV-based contour constraints and used SAM to refine selected high-quality CAMs into pseudo labels
- Integrated a Mean Teacher segmentation model with iterative uncertainty-based sampling, reaching **68.25% IoU and 79.39% DSC on BUSI**
- First-author paper accepted at IEEE BIBM 2025 (19.8% acceptance rate)
- Continued into a journal-targeted extension on dual-branch activation-map refinement, currently under review

### Research Participant — Medfusion Synthetic Ultrasound Generation
**Kean University** | *Sept 2024 – Dec 2024*

- Built a synthetic medical image pipeline using variational autoencoders and diffusion models to augment breast ultrasound data for weakly supervised segmentation
- Trained a latent VAE embedder and a conditional diffusion model on BUSI at 512×512 resolution
- Designed experiments pairing diffusion-generated images with weak labels to measure their effect on downstream segmentation

### Research Assistant — Vision-AI Lab (SPF-Funded)
**Wenzhou-Kean University** | *Sept 2023 – May 2024*<br>
Advisor: Prof. Gupta

- Contributed to an SPF-funded project on raw image denoising via Bayer pattern modeling
- Extended the latent space and adapted the codebase of a prior CVPR 2022 Workshop project from the same lab

### Research Assistant — Parkinson's Rehabilitation Interface
**Wenzhou-Kean University** | *Feb 2023 – June 2023*

- Built an OpenCV + MediaPipe system that captures patients' hand movements and returns real-time feedback for rehabilitation assessment
- Earned the **Outstanding Presentation Award** at WKU Research Day for the prototype

---

## Teaching

### Graduate Instructional Assistant — Incident Response
**Bellini College of AI, Cybersecurity and Computing, University of South Florida** | *Aug 2026 – Present*

- Instructional assistant for a course on incident response methods
- Supporting labs and hands-on exercises, grading assignments, and holding office hours

---

## Leadership & Service

### Vice President — Computer Club
**Wenzhou-Kean University** | *Jan 2024 – June 2024*

- Managed club operations, departmental organization, and project planning
- Led initiatives that increased active membership and project participation by **30%**
- Organized technical workshops, coding competitions, and networking events

### College Assistant — College of Science, Mathematics and Technology
**Wenzhou-Kean University** | *Aug 2022 – May 2024*

- Supported faculty with event promotion and day-to-day coordination of academic activities
- Streamlined scheduling processes across departmental projects

---

## Skills & Technologies

**Programming Languages:** Python, Java, C#, SQL, MATLAB

**ML / DL Frameworks:** PyTorch, TensorFlow, Hugging Face Transformers, Diffusers, scikit-learn, OpenCV, SAM

**Imaging & Reconstruction:** CT physics and calibration, tomographic reconstruction, medical image processing

**Language & Multimodal Models:** Vision-language models, LLM inference and local deployment, retrieval and summarization pipelines

**Infrastructure:** Linux, Git, Docker, CUDA, multi-GPU training

**Other:** Object-oriented design, system testing, technical writing

---

## Honors & Awards

- **Dean's Honor List**, Kean University
- **NSF-funded Research Assistantship**, Kean University (2025)
- **Outstanding Presentation Award**, WKU Research Day (2023)
- **First-author publication** at IEEE BIBM 2025 (19.8% acceptance rate)
