import {Position} from "./position";

export enum BaseName {
  TopTierOne = 'topTierOne',
  TopTierTwo = 'topTierTwo',
  BottomTierOne = 'bottomTierOne',
  BottomTierTwo = 'bottomTierTwo',
  Main = 'main'
}

export interface GameMap {
  name: string,
  time: number,
  image: string
  bases: Record<BaseName, Position>
}