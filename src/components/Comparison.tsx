"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

const features = [
  { label: "リアルタイム文字起こし", otter: "yes", bigtech: "yes", mf: "yes" },
  { label: "会議中の論点構造化", otter: "no", bigtech: "no", mf: "yes" },
  { label: "マインドマップ可視化", otter: "no", bigtech: "no", mf: "yes" },
  { label: "ローカル音声処理", otter: "no", bigtech: "no", mf: "yes" },
  { label: "オープンソース", otter: "no", bigtech: "no", mf: "yes" },
  { label: "日本語対応", otter: "partial", bigtech: "yes", mf: "yes" },
  { label: "料金", otter: "有料", bigtech: "エコシステム内", mf: "無料" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") return <Check size={18} className="text-green-500" />;
  if (value === "no") return <X size={18} className="text-red-400" />;
  if (value === "partial") return <Minus size={18} className="text-yellow-500" />;
  return <span className="text-sm text-[#6b7280]">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">競合比較</h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            既存ツールとの機能比較
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-4 text-sm font-semibold text-[#1a1a2e]">
                  機能
                </th>
                <th className="text-center p-4 text-sm font-semibold text-[#6b7280]">
                  Otter.ai等
                </th>
                <th className="text-center p-4 text-sm font-semibold text-[#6b7280]">
                  BigTech
                </th>
                <th className="text-center p-4 text-sm font-semibold">
                  <span className="gradient-text font-bold">MeetPie.AI</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.label}
                  className={i < features.length - 1 ? "border-b border-gray-50" : ""}
                >
                  <td className="p-4 text-sm text-[#1a1a2e]">
                    {feature.label}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <CellIcon value={feature.otter} />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <CellIcon value={feature.bigtech} />
                    </div>
                  </td>
                  <td className="p-4 text-center bg-blue-50/30">
                    <div className="flex justify-center">
                      <CellIcon value={feature.mf} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
