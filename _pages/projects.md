---
permalink: /projects/
title: "Projects & Research"
layout: single
classes: wide
author_profile: true
toc: true
---

Welcome to my AI research portfolio! Here you'll find detailed information about my research and development work in medical AI, natural language processing, computer vision, and machine learning. Each project represents a unique contribution with open-source implementations focused on advancing artificial intelligence.

---

## Featured Research Projects

<div class="project-showcase">

<div class="project-card featured-project">

<h3>DSAL-Net: Dual-Stage Active Learning for Medical Segmentation</h3>

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

<div class="project-card featured-project">

<h3>EchoMind: True Personality Mirrors for LLMs</h3>

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

<div class="project-card featured-project">

<h3>Medfusion: Advanced Medical Image Generation</h3>

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

## AI Applications & Tools

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
<h3>MagicSub: AI-Powered Subtitle Translation</h3>

Advanced subtitle translation system leveraging state-of-the-art language models for accurate content localization across multiple languages.

**Core Capabilities:**
- Multi-language subtitle translation with context awareness
- Batch processing for large video libraries
- Customizable translation models and quality settings
- Support for multiple subtitle formats (SRT, VTT, ASS)

**Technical Features:**
- Integration with leading translation APIs
- Advanced timing synchronization algorithms
- Quality assurance through back-translation validation
- User-friendly GUI with drag-and-drop functionality

**Applications**: Content creators, Educational platforms, Media companies, International distribution

<a href="https://github.com/Steven-ZN/MagicSub" class="btn btn--success">View Project</a>
</div>

</div>

---

## Machine Learning & Data Science Projects

<div class="project-grid">

<div class="project-card">
<h3>Diabetes Prediction: Multi-Algorithm Comparison Study</h3>

Comprehensive machine learning study comparing 10+ algorithms for diabetes prediction with extensive feature engineering and model evaluation.

**Algorithms Implemented:**
- Support Vector Machines (SVM) with multiple kernels
- Stochastic Gradient Descent with various optimizers
- Ensemble methods (Random Forest, XGBoost)
- Neural networks (MLPClassifier with multiple architectures)
- Traditional methods (Logistic Regression, Naive Bayes, KNN)

**Research Contributions:**
- Systematic comparison of algorithm performance on medical data
- Feature importance analysis and selection strategies
- Cross-validation and hyperparameter optimization
- Statistical significance testing of model differences

**Performance Metrics**: Accuracy, Precision, Recall, F1-Score, AUC-ROC analysis across all models

**Technologies**: Python, Scikit-learn, XGBoost, Pandas, NumPy, Matplotlib

<a href="#" class="btn btn--info">Private Repository</a>
</div>

<div class="project-card">
<h3>Advanced Computer Vision Pipeline</h3>

End-to-end computer vision pipeline for medical image analysis with state-of-the-art deep learning architectures.

**Pipeline Components:**
- Multi-stage image preprocessing and augmentation
- Custom CNN architectures for medical image classification
- Transfer learning with pre-trained models (ResNet, EfficientNet)
- Advanced data augmentation techniques for medical imaging

**Technical Innovations:**
- Custom loss functions for imbalanced medical datasets
- Attention mechanisms for region-of-interest detection
- Multi-scale feature extraction and fusion
- Uncertainty quantification for clinical decision support

**Research Impact**: Applied to breast ultrasound analysis, achieving state-of-the-art performance on multiple benchmarks

**Technologies**: PyTorch, OpenCV, PIL, Albumentations, TensorBoard

<a href="https://github.com/Steven-ZN" class="btn btn--info">Related Work</a>
</div>

<div class="project-card">
<h3>Natural Language Processing Research Suite</h3>

Comprehensive NLP research platform exploring advanced language understanding and generation techniques.

**Research Areas:**
- Transformer-based architectures for domain-specific tasks
- Fine-tuning strategies for limited-resource scenarios
- Multi-modal learning combining text and visual information
- Evaluation frameworks for language model performance

**Technical Components:**
- Custom tokenization and preprocessing pipelines
- Distributed training infrastructure for large models
- Advanced evaluation metrics and benchmark implementations
- Model compression and optimization techniques

**Applications**: Medical text analysis, Scientific literature processing, Conversational AI systems

**Technologies**: Transformers, Hugging Face, PyTorch, NLTK, spaCy

<a href="https://github.com/Steven-ZN" class="btn btn--info">Explore Research</a>
</div>

</div>

---

## Research Impact & Open Source Philosophy

### Technical Expertise
- **Programming Languages**: Python, Java, C#, MATLAB, SQL
- **AI/ML Frameworks**: PyTorch, TensorFlow, Transformers, Diffusers
- **Specializations**: Medical AI, Computer Vision, NLP, Generative Models
- **Research Areas**: Weakly Supervised Learning, Active Learning, Personality AI

### Open Source Contribution
- **Total Repositories**: 12+ AI-focused projects
- **Research Papers**: 1 first-author submission under review
- **Technologies**: Medical AI, LLMs, Computer vision, Machine learning
- **Impact**: Projects used in academic research and real-world AI applications

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
