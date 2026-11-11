import type { Metadata, Viewport } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// عنوان الموقع المطلق — يُضبط عبر متغير البيئة عند النشر
// (على Vercel يُكتشف تلقائياً، ويمكن تجاوزه بـ NEXT_PUBLIC_SITE_URL)
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const siteTitle =
  "دورة البرمجة والذكاء الاصطناعي في عالم التداول | من الصفر إلى الاحتراف";

const siteDescription =
  "دورة تعليمية عملية أونلاين تجمع البرمجة والذكاء الاصطناعي وأسواق المال: أساسيات بايثون، برمجة المؤشرات الفنية، جلب البيانات ومعالجتها، Backtesting، وبناء أدوات تحليل خاصة بك. المدة 3 أشهر، السعر 80$.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "دورة تعليمية",
    "البرمجة",
    "الذكاء الاصطناعي",
    "التداول",
    "المؤشرات الفنية",
    "تحليل البيانات",
    "بايثون",
    "Backtesting",
  ],
  authors: [{ name: "ABDERRACHID HAFSI" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    url: "/",
    siteName: "دورة البرمجة والذكاء الاصطناعي في عالم التداول",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "دورة البرمجة والذكاء الاصطناعي في عالم التداول — عبد الرشيد حفسي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${geistMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
