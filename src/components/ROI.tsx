"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  Users,
  Clock,
  Calculator,
  Building2,
  ExternalLink,
} from "lucide-react";

const overviewCards = [
  {
    icon: Clock,
    value: "週6時間/人",
    sub: "年間288時間/人",
    label: "会議に費やす時間",
  },
  {
    icon: Users,
    value: "1,500万人",
    sub: "ホワイトカラー対象",
    label: "日本の対象人口",
  },
  {
    icon: Calculator,
    value: "43.2億時間",
    sub: "年間の会議総時間",
    label: "日本全体の会議時間",
  },
];

const inefficiencies = [
  {
    label: "不要な会議",
    rate: 23,
    source: "パーソル総研 (2018)",
    sourceUrl:
      "https://rc.persol-group.co.jp/thinktank/column/201812130003.html",
    detail: "メンバー層の23.3%が会議を「ムダ」と回答",
    canImprove: false,
  },
  {
    label: "参加不要な人の拘束",
    rate: 20,
    source: "Doodle (2019)",
    sourceUrl:
      "https://doodle.com/en/resources/research-and-reports-/the-state-of-meetings-2019/",
    detail: "出席者の33%が「貢献できていない」と回答",
    canImprove: false,
  },
  {
    label: "アジェンダ不明確による空転",
    rate: 16,
    source: "Flowtrace (2024)",
    sourceUrl:
      "https://www.flowtrace.co/collaboration-blog/meeting-agenda-effectiveness-why-validation-matters",
    detail: "定例会議の64%がアジェンダ欄に記載なし",
    canImprove: true,
  },
  {
    label: "議事録不備による手戻り",
    rate: 11,
    source: "Fellow.app (2023)",
    sourceUrl:
      "https://fellow.app/blog/management/how-to-track-action-items-steps-to-ensure-follow-through/",
    detail: "アクションアイテムの44%が未完了",
    canImprove: true,
  },
];

const impactNumbers = [
  { label: "直接損失（人件費）", value: "5.0", unit: "兆円/年" },
  { label: "間接損失（機会損失）", value: "2.2", unit: "兆円/年" },
];

const references = [
  {
    label: "Doodle \"State of Meetings 2019\"",
    desc: "31カ国19,000人調査。不要会議コスト全世界$541B",
    url: "https://doodle.com/en/resources/research-and-reports-/the-state-of-meetings-2019/",
  },
  {
    label: "パーソル総合研究所 (2018)",
    desc: "日本企業の会議実態調査。1万人企業で年間約15億円の損失",
    url: "https://rc.persol-group.co.jp/thinktank/column/201812130003.html",
  },
  {
    label: "Flowtrace (2024)",
    desc: "Microsoft 365データ分析。定例会議の64%がアジェンダ欄に記載なし",
    url: "https://www.flowtrace.co/collaboration-blog/meeting-agenda-effectiveness-why-validation-matters",
  },
  {
    label: "Rogelberg \"The Surprising Science of Meetings\" (2019)",
    desc: "会議科学の体系的研究。会議時間の50%しか集中していない",
    url: undefined,
  },
  {
    label: "HBR Perlow et al. \"Stop the Meeting Madness\" (2017)",
    desc: "71%のリーダーが会議は非生産的と回答",
    url: "https://hbr.org/2017/07/stop-the-meeting-madness",
  },
  {
    label: "Bain & Company (2014)",
    desc: "組織の時間配分に関する大規模分析",
    url: "https://www.bain.com/insights/time-is-your-scarcest-resource-stop-squandering-it-linkedin/",
  },
  {
    label: "Fellow.app (2023)",
    desc: "アクションアイテムの44%が未完了",
    url: "https://fellow.app/blog/management/how-to-track-action-items-steps-to-ensure-follow-through/",
  },
  {
    label: "Atlassian \"Workplace Woes: Meetings\" (2019)",
    desc: "62%がゴール未記載の会議に出席",
    url: "https://www.atlassian.com/blog/workplace-woes-meetings",
  },
];

const maxRate = 23;

