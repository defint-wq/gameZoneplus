import express from "express";
import cors from "cors";
import accountsRouter from "./routes/account.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountsRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
