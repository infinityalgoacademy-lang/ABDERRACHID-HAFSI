import Link from "next/link";
import { LogoMark } from "@/components/icons";
import {
  FOOTER_LINKS,
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
  YOUTUBE_LINK,
} from "@/lib/site";

export function SiteFooter({ onHome = false }: { onHome?: boolean }) {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-cream/75">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 md:pb-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {onHome ? (
            <a href="#top" className="flex items-center gap-2.5 text-cream">
              <LogoMark className="h-7 w-7 shrink-0 text-pine" />
              <span className="text-sm font-extrabold">
                برمجة <span className="text-brass">×</span> ذكاء اصطناعي{" "}
                <span className="text-brass">×</span> تداول
              </span>
            </a>
          ) : (
            <Link href="/" className="flex items-center gap-2.5 text-cream">
              <LogoMark className="h-7 w-7 shrink-0 text-pine" />
              <span className="text-sm font-extrabold">
                برمجة <span className="text-brass">×</span> ذكاء اصطناعي{" "}
                <span className="text-brass">×</span> تداول
              </span>
            </Link>
          )}
          <nav
            aria-label="روابط التذييل"
            className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold"
          >
            {FOOTER_LINKS.map((link) =>
              onHome && link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href.slice(1)}
                  className="transition hover:text-cream"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-cream"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-cream/45">
            #البرمجة #الذكاء_الاصطناعي #التداول #المؤشرات_الفنية
            #تحليل_البيانات #بايثون #دورة_تعليمية
          </p>
          <div className="flex items-center gap-4 text-[13px] font-semibold">
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cream"
            >
              يوتيوب
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="font-mono transition hover:text-cream"
            >
              {TELEGRAM_HANDLE}
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-cream/45">
          © 2026 دورة البرمجة والذكاء الاصطناعي في عالم التداول. جميع الحقوق
          محفوظة.
        </p>
      </div>
    </footer>
  );
}
