import { useEffect, useState } from "react";
import { getAccounts } from "../../../../../backend/services/accountService";
import { LikeButton } from "./Like";
import { CommentBox } from "./Comment";

export const AccountList = ({ searchQuery }: any) => {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    getAccounts().then(setAccounts);
  }, []);

  const filtered = accounts.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid gap-4 p-4 ">
      {filtered.map((acc) => (
        <div
          key={acc.id}
          className=" border border-white/10 rounded-xl p-4 bg-[#0d1220]"
        >
          <h3 className="text-lg font-bold">{acc.title}</h3>
          <p className="text-sm text-gray-400">{acc.description}</p>
          <div className="mt-2 flex gap-4 text-sm ">
            <span>💎 Skins: {acc.skins}</span>
            <span>🔥 WinRate: {acc.winRate}%</span>
            <span>🧑 Heroes: {acc.heroCount}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span>💰 {acc.price.toLocaleString()}₮</span>
            <span>{acc.badge}</span>
          </div>
          <CommentBox account={acc} />
        </div>
      ))}
    </div>
  );
};
