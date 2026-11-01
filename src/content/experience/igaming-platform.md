---
title: "Backend Engineer"
company: "Betorra (iGaming Platform)"
period: "Jan 2026 – Jun 2026"
type: "Full-Time"
tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis", "AWS", "Docker", "Swagger"]
order: 2
---

- Architected a **NestJS/TypeScript modular-monolith** casino backend serving **1,200+ games** from 4 certified providers (OnlyPlay, Jacktop, EGS), with real-time session management on PostgreSQL, Prisma, and Redis.
- Engineered an idempotent **seamless-wallet engine** for debit, credit, rollback, and settlement callbacks, using session-level mutex locking to eliminate double-spend and race conditions.
- Secured provider callbacks with **HMAC-SHA256/MD5** signature verification and kept multi-currency balances consistent through exchange-rate locking and automated reconciliation.
- Integrated the **Payram crypto gateway** with replay-protected webhooks and automated payouts; built a GGR affiliate revenue-share module on EventEmitter2 events with row-level locking (`SELECT ... FOR UPDATE`).
- Built bet-cycle simulation and dual-ledger E2E suites that verified zero-discrepancy balances before certification; shipped to AWS via multi-stage Docker builds and GitHub Actions CI/CD.
