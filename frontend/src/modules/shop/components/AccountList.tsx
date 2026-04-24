import type { Account } from "../../types/accounts";
import { useAccounts } from "../hooks/useAccounts";
import { Card, CardContent, CardTitle } from "../../../../ui/components/card";

export const AccountList = () => {
  const { accounts, loading } = useAccounts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 bg-slate-800/50 animate-pulse rounded-xl border border-slate-700"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((acc: Account) => (
        <Card
          key={acc.id}
          className="group hover:border-blue-500/50 transition-all duration-300 shadow-lg"
        >
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold bg-slate-700 text-blue-400 px-2 py-1 rounded">
                {acc.region}
              </span>
              <span className="text-xs font-bold text-yellow-500">
                {acc.badge}
              </span>
            </div>

            <CardTitle className="text-lg mb-4 group-hover:text-blue-400 transition-colors">
              {acc.title}
            </CardTitle>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-slate-900/50 p-2 rounded border border-slate-800">
                <p className="text-[10px] text-slate-500 uppercase">Skins</p>
                <p className="font-bold text-white">{acc.skins}</p>
              </div>
              <div className="bg-slate-900/50 p-2 rounded border border-slate-800">
                <p className="text-[10px] text-slate-500 uppercase">Win Rate</p>
                <p className="font-bold text-green-400">{acc.winRate}%</p>
              </div>
            </div>

            <CardContent className="p-0 pt-4 border-t border-slate-800 flex justify-between items-center">
              <p className="text-xl font-black text-white">
                {acc.formattedPrice}
              </p>
              <button className="bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                Үзэх
              </button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};
