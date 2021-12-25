import {Player} from "./player";

export interface Team {
  color: "yellow" | "purple"
  players: {
    player1?: Player
    player2?: Player
    player3?: Player
    player4?: Player
    player5?: Player
  }
}