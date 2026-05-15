import { type Request, type Response } from "express";
import { Users } from "../db/models/User";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, password, email } = req.body;

    const user = await Users.register({
      name,
      email,
      password,
      role: "player",
    });

    const token = user.getToken();

    res.send({ token });
  } catch (e: any) {
    res.send({ error: e.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const token = await Users.login({ email, password });

    res.send({ token });
  } catch (e: any) {
    res.send({ error: e.message });
  }
};
