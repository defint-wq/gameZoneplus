import { useQuery } from "@apollo/client";
import { type IAccount } from "../../types/accounts";
import { ACCOUNTS } from "../graphql/queries/accounts";

export const useAccounts = () => {
  const { data, loading, fetchMore, error } = useQuery(ACCOUNTS);

  const handleFetchMore = () => {
    fetchMore({
      variables: {},
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          accounts: [...(prev.accounts || []), ...fetchMoreResult.accounts],
        });
      },
    });
  };

  return {
    accounts: (data?.accounts || []) as IAccount[],
    loading,
    handleFetchMore,
    error,
  };
};
