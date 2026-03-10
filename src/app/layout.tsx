import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MeetingFlow - 会議中に、会議の質を上げる。",
  description:
    "リアルタイム音声認識と論点構造化で、会議をその場で可視化するOSSツール。whisper.cppによる完全ローカル処理で安全・高速。",
  openGraph: {
    title: "MeetingFlow - 会議中に、会議の質を上げる。",
    description:
      "リアルタイム音声認識と論点構造化で、会議をその場で可視化するOSSツール。",
    type: "website",
    locale: "ja_JP",
    siteName: "MeetingFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetingFlow - 会議中に、会議の質を上げる。",
    description:
      "リアルタイム音声認識と論点構造化で、会議をその場で可視化するOSSツール。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
