import mongoose, { Model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { IUser, IUserDocument } from "../../../@types/User";
import { userSchema } from "../definition/user";

export interface IUserModel extends Model<IUserDocument> {
  register(doc: IUser): Promise<IUserDocument>;

  login(credentials: any): Promise<string>;
}

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

class User {
  getToken(this: IUserDocument) {
    return jwt.sign({ userId: this._id }, JWT_SECRET);
  }

  public static async register(this: IUserModel, doc: IUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(doc.password, salt);

    const nameChecker = await this.findOne({ name: doc.name });
    if (nameChecker) {
      throw new Error("Username is already taken");
    }

    return await this.create({
      ...doc,
      password: hashedPassword,
    });
  }

  public static async login(this: IUserModel, { email, password }: any) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("Хэрэглэгч олдсонгүй");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Нууц үг буруу байна");

    return user.getToken();
  }
}

userSchema.loadClass(User);

export const Users = mongoose.model<IUserDocument, IUserModel>(
  "Users",
  userSchema,
);
