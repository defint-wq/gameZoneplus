import "dotenv/config";
import cors from "cors";
import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import { getContext, connect } from "./connectionResolver";
import { apolloServer } from "./src/apolloIndex";

const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
  await connect();
  await apolloServer.start();

  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(apolloServer, {
      context: async () => getContext(),
    }),
  );

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
};

start();
