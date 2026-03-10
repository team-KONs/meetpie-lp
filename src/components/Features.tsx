"use client";

import { motion } from "framer-motion";
import { Mic, GitBranch, Share2, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "リアルタイム文字起こし",
    description:
      "whisper.cppを活用した高精度な音声認識。会議中の発言をリアルタイムでテキスト化。",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: GitBranch,
    title: "論点の自動構造化",
    description:
      "LLMが発言をリアルタイムに分析し、論点・合意事項・TODOを自動で分類・構造化。",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Share2,
    title: "マインドマップ可視化",
    description:
      "構造化された論点をマインドマップとしてリアルタイム表示。議論の全体像を一目で把握。",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Shield,
    title: "完全ローカル処理",
    description:
      "whisper.cppによるオンデバイス音声認識。機密性の高い会議でも安心して利用可能。",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">主な機能</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            会議中のリアルタイム支援に特化した4つのコア機能
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}
              >
                <feature.icon className={feature.iconColor} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[#6b7280] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
