"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "whisper.cpp", category: "Speech-to-Text" },
  { name: "Ollama", category: "LLM Runtime" },
  { name: "React Flow", category: "Visualization" },
  { name: "WebSocket", category: "Communication" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Rust", category: "Backend" },
];

export default function TechStack() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">技術スタック</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            モダンな技術で構築されたオープンソースプロジェクト
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-[#1a1a2e]">
                {tech.name}
              </span>
              <span className="text-xs text-[#6b7280] bg-gray-100 px-2 py-0.5 rounded-full">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
