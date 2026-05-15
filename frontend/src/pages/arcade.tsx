import React, { useState, useEffect } from "react";
import {
  Trophy,
  Clock,
  Plus,
  Wallet,
  Coins,
  TrendingUp,
  DollarSign,
  CreditCard,
  History,
} from "lucide-react";
import { motion } from "framer-motion";

// 1. Төрөл болон Интерфэйсүүд
type TabType = "betting" | "wallet";

interface Match {
  id: string;
  teamName: string;
  matchType: string;
  userId: string;
  username: string;
  status: string;
  createdAt: string;
}

interface Transaction {
  id: string;
  type: "recharge" | "bet" | "win" | "refund";
  amount: number;
  usdAmount?: number;
  description: string;
  timestamp: string;
}

// 2. Өргөтгөсөн Mock Өгөгдөл
const MOCK_MATCHES: Match[] = [
  {
    id: "1",
    teamName: "Dragon Warriors",
    matchType: "Ranked 5v5",
    userId: "user1",
    username: "ProGamer123",
    status: "open",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    teamName: "Phoenix Rising",
    matchType: "Classic 5v5",
    userId: "user2",
    username: "MLBBMaster",
    status: "open",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "3",
    teamName: "Shadow Legends",
    matchType: "Brawl",
    userId: "user3",
    username: "NightHunter",
    status: "closed",
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: "4",
    teamName: "Cyber Phantoms",
    matchType: "Ranked 1v1",
    userId: "user4",
    username: "SoloKing_99",
    status: "open",
    createdAt: new Date(Date.now() - 10800000).toISOString(),
  },
  {
    id: "5",
    teamName: "Mystic Guardians",
    matchType: "Ranked 5v5",
    userId: "user5",
    username: "SupportLife",
    status: "open",
    createdAt: new Date(Date.now() - 14400000).toISOString(),
  },
  {
    id: "6",
    teamName: "Thunder Squad",
    matchType: "Classic 5v5",
    userId: "user6",
    username: "TankMain",
    status: "open",
    createdAt: new Date(Date.now() - 18000000).toISOString(),
  },
  {
    id: "7",
    teamName: "Winter Wolves",
    matchType: "Brawl",
    userId: "user7",
    username: "WolfPack_CEO",
    status: "closed",
    createdAt: new Date(Date.now() - 21600000).toISOString(),
  },
  {
    id: "8",
    teamName: "Zenith Esports",
    matchType: "Ranked 5v5",
    userId: "user8",
    username: "Coach_Z",
    status: "open",
    createdAt: new Date(Date.now() - 25200000).toISOString(),
  },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "recharge",
    amount: 1000,
    usdAmount: 10,
    description: "Wallet Recharge",
    timestamp: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "2",
    type: "bet",
    amount: 500,
    description: "Bet on Dragon Warriors",
    timestamp: new Date(Date.now() - 43200000).toISOString(),
  },
  {
    id: "3",
    type: "win",
    amount: 750,
    description: "Won bet on Phoenix Rising",
    timestamp: new Date(Date.now() - 21600000).toISOString(),
  },
];

