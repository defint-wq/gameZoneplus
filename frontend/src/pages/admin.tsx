import { useEffect, useState } from "react";

type Account = {
  id: number;
  title: string;
  price: number;
  region: string;
  skins: number;
  winRate: number;
  heroCount: number;
  badge: string;
  isVerified: boolean;
};

export const AdminPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [open, setOpen] = useState(false);

  // form state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("");
  const [skins, setSkins] = useState("");
  const [winRate, setWinRate] = useState("");
  const [heroCount, setHeroCount] = useState("");

  // 📥 fetch accounts
  useEffect(() => {
    fetch("http://localhost:5000/api/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data))
      .catch((err) => console.error(err));
  }, []);

  // ➕ CREATE
  const handleCreate = async () => {
    if (!title.trim() || !price.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          region,
          skins: Number(skins),
          winRate: Number(winRate),
          heroCount: Number(heroCount),
        }),
      });

      const newAcc = await res.json();

      setAccounts((prev) => [...prev, newAcc]);

      // reset form
      setTitle("");
      setPrice("");
      setRegion("");
      setSkins("");
      setWinRate("");
      setHeroCount("");
      setOpen(false);
    } catch (err) {
      console.error("Create error:", err);
    }
  };

  // 🗑 DELETE
  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5000/api/accounts/${id}`, {
      method: "DELETE",
    });

    setAccounts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-6">

      {/* header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          + Create
        </button>
      </div>

      {/* table */}
      <table className="w-full text-sm border border-white/10">
        <thead className="bg-[#111a2e]">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Region</th>
            <th className="p-3">Price</th>
            <th className="p-3">Skins</th>
            <th className="p-3">WinRate</th>
            <th className="p-3">Heroes</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id} className="border-t border-white/10">
              <td className="p-3">
                {acc.title}
                {acc.isVerified && (
                  <span className="ml-2 text-xs bg-blue-600 px-2 py-0.5 rounded">
                    verified
                  </span>
                )}
              </td>

              <td className="p-3">{acc.region}</td>

              <td className="p-3 text-yellow-400">
                ₮{acc.price.toLocaleString()}
              </td>

              <td className="p-3">{acc.skins}</td>

              <td className="p-3 text-green-400">
                {acc.winRate}%
              </td>

              <td className="p-3">{acc.heroCount}</td>

              <td className="p-3">
                <button
                  onClick={() => handleDelete(acc.id)}
                  className="bg-red-600 px-2 py-1 rounded text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#111a2e] p-5 rounded w-80">

            <h2 className="mb-3">Create Account</h2>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-2 p-2 bg-[#0b1220]"
            />

            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mb-2 p-2 bg-[#0b1220]"
            />

            <input
              placeholder="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full mb-2 p-2 bg-[#0b1220]"
            />

            <input
              placeholder="Skins"
              value={skins}
              onChange={(e) => setSkins(e.target.value)}
              className="w-full mb-2 p-2 bg-[#0b1220]"
            />

            <input
              placeholder="Win Rate (%)"
              value={winRate}
              onChange={(e) => setWinRate(e.target.value)}
              className="w-full mb-2 p-2 bg-[#0b1220]"
            />

            <input
              placeholder="Hero Count"
              value={heroCount}
              onChange={(e) => setHeroCount(e.target.value)}
              className="w-full mb-4 p-2 bg-[#0b1220]"
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)}>Cancel</button>

              <button
                onClick={handleCreate}
                className="bg-green-600 px-3 py-1 rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};