import type { IAccount } from "../../../@types/Account";
import type { IContext } from "../../../connectionResolver";

export const Accounts = {
  async accountAdd(_root: undefined, doc: IAccount, { models }: IContext) {
    const account = await models.Accounts.createAccount(doc);
    return account;
  },

  async accountEdit(
    _root: undefined,
    { _id, ...doc }: { _id: string } & IAccount,
    { models }: IContext,
  ) {
    await models.Accounts.getAccount(_id);
    return await models.Accounts.updateAccount(_id, {
      ...doc,
    });
  },

  async accountsRemove(
    _root: undefined,
    { ids }: { ids: string[] },
    { models }: IContext,
  ) {
    await models.Accounts.removeAccounts(ids);
    return "Deleted Successfully!!!";
  },

  async accountLike(
    _root: undefined,
    { _id, userId }: { _id: string; userId: string },
    { models }: IContext,
  ) {
    return await models.Accounts.accountLike(_id, userId);
  },

  async accountUnlike(
    _root: undefined,
    { _id, userId }: { _id: string; userId: string },
    { models }: IContext,
  ) {
    return await models.Accounts.accountUnlike(_id, userId);
  },

  async commentAdd(
    _root: undefined,
    { _id, userId, text }: { _id: string; userId: string; text: string },
    { models }: IContext,
  ) {
    return await models.Accounts.commentAdd(_id, userId, text);
  },

  async commentRemove(
    _root: undefined,
    { _id, commentId }: { _id: string; commentId: string },
    { models }: IContext,
  ) {
    return await models.Accounts.commentRemove(_id, commentId);
  },
};
