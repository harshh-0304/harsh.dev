---
title: "FirmsLedger"
category: "B2B Manufacturing Directory"
description: "A free, SEO-first B2B directory of 10,000+ US manufacturers across 11 industries and 95 specialties. Features automated AI fact-checked company profiles, an RFQ marketplace, and edge deployment on Cloudflare Workers."
problem: "Traditional B2B directories sell top placement to the highest bidder with stale data, making it hard for procurement teams to verify authentic domestic US manufacturers."
solution: "Built a programmatic directory on Cloudflare Workers and Neon serverless Postgres. Implemented an automated dual-model NVIDIA Nemotron AI pipeline that wrote and fact-checked 9,480+ company profiles against live manufacturer websites."
tech: ["Next.js 15", "Cloudflare Workers", "Neon Postgres", "Drizzle ORM", "NVIDIA Nemotron AI", "R2", "TypeScript", "Tailwind CSS"]
url: "https://www.firmsledger.com/"
image: "/projects/firmsledger/landing.png"
featured: true
professional: true
order: 1
status: "Live"
buttons:
  - label: "Live Website"
    url: "https://www.firmsledger.com/"
    style: "primary"
  - label: "View Details"
    url: "/projects/firmsledger"
    style: "secondary"
---

- **Scale & Architecture:** Programmatic directory covering **10,000+ US manufacturers** across 11 industries and 95 specialties with deterministic pagination and dynamic filtering (780+ commits).
- **Automated AI Fact-Checking Pipeline:** Built an end-to-end pipeline with NVIDIA NIM API (Nemotron 3 Ultra 550B writer + Nemotron 3 Super 120B fact-checker) that fact-checked and imported 9,481 company profiles verified against each company's website.
- **Cloudflare Edge Migration:** Migrated production from Vercel to **Cloudflare Workers** via OpenNext, utilizing R2 for assets/cache and Durable Objects for tag invalidation, delivering warm page loads of 36–80 ms.
- **Database Optimization:** Reduced Neon serverless Postgres awake time from 69% to 26% by gating cron jobs on R2 flags and serving edge-cached ISR snapshots.
- **RFQ Marketplace & Monetization:** Developed buyer RFQ workflows with multi-quote bidding, company claim validation with matching domain verification, and Stripe billing tiers.
