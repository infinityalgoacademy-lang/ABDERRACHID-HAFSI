<div align="center">

# 🧠 دورة البرمجة والذكاء الاصطناعي في عالم التداول

### من متداول يعتمد المؤشرات الجاهزة… إلى صانع أدواته الخاصة

صفحة هبوط عربية (RTL) احترافية لدورة عملية تجمع **البرمجة × الذكاء الاصطناعي × التداول**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.x-f9f1e1?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)

[المميزات](#-المميزات) · [التقنيات](#-التقنيات) · [التشغيل محلياً](#-التشغيل-محلياً) · [بنية المشروع](#-بنية-المشروع) · [نظام التصميم](#-نظام-التصميم) · [النشر](#-النشر)

</div>

---

## ✨ نظرة عامة

صفحة هبوط **أحادية الصفحة (Single Page)** مبنية بـ Next.js App Router، مصممة بالكامل للغة العربية (RTL) بخط **Cairo**، وتقدّم دورة تدريبية أونلاين مدتها **3 أشهر** في:

- 🐍 **البرمجة** — أساسيات بايثون حتى بناء أدوات تحليل حقيقية
- 🤖 **الذكاء الاصطناعي** — قراءة البيانات واتخاذ القرار وأتمتة المهام
- 📈 **التداول** — المؤشرات الفنية، جلب البيانات، واختبار الاستراتيجيات (Backtesting)

> 🎯 الهدف: صفحة تسويقية سريعة، أنيقة، ومقنعة تحوّل الزائر إلى مسجّل عبر تيليجرام.

---

## 🚀 المميزات

| الميزة | الوصف |
| --- | --- |
| 🌍 **عربي RTL بالكامل** | تخطيط واتجاه نصوص وأرقام مضبوط بدقة، بخط Cairo من Google Fonts |
| 🎨 **نظام تصميم مخصص** | لوحة ألوان Pine / Brass / Cream / Ink بهوية بصرية موحّدة |
| 💻 **محرر أكواد احترافي** | محاكاة IDE (شريط ملف، Breadcrumb، سطر نشط، مخرجات تشغيل، شريط حالة) |
| 📊 **رسم شموع SVG** | مخطط شموع يابانية مبني يدوياً بدون مكتبات خارجية |
| 🎞️ **شريط محاور متحرك** | Ticker سلس يعرض محاور الدورة |
| ❓ **أسئلة شائعة تفاعلية** | Accordion بحركات دخول/خروج ناعمة (Radix UI) |
| 📋 **نسخ سريع للدفع** | حقول CCP و USDT مع زر نسخ بضغطة واحدة |
| 📱 **متجاوب بالكامل** | تصميم Mobile-first مع شريط تسجيل ثابت أسفل الشاشة |
| 🔍 **SEO كامل** | Metadata، وصف، كلمات مفتاحية، Open Graph، و robots |
| ⚡ **أداء عالٍ** | Next.js App Router + Server Components + خطوط محسّنة |

---

## 🧱 التقنيات

| الفئة | التقنية |
| --- | --- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@theme` tokens |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Icons** | مجموعة أيقونات SVG مخصصة + Lucide |
| **Fonts** | Cairo (عربي) · Geist Mono (أكواد) |
| **Package Manager** | [Bun](https://bun.sh/) |
| **Deployment** | Standalone output + Caddy reverse proxy |

---

## ⚡ التشغيل محلياً

### المتطلبات

- [Bun](https://bun.sh/) `>= 1.1` (أو Node.js `>= 20`)

### الخطوات

```bash
# 1) تثبيت الاعتماديات
bun install

# 2) تشغيل بيئة التطوير
bun run dev
```

افتح المتصفح على 👉 **http://localhost:3000**

### بناء نسخة الإنتاج

```bash
# بناء المشروع (standalone)
bun run build

# تشغيل السيرفر الإنتاجي
bun run start
```

> 📝 سكربت `build` ينسخ ملفات `static` و `public` تلقائياً إلى مجلد `standalone` الجاهز للنشر.

---

## 📁 بنية المشروع

```text
.
├── src/
│   ├── app/
│   │   ├── layout.tsx        # الخطوط + Metadata + الهيكل العام
│   │   ├── page.tsx          # الصفحة الكاملة (كل الأقسام في ملف واحد)
│   │   └── globals.css       # نظام التصميم (ألوان، حركات، متغيرات)
│   ├── components/
│   │   ├── icons.tsx         # مجموعة الأيقونات المخصصة (SVG)
│   │   └── copy-field.tsx    # حقل النسخ السريع
│   └── lib/
│       └── utils.ts          # أدوات مساعدة (cn)
├── public/
│   ├── logo.svg              # شعار الموقع
│   └── robots.txt            # إعدادات محركات البحث
├── prisma/                   # (من القالب) جاهز لأي توسعة مستقبلية
├── Caddyfile                 # إعدادات Reverse Proxy للنشر
├── next.config.ts            # إعدادات Next.js (standalone)
└── package.json
```

### أقسام الصفحة الرئيسية

| # | القسم | المحتوى |
| --- | --- | --- |
| — | **Hero** | الشارة التعريفية، العنوان الرئيسي، محرر الأكواد، أزرار التسجيل |
| — | **Ticker** | شريط متحرك بمحاور الدورة |
| 01 | **ماذا ستتعلم** | بطاقات المهارات الأساسية |
| 02 | **منهج الدورة** | 3 أشهر × 4 أسابيع مع وصف تفصيلي لكل أسبوع |
| 03 | **لمن هذه الدورة** | الفئات المستهدفة + تنبيه "لا تحتاج خبرة سابقة" |
| 04 | **ماذا ستحصل عليه** | مزايا الالتحاق |
| 05 | **المدرّب** | نبذة عن عبد الرشيد حفسي + رابط تيليجرام |
| 06 | **تفاصيل الدورة** | الموعد، المدة، المكان، السعر |
| 07 | **الأسئلة الشائعة** | 6 أسئلة تفاعلية |
| 08 | **الدفع والتسجيل** | CCP (بريد الجزائر) + USDT (TRC20) + زر التسجيل |

---

## 🎨 نظام التصميم

جميع الألوان معرّفة كـ **Design Tokens** في `globals.css` عبر `@theme`:

| Token | القيمة | الاستخدام |
| --- | --- | --- |
| `--color-paper` | `#f8f6f0` | خلفية الصفحة |
| `--color-cream` | `#fffdf8` | خلفية البطاقات |
| `--color-ink` | `#1f2a24` | النصوص الأساسية |
| `--color-pine` | `#0e5e43` | اللون الأساسي (أزرار، روابط) |
| `--color-brass` | `#a3762a` | لون التمييز (تسلسل الأقسام) |
| `--color-clay` | `#b8442f` | تحذيرات |
| `--color-editor` | `#0e1613` | خلفية محرر الأكواد |

> 💡 لتغيير هوية الموقع بالكامل: عدّل هذه القيم فقط في `src/app/globals.css`.

---

## 🌐 النشر

المشروع يُبنى بوضع **standalone** (خفيف وجاهز للاستضافة الذاتية):

```bash
bun run build          # ينتج .next/standalone/server.js
bun run start          # تشغيل السيرفر
```

- 🐳 ملف `Caddyfile` جاهز لتوجيه النطاق إلى السيرفر عبر Caddy
- ☁️ متوافق أيضاً مع Vercel / Docker / أي VPS

---

## 🔧 أوامر مفيدة

| الأمر | الوظيفة |
| --- | --- |
| `bun run dev` | تشغيل بيئة التطوير (منفذ 3000) |
| `bun run build` | بناء نسخة الإنتاج |
| `bun run start` | تشغيل نسخة الإنتاج |
| `bun run lint` | فحص الكود بـ ESLint |

---

## 📬 التواصل والتسجيل

- 💬 **تيليجرام:** [@King_arius_dz](https://t.me/King_arius_dz)
- 💰 **الدفع:** بريد الجزائر (CCP) · أو USDT عبر شبكة Tron (TRC20)

---

<div align="center">

### ⚠️ تنبيه

هذه الدورة **تعليمية وتقنية بحتة**، ولا تقدّم توصيات استثمارية أو وعوداً بالأرباح. التداول ينطوي على مخاطر عالية.

---

**© 2026 دورة البرمجة والذكاء الاصطناعي في عالم التداول — جميع الحقوق محفوظة**

صُمّمت وبُنيت بواسطة [ABDERRACHID HAFSI](https://t.me/King_arius_dz)

</div>
