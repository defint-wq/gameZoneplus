import mongoose from "mongoose";
import { loadAccountClass, type IAccountModel } from "./src/db/models/Accounts";

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://bolortulga07:<boogii0124>@cluster0.jno1r.mongodb.net/gameZone";

const mongooseConnectionOptions: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

export interface IModels {
  Accounts: IAccountModel;
}

export interface IContext {
  models: IModels;
}

let models: IModels | null = null;
export const getContext = (): IContext => {
  return { models: getModels() };
};

export const getModels = (): IModels => {
  if (!models) throw new Error("Models not initialized");
  return models;
};

mongoose.connection
  .on("connected", () => {
    console.log(`Connected to the database: ${MONGO_URL}`);
  })
  .on("disconnected", () => {
    console.log(`Disconnected from the database: ${MONGO_URL}`);
    process.exit(1);
  })
  .on("error", (error) => {
    console.error(`Database connection error: ${MONGO_URL} ${error}`);
    process.exit(1);
  })
  .on("close", () => {});

export async function connect(): Promise<mongoose.Connection> {
  if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined");
  }

  await mongoose.connect(MONGO_URL, mongooseConnectionOptions);

  models = {
    Accounts: loadAccountClass(models),
  };

  return mongoose.connection;
}

export async function closeMongoose() {
  try {
    await mongoose.connection.close();
    console.log("Mongoose connection disconnected");
  } catch (e) {
    console.error(e);
  }
}
