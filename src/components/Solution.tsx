"use client";

import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            MeetingFlowのポジション
          </h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            既存ツールが手薄な「会議中 × 構造化」領域を狙う
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <svg viewBox="0 0 500 400" className="w-full" role="img" aria-label="ポジショニングマップ">
            {/* Grid lines */}
            <line x1="250" y1="40" x2="250" y2="360" stroke="#e5e7eb" strokeWidth={1} />
            <line x1="60" y1="200" x2="440" y2="200" stroke="#e5e7eb" strokeWidth={1} />

            {/* Axis labels */}
            <text x="250" y="25" textAnchor="middle" fontSize={13} fontWeight={600} fill="#1a1a2e">構造化</text>
            <text x="250" y="385" textAnchor="middle" fontSize={13} fontWeight={600} fill="#1a1a2e">要約</text>
            <text x="45" y="205" textAnchor="middle" fontSize={13} fontWeight={600} fill="#1a1a2e">会議後</text>
            <text x="460" y="205" textAnchor="middle" fontSize={13} fontWeight={600} fill="#1a1a2e">会議中</text>

            {/* Quadrant backgrounds */}
            <rect x="255" y="45" width="180" height="150" rx={8} fill="#3b82f6" opacity={0.06} />

            {/* Competitors */}
            <circle cx={150} cy={290} r={30} fill="#9ca3af" opacity={0.15} />
            <text x={150} y={287} textAnchor="middle" fontSize={11} fill="#6b7280">Otter.ai</text>
            <text x={150} y={302} textAnchor="middle" fontSize={9} fill="#9ca3af">CLOVA Note</text>

            <circle cx={160} cy={130} r={25} fill="#9ca3af" opacity={0.15} />
            <text x={160} y={133} textAnchor="middle" fontSize={11} fill="#6b7280">Notion AI</text>

            <circle cx={340} cy={280} r={28} fill="#9ca3af" opacity={0.15} />
            <text x={340} y={277} textAnchor="middle" fontSize={11} fill="#6b7280">Google</text>
            <text x={340} y={292} textAnchor="middle" fontSize={9} fill="#9ca3af">Gemini in Meet</text>

            {/* MeetingFlow */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              style={{ originX: "370px", originY: "100px" }}
            >
              <circle cx={370} cy={100} r={38} fill="#3b82f6" opacity={0.15} />
              <circle cx={370} cy={100} r={30} fill="url(#gradient)" />
              <text x={370} y={97} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">Meeting</text>
              <text x={370} y={110} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">Flow</text>
            </motion.g>

            {/* Arrow pointing to MeetingFlow's quadrant */}
            <motion.text
              x={370}
              y={155}
              textAnchor="middle"
              fontSize={11}
              fontWeight={600}
              fill="#3b82f6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              ここが空白地帯
            </motion.text>

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
