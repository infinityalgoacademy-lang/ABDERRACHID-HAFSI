"use client";

import { useRef, useState } from "react";
import { IconCheck, IconCopy } from "@/components/icons";

type CopyFieldProps = {
  /** القيمة التي ستُنسخ */
  value: string;
  /** اتجاه عرض القيمة */
  dir?: "ltr" | "rtl";
  className?: string;
  ariaLabel?: string;
};

export function CopyField({
  value,
  dir = "ltr",
  className = "",
  ariaLabel,
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // خطة بديلة للمتصفحات القديمة أو السياقات غير الآمنة
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        ta.remove();
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    }
  }

  return (
    <div
      className={`flex items-stretch overflow-hidden rounded-lg border border-line bg-cream ${className}`}
    >
      <code
        dir={dir}
        aria-label={ariaLabel}
        className="min-w-0 flex-1 break-all px-3 py-2.5 font-mono text-[13px] leading-relaxed text-ink sm:text-sm"
        title={value}
      >
        {value}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className={`flex w-24 shrink-0 items-center justify-center gap-1.5 border-r border-line text-xs font-bold transition-colors sm:w-28 ${
          copied
            ? "bg-pine-soft text-pine"
            : "bg-paper hover:bg-pine hover:text-cream"
        }`}
      >
        {copied ? (
          <>
            <IconCheck className="h-3.5 w-3.5" />
            تم النسخ
          </>
        ) : (
          <>
            <IconCopy className="h-3.5 w-3.5" />
            نسخ
          </>
        )}
      </button>
    </div>
  );
}
