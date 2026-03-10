import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Comparison from "@/components/Comparison";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "技術詳細 - MeetingFlow",
  description:
    "MeetingFlowの技術アーキテクチャ、処理フロー、技術スタック、既存ツールとの比較、開発ロードマップを解説。whisper.cppによる完全ローカル処理で安全・高速。",
};

export default function TechnologyPage() {
  return (
    <main>
      <div className="pt-16" />
      <HowItWorks />
      <TechStack />
      <Comparison />
      <Roadmap />
      <CTA />
    </main>
  );
}
