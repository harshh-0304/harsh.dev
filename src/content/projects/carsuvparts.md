---
title: "CarSUVParts"
category: "Automotive Dropshipping E-Commerce"
description: "Online auto-parts storefront for car, SUV, and truck parts featuring real-time NHTSA VIN decoding, Year/Make/Model fitment finder, supplier-onboarding tracking, and an AI voice agent."
problem: "Automotive e-commerce requires complex fitment verification against tens of thousands of vehicle trims, as incompatible part orders trigger expensive return rates and customer frustration."
solution: "Built a React 19 storefront integrating the US NHTSA vPIC API to decode 17-digit VINs directly in the browser, validating check digits and auto-populating vehicle specifications, backed by a Retell AI voice phone agent."
tech: ["React 19", "TypeScript", "Vite", "NHTSA vPIC API", "Retell AI", "Twilio", "Vercel Functions", "Zoho Mail", "Resend"]
url: "https://carsuvparts.com"
image: "/projects/carsuvparts/hero.png"
featured: true
professional: true
order: 4
status: "Live"
buttons:
  - label: "Live Store"
    url: "https://carsuvparts.com"
    style: "primary"
  - label: "View Details"
    url: "/projects/carsuvparts"
    style: "secondary"
---

- **NHTSA vPIC VIN Decoder:** Integrated the US National Highway Traffic Safety Administration API to decode year, make, model, engine, and drive train from 17-digit VINs, auto-filling vehicle fitment with check-digit validation.
- **Year/Make/Model Finder & 71-Brand Catalog:** Built a vehicle fitment search with suggestions, URL parameter state (`?q=`, `?cat=`, `?make=`), and an interactive brand grid covering 71 automotive manufacturers.
- **AI Phone Agent & Webhook Pipeline:** Configured a Retell AI voice phone agent on a Twilio SIP trunk, connected to a Vercel Function webhook that emails call transcripts and summaries directly to the support inbox via Resend.
- **Supplier Onboarding & Admin Dashboard:** Designed an administrative onboarding board tracking distributor catalog syncs and wholesale dealer applications across 8 major US automotive distributors.
- **Production Infrastructure:** Deployed on Vercel with GoDaddy DNS routing, Zoho Mail business email verification (MX/SPF/DKIM), and responsive layouts optimized for wide screens up to 1800px.

