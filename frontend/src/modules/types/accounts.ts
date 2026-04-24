// types/account.ts

export interface IAccount {
  id: number;
  title: string;
  skins: number;
  winRate: number;
  price: number;
  badge: "Epic" | "Legend" | "Mythic" | "Mythical Glory" | "Mythical Immortal";
  region: string;
}

export class Account implements IAccount {
  id: number;
  title: string;
  skins: number;
  winRate: number;
  price: number;
  badge: IAccount["badge"];
  region: string;

  constructor({ id, title, skins, winRate, price, badge, region }: IAccount) {
    this.id = id;
    this.title = title;
    this.skins = skins;
    this.winRate = winRate;
    this.price = price;
    this.badge = badge;
    this.region = region;
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
