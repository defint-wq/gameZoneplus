import { useState } from "react";

export const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <p className="text-3xl text-red-500">{count}</p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => setcount(count + 1)}
      >
        Add
      </button>
    </div>
  );
};
