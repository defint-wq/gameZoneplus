const API_URL = "http://localhost:5000/api/accounts";

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API request failed");
  }
  return res.json();
};

// GET all
export const getAccounts = async () => {
  const res = await fetch(API_URL);
  return handleResponse(res);
};

// POST
export const createAccount = async (data: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};

// DELETE
export const deleteAccount = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return handleResponse(res);
};

// ❤️ LIKE
export const toggleLike = async (id: number, userId: string) => {
  const res = await fetch(`${API_URL}/${id}/like`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  return handleResponse(res);
};

// 💬 COMMENT
export const addComment = async (id: number, userId: string, text: string) => {
  const res = await fetch(`${API_URL}/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, text }),
  });

  return handleResponse(res);
};