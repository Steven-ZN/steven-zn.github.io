---
permalink: /projects/
title: "Projects & Research"
layout: single
classes: wide
author_profile: true
toc: true
---

Welcome to my comprehensive project portfolio! Here you'll find detailed information about my research and development work across medical AI, natural language processing, computer vision, and practical applications. Each project represents a unique contribution with open-source implementations.

---

## Featured Research Projects

<div class="project-showcase">

### DSAL-Net: Dual-Stage Active Learning for Medical Segmentation

<div class="project-card featured-project">

**Research Focus**: Weakly Supervised Learning, Medical Imaging, Active Learning

DSAL-Net introduces a novel dual-stage active learning framework specifically designed for breast ultrasound segmentation. This first-author research project tackles the critical challenge of limited labeled data in medical imaging through innovative CAM filtering and Mean Teacher consistency learning.

**Key Innovations:**
- Dual-stage architecture combining weak supervision with active learning
- HSV color space stabilization for robust pseudo-label generation  
- Mean Teacher framework adapted for medical imaging consistency
- **Performance**: Achieved **68.25% IoU** and **79.39% DSC** on BUSI dataset

**Research Status**: First-author paper under review at IEEE-BIBM 2025  
**Technologies**: PyTorch, SAM, Computer Vision, Medical Imaging  
**Impact**: Reduces annotation costs by up to 60% while maintaining clinical accuracy

<div class="project-buttons">
<a href="https://github.com/Steven-ZN/DSAL-Net" class="btn btn--primary btn--large">Explore on GitHub</a>
</div>

</div>

### EchoMind: True Personality Mirrors for LLMs

<div class="project-card featured-project">

**Research Focus**: Large Language Models, Memory Systems, Personality AI

EchoMind is a groundbreaking framework that creates consistent personality mirrors on open-source LLMs. The system combines three types of memory stores (episodic, procedural, belief) with advanced style adapters to achieve unprecedented personality consistency in AI conversations.

**Technical Architecture:**
- **Memory Systems**: Episodic, procedural, and belief memory integration
- **Style Adaptation**: LoRA/Prefix tuning with classifier-guided generation
- **Consistency Engine**: Real-time personality trait monitoring and adjustment
- **Performance**: 94% personality coherence across extended conversations

**Applications**: Character AI, Educational assistants, Therapeutic chatbots, Creative writing  
**Technologies**: Transformers, LoRA, Vector Databases, Memory Architectures  
**Innovation**: First comprehensive memory-based personality system for open-source LLMs

<div class="project-buttons">
<a href="https://github.com/Steven-ZN/EchoMind" class="btn btn--primary btn--large">Explore on GitHub</a>
</div>

</div>

### Medfusion: Advanced Medical Image Generation

<div class="project-card featured-project">

**Research Focus**: Generative AI, Medical Imaging, Synthetic Data

Medfusion transforms synthetic medical imaging through advanced VAEs and Diffusion Models. Specifically optimized for breast ultrasound synthesis, it generates realistic, tumor-inclusive outputs with precise distribution control for medical AI training.

**Technical Highlights:**
- **Dual-Model Architecture**: VAE embedder + conditional diffusion model
- **Medical Optimization**: Pathology-aware training for realistic anatomical structures
- **Quality Assurance**: 512×512 resolution with comprehensive evaluation metrics
- **Clinical Validation**: High acceptance rate from radiologist evaluation

**Research Impact**: 15% improvement in weak supervision scenarios, 40% reduction in labeling requirements  
**Technologies**: Diffusion Models, VAE, PyTorch, Medical Image Processing  
**Period**: September 2024 - December 2024

<div class="project-buttons">
<a href="https://github.com/Steven-ZN/Medfusion_Fake_Image" class="btn btn--primary btn--large">Explore on GitHub</a>
</div>

</div>

</div>

---

## AI Research & Innovation

<div class="project-grid">

<div class="project-card">
<h3>MBTI-LLM: Personality-Controlled Text Generation</h3>

Simulating human-like personality in LLMs using MBTI framework with sophisticated style control mechanisms.

**Key Features:**
- 16 MBTI personality type simulation with 87% classification accuracy
- Advanced prompt engineering and response filtering for consistency
- Comprehensive evaluation framework with human preference studies
- 78% user preference for personality-matched interactions

**Applications**: Psychology studies, Human-AI interaction research, Personalized content generation

<a href="https://github.com/Steven-ZN/MBTI-LLM" class="btn btn--info">View Project</a>
</div>

<div class="project-card">
<h3>positronic-brain: AI Safety Through Code-Level Constraints</h3>

Experimental implementation of Asimov's Three Laws of Robotics within modern AI systems.

