export default function Footer() {
  return (
    <footer className="py-12 bg-[#111127] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xs">MP</span>
            </div>
            <span className="font-semibold text-white">MeetPie.AI</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          2026 MeetPie.AI
        </div>
      </div>
    </footer>
  );
}
