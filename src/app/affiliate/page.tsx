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
  IconChat,
  IconCheck,
  IconStar,
  IconTelegram,
  IconUser,
  IconWallet,
} from "@/components/icons";
import {
  affiliateProgramSchema,
  graph,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import {
  absoluteUrl,
  AFFILIATE_COMMISSION,
  AFFILIATE_LINK,
  AFFILIATE_RATE_LABEL,
  buildMetadata,
  COURSE_PRICE,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
} from "@/lib/site";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const metadata: Metadata = buildMetadata({
  title: "برنامج العمولة: اربح 25%",
  description:
    "برنامج عمولة بسيط: اربح 25% من سعر الدورة، أي 20$، عن كل شخص يسجّل عبر إحالتك. بدون حد أقصى للعدد، والدفع عبر CCP أو USDT.",
  path: "/affiliate",
  keywords: [
    "برنامج العمولة",
    "التسويق بالعمولة",
    "اربح من الإنترنت",
    "إحالة أصدقاء",
    "عمولة 25%",
    "دورة البرمجة والذكاء الاصطناعي",
  ],
});

const STEPS: { title: string; desc: string }[] = [
  {
    title: "اطلب الانضمام",
    desc: "راسلنا على تيليجرام وأخبرنا أنك تريد الانضمام إلى برنامج العمولة. الانضمام مجاني ولا يحتاج أي شروط مسبقة.",
  },
  {
    title: "استلم طريقة الإحالة",
    desc: "نرسل لك طريقة الإحالة المعتمدة، وسنتابع بها التسجيلات القادمة منك حتى نحتسب عمولتك.",
  },
  {
    title: "انصح بالدورة",
    desc: "شارك الدورة مع من تعرف من المهتمين بالبرمجة والذكاء الاصطناعي والتداول، واشرح لهم ما استفدته منها.",
  },
  {
    title: "اقبض عمولتك",
    desc: "عند تسجيل الشخص ودفع رسوم الدورة، تُحتسب لك عمولة 25%، وتُدفع عبر CCP أو USDT حسب ما يناسبك.",
  },
];

const BENEFITS = [
  `25% من سعر الدورة عن كل إحالة ناجحة، أي ${AFFILIATE_COMMISSION} لكل طالب`,
  "بدون حد أقصى لعدد الإحالات: كلما ساعدت أكثر، ربحت أكثر",
  "الانضمام مجاني ولا يتطلّب أي رسوم أو التزامات",
  "الدفع عبر بريد الجزائر (CCP) بالدينار أو عبر USDT (TRC20)",
];

const RULES = [
  "تُحتسب العمولة بعد تأكيد دفع الطالب المُحال وثبات تسجيله.",
  "لا تُحتسب الإحالات الوهمية، ولا إحالة الشخص لنفسه، ولا الحسابات المكرّرة.",
  "يُمنع الإعلان المضلّل أو تقديم وعود بأرباح مضمونة باسم الدورة.",
  "من حقنا تعديل البرنامج أو إيقافه، مع الحفاظ على العمولات المستحقة قبل التعديل.",
];

const WHO: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: IconUser,
    title: "طلاب الدورة",
    desc: "جرّبت الدورة بنفسك وتريد أن يستفيد منها غيرك، وتحصل في المقابل على عمولة عن كل تسجيل.",
  },
  {
    Icon: IconChat,
    title: "صنّاع المحتوى",
    desc: "لديك جمهور مهتم بالبرمجة أو التداول، ويمكنك مشاركة الدورة معه بصدق ووضوح.",
  },
  {
    Icon: IconWallet,
    title: "متداولون ومجتمعات",
    desc: "عضو في مجموعات ومنتديات التداول، وتنصح بما جرّبته فعلاً مع من يهمّه المجال.",
  },
];

