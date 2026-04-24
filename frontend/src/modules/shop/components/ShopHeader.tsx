// components/ShopHeader.tsx

export const ShopHeader = () => (
  <header className="border-b border-slate-800 bg-[#1e293b]/50 backdrop-blur-md sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-black tracking-tighter text-white">
        MLBB<span className="text-blue-500">MARKET</span>
      </h1>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-blue-400 transition-colors">
          Нүүр
        </a>
        <a href="#" className="text-blue-400">
          Дэлгүүр
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          Заавар
        </a>
      </nav>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all active:scale-95">
        Нэвтрэх
      </button>
    </div>
  </header>
);
