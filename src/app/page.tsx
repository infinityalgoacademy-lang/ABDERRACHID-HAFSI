import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import {
  IconAlert,
  IconArrowLeft,
  IconBot,
  IconBolt,
  IconCalendar,
  IconCandles,
  IconChat,
  IconCheck,
  IconClock,
  IconCode,
  IconDashboard,
  IconDatabase,
  IconFolder,
  IconGlobe,
  IconHistory,
  IconMail,
  IconMonitor,
  IconSparkles,
  IconSprout,
  IconStar,
  IconTag,
  IconTelegram,
  IconUser,
  IconYouTube,
} from "@/components/icons";
import { CopyField } from "@/components/copy-field";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseSchema, faqSchema, graph } from "@/lib/schema";
import {
  AFFILIATE_COMMISSION,
  AFFILIATE_LINK,
  AFFILIATE_RATE_LABEL,
  INSTRUCTOR_PHOTO,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK as TG_LINK,
  YOUTUBE_EMBED,
  YOUTUBE_LINK,
} from "@/lib/site";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/* ——————————————————— بيانات ثابتة ——————————————————— */

const CCP_NUMBER = "10716064/45";
const RIP_NUMBER = "00799999001071606445";
const USDT_ADDRESS = "TFUSU7B7K3GNxr7P8PKkt8PpjtTeciskk3";

const TICKER_ITEMS = [
  "أساسيات بايثون",
  "برمجة المؤشرات الفنية",
  "جلب البيانات ومعالجتها",
  "بناء أدوات التحليل",
  "Backtesting على البيانات التاريخية",
  "الذكاء الاصطناعي في اتخاذ القرار",
  "أتمتة العمل",
  "مشاريع تطبيقية حقيقية",
];

const LEARN: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: IconCode,
    title: "أساسيات البرمجة",
    desc: "تفهم المفاهيم الأساسية بطريقة مبسطة وعملية، مع تطبيق مباشر من أول أسبوع دون أي خبرة مسبقة.",
  },
  {
    Icon: IconCandles,
    title: "برمجة المؤشرات الفنية",
    desc: "تحوّل أفكارك التحليلية إلى مؤشرات وأكواد تعمل فعلياً، بدل الاكتفاء بالمؤشرات الجاهزة.",
  },
  {
    Icon: IconDashboard,
    title: "بناء منصات وأدوات تحليل",
    desc: "تصمّم لوحات وأدوات تحليل مخصصة لاحتياجاتك وأسلوبك الخاص في قراءة السوق.",
  },
  {
    Icon: IconDatabase,
    title: "جلب البيانات ومعالجتها",
    desc: "أسعار، شموع وبيانات تاريخية من مختلف المنصات والمصادر، وكيفية تنظيفها وتجهيزها للتحليل.",
  },
  {
    Icon: IconSparkles,
    title: "الذكاء الاصطناعي في التحليل",
    desc: "استخدام أدوات الذكاء الاصطناعي لقراءة البيانات ودعم اتخاذ القرار في التداول.",
  },
  {
    Icon: IconBolt,
    title: "كتابة الأكواد وتسريع العمل",
    desc: "تستعين بالذكاء الاصطناعي في كتابة الأكواد وتسريع مهامك اليومية المتكررة.",
  },
  {
    Icon: IconHistory,
    title: "اختبار الأفكار (Backtesting)",
    desc: "تختبر استراتيجياتك وأفكارك على البيانات التاريخية قبل المخاطرة بأي مبلغ حقيقي.",
  },
  {
    Icon: IconFolder,
    title: "مشاريع تطبيقية حقيقية",
    desc: "تبني خلال الدورة مشاريع كاملة تستخدمها وتطوّرها بعد انتهائها.",
  },
];

const AUDIENCE: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: IconUser,
    title: "المتداول الذي يريد أدواته الخاصة",
    desc: "تعتمد اليوم مؤشرات جاهزة، وتريد أن تبني أدوات تحليل بنفسك وتتحكم في كل سطر فيها.",
  },
  {
    Icon: IconSprout,
    title: "المبتدئ في البرمجة",
    desc: "تبحث عن تطبيق عملي ممتع يأخذك من الصفر إلى مستوى حقيقي في البرمجة.",
  },
  {
    Icon: IconBot,
    title: "المهتم بالذكاء الاصطناعي",
    desc: "تريد دمج قدرات الذكاء الاصطناعي في التحليل المالي واتخاذ القرار.",
  },
  {
    Icon: IconClock,
    title: "من يريد توفير الوقت وأتمتة عمله",
    desc: "تريد أن يتولى الكود المهام المتكررة، وتركّز أنت على القرار فقط.",
  },
];

