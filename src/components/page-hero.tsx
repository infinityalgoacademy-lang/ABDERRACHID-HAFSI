import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph } from "@/lib/schema";

export function PageHero({
  eyebrow,
  title,
  lead,
  path,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  path: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-deep/45">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1f2a240d_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav
          aria-label="مسار التنقل"
          className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-ink-soft"
        >
          <Link href="/" className="transition hover:text-pine">
            الرئيسية
          </Link>
          <span className="text-ink-soft/40" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{eyebrow}</span>
        </nav>
        <h1 className="mt-5 text-[1.9rem] font-extrabold leading-[1.3] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-loose text-ink-soft sm:text-base">
          {lead}
        </p>
      </div>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "الرئيسية", path: "/" },
            { name: eyebrow, path },
          ]),
        )}
      />
    </section>
  );
}
