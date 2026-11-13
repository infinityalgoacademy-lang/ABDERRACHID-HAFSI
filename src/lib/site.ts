import type { Metadata } from "next";

/* ——————————————————— عنوان الموقع ———————————————————
   يُضبط عبر NEXT_PUBLIC_SITE_URL عند النشر، ويُكتشف تلقائياً على Vercel،
   وإلا يعود إلى localhost أثناء التطوير. */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_NAME =
  "دورة البرمجة والذكاء الاصطناعي في عالم التداول";
export const SITE_SHORT_NAME = "برمجة × ذكاء اصطناعي × تداول";
export const SITE_LANGUAGE = "ar";
export const SITE_LOCALE = "ar_DZ";

export const SITE_DESCRIPTION =
  "دورة تعليمية عملية أونلاين تجمع البرمجة والذكاء الاصطناعي وأسواق المال: أساسيات بايثون، برمجة المؤشرات الفنية، جلب البيانات ومعالجتها، Backtesting، وبناء أدوات تحليل خاصة بك. المدة 3 أشهر، السعر 80$.";

export const SITE_KEYWORDS = [
  "دورة تعليمية",
  "البرمجة",
  "الذكاء الاصطناعي",
  "التداول",
  "المؤشرات الفنية",
  "تحليل البيانات",
  "بايثون",
  "Backtesting",
];

export const SITE_AUTHOR = "ABDERRACHID HAFSI";
export const SITE_AUTHOR_AR = "عبد الرشيد حفصي";

/* تاريخ آخر تحديث فعلي للمحتوى (يُستخدم في sitemap وفي صفحة الشروط) */
export const SITE_LAST_UPDATED = "2026-11-13";
export const SITE_LAST_UPDATED_LABEL = "13 نوفمبر 2026";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `دورة البرمجة والذكاء الاصطناعي في عالم التداول — ${SITE_AUTHOR_AR}`,
};

/* ——————————————————— بيانات التواصل ——————————————————— */
export const TELEGRAM_HANDLE = "@King_arius_dz";
export const TELEGRAM_LINK = `https://t.me/King_arius_dz?text=${encodeURIComponent(
  "مرحباً، أريد التسجيل في دورة البرمجة والذكاء الاصطناعي في عالم التداول.",
)}`;

export const YOUTUBE_ID = "2CyHkAd3EL8";
export const YOUTUBE_LINK = `https://www.youtube.com/watch?v=${YOUTUBE_ID}`;
export const YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`;

export const INSTRUCTOR_PHOTO =
  "https://secure.gravatar.com/avatar/d7e16096bc6eed90eb0a180806e7af7abaf9d6960172f10c66e7efca70b6da23?d=identicon&s=512";

/* ——————————————————— بيانات الدورة ——————————————————— */
export const COURSE_PRICE = "80$";
export const COURSE_PRICE_VALUE = "80";
export const COURSE_PRICE_CURRENCY = "USD";
export const COURSE_DURATION = "3 أشهر";
export const COURSE_MODE = "أونلاين";

/* ——————————————————— التنقل ——————————————————— */
export const NAV_LINKS = [
  { href: "/#learn", label: "المحتوى" },
  { href: "/#audience", label: "لمن الدورة؟" },
  { href: "/about", label: "عن الدورة" },
  { href: "/terms", label: "الشروط والأحكام" },
];

export const FOOTER_LINKS = [
  { href: "/#learn", label: "المحتوى" },
  { href: "/#audience", label: "لمن الدورة؟" },
  { href: "/#details", label: "التفاصيل" },
  { href: "/#faq", label: "الأسئلة الشائعة" },
  { href: "/#register", label: "التسجيل والدفع" },
  { href: "/about", label: "عن الدورة" },
  { href: "/terms", label: "الشروط والأحكام" },
];

/* ——————————————————— أدوات مساعدة ——————————————————— */

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

type BuildMetadataInput = {
  title: string;
  description: string;
  /** مسار نسبي داخل الموقع، مثل "/about" */
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

/** يبني بيانات SEO كاملة (canonical + Open Graph + Twitter) لأي صفحة */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: SITE_LOCALE,
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
