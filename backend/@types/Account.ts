export interface IAccount {
  id: number;
  title: string;
  skins: number;
  winRate: number;
  price: number;
  badge: string;
  region: string;
  description: string;
  isVerified: boolean;
  likes: string[];
  comments: string[];
}

export interface IAccountDocument extends IAccount, Document {
  _id: string;
  createdAt: Date;
}
