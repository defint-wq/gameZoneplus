import { useState } from "react";
import { Plus, Trash2, CheckCircle, Globe, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccounts } from "../modules/shop/hooks/useAccounts";
import { ACCOUNTS } from "../modules/shop/graphql/queries/accounts";
import { ACCOUNT_ADD } from "../modules/shop/graphql/mutations/accountAdd";
import { useMutation } from "@apollo/client";
import { useAccountRemove } from "../modules/shop/hooks/useAccountRemove";

export const AdminPage = () => {
  const { accounts, loading } = useAccounts();
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("");
  const [skins, setSkins] = useState("");
  const [winRate, setWinRate] = useState("");
  const [badge, setBadge] = useState("");
  const [description, setDescription] = useState("");
  const [isVerified, setIsVerified] = useState(true);

  const [accountAdd] = useMutation(ACCOUNT_ADD, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const handleCreate = async () => {
    if (!title.trim() || !price.trim()) return;
    try {
      await accountAdd({
        variables: {
          title,
          price: Number(price),
          region,
          skins: Number(skins),
          winRate: Number(winRate),
          badge,
          description,
          isVerified,
          likes: [],
        },
      });
      resetForm();
      setOpen(false);
    } catch (err) {
      console.error("Create error:", err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setRegion("");
    setSkins("");
    setWinRate("");
    setBadge("");
    setDescription("");
    setIsVerified(true);
  };

  const { handleDelete } = useAccountRemove();

  return (
    <div className="min-h-screen ml-16 md:ml-32 text-white p-6 md:p-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
            <ShieldCheck className="text-indigo-500 w-8 h-8" />
            Admin <span className="text-indigo-500">Panel</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Manage all game accounts and listings
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          List New Account
        </button>
      </div>

      {/* Main Content Table */}
      <div className="bg-[#111627] border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/50 bg-slate-900/30">
                <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Account Info
                </th>
                <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Stats
                </th>
                <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Price
                </th>
                <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/30">
              {accounts.map((acc) => (
                <tr
                  key={acc._id}
                  className="hover:bg-slate-800/20 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20">
                        {acc.title[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-200 group-hover:text-white transition-colors">
                            {acc.title}
                          </span>
                          {acc.isVerified && (
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-wider">
                          <Globe className="w-3 h-3" /> {acc.region}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col">
                        <span className="text-indigo-400 font-black text-sm">
                          {acc.skins}
                        </span>
                        <span className="text-[9px] text-slate-600 font-bold uppercase">
                          Skins
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-slate-800 pl-4">
                        <span className="text-emerald-500 font-black text-sm">
                          {acc.winRate}%
                        </span>
                        <span className="text-[9px] text-slate-600 font-bold uppercase">
                          WinRate
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-slate-800 pl-4">
                        <span className="text-slate-300 font-black text-sm">
                          {acc.heroCount}
                        </span>
                        <span className="text-[9px] text-slate-600 font-bold uppercase">
                          Heroes
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-lg font-black text-white">
                      ₮{acc.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button
                      onClick={() => handleDelete(acc._id)}
                      className="p-3 bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white rounded-xl transition-all active:scale-90"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {accounts.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan={4}
                    className="p-20 text-center text-slate-600 font-bold italic uppercase tracking-widest"
                  >
                    No accounts listed in the database
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#111627] border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -mr-10 -mt-10" />

              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <Plus className="text-indigo-500" /> List Account
              </h2>

              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-[#0d111f] border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="e.g. Mythic Glory - All Skins"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                      Price (₮)
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full bg-[#0d111f] border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                      Region
                    </label>
                    <input
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full bg-[#0d111f] border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="Asia/Global"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                      Skins
                    </label>
                    <input
                      type="number"
                      value={skins}
                      onChange={(e) => setSkins(e.target.value)}
                      className="w-full bg-[#0d111f] border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                      Win %
                    </label>
                    <input
                      type="number"
                      value={winRate}
                      onChange={(e) => setWinRate(e.target.value)}
                      className="w-full bg-[#0d111f] border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                      Heroes
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex-1 py-4 text-slate-500 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreate}
                    className="flex-[2] bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20"
                  >
                    Create Listing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
