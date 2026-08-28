import type { Metadata } from "next";
import { Lato, Noto_Sans_KR } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — 백엔드 개발자 포트폴리오`,
  description: profile.greeting,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${lato.variable} ${notoSansKr.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
