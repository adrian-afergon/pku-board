import {Pokemon} from "./pokemon";

export interface Player {
  pokemon: Pokemon
  position: {
    x: number,
    y: number
  }
}