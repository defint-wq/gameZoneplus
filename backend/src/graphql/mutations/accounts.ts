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
};
