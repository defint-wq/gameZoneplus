// types/account.ts

export interface IAccount {
  _id: string;
  title: string;
  skins: number;
  winRate: number;
  price: number;
  badge: "Epic" | "Legend" | "Mythic" | "Mythical Glory" | "Mythical Immortal";
  region: string;
  description: string;
  heroCount: number;
  isVerified: boolean;
  likes: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
}
export class Account implements IAccount {
  _id: string;
  title: string;
  skins: number;
  winRate: number;
  price: number;
  badge: IAccount["badge"];
  region: string;
  description: string;
  heroCount: number;
  isVerified: boolean;
  likes: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;

  constructor({
    _id,
    title,
    skins,
    winRate,
    price,
    badge,
    region,
    description,
    heroCount,
    isVerified,
    likes,
    comments,
    createdAt,
    updatedAt,
  }: IAccount) {
    this._id = _id;
    this.title = title;
    this.skins = skins;
    this.winRate = winRate;
    this.price = price;
    this.badge = badge;
    this.region = region;
    this.description = description;
    this.heroCount = heroCount;
    this.isVerified = isVerified;
    this.likes = likes;
    this.comments = comments;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get formattedPrice(): string {
    return new Intl.NumberFormat("mn-MN", {
      style: "currency",
      currency: "MNT",
    }).format(this.price);
  }

  get winRatePercent(): string {
    return `${this.winRate}%`;
  }
}
