import express from "express";
import { login, register } from "./authController";

export const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
