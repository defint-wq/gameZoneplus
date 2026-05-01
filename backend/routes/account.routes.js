import express from "express";
import {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  toggleLike,
  addComment,
} from "../controllers/account.controller.js";

const router = express.Router();

// 🔥 specific first
router.post("/:id/like", toggleLike);
router.post("/:id/comments", addComment);

// CRUD
router.get("/", getAccounts);
router.post("/", createAccount);

router.get("/:id", getAccountById);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

export default router;