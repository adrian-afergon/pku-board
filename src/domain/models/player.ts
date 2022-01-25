import {Pokemon} from "./pokemon";
import {Position} from "./position";

export interface Player {
  color: string
  pokemon: Pokemon
  position: Position
}