**Innovation Focus:**
- Code-level representation of ethical constraints for LLMs
- Autonomous agent safety mechanisms by design
- Theoretical framework for AI behavior control
- Open research platform for AI safety exploration

**Impact**: Pioneering work in practical AI safety implementation for language models

<a href="https://github.com/Steven-ZN/positronic-brain" class="btn btn--info">View Project</a>
</div>

<div class="project-card">
<h3>HandSense-360: Real-time Gesture Recognition</h3>

Advanced computer vision system for healthcare and control applications.

**Technical Capabilities:**
- Real-time gesture tracking with MediaPipe integration
- Precision metrics and seamless external system integration
- Healthcare innovation applications for rehabilitation
- Advanced control systems for accessibility

**Applications**: Healthcare rehabilitation, Accessibility tools, Human-computer interaction

<a href="https://github.com/Steven-ZN/HandSense-360" class="btn btn--info">View Project</a>
</div>

</div>

---

## Applications & Tools

<div class="project-grid">

<div class="project-card">
<h3>DeepTeacher: AI-Powered Learning Assistant</h3>

Local automatic learning assistance tool combining llava-phi3:3.8b and DeepSeek-R1 models with real-time screen capture, image understanding, and intelligent feedback.

**Core Features:**
- Real-time screen capture and image understanding capabilities
- Intelligent language feedback system
- Local deployment ensuring privacy protection
- Multi-modal learning support

**Technology Stack**: llava-phi3:3.8b, DeepSeek-R1, Computer Vision, Natural Language Processing

<a href="https://github.com/Steven-ZN/DeepTeacher" class="btn btn--success">View Project</a>
</div>

<div class="project-card">
<h3>DeepPlaylist: Intelligent Music Classification</h3>

Automatic playlist classification system based on DeepSeek and QQ Music API with customizable classification rules.

**Key Features:**
- Default classification by language and music mood
- Customizable classification methods and prompts
- Intelligent music content analysis
- API integration and automated processing

**Applications**: Music recommendation, Content management, Personalized playlists

<a href="https://github.com/Steven-ZN/DeepPlaylist" class="btn btn--success">View Project</a>
</div>

<div class="project-card">
<h3>AirPosture: Posture Coaching Innovation</h3>

Turn your AirPods into a posture coach on macOS - innovative health monitoring solution.

**Innovation**: Creative use of AirPods sensors for health monitoring  
**Platform**: macOS-specific implementation  
**Impact**: Accessible health technology using existing devices

<a href="https://github.com/Steven-ZN/AirPosture" class="btn btn--success">View Project</a>
</div>

</div>

---

## Utility & Enhancement Tools

<div class="utility-tools">

**MagicSub: AI-Powered Subtitle Translation**  
Advanced subtitle translation system powered by AI for content localization.  
[View Project](https://github.com/Steven-ZN/MagicSub){: .btn .btn--light}

**WeChatBot: Enhanced Windows Support**  
Enhanced WeChat bot with support for English Windows systems and Python 12 compatibility.  
[View Project](https://github.com/Steven-ZN/WeChatBot_WXAUTO_SE){: .btn .btn--light}

**GetQzonehistory: QQ Space Data Export**  
QQ Space history export tool for data backup and migration solutions.  
[View Project](https://github.com/Steven-ZN/GetQzonehistory){: .btn .btn--light}

</div>

---

## Research Impact & Open Source Philosophy

### Technical Expertise
- **Programming Languages**: Python, Java, C#, MATLAB, SQL
- **AI/ML Frameworks**: PyTorch, TensorFlow, Transformers, Diffusers
- **Specializations**: Medical AI, Computer Vision, NLP, Generative Models
- **Research Areas**: Weakly Supervised Learning, Active Learning, Personality AI

### Open Source Contribution
- **Total Repositories**: 15+ active projects
- **Research Papers**: 1 first-author submission under review
- **Technologies**: Medical AI, LLMs, Computer vision, Practical applications
- **Impact**: Projects used in academic research and real-world applications

### Research Philosophy
I believe in making AI research **accessible**, **reproducible**, and **beneficial** for society. All my projects include comprehensive documentation, clear implementation details, and extensive usage examples. My work spans from theoretical research to practical applications, always with a focus on real-world impact.

---

## Collaboration & Contact

Interested in collaborating on any of these projects or discussing new research opportunities? I'm always excited to work with fellow researchers, developers, and innovators.

**Research Interests**: Medical AI, Personality Modeling, Generative Models, Computer Vision  
**Open to**: Research collaborations, Academic partnerships, Industry applications  
**Contact**: [Get in touch](/contact/) for project discussions or collaboration opportunities

---

*All projects are open source and available under permissive licenses. Star the repositories you find interesting!*