const GAIN: { Icon: IconType; title: string; desc: string }[] = [
  {
    Icon: IconStar,
    title: "شرح عملي خطوة بخطوة",
    desc: "كل مفهوم يُشرح ثم يُطبّق مباشرة على بيانات وأمثلة حقيقية من السوق.",
  },
  {
    Icon: IconCode,
    title: "أكواد ومشاريع جاهزة",
    desc: "تحصل على أكواد ومشاريع كاملة تستخدمها فوراً وتطوّرها لاحقاً بنفسك.",
  },
  {
    Icon: IconChat,
    title: "متابعة ودعم أثناء الدورة",
    desc: "مرافقة كاملة طوال المسار، مع دعم ومتابعة مستمرة لأسئلتك وتطبيقاتك.",
  },
];

const DETAILS: { Icon: IconType; label: string; value: string; highlight?: boolean }[] = [
  { Icon: IconCalendar, label: "الموعد", value: "منتصف الشهر" },
  { Icon: IconClock, label: "المدة", value: "3 أشهر" },
  { Icon: IconMonitor, label: "المكان", value: "أونلاين" },
  { Icon: IconTag, label: "السعر", value: "80$", highlight: true },
];

const CURRICULUM: { month: string; phase: string; weeks: string[] }[] = [
  {
    month: "الشهر الأول",
    phase: "الأساسيات والبيانات",
    weeks: [
      "تثبيت بيئة العمل خطوة بخطوة (بايثون + محرر VS Code)، التعامل مع الطرفية، وكتابة أول برنامج لك وتشغيله",
      "المتغيرات وأنواع البيانات، الجمل الشرطية، الحلقات، وكتابة دوالك الخاصة",
      "مكتبة Pandas: قراءة ملفات CSV والجداول، الفرز والفلترة، والتعامل مع الأعمدة",
      "سحب بيانات أسعار حقيقية من مصادر مجانية، تنظيف القيم الناقصة والشاذة، وتجهيز جداول جاهزة للتحليل",
    ],
  },
  {
    month: "الشهر الثاني",
    phase: "المؤشرات والذكاء الاصطناعي",
    weeks: [
      "حساب المتوسطات المتحركة (MA · EMA) ومؤشر القوة النسبية RSI بالكود، وفهم دلالتها خلف الرسم البياني",
      "بناء مؤشر مخصص بمعادلاتك أنت، رسمه على بيانات السوق، وإضافة إشارات دخول وخروج واضحة عليه",
      "توظيف الذكاء الاصطناعي في قراءة البيانات: من نماذج تعلم الآلة إلى المساعدات الذكية في اكتشاف الأنماط واقتراح القرارات",
      "أتمتة المهام المتكررة: سكربتات تحدّث البيانات وتفحص شروطك وترسل التقارير تلقائياً",
    ],
  },
  {
    month: "الشهر الثالث",
    phase: "الاختبار والمشاريع",
    weeks: [
      "فهم مفهوم Backtesting: اختبار استراتيجيتك على بيانات تاريخية قبل المخاطرة بمال حقيقي، وبناء محرك اختبار بسيط خاص بك",
      "قياس الأداء والمخاطر بعين خبير: نسبة الربح، أقصى تراجع (Drawdown)، وسلاسل الخسائر",
      "مشروع متكامل تحت إشراف المدرّب: من الفكرة إلى كود يعمل فعلياً على بيانات حقيقية",
      "عرض مشروعك أمام المجموعة مع ملاحظات عملية، وخارطة طريق واضحة لمواصلة التطور ذاتياً بعد انتهاء الدورة",
    ],
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "هل أحتاج خبرة سابقة في البرمجة؟",
    a: "لا. الدورة تبدأ من الصفر تماماً: من تثبيت الأدوات وكتابة أول سطر كود، وصولاً إلى بناء مشاريع كاملة. المطلوب فقط حاسوب ورغبة في التطبيق.",
  },
  {
    q: "هل الشرح باللغة العربية؟",
    a: "نعم، الشرح والمتابعة بالعربية، مع الإبقاء على المصطلحات التقنية وأسماء الدوال بالإنجليزية كما تُستخدم فعلياً في مجال البرمجة والتداول.",
  },
  {
    q: "ماذا أحتاج لمتابعة الدورة؟",
    a: "حاسوب واتصال بالإنترنت فقط. في الأسبوع الأول نثبّت بيئة العمل معاً خطوة بخطوة، ولا تحتاج أي برامج مدفوعة.",
  },
  {
    q: "كم وقتاً أحتاج أسبوعياً؟",
    a: "الدورة عملية، والأهم هو التطبيق بين الحصص. كلما خصصت وقتاً أكبر للتطبيق خرجت بمشاريع أكثر، والدعم متاح لأسئلتك طوال المسار.",
  },
  {
    q: "كيف يتم الدفع؟",
    a: "بإحدى وسيلتين: بالدينار الجزائري عبر حساب بريد الجزائر (CCP)، أو بعملة USDT الرقمية عبر شبكة Tron (TRC20). تفاصيل الحسابات في قسم الدفع والتسجيل أدناه.",
  },
  {
    q: "كيف أسجل في الدورة؟",
    a: "راسلنا مباشرة عبر تيليجرام، ستجد زر التسجيل في قسم الدفع والتسجيل أدناه، وسنرشدك خطوة بخطوة: تأكيد مقعدك، الدفع، والانطلاق مع المجموعة.",
  },
  {
    q: "هل هناك برنامج عمولة؟",
    a: "نعم، يمكنك الانضمام إلى برنامج العمولة والحصول على 25% من سعر الدورة عن كل شخص يسجّل عبر إحالتك. التفاصيل الكاملة في صفحة برنامج العمولة.",
  },
];

