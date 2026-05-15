export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "player" | "admin";
}

export interface IUserDocument extends IUser {
  getToken(): string;
  _id: string;
  createdAt: Date;
}
