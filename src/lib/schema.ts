import {
  absoluteUrl,
  COURSE_PRICE_CURRENCY,
  COURSE_PRICE_VALUE,
  INSTRUCTOR_PHOTO,
  OG_IMAGE,
  SITE_AUTHOR,
  SITE_AUTHOR_AR,
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
  YOUTUBE_LINK,
} from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const COURSE_ID = `${SITE_URL}/#course`;
const PERSON_ID = `${SITE_URL}/#instructor`;

/** المُنظِّم/المدرّب — يُستخدم في كل الصفحات */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_SHORT_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
    image: absoluteUrl(OG_IMAGE.url),
    founder: { "@id": PERSON_ID },
    sameAs: [TELEGRAM_LINK, YOUTUBE_LINK],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: TELEGRAM_LINK,
        availableLanguage: ["ar"],
      },
    ],
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_AUTHOR_AR,
    alternateName: SITE_AUTHOR,
    jobTitle: "مبرمج ومتداول ومدرّب",
    image: INSTRUCTOR_PHOTO,
    knowsAbout: [
      "Python",
      "تحليل البيانات",
      "المؤشرات الفنية",
      "الذكاء الاصطناعي",
      "Backtesting",
      "أسواق المال",
    ],
    sameAs: [TELEGRAM_LINK, YOUTUBE_LINK],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: { "@id": ORG_ID },
  };
}

export function courseSchema() {
  return {
    "@type": "Course",
    "@id": COURSE_ID,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: SITE_LANGUAGE,
    image: absoluteUrl(OG_IMAGE.url),
    provider: { "@id": ORG_ID },
    instructor: { "@id": PERSON_ID },
    teaches: [
      "أساسيات البرمجة بلغة بايثون",
      "برمجة المؤشرات الفنية",
      "جلب البيانات المالية ومعالجتها",
      "توظيف الذكاء الاصطناعي في تحليل السوق",
      "اختبار الاستراتيجيات (Backtesting)",
      "بناء أدوات ومنصات تحليل مخصصة",
    ],
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: COURSE_PRICE_VALUE,
      priceCurrency: COURSE_PRICE_CURRENCY,
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/#register"),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT4H",
      inLanguage: SITE_LANGUAGE,
    },
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** يلفّ مجموعة من الكائنات في مستند JSON-LD واحد */
export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export { ORG_ID, WEBSITE_ID, COURSE_ID, PERSON_ID };
