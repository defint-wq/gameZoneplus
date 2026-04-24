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
      ];

      setAccounts(rawData.map((item) => new Account(item)));
      setLoading(false);
    };

    fetchData();
  }, []);

  return { accounts, loading };
};