const AFFILIATE_STEPS: { title: string; desc: string }[] = [
  {
    title: "اطلب الانضمام",
    desc: "راسلنا على تيليجرام وأخبرنا أنك تريد الانضمام. الانضمام مجاني وبدون شروط مسبقة.",
  },
  {
    title: "استلم طريقة الإحالة",
    desc: "نرسل لك طريقة الإحالة المعتمدة، وسنتابع بها التسجيلات القادمة منك.",
  },
  {
    title: "انصح بالدورة",
    desc: "شارك الدورة مع المهتمين بالبرمجة والذكاء الاصطناعي والتداول.",
  },
  {
    title: "اقبض عمولتك",
    desc: "بعد تسجيل الشخص ودفعه، تُحتسب لك عمولة 25% وتُدفع عبر CCP أو USDT.",
  },
];

/* ——————————————————— محاكي محرر الأكواد ——————————————————— */

const CLASSES: Record<string, string> = {
  k: "text-[#8fd6b4]",
  f: "text-[#e6d290]",
  s: "text-[#d9b06c]",
  c: "text-[#6b8578]",
  p: "text-[#dce8e2]",
};

const CODE: Array<Array<[string, string]>> = [
  [
    ["import ", "k"],
    ["pandas ", "p"],
    ["as ", "k"],
    ["pd", "p"],
  ],
  [],
  [
    ["def ", "k"],
    ["ema", "f"],
    ["(s, n):", "p"],
  ],
  [
    ["    ", "p"],
    ["return ", "k"],
    ["s.ewm(span=n, adjust=False).mean()", "p"],
  ],
  [],
  [
    ["df = pd.read_csv(", "p"],
    ['"EURUSD_H1.csv"', "s"],
    [")", "p"],
  ],
  [
    ["df[", "p"],
    ['"ema20"', "s"],
    ["] = ema(df[", "p"],
    ['"close"', "s"],
    ["], 20)", "p"],
  ],
  [],
  [
    ["if ", "k"],
    ["df[", "p"],
    ['"close"', "s"],
    ["].iloc[-1] > df[", "p"],
    ['"ema20"', "s"],
    ["].iloc[-1]:", "p"],
  ],
  [
    ["    ", "p"],
    ["print", "f"],
    ["(", "p"],
    ['"BUY"', "s"],
    [")", "p"],
  ],
];

