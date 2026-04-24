export interface IPlayer {
  id: number;
  nickname: string;
  role: string;
  level: number;
  avatar?: string;
}

export class Player implements IPlayer {
  id: number;
  nickname: string;
  role: string;
  level: number;
  avatar?: string;

  constructor(data: IPlayer) {
    this.id = data.id;
    this.nickname = data.nickname;
    this.role = data.role;
    this.level = data.level;
    this.avatar = data.avatar;
  }
}
