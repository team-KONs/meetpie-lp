"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            会議の未来を、一緒につくろう。
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            MeetPie.AIはオープンソースプロジェクトです。
            コントリビューション、フィードバック、スターをお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/team-KONs/meetingflow-lp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a2e] font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
              GitHubで見る
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
