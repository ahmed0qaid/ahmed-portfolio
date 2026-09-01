# Ahmed Shawqi Mohammed Qaid — Backend & Cloud Software Engineering Portfolio

Production-oriented portfolio built with **Next.js, TypeScript, PostgreSQL, Prisma, AI integrations, and cloud deployment**.

This project is not only a personal landing page. It is a working software product with an admin dashboard, database-backed lead management, bilingual RTL/LTR content, AI-provider failover, notifications, and deployment automation.

## Engineering focus

- Backend engineering and REST/API integration
- Cloud-deployed web applications
- PostgreSQL data modeling with Prisma ORM
- AI service integration with provider failover
- Configuration and environment management
- Product-oriented software architecture
- Bilingual Arabic/English applications with RTL/LTR support

## Architecture

```text
Visitor
  │
  ▼
Next.js Application
  ├── Public Portfolio
  ├── Admin Dashboard
  ├── AI Project Assistant
  └── Lead Intake
          │
          ▼
      Prisma ORM
          │
          ▼
   Neon PostgreSQL

AI Assistant
  ├── Gemini (primary)
  └── Groq (fallback)

Optional Notifications
  ├── Telegram
  └── Resend Email

Deployment
  └── Vercel
```

## Key engineering highlights

- Built a full admin dashboard at `/dashboard` for managing site content and presentation.
- Designed database-backed lead intake with lifecycle states: `NEW`, `REVIEWED`, `CONTACTED`, `ACCEPTED`, and `REJECTED`.
- Implemented AI-provider failover using Gemini first and Groq as fallback.
- Added optional Telegram and Resend notifications without making them required for the core application.
- Implemented separate Arabic and English content with correct RTL/LTR behavior.
- Centralized secrets and deployment configuration through environment variables.
- Configured Prisma migrations and cloud deployment for Vercel + Neon PostgreSQL.

## Main features

- Professional Arabic/English software engineering portfolio using Cairo font.
- Full content and design management dashboard.
- Skills, services, projects, contact data, colors, layout, and section visibility can be changed from the dashboard.
- CV download can be enabled or disabled without changing source code.
- AI project assistant for visitor questions and project inquiries.
- Structured client lead intake stored in PostgreSQL.
- Optional Telegram and email notifications.
- Automatic color rotation with configurable intervals.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend / Full Stack | Next.js, TypeScript |
| Database | Neon PostgreSQL |
| ORM | Prisma |
| AI | Gemini, Groq |
| Notifications | Telegram Bot API, Resend |
| Deployment | Vercel |
| Styling / UX | Responsive bilingual RTL/LTR interface |

## AI provider strategy

The assistant uses a configurable provider order rather than depending on a single AI service.

```env
AI_PROVIDER=gemini
AI_PROVIDER_ORDER=gemini,groq
AI_TIMEOUT_MS=12000

GEMINI_API_KEY=your_gemini_key
GEMINI_MODEL=gemini-2.5-flash-lite

GROQ_API_KEY=your_groq_key
GROQ_MODEL=llama-3.1-8b-instant
```

## Database and deployment configuration

```env
DATABASE_URL=your_neon_pooled_url
DIRECT_URL=your_neon_direct_url
ADMIN_TOKEN=your_strong_admin_token
```

The deployment build includes Prisma generation and migration deployment before the Next.js build.

```bash
prisma generate && prisma migrate deploy && next build
```

## Optional lead notifications

### Telegram

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### Email with Resend

```env
RESEND_API_KEY=your_resend_key
LEADS_NOTIFY_EMAIL=your_email@example.com
LEADS_NOTIFY_FROM=Ahmed Portfolio <onboarding@resend.dev>
```

The application still stores and displays leads normally when notification variables are not configured.

## Dashboard workflow

1. Open `/dashboard`.
2. Authenticate using `ADMIN_TOKEN`.
3. Load and review AI-generated project requests.
4. Edit Arabic/English content and design settings.
5. Save changes without modifying source code.

## Software engineering challenge

**Participant — ICPC 2026 Online Challenge 1 powered by Huawei**

Worked on **Problem A: Edge–Cloud Collaborative Scheduling** and iteratively developed a C++ scheduling solution covering dynamic batching, resource allocation, latency/throughput trade-offs, SLO-aware scheduling, and model-predictive scheduling strategies.

- Repository: https://github.com/ahmed2qaid/edge-cloud-collaborative-scheduling
- Codeforces problem: https://codeforces.com/contest/2251/problem/A
- Codeforces profile: https://codeforces.com/profile/ayhywi

This is listed factually as participation; no winner, finalist, award, or ranking claim is made.

## Related engineering projects

- [FlowGuard — Agentic Automation Control Plane](https://github.com/ahmed2qaid/agentic-automation-control-plane)
- [TrustFlow Sentinel](https://github.com/ahmed2qaid/trustflow-sentinel)
- [RepoRadar AI](https://github.com/ahmed2qaid/RepoRadar)
- [Python Backend & Frontend API Integration](https://github.com/ahmed2qaid/python-backend-frontend-integration)
- [Edge–Cloud Collaborative Scheduling](https://github.com/ahmed2qaid/edge-cloud-collaborative-scheduling)

## Current identity

- Arabic: `أحمد شوقي محمد قائد`
- English: `AHMED SHAWQI MOHAMMED QAID`
- GitHub: https://github.com/ahmed2qaid

## Recommended Vercel settings

- Node.js: `24.x`
- Install Command: `corepack enable && corepack prepare yarn@1.22.22 --activate && yarn install --ignore-engines --non-interactive`
- Build Command: `yarn build`
- Output Directory: Next.js default