export default function ROI() {
  return (
    <>
      {/* Section A: 見出し + リード文 */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <TrendingDown size={16} />
              経済損失レポート
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              会議の非効率がもたらす
              <br />
              <span className="gradient-text">経済損失</span>
            </h1>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              日本全体で年間約
              <span className="font-bold text-[#1a1a2e]">7.2兆円</span>
              （GDP比1.3%）の損失が、
              アジェンダ不明確・議事録不備といった「改善可能な非効率」から生じています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section B: 会議時間の全体像 */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
          >
            会議時間の全体像
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {overviewCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="text-blue-500" size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {card.value}
                </div>
                <div className="text-sm text-[#6b7280] mb-2">{card.sub}</div>
                <div className="text-sm font-medium text-[#1a1a2e]">
                  {card.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: 非効率の内訳 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              非効率の内訳
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              会議時間全体のうち各問題で失われる割合。
              <span className="font-medium text-blue-600">
                青色の項目がMeetingFlowで改善可能
              </span>
              な領域です。
            </p>
          </motion.div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {inefficiencies.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-6 border shadow-sm ${
                  item.canImprove
                    ? "bg-blue-50/50 border-blue-200"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-[#1a1a2e]">{item.label}</h3>
                    {item.canImprove && (
                      <span className="text-xs font-medium text-white gradient-bg px-2 py-0.5 rounded-full">
                        MeetingFlowで改善可能
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-2xl font-bold ${
                      item.canImprove ? "gradient-text" : "text-gray-400"
                    }`}
                  >
                    {item.rate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(item.rate / maxRate) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                    className={`h-3 rounded-full ${
                      item.canImprove
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                        : "bg-gray-400"
                    }`}
                    style={
                      item.canImprove
                        ? {
                            background:
                              "linear-gradient(to right, #3b82f6, #6366f1)",
                          }
                        : undefined
                    }
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-[#6b7280]">
                  <span>{item.detail}</span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-700 shrink-0 ml-4"
                  >
                    {item.source}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-5 py-3 rounded-full">
              MeetingFlowでアプローチ可能な非効率 ={" "}
              <span className="font-bold text-lg">27%</span>
              （アジェンダ空転16% + 議事録不備11%）
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section D: 金額インパクト */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
          >
            金額インパクト
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {impactNumbers.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-sm text-[#6b7280] mb-2">{item.label}</div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text">
                  {item.value}
                </div>
                <div className="text-sm text-[#6b7280] mt-1">{item.unit}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto bg-[#1a1a2e] rounded-2xl p-8 text-center text-white"
          >
            <div className="text-sm text-gray-400 mb-2">
              合計経済損失（MeetingFlowがアプローチ可能な範囲）
            </div>
            <div className="text-5xl sm:text-6xl font-bold mb-2">
              約7.2
              <span className="text-3xl sm:text-4xl">兆円/年</span>
            </div>
            <div className="text-gray-400">GDP比 約1.3%</div>
          </motion.div>
        </div>
      </section>

      {/* Section E: 1企業あたりの損失 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Building2 size={16} />
              従業員500名規模の企業の場合
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              1企業あたりの損失
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
            >
              <div className="text-sm text-[#6b7280] mb-2">
                年間損失額（会議の非効率起因）
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-1">
                約1.4億円
              </div>
              <div className="text-sm text-[#6b7280]">
                ホワイトカラー300名 x 78時間 x 4,300円 + 間接損失
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-blue-50/50 rounded-2xl p-8 border border-blue-200 shadow-sm text-center"
            >
              <div className="text-sm text-[#6b7280] mb-2">
                MeetingFlow導入による改善ポテンシャル
              </div>
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1">
                約0.9億円
              </div>
              <div className="text-sm text-[#6b7280]">
                年間9,000万円のコスト削減効果
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-sm text-[#6b7280] mt-6 max-w-2xl mx-auto"
          >
            ※ アプローチ可能な非効率（27%）の60%を改善できた場合の試算。
            人件費単価は年収550万円・人件費倍率1.5倍（約4,300円/時）で算出。
          </motion.p>
        </div>
      </section>

      {/* Section F: 参考文献 */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-8"
          >
            参考文献・データソース
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100"
          >
            {references.map((ref) => (
              <div
                key={ref.label}
                className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
              >
                <div className="font-medium text-[#1a1a2e] text-sm shrink-0">
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      {ref.label}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    ref.label
                  )}
                </div>
                <div className="text-sm text-[#6b7280]">{ref.desc}</div>
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-xs text-[#6b7280] mt-4"
          >
            前提条件: 総務省「経済センサス」、国税庁「民間給与実態統計調査」をベースに算出
          </motion.p>
        </div>
      </section>
    </>
  );
}
