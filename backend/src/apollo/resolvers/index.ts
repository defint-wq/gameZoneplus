import { Accounts as MutationsAccount } from "../../graphql/mutations/accounts";
import { Accounts as QueriesAccount } from "../../graphql/queries/account";

const resolver: any = {
  Mutation: {
    ...MutationsAccount,
  },
  Query: {
    ...QueriesAccount,
  },
};

export default resolver;
