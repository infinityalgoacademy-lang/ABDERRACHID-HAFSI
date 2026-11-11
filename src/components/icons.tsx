import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ——— شعار: شموع يابانية داخل مربع ——— */
export function LogoMark(props: IconProps) {
  return (
    <Base strokeWidth={0} {...props}>
      <rect width="24" height="24" rx="6" fill="currentColor" stroke="none" />
      <line x1="8" y1="6" x2="8" y2="18" stroke="#fffdf8" strokeWidth="1.4" />
      <rect
        x="6.2"
        y="9"
        width="3.6"
        height="6"
        rx="0.8"
        fill="#fffdf8"
        stroke="none"
      />
      <line
        x1="15.5"
        y1="8"
        x2="15.5"
        y2="20"
        stroke="#e9c98a"
        strokeWidth="1.4"
      />
      <rect
        x="13.7"
        y="11"
        width="3.6"
        height="5.4"
        rx="0.8"
        fill="#e9c98a"
        stroke="none"
      />
    </Base>
  );
}

export function IconCode(props: IconProps) {
  return (
    <Base {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </Base>
  );
}

export function IconCandles(props: IconProps) {
  return (
    <Base {...props}>
      <line x1="6" y1="4" x2="6" y2="20" />
      <rect x="4" y="9" width="4" height="6" rx="0.5" />
      <line x1="13" y1="2" x2="13" y2="18" />
      <rect x="11" y="6" width="4" height="6" rx="0.5" />
      <line x1="20" y1="6" x2="20" y2="22" />
      <rect x="18" y="12" width="4" height="5" rx="0.5" />
    </Base>
  );
}

export function IconDashboard(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </Base>
  );
}

export function IconDatabase(props: IconProps) {
  return (
    <Base {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </Base>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9.9 3.6c.2-.6 1-.6 1.2 0l1 2.7a2 2 0 0 0 1.2 1.2l2.7 1c.6.2.6 1 0 1.2l-2.7 1a2 2 0 0 0-1.2 1.2l-1 2.7c-.2.6-1 .6-1.2 0l-1-2.7a2 2 0 0 0-1.2-1.2l-2.7-1c-.6-.2-.6-1 0-1.2l2.7-1A2 2 0 0 0 8.9 6.3l1-2.7Z" />
      <path d="M18 14.5c.1-.4.6-.4.8 0l.5 1.3c.1.3.3.5.6.6l1.3.5c.4.1.4.7 0 .8l-1.3.5a1 1 0 0 0-.6.6l-.5 1.3c-.1.4-.7.4-.8 0l-.5-1.3a1 1 0 0 0-.6-.6l-1.3-.5c-.4-.1-.4-.7 0-.8l1.3-.5c.3-.1.5-.3.6-.6l.5-1.3Z" />
    </Base>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M13 2 4.1 12.6a.5.5 0 0 0 .4.9H10l-1 8.5 8.9-10.6a.5.5 0 0 0-.4-.9H12l1-8.5Z" />
    </Base>
  );
}

export function IconHistory(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l3.5 2" />
    </Base>
  );
}

export function IconFolder(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9L9.6 3.9A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M10 13.5 8 15l2 1.5" />
      <path d="M14 13.5 16 15l-2 1.5" />
    </Base>
  );
}

export function IconUser(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </Base>
  );
}

export function IconSprout(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 20h10" />
      <path d="M12 20c0-4-1-6-3-8" />
      <path d="M9 9.5C10.5 10.6 11.4 12 12 14c-2.3.5-4 .4-5.5-.5C5 12.6 4.2 11 3.5 8.5c3-.6 4.4 0 5.5 1Z" />
      <path d="M13.8 5.5c-.9 1.2-1.3 2.6-1.3 4.3 2-.1 3.5-.6 4.6-1.5 1-1 1.6-2.3 1.8-4.6-2.8.1-4.1.8-5.1 1.8Z" />
    </Base>
  );
}

export function IconBot(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="8" width="16" height="12" rx="2.5" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="M9 13.5v1.5" />
      <path d="M15 13.5v1.5" />
      <path d="M9.5 17.5c.7.5 1.6.5 2.5.5s1.8 0 2.5-.5" />
    </Base>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  );
}

export function IconStar(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2-5.6-3-5.6 3 1.2-6.2L3 9.5l6.3-.8L12 3Z" />
    </Base>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </Base>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Base>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </Base>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </Base>
  );
}

export function IconMonitor(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </Base>
  );
}

export function IconTag(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12.6 2.6a2 2 0 0 0-1.4-.6H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.2 8.2a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8l-8.2-8.2Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </Base>
  );
}

export function IconChat(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8.5 12h.01" />
      <path d="M12 12h.01" />
      <path d="M15.5 12h.01" />
    </Base>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Base>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14.4 14.4 0 0 1 0 18 14.4 14.4 0 0 1 0-18Z" />
    </Base>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 8.6 6a2.5 2.5 0 0 0 2.8 0L22 7" />
    </Base>
  );
}

export function IconWallet(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </Base>
  );
}
