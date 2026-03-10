"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, Brain, Monitor, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Mic,
    label: "音声入力",
    tech: "WebAudio API",
    color: "#3b82f6",
  },
  {
    icon: Cpu,
    label: "文字起こし",
    tech: "whisper.cpp",
    color: "#6366f1",
  },
  {
    icon: Brain,
    label: "論点構造化",
    tech: "LLM",
    color: "#8b5cf6",
  },
  {
    icon: Monitor,
    label: "可視化",
    tech: "React Flow",
    color: "#10b981",
  },
];

const screenshots = [
  {
    src: "/images/02_agenda.png",
    alt: "アジェンダ設定と会議開始",
    title: "1. アジェンダを設定して会議開始",
    description:
      "会議の議題を事前に設定。参加者と論点を明確にした状態で議論をスタート。",
  },
  {
    src: "/images/03_structure_map_init.png",
    alt: "リアルタイムで論点を構造化",
    title: "2. リアルタイムで論点を構造化",
    description:
      "発言をリアルタイムに文字起こしし、AIが論点・課題・提案を自動分類してマインドマップに展開。",
  },
  {
    src: "/images/15_completed.png",
    alt: "会議完了と議事録生成",
    title: "3. 議事録と次のアクションを自動生成",
    description:
      "会議終了時に決定事項・アクションアイテム・未解決論点を自動で整理。",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">仕組み</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            音声からマインドマップまで、シームレスなパイプライン
          </p>
        </motion.div>

        {/* Desktop flow */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon size={32} style={{ color: step.color }} />
                </div>
                <span className="font-bold text-sm">{step.label}</span>
                <span className="text-xs text-[#6b7280] mt-1">
                  {step.tech}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="text-gray-300 flex-shrink-0" size={24} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 w-full max-w-xs"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon size={24} style={{ color: step.color }} />
              </div>
              <div>
                <span className="font-bold text-sm">{step.label}</span>
                <span className="text-xs text-[#6b7280] block">
                  {step.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mt-20 space-y-16">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div className="md:w-3/5">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/5">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {shot.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">
                  {shot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center"
        >
          <p className="text-sm text-[#6b7280]">
            <span className="font-semibold text-[#1a1a2e]">
              プライバシーファースト:
            </span>{" "}
            音声認識はwhisper.cppでローカル実行。音声データが外部サーバーに送信されることはありません。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