function CodeEditor() {
  const lastLine = CODE.length - 1;
  return (
    <div
      dir="ltr"
      className="overflow-hidden rounded-xl border border-ink/20 bg-editor shadow-2xl shadow-ink/25 ring-1 ring-white/5"
    >
      {/* شريط العنوان */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ms-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-white/85">
          <span className="text-[10px] font-bold text-[#d9b06c]">PY</span>
          ema_signal.py
        </span>
        <span className="ms-auto hidden font-mono text-[10px] uppercase tracking-widest text-white/35 sm:block">
          Python · Pandas
        </span>
      </div>

      {/* مسار الملف */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-1.5 font-mono text-[10px] text-white/30">
        <span>trading-tools</span>
        <span className="text-white/20">›</span>
        <span className="text-white/50">ema_signal.py</span>
        <span className="ms-auto hidden items-center gap-1.5 sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8fd6b4]" />
          main*
        </span>
      </div>

      {/* الكود */}
      <div className="overflow-x-auto pt-3 font-mono text-[12px] leading-6 sm:text-[13px]">
        {CODE.map((line, i) => {
          const active = i === lastLine;
          return (
            <div
              key={i}
              className={`flex min-w-max px-4 sm:px-5 ${
                active ? "bg-white/[0.05]" : ""
              }`}
            >
              <span
                className={`w-7 shrink-0 select-none pe-3 text-right sm:w-8 ${
                  active ? "text-[#8fd6b4]" : "text-white/20"
                }`}
              >
                {i + 1}
              </span>
              <span className="whitespace-pre text-[#dce8e2]">
                {line.length === 0
                  ? " "
                  : line.map(([t, cls], j) => (
                      <span key={j} className={CLASSES[cls]}>
                        {t}
                      </span>
                    ))}
              </span>
            </div>
          );
        })}
      </div>

      {/* مخرجات التشغيل */}
      <div className="mt-3 border-t border-white/10 bg-black/30 px-4 py-2.5 font-mono text-[11px] sm:px-5">
        <div className="flex items-center gap-2">
          <span className="text-white/30">$</span>
          <span className="text-white/60">python ema_signal.py</span>
          <span className="ms-auto rounded bg-[#8fd6b4]/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#8fd6b4]">
            ✓ BUY
          </span>
        </div>
      </div>

      {/* شريط الحالة */}
      <div className="flex items-center justify-between bg-pine-deep px-4 py-1.5 font-mono text-[10px] text-cream/60">
        <span className="flex items-center gap-1.5">
          <span className="text-[#8fd6b4]">⎇</span>
          main
        </span>
        <span className="hidden items-center gap-4 sm:flex">
          <span>UTF-8</span>
          <span>Ln 10, Col 5</span>
          <span>Python 3.12</span>
        </span>
      </div>
    </div>
  );
}

/* ——————————————————— رسم شموع SVG ——————————————————— */

type Candle = {
  x: number;
  wt: number; // أعلى الذيل
  wb: number; // أسفل الذيل
  bt: number; // أعلى الجسم
  bh: number; // ارتفاع الجسم
  up: boolean;
};

const CANDLES: Candle[] = [
  { x: 14, wt: 82, wb: 104, bt: 88, bh: 12, up: true },
  { x: 36, wt: 74, wb: 92, bt: 78, bh: 8, up: false },
  { x: 58, wt: 68, wb: 86, bt: 72, bh: 12, up: true },
  { x: 80, wt: 56, wb: 78, bt: 60, bh: 14, up: true },
  { x: 102, wt: 58, wb: 76, bt: 62, bh: 8, up: false },
  { x: 124, wt: 46, wb: 66, bt: 50, bh: 12, up: true },
  { x: 146, wt: 38, wb: 58, bt: 42, bh: 10, up: true },
  { x: 168, wt: 40, wb: 56, bt: 44, bh: 7, up: false },
  { x: 190, wt: 28, wb: 48, bt: 32, bh: 12, up: true },
  { x: 212, wt: 20, wb: 38, bt: 24, bh: 10, up: true },
  { x: 234, wt: 12, wb: 28, bt: 16, bh: 8, up: true },
];

function CandleChart() {
  return (
    <div className="relative z-10 -mt-12 ms-auto w-[74%] rotate-[1.2deg] rounded-lg border border-line bg-cream p-4 shadow-lg shadow-ink/10 sm:w-[58%]">
      <div className="mb-2 flex items-center justify-between">
        <span
          dir="ltr"
          className="font-mono text-[11px] font-semibold text-ink-soft"
        >
          EURUSD · H1
        </span>
        <span className="rounded-full bg-pine-soft px-2.5 py-0.5 text-[11px] font-bold text-pine">
          مؤشر EMA من صنعك
        </span>
      </div>
      <svg viewBox="0 0 250 118" className="h-auto w-full" aria-hidden="true">
        {[30, 60, 90].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="250"
            y2={y}
            stroke="#1f2a24"
            strokeOpacity="0.07"
          />
        ))}
        <line
          x1="0"
          y1="14"
          x2="250"
          y2="14"
          stroke="#a3762a"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.8"
        />
        {CANDLES.map((c, i) => (
          <g key={i}>
            <line
              x1={c.x}
              y1={c.wt}
              x2={c.x}
              y2={c.wb}
              stroke={c.up ? "#12805c" : "#c0453a"}
              strokeWidth="1.4"
            />
            <rect
              x={c.x - 4.5}
              y={c.bt}
              width="9"
              height={c.bh}
              rx="1"
              fill={c.up ? "#12805c" : "#c0453a"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ——————————————————— عناصر مشتركة ——————————————————— */

function SectionHead({
  no,
  title,
  lead,
}: {
  no: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-mono text-sm font-semibold text-brass">{no}</span>
        <span className="h-px w-10 bg-brass/50" aria-hidden="true" />
        <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {lead ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-loose text-ink-soft sm:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ——————————————————— الصفحة ——————————————————— */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      {/* الشريط العلوي */}
      <SiteHeader onHome />

      <main id="top" className="flex-1">
        {/* ——— الهيرو ——— */}
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1f2a240d_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
            <div className="min-w-0">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-pine/25 bg-gradient-to-l from-pine-soft to-brass-soft/60 px-4 py-1.5 text-xs font-bold leading-snug text-pine shadow-sm">
                دورة المهندس عبد الرشيد حفصي في البرمجة والتداول بالذكاء الاصطناعي
              </span>
              <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.3] sm:text-5xl sm:leading-[1.25]">
                من متداول يعتمد المؤشرات الجاهزة…
                <span className="block text-pine">
                  إلى صانع أدواته الخاصة.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-loose text-ink-soft sm:text-lg sm:leading-loose">
                مسار عملي واحد يجمع بين{" "}
                <strong className="font-bold text-ink">البرمجة</strong> و{" "}
                <strong className="font-bold text-ink">
                  الذكاء الاصطناعي
                </strong>{" "}
                و<strong className="font-bold text-ink">أسواق المال</strong>، من
                الصفر إلى الاحتراف: برمجة مؤشراتك، جلب بياناتك، واختبار أفكارك
                على البيانات التاريخية قبل المخاطرة بأي مبلغ حقيقي.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-pine px-7 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px sm:text-base"
                >
                  <IconTelegram className="h-5 w-5" />
                  سجّل الآن · 80$
                </a>
                <a
                  href="#learn"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink/20 bg-cream px-7 py-3.5 text-sm font-bold text-ink transition hover:border-pine hover:text-pine sm:text-base"
                >
                  استعرض محتوى الدورة
                  <IconArrowLeft className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "لا تحتاج خبرة برمجية سابقة",
                  "أكواد ومشاريع جاهزة",
                  "دعم ومتابعة أثناء الدورة",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-[13px] font-semibold text-ink-soft"
                  >
                    <IconCheck className="h-4 w-4 text-pine" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 pb-6 sm:pb-10">
              <CodeEditor />
              <CandleChart />
            </div>
          </div>
        </section>

        {/* ——— شريط المحاور المتحرك ——— */}
        <div
          dir="ltr"
          className="overflow-hidden border-b border-ink/10 bg-pine-deep py-3 text-cream/90"
        >
          <div className="ticker-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center"
              >
                {TICKER_ITEMS.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center whitespace-nowrap text-[13px] font-semibold"
                  >
                    <span className="px-6">{item}</span>
                    <span
                      className="inline-block h-1.5 w-1.5 rotate-45 bg-brass"
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ——— 01 ماذا ستتعلم ——— */}
        <section id="learn" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="01"
              title="ماذا ستتعلم في الدورة؟"
              lead="ثمانية محاور عملية تأخذك من كتابة أول سطر برمجي إلى بناء أدوات تحليل كاملة تعمل بالذكاء الاصطناعي."
            />
            <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {LEARN.map((item, i) => (
                <article key={item.title} className="border-t border-line pt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <item.Icon className="h-5 w-5 shrink-0 text-pine" />
                    <h3 className="text-[17px] font-bold">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 02 منهج الدورة ——— */}
        <section id="curriculum" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="02"
              title="منهج الدورة أسبوعاً بأسبوع"
              lead="ثلاثة أشهر مقسّمة إلى ثلاث مراحل واضحة: من أساسيات بايثون إلى أدوات تحليل حقيقية تختبرها على بيانات السوق."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {CURRICULUM.map((month, i) => (
                <article
                  key={month.month}
                  className="rounded-2xl border border-line bg-cream p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-pine-soft px-3 py-1 text-[12px] font-bold text-pine">
                      {month.month}
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold text-brass">
                      المرحلة {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[17px] font-bold">{month.phase}</h3>
                  <ul className="mt-5">
                    {month.weeks.map((week, j) => (
                      <li
                        key={week}
                        className="flex items-start gap-3 border-t border-line/70 pt-4 pb-4 last:pb-0 [&:first-child]:pt-0 [&:first-child]:border-t-0"
                      >
                        <span className="mt-0.5 shrink-0 whitespace-nowrap text-[11px] font-bold text-brass">
                          الأسبوع {String(i * 4 + j + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed">{week}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2 rounded-lg bg-brass-soft/80 px-4 py-3 text-[13px] leading-relaxed text-ink">
              <IconAlert className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>
                <strong className="font-bold">ملاحظة:</strong> قد يتكيّف ترتيب
                المحاور قليلاً حسب وتيرة المجموعة، مع ضمان تغطية كامل المحتوى
                خلال المدة الكاملة للدورة.
              </span>
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-cream">
              <div className="flex flex-col gap-4 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pine text-cream shadow-[0_2px_0_0_#073426]">
                    <IconYouTube className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold text-ink">
                      شاهد من قناة عبد الرشيد حفصي على يوتيوب
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">
                      جولة عملية وشرح مباشر لأسلوب العمل داخل الدورة.
                    </p>
                  </div>
                </div>
                <a
                  href={YOUTUBE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-line bg-paper px-3.5 py-2 text-[13px] font-bold text-pine transition hover:border-pine/40 hover:bg-pine-soft/60 sm:self-auto"
                >
                  مشاهدة على يوتيوب
                  <IconArrowLeft className="h-4 w-4" />
                </a>
              </div>
              <div className="relative aspect-video w-full bg-ink">
                <iframe
                  src={YOUTUBE_EMBED}
                  title="شاهد من قناة عبد الرشيد حفصي على يوتيوب"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ——— 03 لمن هذه الدورة ——— */}
        <section
          id="audience"
          className="scroll-mt-24 border-y border-line bg-paper-deep/45 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="03"
              title="لمن هذه الدورة؟"
              lead="صُمّمت الدورة لتناسب أكثر من موقف: سواء كنت في السوق منذ سنوات أو أمام شاشة لأول مرة."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCE.map((a) => (
                <article
                  key={a.title}
                  className="rounded-xl border border-line bg-cream p-6 transition hover:border-pine/40 hover:shadow-md hover:shadow-ink/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pine-soft text-pine">
                    <a.Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {a.desc}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex items-start gap-4 rounded-xl border border-brass/30 bg-brass-soft/70 p-6 sm:items-center sm:p-7">
              <IconSprout className="hidden h-7 w-7 shrink-0 text-brass sm:block" />
              <div>
                <p className="font-extrabold">
                  لا تحتاج إلى خبرة سابقة في البرمجة.
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                  سنبدأ معاً من الأساسيات، وبنهاية المسار ستكون قادراً على بناء
                  أدواتك الخاصة وتطويرها بنفسك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 04 ماذا ستحصل عليه ——— */}
        <section id="gain" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="04" title="ماذا ستحصل عليه؟" />
            <div className="grid gap-5 md:grid-cols-3">
              {GAIN.map((g) => (
                <article
                  key={g.title}
                  className="flex gap-4 rounded-xl border border-line bg-cream p-6 sm:p-7"
                >
                  <g.Icon className="mt-0.5 h-6 w-6 shrink-0 text-pine" />
                  <div>
                    <h3 className="text-[17px] font-bold">{g.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {g.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 05 المدرّب ——— */}
        <section
          id="instructor"
          className="scroll-mt-24 border-y border-line bg-paper-deep/45 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="05"
              title="من يقدّم الدورة؟"
              lead="دورة عملية يقدّمها من بنى أدواته بنفسه، لا مجرد شارح نظري للمفاهيم."
            />
            <div className="rounded-2xl border border-line bg-cream p-6 sm:p-9">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
                <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-pine-soft ring-1 ring-pine/15 sm:mx-0 sm:ms-0">
                  <img
                    src={INSTRUCTOR_PHOTO}
                    alt="صورة عبد الرشيد حفصي"
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-28 w-28 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-extrabold">عبد الرشيد حفصي</h3>
                    <span
                      dir="ltr"
                      className="rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-bold text-ink-soft"
                    >
                      ABDERRACHID HAFSI
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-pine">
                    مدرّب الدورة: برمجة × ذكاء اصطناعي × تداول
                  </p>
                  <p className="mt-4 text-[15px] leading-loose text-ink-soft">
                    مبرمج ومتداول بنى أدواته التحليلية بنفسه: من جلب البيانات
                    ومعالجتها، إلى مؤشرات مبرمجة يدوياً، إلى اختبار الأفكار على
                    البيانات التاريخية. في هذه الدورة يأخذك عبر نفس المسار
                    العملي: من أول سطر كود إلى أدوات تحليل تعمل فعلياً على
                    بيانات السوق.
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
                    href={TG_LINK}
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

        {/* ——— 06 تفاصيل الدورة ——— */}
        <section id="details" className="scroll-mt-24 bg-pine-deep text-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-sm font-semibold text-[#e9c98a]">
                06
              </span>
              <span className="h-px w-10 bg-[#e9c98a]/50" aria-hidden="true" />
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                تفاصيل الدورة
              </h2>
            </div>
            <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="border-s-2 border-cream/15 ps-5 sm:ps-6"
                >
                  <dt className="flex items-center gap-2 text-sm text-cream/60">
                    <d.Icon className="h-4 w-4" />
                    {d.label}
                  </dt>
                  <dd
                    className={`mt-2.5 text-2xl font-extrabold sm:text-3xl ${
                      d.highlight ? "text-[#e9c98a]" : ""
                    }`}
                  >
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ——— 07 الأسئلة الشائعة ——— */}
        <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="07"
              title="الأسئلة الشائعة"
              lead="أجوبة سريعة عن أكثر ما يسأل عنه المسجّلون قبل انطلاق الدورة."
            />
            <div className="rounded-2xl border border-line bg-cream px-6 sm:px-8">
              <Accordion type="single" collapsible>
                {FAQ.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`faq-${i}`}
                    className="border-line"
                  >
                    <AccordionTrigger className="py-5 text-[15px] font-bold text-ink hover:no-underline">
                      <span className="text-start">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] leading-loose text-ink-soft">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ——— 08 برنامج العمولة ——— */}
        <section
          id="affiliate"
          className="scroll-mt-24 border-y border-line bg-paper-deep/45 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="08"
              title="اربح 25% مع برنامج العمولة"
              lead="انصح بالدورة واحصل على عمولة عن كل شخص يسجّل من إحالتك. بسيط، بدون شروط معقّدة."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <ol className="grid gap-5 sm:grid-cols-2">
                {AFFILIATE_STEPS.map((step, i) => (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-line bg-cream p-6"
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

              <div className="flex flex-col rounded-2xl border border-brass/30 bg-brass-soft/60 p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brass/40 bg-paper px-3 py-1 text-[12px] font-bold text-brass">
                  <IconStar className="h-3.5 w-3.5" />
                  عمولة على كل إحالة
                </span>
                <p className="mt-5 font-mono text-5xl font-extrabold leading-none text-pine">
                  {AFFILIATE_RATE_LABEL}
                </p>
                <p className="mt-3 text-[15px] font-bold">
                  أي {AFFILIATE_COMMISSION} عن كل طالب يسجّل من إحالتك
                </p>
                <ul className="mt-6 grid gap-3">
                  {[
                    "بدون حد أقصى لعدد الإحالات",
                    "تُحتسب بعد تأكيد دفع الطالب",
                    "الدفع عبر CCP أو USDT",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm font-semibold"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-lg bg-pine px-6 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                >
                  <IconTelegram className="h-5 w-5" />
                  انضم إلى برنامج العمولة
                </a>
                <Link
                  href="/affiliate"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-paper px-6 py-3 text-sm font-bold text-ink transition hover:border-pine/40 hover:text-pine"
                >
                  التفاصيل الكاملة
                  <IconArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 09 الدفع والتسجيل ——— */}
        <section id="register" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="09"
              title="الدفع والتسجيل"
              lead="اختر وسيلة الدفع المناسبة لك، بالدينار عبر بريد الجزائر أو بالعملة الرقمية USDT، ثم راسلنا عبر تيليجرام لتأكيد مقعدك."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {/* بطاقة CCP */}
              <article className="min-w-0 overflow-hidden rounded-2xl border border-line bg-cream p-6 sm:p-8">
                <div className="-mx-6 -mt-6 mb-5 flex items-center justify-center gap-2 bg-pine px-4 py-2.5 text-[12px] font-bold text-cream sm:-mx-8 sm:-mt-8">
                  <IconStar className="h-4 w-4 shrink-0 text-brass" />
                  خاص بالمستخدمين في الجزائر
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pine-soft text-pine">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-bold text-ink-soft">
                    بالدينار الجزائري
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold sm:text-xl">
                  تحويل بريدي · بريد الجزائر (CCP)
                </h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="text-[13px] font-bold text-ink-soft">
                      رقم الحساب البريدي الجاري / المفتاح
                    </label>
                    <CopyField
                      value={CCP_NUMBER}
                      className="mt-2"
                      ariaLabel="رقم الحساب البريدي CCP"
                    />
                  </div>
                  <div>
                    <label className="text-[13px] font-bold text-ink-soft">
                      رقم الحساب البريدي الجاري (RIP)
                    </label>
                    <CopyField
                      value={RIP_NUMBER}
                      className="mt-2"
                      ariaLabel="رقم الحساب البريدي RIP"
                    />
                  </div>
                  <div>
                    <label className="text-[13px] font-bold text-ink-soft">
                      صاحب الحساب
                    </label>
                    <div
                      dir="ltr"
                      className="mt-2 rounded-lg border border-line bg-paper px-3 py-2.5 font-mono text-[13px] font-semibold tracking-wide text-ink sm:text-sm"
                    >
                      ABDERRACHID HAFSI
                    </div>
                  </div>
                </div>
                <p className="mt-6 flex items-start gap-2 rounded-lg bg-brass-soft/80 px-4 py-3 text-[13px] leading-relaxed text-ink">
                  <IconAlert className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  استخدم رقم الحساب البريدي الجاري (RIP) عند التحويل من أي حساب
                  بريد جاري آخر.
                </p>
              </article>

              {/* بطاقة USDT */}
              <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-cream p-6 sm:p-8">
                <div className="-mx-6 -mt-6 mb-5 flex items-center justify-center gap-2 bg-pine px-4 py-2.5 text-center text-[12px] font-bold text-cream sm:-mx-8 sm:-mt-8">
                  <IconGlobe className="h-4 w-4 shrink-0 text-brass" />
                  خاص بجميع الدول ما عدا الجزائر
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pine-soft text-pine">
                    <IconGlobe className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-bold text-ink-soft">
                    USDT · Tron (TRC20)
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold sm:text-xl">
                  الدفع بالعملة الرقمية USDT
                </h3>
                <div className="mt-6 flex-1">
                  <label className="text-[13px] font-bold text-ink-soft">
                    عنوان المحفظة · شبكة TRC20
                  </label>
                  <CopyField
                    value={USDT_ADDRESS}
                    className="mt-2"
                    ariaLabel="عنوان محفظة USDT"
                  />
                  <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-lg border border-line bg-paper px-3 py-3">
                      <p className="text-[11px] font-bold text-ink-soft">
                        الشبكة
                      </p>
                      <p
                        dir="ltr"
                        className="mt-1 font-mono text-sm font-extrabold text-pine"
                      >
                        TRC20
                      </p>
                    </div>
                    <div className="rounded-lg border border-line bg-paper px-3 py-3">
                      <p className="text-[11px] font-bold text-ink-soft">
                        العملة
                      </p>
                      <p
                        dir="ltr"
                        className="mt-1 font-mono text-sm font-extrabold text-pine"
                      >
                        USDT
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 flex items-start gap-2 rounded-lg bg-brass-soft/80 px-4 py-3 text-[13px] leading-relaxed text-ink">
                  <IconAlert className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  أرسل USDT عبر شبكة Tron (TRC20) فقط، وتأكد من اختيار الشبكة
                  الصحيحة قبل إتمام العملية.
                </p>
              </article>
            </div>

            {/* بانر التسجيل */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-pine/25 bg-pine-soft/70">
              <div className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    المقاعد محدودة، سجّل الآن وابدأ رحلتك نحو بناء أدواتك
                    بنفسك.
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    للتسجيل والاستفسار، راسلنا مباشرة عبر تيليجرام وسنجيبك على
                    كل تفاصيل الدورة.
                  </p>
                  <p
                    dir="ltr"
                    className="mt-3 font-mono text-base font-bold tracking-wide text-pine"
                  >
                    {TELEGRAM_HANDLE}
                  </p>
                </div>
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-pine px-8 py-4 text-base font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                >
                  <IconTelegram className="h-5 w-5" />
                  سجّل الآن عبر تيليجرام
                </a>
              </div>
            </div>

            {/* تنبيه */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-brass/25 border-e-4 border-e-brass bg-brass-soft/50 p-5">
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

      {/* ——— التذييل ——— */}
      <SiteFooter onHome />

      {/* ——— شريط التسجيل الثابت للهاتف ——— */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-pine-deep bg-pine text-cream md:hidden">
        <div
          className="flex items-center justify-between gap-3 px-4 py-3"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="text-[13px] font-bold leading-snug">
            دورة البرمجة والذكاء الاصطناعي
            <span className="block text-[12px] font-semibold text-cream/75">
              80$ · 3 أشهر · أونلاين
            </span>
          </div>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-cream px-5 py-2.5 text-sm font-bold text-pine shadow"
          >
            سجّل الآن
          </a>
        </div>
      </div>

      {/* ——— بيانات منظَّمة للدورة والأسئلة الشائعة ——— */}
      <JsonLd data={graph(courseSchema(), faqSchema(FAQ))} />
    </div>
  );
}
