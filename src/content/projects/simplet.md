---
title: "SimpleT (Simple Translate)"
category: "Enterprise Salesforce AI SaaS"
description: "AI-powered translation platform for Salesforce — retrieves enterprise org metadata, translates with multi-LLM and DeepL engines using domain glossaries, and deploys back via the Salesforce Metadata API or XLIFF. Hardened under ISO/IEC 27001:2022 ISMS, SOC 2, and GDPR standards."
problem: "Translating global enterprise Salesforce orgs requires manual export of dozens of metadata types, custom glossaries, and error-prone XML editing, while adhering to strict enterprise security standards for international data privacy."
solution: "Built a distributed Django & Celery platform on Google Kubernetes Engine that authenticates via Salesforce OAuth, extracts org metadata, translates via DeepL/Claude/OpenAI, and deploys directly back to Salesforce. Spearheaded comprehensive audits and hardening for ISO/IEC 27001:2022 ISMS, SOC 2 control mapping, and GDPR compliance."
tech: ["Python", "Django", "Celery", "Salesforce Metadata API", "React", "TypeScript", "ISO/IEC 27001", "SOC 2", "GDPR", "MongoDB Atlas", "Redis", "GKE"]
url: "https://www.simpletranslate.io"
image: "/projects/simplet/hero.png"
featured: true
professional: true
order: 1
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
- **ISO/IEC 27001, SOC 2 & GDPR External Audit Hardening:** Audited the entire system (across all 33 backend modules) for **ISO/IEC 27001:2022 ISMS**, **SOC 2 control mapping**, and **GDPR compliance** in preparation for external audit; identified, ranked, and resolved the top 25 priority security and authorization vulnerabilities.
- **Enterprise Security & Risk Remediation:** Closed org-scoped authorization bypasses, implemented object-level authorization test suites, drafted the ISO/IEC 27001:2022 Statement of Applicability (SoA v1.5), and encrypted all translation engine keys and Salesforce tokens at rest using PyNaCl/AES cryptography.
- **Distributed Celery Queue Architecture:** Architected background Celery worker queues (heavy, light, and instant jobs) backed by Redis and MongoDB Atlas with Flower monitoring on Google Kubernetes Engine (GKE) and Sentry error monitoring.
- **Salesforce Translation Workbench (XLIFF):** Implemented asynchronous XLIFF 1.2/2.0 export/import with bilingual support, expanding metadata type coverage from 3 to 8 component types with verified round-trip deployment into production Salesforce orgs.
- **Multi-Engine Translation & Glossaries:** Engineered translation workflows across DeepL, Google Cloud Translation, AWS, OpenAI, Anthropic Claude, and Gemini with custom client glossaries and rich-text Prompt Builders.
