import type { ComponentType, SVGProps } from "react";
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
  IconUser,
  LogoMark,
} from "@/components/icons";
import { CopyField } from "@/components/copy-field";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/* ——————————————————— بيانات ثابتة ——————————————————— */

const PHONE_DISPLAY = "+213 795 975 712";
const WA_LINK = `https://wa.me/213795975712?text=${encodeURIComponent(
  "مرحباً، أريد التسجيل في دورة البرمجة والذكاء الاصطناعي في عالم التداول."
)}`;

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
  return (
    <div
      dir="ltr"
      className="overflow-hidden rounded-xl border border-ink/20 bg-editor shadow-xl shadow-ink/10"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ms-3 rounded-md bg-white/10 px-3 py-1 font-mono text-[11px] text-white/80">
          ema_signal.py
        </span>
        <span className="ms-auto hidden font-mono text-[10px] uppercase tracking-widest text-white/35 sm:block">
          Python · Pandas
        </span>
      </div>
      <div className="px-4 pb-14 pt-4 font-mono text-[12px] leading-6 sm:px-5 sm:text-[13px]">
        {CODE.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-7 shrink-0 select-none text-right text-white/20 sm:w-8">
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
        ))}
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
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 shrink-0 text-pine" />
            <span className="text-sm font-extrabold leading-tight sm:text-[15px]">
              برمجة <span className="text-brass">×</span> ذكاء اصطناعي{" "}
              <span className="text-brass">×</span> تداول
            </span>
          </a>
          <nav
            aria-label="روابط الصفحة"
            className="hidden items-center gap-7 text-sm font-semibold text-ink-soft md:flex"
          >
            <a href="#learn" className="transition hover:text-pine">
              المحتوى
            </a>
            <a href="#audience" className="transition hover:text-pine">
              لمن الدورة؟
            </a>
            <a href="#details" className="transition hover:text-pine">
              التفاصيل
            </a>
            <a href="#register" className="transition hover:text-pine">
              التسجيل والدفع
            </a>
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-pine px-4 py-2.5 text-sm font-bold text-cream transition hover:bg-pine-deep sm:inline-flex"
          >
            سجّل الآن
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ——— الهيرو ——— */}
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1f2a240d_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-pine/25 bg-pine-soft px-4 py-1.5 text-xs font-bold text-pine">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
                </span>
                دورة تعليمية جديدة — الانطلاق منتصف الشهر
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
                و<strong className="font-bold text-ink">أسواق المال</strong> — من
                الصفر إلى الاحتراف: برمجة مؤشراتك، جلب بياناتك، واختبار أفكارك
                على البيانات التاريخية قبل المخاطرة بأي مبلغ حقيقي.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-pine px-7 py-3.5 text-sm font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px sm:text-base"
                >
                  <IconChat className="h-5 w-5" />
                  سجّل الآن — 80$
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
            <div className="pb-6 sm:pb-10">
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

        {/* ——— 02 لمن هذه الدورة ——— */}
        <section
          id="audience"
          className="scroll-mt-24 border-y border-line bg-paper-deep/45 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="02"
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
              <IconSparkles className="hidden h-7 w-7 shrink-0 text-brass sm:block" />
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

        {/* ——— 03 ماذا ستحصل عليه ——— */}
        <section id="gain" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="03" title="ماذا ستحصل عليه؟" />
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

        {/* ——— 04 تفاصيل الدورة ——— */}
        <section id="details" className="scroll-mt-24 bg-pine-deep text-cream">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-sm font-semibold text-[#e9c98a]">
                04
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

        {/* ——— 05 الدفع والتسجيل ——— */}
        <section id="register" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead
              no="05"
              title="الدفع والتسجيل"
              lead="اختر وسيلة الدفع المناسبة لك — بالدينار عبر بريد الجزائر أو بالعملة الرقمية USDT — ثم راسلنا عبر واتساب لتأكيد مقعدك."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {/* بطاقة CCP */}
              <article className="rounded-2xl border border-line bg-cream p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pine-soft text-pine">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-bold text-ink-soft">
                    بالدينار الجزائري
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold sm:text-xl">
                  تحويل بريدي — بريد الجزائر (CCP)
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
              <article className="flex flex-col rounded-2xl border border-line bg-cream p-6 sm:p-8">
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
                <p className="mt-6 flex items-start gap-2 rounded-lg bg-clay/10 px-4 py-3 text-[13px] font-semibold leading-relaxed text-clay">
                  <IconAlert className="mt-0.5 h-4 w-4 shrink-0" />
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
                    المقاعد محدودة — سجّل الآن وابدأ رحلتك نحو بناء أدواتك
                    بنفسك.
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    للتسجيل والاستفسار، راسلنا مباشرة عبر واتساب وسنجيبك على كل
                    تفاصيل الدورة.
                  </p>
                  <p
                    dir="ltr"
                    className="mt-3 font-mono text-base font-bold tracking-wide text-pine"
                  >
                    {PHONE_DISPLAY}
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-pine px-8 py-4 text-base font-bold text-cream shadow-[0_2px_0_0_#073426] transition hover:bg-pine-deep active:translate-y-px"
                >
                  <IconChat className="h-5 w-5" />
                  سجّل الآن عبر واتساب
                </a>
              </div>
            </div>

            {/* تنبيه */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-clay/25 border-e-4 border-e-clay bg-clay/5 p-5">
              <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
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
      <footer className="mt-auto border-t border-ink/10 bg-ink text-cream/75">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 md:pb-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5 text-cream">
              <LogoMark className="h-7 w-7 shrink-0 text-cream" />
              <span className="text-sm font-extrabold">
                برمجة <span className="text-brass">×</span> ذكاء اصطناعي{" "}
                <span className="text-brass">×</span> تداول
              </span>
            </div>
            <nav
              aria-label="روابط التذييل"
              className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold"
            >
              <a href="#learn" className="transition hover:text-cream">
                المحتوى
              </a>
              <a href="#audience" className="transition hover:text-cream">
                لمن الدورة؟
              </a>
              <a href="#details" className="transition hover:text-cream">
                التفاصيل
              </a>
              <a href="#register" className="transition hover:text-cream">
                التسجيل والدفع
              </a>
            </nav>
          </div>
          <p className="mt-7 text-xs leading-relaxed text-cream/45">
            #البرمجة #الذكاء_الاصطناعي #التداول #المؤشرات_الفنية
            #تحليل_البيانات #بايثون #دورة_تعليمية
          </p>
          <p className="mt-3 text-xs text-cream/45">
            © 2026 دورة البرمجة والذكاء الاصطناعي في عالم التداول — جميع الحقوق
            محفوظة.
          </p>
        </div>
      </footer>

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
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-cream px-5 py-2.5 text-sm font-bold text-pine shadow"
          >
            سجّل الآن
          </a>
        </div>
      </div>
    </div>
  );
}
