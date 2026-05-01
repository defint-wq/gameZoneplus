import { accounts } from "../data/accounts.data.js";

// GET all
export const getAccounts = (req, res) => {
  res.json(accounts);
};

// GET by id
export const getAccountById = (req, res) => {
  const id = Number(req.params.id);
  const account = accounts.find(a => a.id === id);

  if (!account) return res.status(404).json({ message: "Not found" });

  res.json(account);
};

// CREATE
export const createAccount = (req, res) => {
  const newAccount = {
    id: Date.now(),
    ...req.body,
  };

  accounts.push(newAccount);

  res.status(201).json(newAccount);
};

// UPDATE
export const updateAccount = (req, res) => {
  const id = Number(req.params.id);

  const index = accounts.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  accounts[index] = { ...accounts[index], ...req.body };

  res.json(accounts[index]);
};

// DELETE
export const deleteAccount = (req, res) => {
  const id = Number(req.params.id);

  const newList = accounts.filter(a => a.id !== id);
  accounts.length = 0;
  accounts.push(...newList);

  res.json({ message: "Deleted" });
};