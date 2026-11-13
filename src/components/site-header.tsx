import Link from "next/link";
import { LogoMark } from "@/components/icons";
import { NAV_LINKS, TELEGRAM_LINK } from "@/lib/site";

function Brand() {
  return (
    <>
      <LogoMark className="h-8 w-8 shrink-0 text-pine" />
      <span className="text-sm font-extrabold leading-tight sm:text-[15px]">
        برمجة <span className="text-brass">×</span> ذكاء اصطناعي{" "}
        <span className="text-brass">×</span> تداول
      </span>
    </>
  );
}

function NavItem({
  href,
  label,
  onHome,
  current,
}: {
  href: string;
  label: string;
  onHome: boolean;
  current?: string;
}) {
  const active = current === href;
  const className = `whitespace-nowrap transition hover:text-pine ${
    active ? "text-pine" : ""
  }`;

  // داخل الصفحة الرئيسية: استخدم مرساة عادية حتى يعمل التمرير الفوري
  if (onHome && href.startsWith("/#")) {
    return (
      <a href={href.slice(1)} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({
  onHome = false,
  current,
  ctaAlways = false,
}: {
  onHome?: boolean;
  current?: string;
  /** إظهار زر التسجيل على شاشات الهاتف أيضاً (للصفحات الفرعية) */
  ctaAlways?: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {onHome ? (
          <a href="#top" className="flex items-center gap-2.5">
            <Brand />
          </a>
        ) : (
          <Link href="/" className="flex items-center gap-2.5">
            <Brand />
          </Link>
        )}
        <nav
          aria-label="روابط الموقع"
          className="hidden items-center gap-6 text-[13px] font-semibold text-ink-soft md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              onHome={onHome}
              current={current}
            />
          ))}
        </nav>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-lg bg-pine px-4 py-2.5 text-sm font-bold text-cream transition hover:bg-pine-deep ${
            ctaAlways ? "inline-flex" : "hidden sm:inline-flex"
          }`}
        >
          سجّل الآن
        </a>
      </div>
    </header>
  );
}