export function ArcadePage() {
  const [activeTab, setActiveTab] = useState<TabType>("betting");
  const [loading, setLoading] = useState(true);
  const [coins] = useState(2500);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20 px-4 md:px-0">
      {/* Header */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Game Arcade
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Manage your assets, track bets, and join live matches.
        </p>
      </div>

      {/* Action Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 bg-[#111627] border border-slate-800 p-6 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/10 transition-all pointer-events-none" />
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">
                Total Balance
              </p>
              <h2 className="text-4xl font-black text-white leading-none">
                {coins.toLocaleString()}{" "}
                <span className="text-indigo-400 text-xl font-bold">Coins</span>
              </h2>
            </div>
          </div>
          <button
            onClick={() => setActiveTab("wallet")}
            className="mt-4 sm:mt-0 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm transition-all flex items-center gap-2 relative z-10 active:scale-95 shadow-xl shadow-indigo-500/20"
          >
            <Plus className="w-5 h-5" /> RECHARGE
          </button>
        </div>

        <div className="bg-[#111627] border border-slate-800 p-2 rounded-[1.5rem] flex gap-1">
          {[
            { id: "betting", icon: Trophy, label: "Betting" },
            { id: "wallet", icon: Wallet, label: "Wallet" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Betting Content */}
      {activeTab === "betting" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-3 italic">
              Available Matches
            </h2>
            <button className="text-indigo-400 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-indigo-300 transition-colors">
              <Plus className="w-4 h-4" /> Register Match
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_MATCHES.map((match) => (
              <motion.div
                key={match.id}
                whileHover={{ y: -5 }}
                className="bg-[#111627] border border-slate-800 rounded-[2.5rem] p-7 group hover:border-indigo-500/40 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {match.teamName}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold mt-1">
                      by @{match.username}
                    </p>
                  </div>
                  <div
                    className={`text-[10px] font-black uppercase flex items-center gap-1.5 ${match.status === "open" ? "text-emerald-500" : "text-slate-600"}`}
                  >
                    <Clock className="w-3.5 h-3.5" />{" "}
                    {match.status === "open" ? "Live" : "Ended"}
                  </div>
                </div>

                <div className="bg-[#0d111f] rounded-2xl p-5 mb-6 border border-slate-800/50">
                  <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-2">
                    Match Type
                  </p>
                  <p className="text-sm font-bold text-slate-200">
                    {match.matchType}
                  </p>
                </div>

                <button
                  disabled={match.status === "closed"}
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    match.status === "open"
                      ? "bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-600/20 active:scale-95"
                      : "bg-slate-800/50 text-slate-600 cursor-not-allowed border border-transparent"
                  }`}
                >
                  {match.status === "open" ? "Place Bet" : "Closed"}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Wallet Content */}
      {activeTab === "wallet" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { coins: 100, usd: 1 },
              { coins: 500, usd: 5 },
              { coins: 1000, usd: 10 },
            ].map((pkg) => (
              <button
                key={pkg.coins}
                className="p-6 bg-[#111627] border border-slate-800 rounded-[2rem] hover:border-indigo-500/50 transition-all text-left group"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                    ${pkg.usd} USD
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  {pkg.coins.toLocaleString()}
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  MLBB Coins
                </p>
              </button>
            ))}
          </div>

          <div className="bg-[#111627] border border-slate-800 rounded-[2.5rem] overflow-hidden">
            <div className="p-8 border-b border-slate-800/50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <History className="w-5 h-5 text-indigo-500" /> Transaction
                History
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {MOCK_TRANSACTIONS.map((tx) => (
                <div
                  key={tx.id}
                  className="bg-[#0d111f] hover:bg-[#161b2c] border border-slate-800/50 rounded-2xl p-5 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        tx.type === "recharge"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : tx.type === "win"
                            ? "bg-indigo-500/10 text-indigo-500"
                            : tx.type === "bet"
                              ? "bg-orange-500/10 text-orange-500"
                              : "bg-slate-500/10 text-slate-500"
                      }`}
                    >
                      {tx.type === "recharge" && (
                        <TrendingUp className="w-5 h-5" />
                      )}
                      {tx.type === "win" && <Trophy className="w-5 h-5" />}
                      {tx.type === "bet" && <DollarSign className="w-5 h-5" />}
                      {tx.type === "refund" && (
                        <CreditCard className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm group-hover:text-indigo-400 transition-colors">
                        {tx.description}
                      </p>
                      <p className="text-[10px] text-slate-600 font-black uppercase mt-1">
                        {new Date(tx.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-lg font-black ${tx.type === "recharge" || tx.type === "win" ? "text-emerald-500" : "text-rose-500"}`}
                    >
                      {tx.type === "recharge" || tx.type === "win" ? "+" : "-"}
                      {tx.amount.toLocaleString()}
                    </p>
                    {tx.usdAmount && (
                      <p className="text-[10px] text-slate-500 font-bold uppercase">
                        ${tx.usdAmount} USD
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
