export const ShopHeader = () => (
  <header className="border-b border-[rgba(91,104,245,0.15)] bg-[#0d1220]/70 backdrop-blur-md sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-black text-white">
        MLBB<span className="text-[#5b68f5]">MARKET</span>
      </h1>

      <nav className="hidden md:flex gap-6 text-sm text-[#8b95b8]">
        <a className="hover:text-[#5b68f5]">Нүүр</a>
        <a className="text-[#5b68f5] font-semibold">Дэлгүүр</a>
        <a className="hover:text-[#06b6d4]">Заавар</a>
      </nav>

      <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#5b68f5] to-[#9333ea] text-white font-bold">
        Нэвтрэх
      </button>

    </div>
  </header>
)