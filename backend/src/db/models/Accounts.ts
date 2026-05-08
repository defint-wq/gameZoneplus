import mongoose, { Model } from "mongoose";
import type { IAccount, IAccountDocument } from "../../../@types/Account";
import type { IModels } from "../../../connectionResolver";
import { accountSchema } from "../definition/accounts";

export interface IAccountModel extends Model<IAccountDocument> {
  getAccounts(): Promise<IAccountDocument[]>;
  getAccount(_id: string): Promise<IAccountDocument>;
  createAccount(data: IAccount): Promise<IAccountDocument>;
  updateAccount(_id: string, doc: Partial<IAccount>): Promise<IAccountDocument>;
  removeAccounts(ids: string[]): Promise<{ n: number; ok: number }>;
}

export const loadAccountClass = (model: IModels) => {
  class Account {
    public static async getAccounts() {
      return await model.Accounts.find().lean();
    }

    public static async getAccount(_id: string) {
      return await model.Accounts.findOne({ _id });
    }

    public static async createAccount(doc: IAccount) {
      const account = await model.Accounts.create(doc);
      return account;
    }

    public static async removeAccounts(ids: string[]) {
      await model.Accounts.deleteMany({ _id: { $in: ids } });

      return "Deleted successfully!!!";
    }

    public static async updateAccount(_id: string, doc: IAccount) {
      return await model.Accounts.updateOne({ _id }, { $set: { ...doc } });
    }
  }

  accountSchema.loadClass(Account);
  return mongoose.model<IAccountDocument, IAccountModel>(
    "Accounts",
    accountSchema,
  );
};
