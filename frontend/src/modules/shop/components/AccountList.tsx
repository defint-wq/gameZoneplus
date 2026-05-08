import { useEffect, useState } from "react";
import { getAccounts } from "../../../../../backend/services/accountService";
import { CommentBox } from "./Comment";

export const AccountList = ({
  searchQuery,
  minPrice,
  maxPrice,
}: {
  searchQuery: string;
  minPrice?: string;
  maxPrice?: string;
}) => {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Failed to fetch accounts:", error);
      }
    };
    fetchAccounts();
  }, []);

  const filtered = accounts.filter((acc) => {
    const matchesName = acc.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    const matchesPrice = acc.price >= min && acc.price <= max;

    return matchesName && matchesPrice;
  });

  return (
    <div className="grid gap-4 p-4">
      {filtered.length === 0 ? (
        <div className="text-center p-8 text-gray-500">
          Олдсон мэдээлэл алга байна.
        </div>
      ) : (
        filtered.map((acc) => (
          <div
            key={acc.id}
            className="border border-white/10 rounded-xl p-4 bg-[#0d1220]"
          >
            <h3 className="text-lg font-bold text-white">{acc.title}</h3>
            <p className="text-sm text-gray-400">{acc.description}</p>
            <div className="mt-2 flex gap-4 text-sm text-slate-300">
              <span>💎 Skins: {acc.skins}</span>
              <span>🔥 WinRate: {acc.winRate}%</span>
              <span>🧑 Heroes: {acc.heroCount}</span>
            </div>
            <div className="mt-2 flex justify-between items-center text-sm font-semibold">
              <span className="text-emerald-400">
                💰 {acc.price.toLocaleString()}₮
              </span>
              <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs border border-indigo-500/20">
                {acc.badge}
              </span>
            </div>
            <CommentBox account={acc} />
          </div>
        ))
      )}
    </div>
  );
};
