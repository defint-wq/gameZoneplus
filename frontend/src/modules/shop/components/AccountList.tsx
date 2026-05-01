import { useEffect, useState } from "react";
import { getAccounts } from "../../../../../backend/services/accountService";

type AccountListProps = {
  searchQuery: string;
};

export const AccountList = ({ searchQuery }: AccountListProps) => {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    getAccounts().then(setAccounts);
  }, []);

  const filtered = accounts.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid gap-4 p-4">
      {filtered.map((acc) => (
        <div key={acc.id} className="border p-4 rounded">
          <h3>{acc.title}</h3>
          <p>${acc.price}</p>
        </div>
      ))}
    </div>
  );
};