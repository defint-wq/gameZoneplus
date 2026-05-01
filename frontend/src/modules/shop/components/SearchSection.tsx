import { Search, SlidersHorizontal } from "lucide-react";

type SearchSectionProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;

  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
};

export const SearchSection = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
}: SearchSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      {/* SEARCH */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b95b8]" />

        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search accounts..."
          className="w-full pl-10 pr-4 py-3 bg-[#0d1220] border border-[rgba(91,104,245,0.15)] rounded-xl focus:ring-2 focus:ring-[#5b68f5]"
        />
      </div>

      {/* FILTER BUTTON */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="px-5 py-3 rounded-xl bg-[#0d1220] border border-[rgba(91,104,245,0.15)] flex items-center gap-2"
      >
        <SlidersHorizontal className="w-5 h-5 text-[#5b68f5]" />
        Filters
      </button>

    </div>
  );
};