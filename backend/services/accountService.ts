const API_URL = "http://localhost:5000/api/accounts";

// GET all
export const getAccounts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// POST (create)
export const createAccount = async (data: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

// DELETE
export const deleteAccount = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return res.json();
};