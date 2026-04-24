import { Search, SlidersHorizontal } from "lucide-react";

export const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Аккаунт хайх"
        />
      </div>

      {/* Filter & Sort Buttons */}
      <div className="flex gap-2">
        <select className="bg-slate-800/50 border border-slate-700 text-slate-200 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option>Sort by Date</option>
          <option>Үнэ: Хямдаас үнэтэй</option>
          <option>Үнэ: Үнэтэйгээс хямд</option>
        </select>

        <button className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700 text-slate-200 rounded-2xl hover:bg-slate-700 transition-colors">
          <SlidersHorizontal className="h-5 w-5" />
          <span>Шүүлтүүр</span>
        </button>
      </div>
    </div>
  );
};
