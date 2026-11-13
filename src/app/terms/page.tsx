import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IconAlert, IconTelegram } from "@/components/icons";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import {
  absoluteUrl,
  buildMetadata,
  COURSE_PRICE,
  SITE_LAST_UPDATED_LABEL,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "الشروط والأحكام",
  description:
    "الشروط والأحكام الخاصة بدورة البرمجة والذكاء الاصطناعي في عالم التداول: التسجيل، الدفع والاسترداد، حقوق المحتوى، الخصوصية، وإخلاء المسؤولية.",
  path: "/terms",
  keywords: [
    "الشروط والأحكام",
    "سياسة الاسترداد",
    "حقوق الملكية",
    "سياسة الخصوصية",
    "دورة البرمجة والذكاء الاصطناعي",
  ],
});

const CLAUSES: {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}[] = [
  {
    id: "nature",
    title: "طبيعة الخدمة",
    paragraphs: [
      "الدورة منتج تعليمي رقمي يُقدَّم أونلاين، وهدفها تدريب المشارك على البرمجة وتحليل البيانات وبناء أدوات تحليل لأسواق المال.",
      "الدورة ليست خدمة استثمارية، ولا إدارة أموال، ولا توصيات شراء أو بيع، ولا تشكّل بأي شكل نصيحة مالية أو دعوة للتداول.",
    ],
  },
  {
    id: "registration",
    title: "التسجيل والمقاعد",
    paragraphs: [
      "يتم التسجيل بالتواصل معنا عبر تيليجرام وتأكيد المقعد داخل مجموعة الدورة.",
      "المقاعد محدودة، ويُثبَّت المقعد نهائياً بعد إتمام عملية الدفع.",
    ],
    bullets: [
      "المعلومات التي تقدّمها عند التسجيل يجب أن تكون صحيحة وكاملة.",
      "المقعد شخصي وغير قابل للتحويل إلى شخص آخر دون موافقة كتابية منّا.",
    ],
  },
  {
    id: "payment",
    title: "السعر وطرق الدفع",
    paragraphs: [
      `سعر الدورة ${COURSE_PRICE} لكامل المسار، ويشمل جميع الحصص والمواد والمشاريع التطبيقية.`,
      "الدفع متاح بإحدى وسيلتين: حساب بريد الجزائر (CCP) بالدينار الجزائري، أو عملة USDT الرقمية عبر شبكة Tron (TRC20).",
      "تُرسل تفاصيل الحساب عبر تيليجرام بعد تأكيد الرغبة في التسجيل، مع تأكيد استلام المبلغ قبل الانطلاق.",
      "أي عمولات تحويل بنكية أو شبكية يتحمّلها المشارك.",
    ],
  },
  {
    id: "refund",
    title: "الإلغاء والاسترداد",
    paragraphs: [
      "يمكنك طلب إلغاء التسجيل واسترداد المبلغ كاملاً قبل انطلاق الدورة.",
      "بعد انطلاق الدورة وبدء تسليم المحتوى، لا يكون المبلغ قابلاً للاسترداد، نظراً لطبيعة المحتوى الرقمي وقابلية نسخه.",
      "إذا تعذّر علينا تقديم الدورة لأي سبب من جهتنا، يُعاد المبلغ كاملاً إلى المشارك.",
    ],
  },
  {
    id: "ip",
    title: "المحتوى وحقوق الملكية الفكرية",
    paragraphs: [
      "جميع مواد الدورة، بما فيها الشروحات والأكواد والملفات والتسجيلات والمشاريع النموذجية، مملوكة لنا ومحمية بقوانين حقوق الملكية الفكرية.",
      "الترخيص الممنوح لك هو ترخيص شخصي غير حصري وغير قابل للتحويل، مخصّص للاستخدام الشخصي والتعلّم فقط.",
    ],
    bullets: [
      "يُمنع إعادة نشر المواد أو بيعها أو مشاركتها مع غير المسجّلين.",
      "يُمنع استخدام مواد الدورة في دورات أو منتجات تجارية دون إذن كتابي مسبق.",
      "لك الحق في استخدام الأكواد التي تبنيها بنفسك في مشاريعك الخاصة دون قيود.",
    ],
  },
  {
    id: "conduct",
    title: "سلوك المشارك",
    paragraphs: [
      "نتوقّع من المشاركين احترام المدرّب وبقية المجموعة، والالتزام بعدم مشاركة بيانات الدخول أو المواد التعليمية مع الآخرين.",
      "لنا الحق في إيقاف مشاركة أي شخص يخالف هذه الشروط أو يعرقل سير الدورة، دون استرداد المبلغ.",
    ],
  },
  {
    id: "privacy",
    title: "الخصوصية والبيانات",
    paragraphs: [
      "نجمع الحد الأدنى من البيانات اللازمة للتسجيل والمتابعة: الاسم، حساب تيليجرام، وبيانات إثبات الدفع.",
      "لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث لأغراض تسويقية.",
      "تُستخدم بيانات الدفع لتأكيد العملية فقط، ولا نحتفظ بأي بيانات لا نحتاجها.",
    ],
  },
  {
    id: "disclaimer",
    title: "إخلاء المسؤولية",
    paragraphs: [
      "المحتوى تعليمي وتقني بحت، ولا يقدّم أي ضمان لتحقيق أرباح أو نتائج محددة في الأسواق.",
      "التداول ينطوي على مخاطر عالية قد تصل إلى خسارة رأس المال بالكامل.",
      "القرارات المالية التي تتخذها أثناء الدورة أو بعدها مسؤوليتك الشخصية وحدك.",
    ],
  },
  {
    id: "changes",
    title: "تعديل الشروط",
    paragraphs: [
      "قد نحدّث هذه الشروط عند الحاجة، وسيظهر تاريخ آخر تحديث في أعلى الصفحة.",
      "استمرارك في الدورة بعد نشر التحديث يعني موافقتك على النسخة السارية.",
    ],
  },
  {
    id: "contact",
    title: "التواصل",
    paragraphs: [
      "لأي سؤال حول هذه الشروط أو حول التسجيل والدفع، راسلنا مباشرة عبر تيليجرام وسنجيبك في أقرب وقت.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader current="/terms" ctaAlways />

      <main className="flex-1">
        <PageHero
          eyebrow="الشروط والأحكام"
          path="/terms"
          title="الشروط والأحكام"
          lead="بالتسجيل في الدورة فإنك تقرّ بقراءة هذه الشروط والموافقة عليها. صيغت بوضوح لتحدّد حقوقك وواجباتك قبل الانطلاق."
        />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[13px] font-semibold text-ink-soft">
            آخر تحديث: {SITE_LAST_UPDATED_LABEL}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            {/* فهرس المحتوى */}
            <nav
              aria-label="فهرس الشروط"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brass">
                الفهرس
              </p>
              <ol className="mt-4 space-y-2.5 border-s border-line ps-4 text-sm font-semibold text-ink-soft">
                {CLAUSES.map((clause, i) => (
                  <li key={clause.id}>
                    <a
                      href={`#${clause.id}`}
                      className="transition hover:text-pine"
                    >
                      <span className="me-1.5 font-mono text-[11px] text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {clause.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* النصوص */}
            <div className="min-w-0 space-y-10">
              {CLAUSES.map((clause, i) => (
                <section
                  key={clause.id}
                  id={clause.id}
                  className="scroll-mt-24 border-t border-line pt-8 first:border-t-0 first:pt-0"
                >
                  <h2 className="flex items-baseline gap-3 text-xl font-extrabold sm:text-2xl">
                    <span className="font-mono text-sm font-semibold text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {clause.title}
                  </h2>
                  {clause.paragraphs?.map((p) => (
                    <p
                      key={p}
                      className="mt-3 text-[15px] leading-loose text-ink-soft"
                    >
                      {p}
                    </p>
                  ))}
                  {clause.bullets ? (
                    <ul className="mt-4 space-y-2.5">
                      {clause.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-soft"
                        >
                          <span
                            className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {clause.id === "contact" ? (
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-cream px-4 py-2.5 font-mono text-sm font-bold text-pine transition hover:border-pine/40 hover:bg-pine-soft/60"
                    >
                      <IconTelegram className="h-4 w-4" />
                      {TELEGRAM_HANDLE}
                    </a>
                  ) : null}
                </section>
              ))}

              <div className="flex items-start gap-3 rounded-xl border border-brass/25 border-e-4 border-e-brass bg-brass-soft/50 p-5">
                <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-extrabold text-ink">تنبيه مهم: </span>
                  هذه الدورة تعليمية وتقنية بحتة، ولا تقدّم توصيات استثمارية أو
                  وعوداً بالأرباح. التداول ينطوي على مخاطر عالية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(organizationSchema(), websiteSchema(), {
          "@type": "WebPage",
          "@id": `${absoluteUrl("/terms")}#webpage`,
          name: "الشروط والأحكام",
          url: absoluteUrl("/terms"),
          inLanguage: "ar",
          dateModified: "2026-11-13",
          isPartOf: { "@id": `${absoluteUrl("/")}#website` },
          publisher: { "@id": `${absoluteUrl("/")}#organization` },
        })}
      />
    </div>
  );
}
