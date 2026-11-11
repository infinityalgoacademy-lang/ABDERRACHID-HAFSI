<div align="center">

# 🧠 Programming & AI in Trading — Course Landing Page

### From relying on ready-made indicators… to building your own tools

A professional Arabic-first (RTL) landing page for a hands-on course combining **Programming × AI × Trading**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.x-f9f1e1?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Design System](#-design-system) · [Deployment](#-deployment)

</div>

---

## ✨ Overview

A **single-page** landing site built with the Next.js App Router, designed entirely for Arabic (RTL) using the **Cairo** typeface. It promotes a **3-month** online training course covering:

- 🐍 **Programming** — from Python fundamentals to building real analysis tools
- 🤖 **AI** — reading data, decision-making, and automating repetitive tasks
- 📈 **Trading** — technical indicators, market data, and strategy backtesting

> 🎯 Goal: a fast, polished, and persuasive marketing page that converts visitors into registrations via Telegram.

---

## 🚀 Features

| Feature | Description |
| --- | --- |
| 🌍 **Full Arabic RTL** | Carefully tuned layout, text, and number direction with Google's Cairo font |
| 🎨 **Custom design system** | Pine / Brass / Cream / Ink palette with a consistent visual identity |
| 💻 **Pro code editor mockup** | IDE-style panel: file tab, breadcrumb, active line, terminal output, status bar |
| 📊 **Hand-drawn SVG candles** | Candlestick chart built from scratch — no chart libraries |
| 🎞️ **Animated ticker** | Smooth marquee showing the course's core topics |
| ❓ **Interactive FAQ** | Accordion with smooth open/close animations (Radix UI) |
| 📋 **One-click copy fields** | CCP and USDT payment fields with copy buttons |
| 📱 **Fully responsive** | Mobile-first layout with a sticky bottom registration bar |
| 🔍 **Full SEO** | Metadata, description, keywords, Open Graph, and robots |
| ⚡ **High performance** | App Router + Server Components + optimized fonts |

---

## 🧱 Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@theme` tokens |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Icons** | Custom SVG icon set + Lucide |
| **Fonts** | Cairo (Arabic) · Geist Mono (code) |
| **Package Manager** | [Bun](https://bun.sh/) |
| **Deployment** | Standalone output + Caddy reverse proxy |

---

## ⚡ Getting Started

### Requirements

- [Bun](https://bun.sh/) `>= 1.1` (or Node.js `>= 20`)

### Steps

```bash
# 1) Install dependencies
bun install

# 2) Start the dev server
bun run dev
```

Open 👉 **http://localhost:3000**

### Production build

```bash
# Build the standalone bundle
bun run build

# Run the production server
bun run start
```

> 📝 The `build` script automatically copies `static` and `public` into the `standalone` folder, ready to deploy.

---

## 📁 Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Fonts + Metadata + root layout
│   │   ├── page.tsx          # The full page (all sections in one file)
│   │   └── globals.css       # Design system (colors, animations, tokens)
│   ├── components/
│   │   ├── icons.tsx         # Custom SVG icon set
│   │   └── copy-field.tsx    # Copy-to-clipboard field
│   └── lib/
│       └── utils.ts          # Utilities (cn)
├── public/
│   ├── logo.svg              # Site logo
│   └── robots.txt            # Search engine config
├── prisma/                   # (from template) ready for future extensions
├── Caddyfile                 # Reverse proxy config for deployment
├── next.config.ts            # Next.js config (standalone)
└── package.json
```

### Landing page sections

| # | Section | Content |
| --- | --- | --- |
| — | **Hero** | Badge, headline, code editor mockup, registration CTAs |
| — | **Ticker** | Animated marquee of the course topics |
| 01 | **What you'll learn** | Core skill cards |
| 02 | **Curriculum** | 3 months × 4 weeks with detailed week descriptions |
| 03 | **Who it's for** | Target audiences + "no experience needed" callout |
| 04 | **What you get** | Course benefits |
| 05 | **Instructor** | Bio of Abd Errachid Hafsi + Telegram link |
| 06 | **Course details** | Date, duration, location, price |
| 07 | **FAQ** | 6 interactive questions |
| 08 | **Payment & registration** | CCP (Algérie Poste) + USDT (TRC20) + sign-up CTA |

---

## 🎨 Design System

All colors are defined as **design tokens** in `globals.css` via `@theme`:

| Token | Value | Usage |
| --- | --- | --- |
| `--color-paper` | `#f8f6f0` | Page background |
| `--color-cream` | `#fffdf8` | Card background |
| `--color-ink` | `#1f2a24` | Primary text |
| `--color-pine` | `#0e5e43` | Primary color (buttons, links) |
| `--color-brass` | `#a3762a` | Accent (section numbering) |
| `--color-clay` | `#b8442f` | Warnings |
| `--color-editor` | `#0e1613` | Code editor background |

> 💡 To rebrand the entire site, change only these values in `src/app/globals.css`.

---

## 🌐 Deployment

The project builds in **standalone** mode (lightweight, self-host ready):

```bash
bun run build          # produces .next/standalone/server.js
bun run start          # starts the server
```

- 🐳 `Caddyfile` is ready to route your domain through Caddy
- ☁️ Also compatible with Vercel / Docker / any VPS

---

## 🔧 Useful Commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the dev server (port 3000) |
| `bun run build` | Build for production |
| `bun run start` | Run the production build |
| `bun run lint` | Lint the codebase with ESLint |

---

## 📬 Contact & Registration

- 💬 **Telegram:** [@King_arius_dz](https://t.me/King_arius_dz)
- 💰 **Payment:** Algérie Poste (CCP) · or USDT on Tron (TRC20)

---

<div align="center">

### ⚠️ Disclaimer

This course is **strictly educational and technical**. It does not provide investment advice or profit guarantees. Trading carries significant risk.

---

**© 2026 Programming & AI in Trading Course — All rights reserved**

Designed & built by [ABDERRACHID HAFSI](https://t.me/King_arius_dz)

</div>
