import express from "express";
import cors from "cors";
import accountRoutes from "./routes/account.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// API route
app.use("/api/accounts", accountRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});