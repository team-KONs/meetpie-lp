"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AIが会議を最適化する。
              <br />
              <span className="gradient-text">リアルタイムで</span>
              <span className="inline-flex">
                {[0, 1, 2].map((j) => (
                  <motion.span
                    key={j}
                    className="gradient-text"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: j * 0.3,
                    }}
                  >
                    .
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg text-[#6b7280] mb-8 max-w-lg">
              リアルタイム音声認識と論点構造化で、会議をその場で可視化。
              <br />
              whisper.cppによる完全ローカル処理で、安全かつ高速に。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/team-KONs/meetingflow-lp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                GitHubで見る
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-[#1a1a2e] font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                機能を見る
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">
                  MeetingFlow — リアルタイム構造化
                </span>
              </div>
              <video
                src="/videos/demo_3x.mp4"
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
