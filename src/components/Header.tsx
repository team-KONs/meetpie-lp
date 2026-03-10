"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "課題", href: "/#problem" },
  { label: "特徴", href: "/#features" },
  { label: "費用対効果", href: "/roi" },
  { label: "技術詳細", href: "/technology" },
  { label: "ロードマップ", href: "/technology#roadmap" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MF</span>
            </div>
            <span className="font-bold text-lg text-[#1a1a2e]">
              MeetingFlow
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#6b7280] hover:text-[#1a1a2e] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/team-KONs/meetingflow-lp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white gradient-bg px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#6b7280] hover:text-[#1a1a2e] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/team-KONs/meetingflow-lp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white gradient-bg px-4 py-2 rounded-full text-center hover:opacity-90 transition-opacity"
              >
                GitHub
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
