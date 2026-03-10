import type { Metadata } from "next";
import ROI from "@/components/ROI";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "費用対効果 - MeetingFlow",
  description:
    "会議の非効率がもたらす経済損失をフェルミ推定で分析。日本全体で年間約7.2兆円、1企業あたり年間約1.4億円の損失と、MeetingFlow導入による改善ポテンシャルを解説。",
};

export default function ROIPage() {
  return (
    <main>
      <ROI />
      <CTA />
    </main>
  );
}
