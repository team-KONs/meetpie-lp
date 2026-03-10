"use client";

import { motion } from "framer-motion";
import { RotateCcw, UserX, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: RotateCcw,
    title: "議論の空転",
    stat: "37%",
    statLabel: "の会議時間が非生産的",
    description:
      "論点が可視化されないまま議論が進み、同じ話が繰り返される。結論が出ないまま次の会議へ。",
  },
  {
    icon: UserX,
    title: "ファシリテーションの属人化",
    stat: "72%",
    statLabel: "が進行役不在で困った経験あり",
    description:
      "会議の質が特定のファシリテーターに依存。スキルの標準化・共有が難しい。",
  },
  {
    icon: AlertTriangle,
    title: "既存ツールの限界",
    stat: "会議後",
    statLabel: "の要約では手遅れ",
    description:
      "議事録AIは会議後の要約が中心。会議中のリアルタイムな議論支援には対応できていない。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            なぜ、会議は変わらないのか
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            日本の会議文化が抱える3つの構造的課題
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <problem.icon className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold gradient-text">
                  {problem.stat}
                </span>
                <span className="text-sm text-[#6b7280] ml-1">
                  {problem.statLabel}
                </span>
              </div>
              <p className="text-[#6b7280] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
