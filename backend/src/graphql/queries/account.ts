import type { IContext } from "../../../connectionResolver";

export interface IQueryParams {
  page?: number;
  perPage?: number;
  searchValue?: string;
}

export const Accounts = {
  async accounts(_root: undefined, params: IQueryParams, { models }: IContext) {
    return await models.Accounts.getAccounts();
  },
};
