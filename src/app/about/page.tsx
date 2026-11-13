import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  IconAlert,
  IconArrowLeft,
  IconBolt,
  IconCalendar,
  IconCheck,
  IconClock,
  IconFolder,
  IconMonitor,
  IconSprout,
  IconTag,
  IconTelegram,
} from "@/components/icons";
import {
  courseSchema,
  graph,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import {
  absoluteUrl,
  buildMetadata,
  COURSE_DURATION,
  COURSE_MODE,
  COURSE_PRICE,
  INSTRUCTOR_PHOTO,
  SITE_AUTHOR,
  SITE_AUTHOR_AR,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
} from "@/lib/site";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const metadata: Metadata = buildMetadata({
  title: "عن الدورة والمدرّب",
  description:
    "تعرّف على دورة البرمجة والذكاء الاصطناعي في عالم التداول: فلسفة الدورة العملية، من يقدّمها، كيف تسير خطوة بخطوة، وماذا ستحصل عليه عند التسجيل.",
  path: "/about",
  keywords: [
    "عن الدورة",
    "عبد الرشيد حفصي",
    "مدرّب برمجة",
    "دورة تداول بالذكاء الاصطناعي",
    "تعلم بايثون للتداول",
  ],
});

const VALUES: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: IconBolt,
    title: "التطبيق قبل النظرية",
    desc: "لا نبدأ بمحاضرات طويلة: من الأسبوع الأول تكتب كوداً يعمل على بيانات حقيقية، وتفهم المفاهيم من خلال استخدامها فعلياً.",
  },
  {
    Icon: IconFolder,
    title: "أدواتك بدل الأدوات الجاهزة",
    desc: "الهدف أن تبني مؤشراتك وأدواتك بنفسك، لا أن تبقى معتمداً على ما يقدّمه الآخرون أو على إعدادات جاهزة لا تفهم منطقها.",
  },
  {
    Icon: IconSprout,
    title: "من الصفر دون خبرة سابقة",
    desc: "نبدأ من تثبيت الأدوات وكتابة أول سطر كود، ونتقدّم خطوة بخطوة حتى مشاريع كاملة تستخدمها بعد انتهاء الدورة.",
  },
];

const STEPS: { title: string; desc: string }[] = [
  {
    title: "التسجيل وتأكيد المقعد",
    desc: "تراسلنا عبر تيليجرام، نؤكد مقعدك في المجموعة ونرسل لك تفاصيل الدفع وموعد الانطلاق.",
  },
  {
    title: "تجهيز بيئة العمل",
    desc: "في الأسبوع الأول نثبّت بايثون ومحرر VS Code معاً خطوة بخطوة، ولا تحتاج أي برامج مدفوعة.",
  },
  {
    title: "حصص وتطبيق أسبوعي",
    desc: "شرح عربي مباشر مع تمارين عملية بعد كل محور، ودعم ومتابعة لأسئلتك طوال مدة الدورة.",
  },
  {
    title: "مشروع نهائي وعرض",
    desc: "تبني مشروعاً متكاملاً على بيانات حقيقية، تعرضه أمام المجموعة، وتخرج بخارطة طريق لمواصلة التطور ذاتياً.",
  },
];

const GAINS = [
  "12 أسبوعاً من المحتوى العملي مقسّمة على ثلاث مراحل واضحة",
  "شرح بالعربية بأسلوب مبسّط، مع المصطلحات التقنية كما تُستخدم فعلياً",
  "أكواد ومشاريع جاهزة تبنى خلال الدورة وتطوّرها بعدها",
  "متابعة ودعم مباشر عبر تيليجرام لأسئلتك",
  "اختبار الأفكار على البيانات التاريخية قبل المخاطرة بمال حقيقي",
  "لا تحتاج خبرة برمجية سابقة ولا برامج مدفوعة",
];

