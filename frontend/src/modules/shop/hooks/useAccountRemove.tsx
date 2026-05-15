import { useMutation } from "@apollo/client";
import { ACCOUNT_REMOVE } from "../graphql/mutations/accountRemove";
import { ACCOUNTS } from "../graphql/queries/accounts";

export const useAccountRemove = () => {
  const [accountsRemove, { loading }] = useMutation(ACCOUNT_REMOVE, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const handleDelete = async (_id: string) => {
    if (!window.confirm("Are you sure you want to delete this account?"))
      return;
    await accountsRemove({
      variables: { ids: [_id] },
    });
  };

  return { handleDelete, loading };
};
