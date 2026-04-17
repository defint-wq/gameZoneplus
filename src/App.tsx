import { useState } from "react";

export const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <p className="text-3xl text-red-500">{count}</p>
      <button className="rounded-lg" onClick={() => setcount(count + 1)}>Add</button>
    </div>
  );
};
