---
title: "Custom Ink & Thread"
category: "Custom Apparel E-Commerce"
description: "Custom apparel e-commerce platform for a Los Angeles print shop — Next.js 16 monorepo, live supplier catalog sync, automated UPS shipping labels, Replicate AI background removal, and Stripe checkout."
problem: "Complex print pricing based on embroidery stitch counts, print locations, and multiple suppliers caused quoting bottlenecks and high database pooler contention."
solution: "Took over and scaled a Next.js 16 App Router monorepo; engineered a shared PostgreSQL connection pool, built live UPS label and rate calculation (+20% margin), and integrated Replicate BiRefNet AI for instant artwork cleanup."
tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase Postgres", "Drizzle ORM", "Stripe", "Clerk", "UPS API", "Replicate AI"]
url: "https://www.custominkandthread.com"
featured: false
professional: true
order: 5
status: "Live"
buttons:
  - label: "Live Store"
    url: "https://www.custominkandthread.com"
    style: "primary"
  - label: "View Details"
    url: "/projects/custominkandthread"
    style: "secondary"
---

- **Database Performance Optimization:** Replaced multiple per-instance connection pools with one shared Supabase pool (max 4), eliminating checkout-time pooler timeouts, and introduced a 30-second pricing rules cache.
- **UPS Shipping API Integration:** Built automated shipping label generation, address validation, live tracking, and residential box presets with custom markup calculations.
- **AI Artwork Background Removal:** Integrated Replicate's BiRefNet model to automatically remove solid and checkerboard backgrounds from customer-uploaded logos before mockup rendering.
- **Dynamic Pricing Engine:** Engineered tiered pricing logic for embroidery logo sizing, digitizing fees, DTF transfers, and names/numbers customization across thousands of garment SKUs.
- **Enterprise Integrations:** Implemented automated paid-order synchronization into QuickBooks Online and customer lead ingestion into Zoho CRM.

