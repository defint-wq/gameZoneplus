export const HomePage = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-16 border border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px]" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">
            Mobile Legends: Bang Bang
          </h1>
          <p className="text-slate-400 text-lg mb-8">
            Join millions of players in the ultimate 5v5 MOBA experience.
            Battle, strategize, and dominate the arena!
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all">
              🎮 Enter Arcade
            </button>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700">
              Browse Shop
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          Latest News & Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News кардуудыг энд map хийж харуулж болно */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 transition-colors cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center text-4xl">
              🏆
            </div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Tournament
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
              Grand Championship Announced
            </h3>
            <p className="text-slate-400 text-sm mt-2 line-clamp-3">
              The official MLBB Grand Championship will begin next month...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
