import { Player, type IPlayer } from "./players";

export interface ITeam {
  id: number;
  name: string;
  winRate: number;
  rank: string;
  region: string;
  logoUrl?: string;
  members: IPlayer[];
}

export class Team implements ITeam {
  id: number;
  name: string;
  winRate: number;
  rank: string;
  region: string;
  logoUrl?: string;
  members: Player[];

  constructor(data: ITeam) {
    this.id = data.id;
    this.name = data.name;
    this.winRate = data.winRate;
    this.rank = data.rank;
    this.region = data.region;
    this.logoUrl = data.logoUrl;
    this.members = data.members.map((m) => new Player(m));
  }

  get memberCount(): number {
    return this.members.length;
  }
}
