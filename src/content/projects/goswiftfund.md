---
title: "GoSwiftFund"
category: "Fintech Funding Marketplace"
description: "B2B small-business funding marketplace with Plaid bank verification, AES-256-GCM encryption at rest, rules-based lender routing across 8 partners, instant SmartBiz API pre-qualification, and an AI voice agent."
problem: "Small business owners seeking working capital navigate fragmented lenders with conflicting credit criteria and face data privacy risks when transmitting sensitive financial and identity records."
solution: "Architected a secure fintech marketplace in Next.js 16 featuring Plaid Link bank statement verification, server-side AES-256-GCM encryption for SSNs/tokens, automated routing across 8 lending partners, and instant SmartBiz API pre-qualification."
tech: ["Next.js 16", "React 19", "TypeScript", "Plaid API", "Supabase Postgres", "SmartBiz API", "Retell AI", "AES-256", "Tailwind CSS", "Resend"]
url: "https://goswiftfund.com"
image: "/projects/goswiftfund/hero.png"
featured: true
professional: true
order: 3
status: "Live"
buttons:
  - label: "Live Platform"
    url: "https://goswiftfund.com"
    style: "primary"
  - label: "View Details"
    url: "/projects/goswiftfund"
    style: "secondary"
---

- **5-Product Application Flow:** Built a dynamic, multi-step application flow for Micro Loans ($1k–$10k), Merchant Cash Advance ($10k–$250k), Commercial LOC ($100k–$500k), and SBA 7(a) ($30k–$5M) with Zod discriminated unions.
- **Plaid Bank Integration & AES-256 Encryption:** Integrated Plaid Link for secure bank account verification (keeping access tokens server-only) and encrypted sensitive records (SSN, EIN, bank tokens) at rest using AES-256-GCM.
- **SmartBiz Partner API v3 Integration:** Built automated submission pipelines with instant pre-qualification, rules-based partner routing across 8 lending partners, and AFN affiliate deal dispatch.
- **Customer Portal & Magic-Link Auth:** Developed passwordless magic-link sign-in via Supabase Auth for real-time application tracking, supplementary PDF document uploads, and lender status updates.
- **Voice AI Support Agent:** Deployed a Retell AI phone agent on Twilio with automated post-call webhooks dispatching call summaries and transcripts to staff via Resend.

