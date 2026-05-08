import { ApolloServer } from "@apollo/server";

import { mutations, queries, types } from "./graphql/schemas/accounts";
import { Accounts as accountMutations } from "./graphql/mutations/accounts";
import { Accounts as accountQueries } from "./graphql/queries/account";
import { type IContext } from "../connectionResolver";

const typeDefs = `
  ${types()}
  type Query { ${queries} }
  type Mutation { ${mutations} }
`;

const resolvers = {
  Query: { ...accountQueries },
  Mutation: { ...accountMutations },
};

export const apolloServer = new ApolloServer<IContext>({
  typeDefs: typeDefs,
  resolvers,
  introspection: true,
});
