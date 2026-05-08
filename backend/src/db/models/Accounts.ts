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
  accountLike(_id: string, userId: string): Promise<IAccountDocument>;
  accountUnlike(_id: string, userId: string): Promise<IAccountDocument>;
  commentAdd(
    _id: string,
    userId: string,
    text: string,
  ): Promise<IAccountDocument>;
  commentRemove(_id: string, commentId: string): Promise<IAccountDocument>;
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

    public static async accountLike(_id: string, userId: string) {
      return await model.Accounts.findByIdAndUpdate(
        _id,
        { $addToSet: { likes: userId } },
        { returnDocument: "after" },
      );
    }

    public static async accountUnlike(_id: string, userId: string) {
      return await model.Accounts.findByIdAndUpdate(
        _id,
        { $pull: { likes: userId } },
        { returnDocument: "after" },
      );
    }

    public static async commentAdd(_id: string, userId: string, text: string) {
      return await model.Accounts.findByIdAndUpdate(
        _id,
        { $push: { comments: { userId, text } } },
        { returnDocument: "after" },
      );
    }

    public static async commentRemove(_id: string, commentId: string) {
      return await model.Accounts.findByIdAndUpdate(
        _id,
        { $pull: { comments: { _id: commentId } } },
        { returnDocument: "after" },
      );
    }
  }

  accountSchema.loadClass(Account);
  return mongoose.model<IAccountDocument, IAccountModel>(
    "Accounts",
    accountSchema,
  );
};
