import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#111127] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xs">MF</span>
            </div>
            <span className="font-semibold text-white">MeetingFlow</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/team-KONs/meetingflow-lp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <span>MIT License</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          2026 MeetingFlow — 未踏IT人材発掘・育成事業
        </div>
      </div>
    </footer>
  );
}
