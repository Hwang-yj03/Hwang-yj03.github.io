import type { Metadata } from "next";
import { JetBrains_Mono, Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const nanumCoding = Nanum_Gothic_Coding({
  variable: "--font-nanum-coding",
  weight: ["400", '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yeonju@dev - 확연주",
  description: "바닥부터 설계하고, 끝까지 만듭니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${jetbrains.variable} ${nanumCoding.variable}`}>
      <body>{children}</body>
    </html>
  );
}