export default function AffiliatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader current="/affiliate" ctaAlways />

      <main className="flex-1">
        <PageHero
          eyebrow="برنامج العمولة"
          path="/affiliate"
          title="اربح 25% عن كل شخص تنصحه بالدورة"
          lead="برنامج عمولة واضح وبسيط: شارك الدورة مع من يهمّه المجال، وعند تسجيله تحصل على 25% من سعر الدورة."
        />

        {/* ——— الأرقام + كيف يعمل ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              {/* بطاقة الأرقام */}
              <div className="flex flex-col rounded-2xl border border-brass/30 bg-brass-soft/60 p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brass/40 bg-paper px-3 py-1 text-[12px] font-bold text-brass">
                  <IconStar className="h-3.5 w-3.5" />
                  عمولة على كل إحالة
                </span>
                <p className="mt-6 font-mono text-6xl font-extrabold leading-none text-pine">
                  {AFFILIATE_RATE_LABEL}
                </p>
                <p className="mt-3 text-[15px] font-bold">
                  أي {AFFILIATE_COMMISSION} عن كل طالب يسجّل من إحالتك
                </p>
                <dl className="mt-6 grid gap-3 text-sm">
                  {(
                    [
                      ["سعر الدورة", COURSE_PRICE, true],
                      ["نسبة عمولتك", AFFILIATE_RATE_LABEL, true],
                      ["ربحك لكل طالب", AFFILIATE_COMMISSION, true],
                      ["عدد الإحالات", "غير محدود", false],
                    ] as const
                  ).map(([label, value, mono]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 border-b border-brass/20 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <dt className="font-semibold text-ink-soft">{label}</dt>
                      <dd
                        className={`font-bold text-ink ${mono ? "font-mono" : ""}`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-lg bg-pine px-6 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                >
                  <IconTelegram className="h-5 w-5" />
                  انضم إلى برنامج العمولة
                </a>
              </div>

              {/* الخطوات */}
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  كيف يعمل البرنامج؟
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-loose text-ink-soft">
                  أربع خطوات واضحة من لحظة الانضمام إلى استلام عمولتك.
                </p>
                <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                  {STEPS.map((step, i) => (
                    <li
                      key={step.title}
                      className="rounded-2xl border border-line bg-cream p-5 sm:p-6"
                    >
                      <span className="font-mono text-sm font-semibold text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2.5 text-[16px] font-bold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {step.desc}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ——— المزايا ——— */}
        <section className="border-y border-line bg-paper-deep/45 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">لماذا تنضم؟</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-line bg-cream p-5 text-[15px] font-semibold leading-relaxed"
                >
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— لمن يناسب ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              لمن يناسب البرنامج؟
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {WHO.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-cream p-6 sm:p-7"
                >
                  <item.Icon className="h-6 w-6 text-pine" />
                  <h3 className="mt-4 text-[17px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— الشروط البسيطة ——— */}
        <section className="border-y border-line bg-paper-deep/45 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              شروط بسيطة وواضحة
            </h2>
            <ul className="mt-7 space-y-4">
              {RULES.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span
                    className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
                    aria-hidden="true"
                  />
                  {rule}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-brass/25 border-e-4 border-e-brass bg-brass-soft/50 p-5">
              <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-extrabold text-ink">ملاحظة: </span>
                العمولة مكافأة على إحالة صادقة، وليست وعداً بأرباح. البرنامج
                منفصل تماماً عن التداول، والدورة تعليمية لا تقدّم توصيات ولا
                ضمانات.
              </p>
            </div>
          </div>
        </section>

        {/* ——— دعوة للتسجيل ——— */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl border border-line bg-cream p-8 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold sm:text-3xl">
                    جاهز للبدء؟
                  </h2>
                  <p className="mt-3 text-[15px] leading-loose text-ink-soft">
                    راسلنا على تيليجرام للانضمام إلى برنامج العمولة، أو تصفّح
                    تفاصيل الدورة أولاً لتعرف ما ستنصح به.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-lg bg-pine px-6 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                    >
                      <IconTelegram className="h-5 w-5" />
                      انضم إلى البرنامج
                    </a>
                    <Link
                      href="/#register"
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-6 py-3.5 text-sm font-bold text-ink transition hover:border-pine/40 hover:text-pine"
                    >
                      تفاصيل الدورة والتسجيل
                      <IconArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-paper p-6">
                  <p className="text-[12px] font-bold uppercase tracking-widest text-brass">
                    تواصل مباشر
                  </p>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="mt-3 inline-flex items-center gap-2 font-mono text-base font-bold text-pine transition hover:text-pine-deep"
                  >
                    <IconTelegram className="h-5 w-5" />
                    {TELEGRAM_HANDLE}
                  </a>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                    نجيبك في أقرب وقت ونرسل لك طريقة الإحالة المعتمدة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          organizationSchema(),
          websiteSchema(),
          affiliateProgramSchema(),
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/affiliate")}#webpage`,
            name: "برنامج العمولة: اربح 25%",
            url: absoluteUrl("/affiliate"),
            inLanguage: "ar",
            isPartOf: { "@id": `${absoluteUrl("/")}#website` },
            about: { "@id": `${absoluteUrl("/affiliate")}#program` },
          },
        )}
      />
    </div>
  );
}
