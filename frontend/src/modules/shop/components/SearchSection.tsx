import { Search, SlidersHorizontal, X } from "lucide-react";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  minPrice: string; // Шинээр нэмэгдсэн: Бага үнэ
  setMinPrice: (val: string) => void;
  maxPrice: string; // Шинээр нэмэгдсэн: Их үнэ
  setMaxPrice: (val: string) => void;
}

export const SearchSection = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: SearchSectionProps) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Дээд эгнээ: Хайлт болон Filter товч */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* SEARCH */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b95b8]" />

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search accounts by name..."
            className="w-full pl-10 pr-4 py-3 bg-[#0d1220] border border-[rgba(91,104,245,0.15)] rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5b68f5] focus:border-transparent transition-all placeholder:text-[#566085]"
          />
        </div>

        {/* FILTER BUTTON */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-5 py-3 rounded-xl bg-[#0d1220] border flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
            showFilters
              ? "border-[#5b68f5] text-[#5b68f5]"
              : "border-[rgba(91,104,245,0.15)] text-slate-300 hover:border-zinc-700"
          }`}
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Шүүлтүүрийн хэсэг (showFilters-ийг асаахад харагдах Input-ууд) */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-3 p-4 bg-[#0d1220]/50 border border-[rgba(91,104,245,0.1)] rounded-xl items-center justify-between">
          <span className="text-sm text-[#8b95b8]">Filter by Price Range:</span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex items-center w-full sm:w-48">
              <span className="absolute left-3 text-[#566085] text-xs">
                Min:
              </span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
                className="w-full pl-12 pr-4 py-2 bg-[#0d1220] border border-[rgba(91,104,245,0.15)] rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5b68f5] placeholder:text-[#566085]"
              />
            </div>

            <span className="text-zinc-600">-</span>

            <div className="relative flex items-center w-full sm:w-48">
              <span className="absolute left-3 text-[#566085] text-xs">
                Max:
              </span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="1000000"
                className="w-full pl-12 pr-4 py-2 bg-[#0d1220] border border-[rgba(91,104,245,0.15)] rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5b68f5] placeholder:text-[#566085]"
              />
            </div>

            {(minPrice !== "" || maxPrice !== "") && (
              <button
                onClick={() => {
                  setMinPrice("");
                  setMaxPrice("");
                }}
                className="p-2 text-zinc-500 hover:text-red-400 rounded-lg transition-colors"
                title="Шүүлтүүр цэвэрлэх"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
