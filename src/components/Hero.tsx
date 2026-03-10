"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Open Source Project
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              会議中に、
              <br />
              <span className="gradient-text">会議の質を上げる。</span>
            </h1>
            <p className="text-lg text-[#6b7280] mb-8 max-w-lg">
              リアルタイム音声認識と論点構造化で、会議をその場で可視化。
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
            className="relative"
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
              <Image
                src="/images/03_structure_map_init.png"
                alt="MeetingFlow デモ画面 — リアルタイム文字起こしと論点構造マップ"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
