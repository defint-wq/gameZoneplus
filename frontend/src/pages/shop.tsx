import { useState, useEffect } from "react";

// Төрөл тодорхойлох (ICoreModule-тай адил төвшний дата модель)
// interface AccountItem {
//   id: number;
//   title: string;
//   rank: string;
//   price: number;
//   image?: string;
// }

export const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [loading, setLoading] = useState(true);

  // Жишээ дата (Дараа нь API-аас авна)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Account Marketplace
        </h1>
      </header>

      {/* Search & Filter Section */}
      <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px] space-y-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by rank, title or price..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
              Min Price
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-24 bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white outline-none focus:border-indigo-500"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">
              Max Price
            </label>
            <input
              type="number"
              placeholder="1000"
              className="w-24 bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white outline-none focus:border-indigo-500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
          Search
        </button>
      </section>

      {/* Shop Grid */}
      <section className="min-h-[400px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4 text-slate-500">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            <p className="animate-pulse">Loading market data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Ирээдүйд AccountItem-үүдийг энд map хийж харуулна */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 group hover:border-indigo-500/50 transition-all cursor-pointer">
              <div className="aspect-video bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <span className="absolute bottom-2 left-2 bg-indigo-600 text-[10px] font-bold px-2 py-1 rounded-md text-white uppercase">
                  Mythical Glory
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">
                Account #7482
              </h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  $250
                </span>
                <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
