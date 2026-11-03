---
title: "PhishEye"
category: "ML Cyber Threat Intelligence"
description: "Enterprise-grade cybersecurity platform combining a 30-dimension Random Forest ML classifier (96.98% CV accuracy, 99.56% ROC-AUC) with real-time heuristic forensic engines, terminal CLI, and REST API."
problem: "Modern phishing attacks utilize IDN homographs, combosquatting, and algorithmic domain generation (DGA) that easily evade traditional static blocklists and signature-based filters."
solution: "Engineered a dual-layer threat engine combining a 30-vector Random Forest classifier with IDN punycode decoders, Levenshtein brand impersonation checks, Shannon entropy DGA detection, and automated URL defanging."
tech: ["Python 3.11", "Scikit-Learn", "Streamlit", "Docker", "REST API", "Random Forest"]
github: "https://github.com/harshh-0304/PhishEye"
image: "/projects/phisheye/dashboard.png"
featured: true
professional: true
order: 3
status: "Built"
buttons:
  - label: "Source Code"
    url: "https://github.com/harshh-0304/PhishEye"
    style: "primary"
  - label: "Case Study →"
    url: "/projects/phisheye"
    style: "secondary"
---

- **30-Dimension ML Vector Classification:** Extracted structural, syntactic, and protocol indicators trained on the UCI Phishing dataset, achieving **96.98% cross-validation accuracy** and **99.56% ROC-AUC score**.
- **Real-Time Forensic Heuristics:** Built heuristic analyzers for IDN homographs / punycode glyph spoofing, Levenshtein typosquatting, Shannon entropy DGA calculations, and TLD reputation scoring.
- **Automated Defanging Pipeline:** Implemented automated defanging tools (`hxxps[://]`) to safely handle, inspect, and document dangerous URLs without click-risk.
- **Multi-Channel Architecture:** Delivered via an interactive Streamlit dark-glassmorphism dashboard, terminal CLI with ANSI reporting, and a lightweight REST API for SIEM/SOAR pipeline integrations.
- **Production-Ready & Tested:** Containerized with Docker and Docker Compose; covered by 40+ unit and integration test suites.
