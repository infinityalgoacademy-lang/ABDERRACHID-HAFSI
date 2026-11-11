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

export const metadata: Metadata = {
  title: "دورة البرمجة والذكاء الاصطناعي في عالم التداول | من الصفر إلى الاحتراف",
  description:
    "دورة تعليمية عملية أونلاين تجمع البرمجة والذكاء الاصطناعي وأسواق المال: أساسيات بايثون، برمجة المؤشرات الفنية، جلب البيانات ومعالجتها، Backtesting، وبناء أدوات تحليل خاصة بك. المدة 3 أشهر، السعر 80$.",
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
