import { accounts } from "../data/accounts.data.js";

// LIKE / UNLIKE
export const toggleLike = (req, res) => {
  const id = Number(req.params.id);
  const { userId } = req.body;

  const account = accounts.find((a) => a.id === id);
  if (!account) return res.status(404).json({ message: "Not found" });

  account.likes ??= [];

  const index = account.likes.indexOf(userId);

  if (index === -1) {
    account.likes.push(userId);
  } else {
    account.likes.splice(index, 1);
  }

  res.json(account);
};

// COMMENT
export const addComment = (req, res) => {
  const id = Number(req.params.id);
  const { userId, text } = req.body;

  const account = accounts.find((a) => a.id === id);
  if (!account) return res.status(404).json({ message: "Not found" });

  account.comments ??= [];

  const newComment = {
    id: Date.now(),
    userId,
    text,
    createdAt: new Date(),
  };

  account.comments.push(newComment);

  res.json(account);
};

// GET ALL
export const getAccounts = (req, res) => {
  res.json(accounts);
};

// GET ONE
export const getAccountById = (req, res) => {
  const id = Number(req.params.id);

  const account = accounts.find((a) => a.id === id);
  if (!account) return res.status(404).json({ message: "Not found" });

  res.json(account);
};

// CREATE
export const createAccount = (req, res) => {
  const newAccount = {
    id: Date.now(),
    ...req.body,
    likes: [],
    comments: [],
  };

  accounts.push(newAccount);

  res.status(201).json(newAccount);
};

// UPDATE
export const updateAccount = (req, res) => {
  const id = Number(req.params.id);

  const index = accounts.findIndex((a) => a.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  accounts[index] = { ...accounts[index], ...req.body };

  res.json(accounts[index]);
};

// DELETE
export const deleteAccount = (req, res) => {
  const id = Number(req.params.id);

  const index = accounts.findIndex((a) => a.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  const deleted = accounts.splice(index, 1);

  res.json(deleted[0]);
};
