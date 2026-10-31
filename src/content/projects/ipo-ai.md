---
title: "IPO AI"
category: "Mobile App & Serverless AI"
description: "'Know before you invest' — Android app helping Indian retail investors research Mainboard and SME IPOs with live Gray Market Premium (GMP), deterministic 12-factor scoring, and serverless Cloudflare Worker AI proxy with zero fabricated financial data."
problem: "Retail investors in India face fragmented and speculative IPO sources that often publish fabricated financial projections or unsubstantiated listing day gains."
solution: "Built a React Native (Expo SDK 54) Android application backed by a Cloudflare Workers serverless AI proxy and deterministic 12-factor fundamental scoring engine that strictly displays verified financial data and prospectuses."
tech: ["React Native", "Expo SDK 54", "TypeScript", "Cloudflare Workers", "Workers KV", "Groq AI", "AsyncStorage", "EAS Build"]
order: 12
status: "Built"
featured: false
professional: true
buttons:
  - label: "View Details"
    url: "/projects/ipo-ai"
    style: "secondary"
---

- **Architecture & Deterministic Rules:** Built an Expo SDK 54 / React Native 0.81 Android app with typed routes (`expo-router 6`), offline-first `AsyncStorage` caching, and in-flight request deduplication.
- **Strict Data Integrity:** Enforced a zero-hallucination policy where a 12-factor scoring engine evaluates prospectus fundamentals in TypeScript, utilizing Groq LLMs via a Cloudflare Worker proxy exclusively for prose synthesis.
- **Serverless Edge Gateway:** Deployed a Cloudflare Worker acting as an AI proxy, push-token store, and rate limiter using Workers KV, safeguarding API keys from client exposure.
- **Local Reminders & Notifications:** Implemented `expo-notifications` for IPO open, close, allotment, and listing date alerts, reconciled automatically on app resume.
- **Automated Mobile CI/CD:** Built EAS Build release profiles (`development`, `preview APK`, `production AAB`) and verified end-to-end performance on physical Android hardware.
