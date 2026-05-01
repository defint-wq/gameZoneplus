import { useState, useEffect } from "react";
import { type IAccount, Account } from "../../types/accounts";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const rawData: IAccount[] = [
        {
          id: 1,
          title: "Full Skin Collector Account",
          skins: 420,
          winRate: 62.4,
          price: 1200000,
          badge: "Mythical Glory",
          region: "Mongolia",
        },
        {
          id: 2,
          title: "Smurf Account / High Winrate",
          skins: 45,
          winRate: 89.2,
          price: 150000,
          badge: "Legend",
          region: "SEA",
        },
        {
          id: 3,
          title: "Mythic Ranked Carry Account",
          skins: 210,
          winRate: 71.8,
          price: 780000,
          badge: "Mythic",
          region: "SEA",
        },
        {
          id: 4,
          title: "Epic Budget Starter Account",
          skins: 28,
          winRate: 58.1,
          price: 90000,
          badge: "Epic",
          region: "Mongolia",
        },
        {
          id: 5,
          title: "Mythical Immortal Whale Account",
          skins: 560,
          winRate: 76.9,
          price: 2500000,
          badge: "Mythical Immortal",
          region: "Global",
        },
      ];

      setAccounts(rawData.map((item) => new Account(item)));
      setLoading(false);
    };

    fetchData();
  }, []);

  return { accounts, loading };
};
