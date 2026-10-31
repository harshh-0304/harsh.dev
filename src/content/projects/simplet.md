---
title: "SimpleT (Simple Translate)"
category: "Enterprise Salesforce AI SaaS"
description: "AI-powered translation platform for Salesforce — retrieves enterprise org metadata, translates with multi-LLM and DeepL engines using domain glossaries and prompt builders, and deploys back via the Salesforce Metadata API or XLIFF."
problem: "Translating global enterprise Salesforce orgs requires manual export of dozens of metadata types, custom glossaries, and error-prone XML editing that breaks production deployments."
solution: "Built a distributed Django & Celery platform on Google Kubernetes Engine that authenticates via Salesforce OAuth, extracts org metadata, translates via DeepL/Claude/OpenAI with custom glossaries, and deploys directly back to Salesforce or exports to XLIFF."
tech: ["Python", "Django", "Celery", "Salesforce Metadata API", "React", "TypeScript", "MongoDB Atlas", "Redis", "GKE", "Docker", "DeepL", "LLMs"]
url: "https://www.simpletranslate.io"
image: "/projects/simplet/hero.png"
featured: true
professional: true
order: 2
status: "Live"
buttons:
  - label: "Product Website"
    url: "https://www.simpletranslate.io"
    style: "primary"
  - label: "View Details"
    url: "/projects/simplet"
    style: "secondary"
---

- **Salesforce Metadata API Integration:** Built bidirectional sync with Salesforce over OAuth 2.0 and SOAP/REST (via `zeep` & `simple-salesforce`), retrieving and deploying field labels, validation rules, picklists, and Experience Cloud sites.
- **Distributed Celery Queue Architecture:** Architected background Celery worker queues (heavy, light, and instant jobs) backed by Redis and MongoDB Atlas with Flower monitoring on Google Kubernetes Engine (GKE).
- **Multi-Engine Translation & Glossaries:** Engineered translation workflows across DeepL, Google Cloud Translation, AWS, OpenAI, Anthropic Claude, and Gemini with custom client glossaries and rich-text Prompt Builders.
- **Salesforce Translation Workbench (XLIFF):** Implemented asynchronous XLIFF 1.2/2.0 export/import with bilingual support, expanding metadata type coverage from 3 to 8 component types with verified round-trip deployment into production Salesforce orgs.
- **Performance & Security:** Made Experience Cloud XML parsing linear with single-pass indexing, implemented API rate-limiting, and secured org tokens at rest with AES/PyNaCl encryption conforming to ISO/IEC 27001 guidelines.
