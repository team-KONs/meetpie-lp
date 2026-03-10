"use client";

import { motion } from "framer-motion";
import { Beaker, Rocket, Star } from "lucide-react";

const phases = [
  {
    icon: Beaker,
    phase: "PoC",
    period: "2026年6月〜7月",
    title: "技術検証フェーズ",
    items: [
      "whisper.cppによるリアルタイム音声認識の検証",
      "LLMによる論点抽出のプロトタイプ",
      "基本UIの構築",
    ],
    status: "current",
  },
  {
    icon: Rocket,
    phase: "Phase 1",
    period: "2026年8月〜9月",
    title: "コア機能開発",
    items: [
      "マインドマップUIの実装",
      "リアルタイムパイプラインの安定化",
      "ユーザーテスト実施",
    ],
    status: "upcoming",
  },
  {
    icon: Star,
    phase: "Phase 2",
    period: "2026年10月〜11月",
    title: "拡張・公開",
    items: [
      "マルチプラットフォーム対応",
      "プラグイン機構の導入",
      "OSSコミュニティ公開",
    ],
    status: "upcoming",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">ロードマップ</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            開発計画
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-px" />

          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative pl-16 pb-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white md:left-1/2 md:-translate-x-1/2 z-10 ${
                  phase.status === "current"
                    ? "gradient-bg"
                    : "bg-gray-300"
                }`}
              />

              {/* Content */}
              <div
                className={`md:${
                  i % 2 === 0 ? "text-right pr-12" : "col-start-2 pl-12"
                }`}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <phase.icon
                      size={18}
                      className={
                        phase.status === "current"
                          ? "text-blue-500"
                          : "text-gray-400"
                      }
                    />
                    <span
                      className={`text-sm font-bold ${
                        phase.status === "current"
                          ? "gradient-text"
                          : "text-gray-400"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    {phase.status === "current" && (
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        現在
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6b7280] mb-2">{phase.period}</p>
                  <h3 className="font-bold mb-3">{phase.title}</h3>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[#6b7280] flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
