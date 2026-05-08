// hooks/useAccountActions.ts
import { useMutation } from "@apollo/client";
import {
  ACCOUNT_LIKE,
  ACCOUNT_UNLIKE,
  COMMENT_ADD,
  COMMENT_REMOVE,
} from "../graphql/mutations/accountAdd";
import { ACCOUNTS } from "../graphql/queries/accounts";

export const useAccountActions = () => {
  const [accountLike] = useMutation(ACCOUNT_LIKE, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const [accountUnlike] = useMutation(ACCOUNT_UNLIKE, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const [commentAdd] = useMutation(COMMENT_ADD, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const [commentRemove] = useMutation(COMMENT_REMOVE, {
    refetchQueries: [{ query: ACCOUNTS }],
  });

  const handleLike = async (_id: string, userId: string) => {
    await accountLike({ variables: { _id, userId } });
  };

  const handleUnlike = async (_id: string, userId: string) => {
    await accountUnlike({ variables: { _id, userId } });
  };

  const handleCommentAdd = async (
    _id: string,
    userId: string,
    text: string,
  ) => {
    await commentAdd({ variables: { _id, userId, text } });
  };

  const handleCommentRemove = async (_id: string, commentId: string) => {
    await commentRemove({ variables: { _id, commentId } });
  };

  return {
    handleLike,
    handleUnlike,
    handleCommentAdd,
    handleCommentRemove,
  };
};
