---
title: "HMD Campus & iConnect"
category: "Verified-Physician Network & EdTech"
description: "Verified-physician learning and clinical networking platform featuring board-prep question banks, automated medical feeds across 21 specialties, Microsoft Teams video meetings, and Supabase RLS architectures."
problem: "Physicians require a secure, credential-verified network to discuss clinical evidence, join accredited Journal Clubs, and track regulatory updates without non-medical noise or data leaks."
solution: "Built a verified-physician ecosystem on Next.js 16 and Supabase with NPI credential verification, automated 4-hour ingestion pipelines across PubMed and openFDA, and Microsoft Graph Teams integration."
tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Microsoft Teams API", "Tailwind CSS 4", "Resend", "Vercel"]
url: "https://www.hmd.com.co"
image: "/projects/hmd/hmd-5.png"
screenshots:
  - "/projects/hmd/hmd-5.png"
  - "/projects/hmd/hmd-2.png"
  - "/projects/hmd/hmd-3.png"
  - "/projects/hmd/hmd-4.png"
  - "/projects/hmd/hmd-6.png"
  - "/projects/hmd/hmd-7.png"
featured: false
professional: true
order: 11
status: "Live"
buttons:
  - label: "Live Platform"
    url: "https://www.hmd.com.co"
    style: "primary"
  - label: "View Details"
    url: "/projects/hmd"
    style: "secondary"
---

- **Verified-Physician Gate:** Implemented strict credential verification using US NPI registry checks, admin approval queues, and Supabase Row Level Security (RLS) ensuring medical discussions remain physician-only.
- **Automated Medical Ingestion Engine:** Architected a 4-hour cron ingestion engine parsing NCBI PubMed, openFDA, ClinicalTrials.gov, and medical journal RSS feeds across 21 clinical specialties with title-hash deduplication.
- **Microsoft Teams Integration:** Integrated the Microsoft Graph API with a pool of 25 organizer accounts for Journal Club sessions and browser-based audio/video clinical consults.
- **Database Architecture:** Authored and deployed 41 additive, zero-data-loss SQL migrations in Supabase Postgres, incorporating Realtime websockets for instant messaging and notifications.
- **E-Learning & Board Prep:** Engineered the iQbank USMLE-style question bank, evidence summaries library, and physician portfolio tracking.