const FACTS: { Icon: IconType; label: string; value: string; highlight?: boolean }[] =
  [
    { Icon: IconCalendar, label: "الموعد", value: "منتصف الشهر" },
    { Icon: IconClock, label: "المدة", value: COURSE_DURATION },
    { Icon: IconMonitor, label: "المكان", value: COURSE_MODE },
    { Icon: IconTag, label: "السعر", value: COURSE_PRICE, highlight: true },
  ];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader current="/about" ctaAlways />

      <main className="flex-1">
        <PageHero
          eyebrow="عن الدورة"
          path="/about"
          title="دورة تبني مهارة عملية، لا تحفظ معلومات"
          lead="مسار تعليمي عربي واحد يجمع البرمجة والذكاء الاصطناعي وأسواق المال: من أول سطر كود إلى أدوات تحليل تعمل فعلياً على بيانات السوق."
        />

        {/* ——— من نحن ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              من نحن؟
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-loose text-ink-soft sm:text-base">
              <p>
                نحن مبادرة تعليمية عربية تقدّم دورات عملية في التقنية وأسواق
                المال. بدأت الفكرة من ملاحظة بسيطة: كثير من المتداولين يعتمدون
                على مؤشرات جاهزة لا يفهمون منطقها، وكثير من المتعلمين يتوقفون عند
                حدود الكود الأول لأن الشروحات تبقى نظرية.
              </p>
              <p>
                هذه الدورة بُنيت لتسدّ الفجوة بين الاثنين: تعلّم البرمجة{" "}
                <strong className="font-bold text-ink">من خلال</strong> التداول،
                وتعلّم التداول{" "}
                <strong className="font-bold text-ink">من خلال</strong> بناء
                أدواتك بنفسك. كل محور ينتهي بشيء يعمل: كود، مؤشر، تقرير، أو أداة
                تحليل.
              </p>
            </div>
          </div>
        </section>

        {/* ——— فلسفة الدورة ——— */}
        <section className="border-y border-line bg-paper-deep/45 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              فلسفة الدورة
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-loose text-ink-soft">
              ثلاثة مبادئ تحكم طريقة الشرح والتمارين من الأسبوع الأول حتى
              المشروع النهائي.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {VALUES.map((v) => (
                <article
                  key={v.title}
                  className="rounded-2xl border border-line bg-cream p-6 sm:p-7"
                >
                  <v.Icon className="h-6 w-6 text-pine" />
                  <h3 className="mt-4 text-[17px] font-bold">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {v.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— المدرّب ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              من يقدّم الدورة؟
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-loose text-ink-soft">
              دورة عملية يقدّمها من بنى أدواته بنفسه، لا مجرد شارح نظري
              للمفاهيم.
            </p>
            <div className="mt-8 rounded-2xl border border-line bg-cream p-6 sm:p-9">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
                <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-pine-soft ring-1 ring-pine/15 sm:mx-0 sm:ms-0">
                  <img
                    src={INSTRUCTOR_PHOTO}
                    alt={`صورة ${SITE_AUTHOR_AR}`}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-28 w-28 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-extrabold">{SITE_AUTHOR_AR}</h3>
                    <span
                      dir="ltr"
                      className="rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-bold text-ink-soft"
                    >
                      {SITE_AUTHOR}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-pine">
                    مدرّب الدورة: برمجة × ذكاء اصطناعي × تداول
                  </p>
                  <p className="mt-4 text-[15px] leading-loose text-ink-soft">
                    مبرمج ومتداول بنى أدواته التحليلية بنفسه: من جلب البيانات
                    ومعالجتها، إلى مؤشرات مبرمجة يدوياً، إلى اختبار الأفكار على
                    البيانات التاريخية. في هذه الدورة يأخذك عبر نفس المسار
                    العملي: من أول سطر كود إلى أدوات تحليل تعمل فعلياً على بيانات
                    السوق.
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "شرح بالعربية بأسلوب مبسّط وعملي",
                      "تطبيق مباشر من الأسبوع الأول",
                      "دعم ومتابعة طوال مدة الدورة",
                      "مشاريع مبنية على بيانات حقيقية",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm font-semibold"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="mt-7 inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-4 py-2.5 font-mono text-sm font-bold text-pine transition hover:border-pine/40 hover:bg-pine-soft/60"
                  >
                    <IconTelegram className="h-4 w-4" />
                    {TELEGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— كيف تسير الدورة ——— */}
        <section className="border-y border-line bg-paper-deep/45 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              كيف تسير الدورة؟
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-loose text-ink-soft">
              أربع خطوات واضحة من لحظة التسجيل إلى عرض مشروعك النهائي.
            </p>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-line bg-cream p-6 sm:p-7"
                >
                  <span className="font-mono text-sm font-semibold text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— ماذا ستحصل عليه ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  ماذا ستحصل عليه؟
                </h2>
                <ul className="mt-6 grid gap-3.5">
                  {GAINS.map((gain) => (
                    <li
                      key={gain}
                      className="flex items-start gap-3 text-[15px] font-semibold leading-relaxed"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                      {gain}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[15px] leading-loose text-ink-soft">
                  للتفاصيل الكاملة عن المحتوى والمواعيد والدفع، راجع{" "}
                  <Link
                    href="/#curriculum"
                    className="font-bold text-pine underline decoration-pine/30 underline-offset-4 transition hover:decoration-pine"
                  >
                    صفحة الدورة الرئيسية
                  </Link>{" "}
                  أو اطّلع على{" "}
                  <Link
                    href="/terms"
                    className="font-bold text-pine underline decoration-pine/30 underline-offset-4 transition hover:decoration-pine"
                  >
                    الشروط والأحكام
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-cream p-6 sm:p-7">
                <h3 className="text-lg font-extrabold">معلومات سريعة</h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {FACTS.map((fact) => (
                    <li
                      key={fact.label}
                      className="rounded-xl border border-line bg-paper px-4 py-3"
                    >
                      <span className="flex items-center gap-2 text-[12px] font-semibold text-ink-soft">
                        <fact.Icon className="h-4 w-4 text-pine" />
                        {fact.label}
                      </span>
                      <span
                        className={`mt-1 block text-[15px] font-extrabold ${
                          fact.highlight ? "text-brass" : "text-ink"
                        }`}
                      >
                        {fact.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-pine px-6 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                >
                  <IconTelegram className="h-5 w-5" />
                  سجّل الآن عبر تيليجرام
                </a>
                <Link
                  href="/"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-paper px-6 py-3 text-sm font-bold text-ink transition hover:border-pine/40 hover:text-pine"
                >
                  استعرض محتوى الدورة
                  <IconArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-xl border border-brass/25 border-e-4 border-e-brass bg-brass-soft/50 p-5">
              <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-extrabold text-ink">تنبيه مهم: </span>
                هذه الدورة تعليمية وتقنية بحتة، ولا تقدّم توصيات استثمارية أو
                وعوداً بالأرباح. التداول ينطوي على مخاطر عالية.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          organizationSchema(),
          personSchema(),
          websiteSchema(),
          courseSchema(),
          {
            "@type": "AboutPage",
            "@id": `${absoluteUrl("/about")}#webpage`,
            name: "عن الدورة والمدرّب",
            url: absoluteUrl("/about"),
            inLanguage: "ar",
            isPartOf: { "@id": `${absoluteUrl("/")}#website` },
            about: { "@id": `${absoluteUrl("/")}#course` },
          },
        )}
      />
    </div>
  );
}
