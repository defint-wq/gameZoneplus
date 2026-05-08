export const ShopHeader = () => {
  return (
    <div className="flex flex-col items-start gap-2 mb-10">
      {/* Гарчиг болон Badge */}
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold text-white tracking-tight">Shop</h1>
        <span className="px-2 py-0.5 rounded bg-indigo-600/20 border border-indigo-500/30 text-[10px] font-black uppercase tracking-widest text-indigo-400">
          Market
        </span>
      </div>
      
      {/* Танилцуулга текст */}
      <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
        Browse and buy premium MLBB accounts, rare skins, and exclusive in-game items 
        from our trusted community.
      </p>
    </div>
  );
};