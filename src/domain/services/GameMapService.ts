import {BaseName, GameMap} from "../models/gameMap";
import GameMaps from '../../data/maps.json'
import {Position} from "../models/position";


export class GameMapService {

  async getMapById(id: string): Promise<GameMap> {
    const found = GameMaps
      .find( gameMap => gameMap.id === id) || GameMaps[0]

    return {
      bases: GameMapService.mapBases(found.bases),
      name: found.name,
      image: found.image,
      time: found.time,
    }
  }

  private static mapBases(bases : Record<BaseName, Position>): Record<BaseName, Position> {
    return {
      [BaseName.Main]: bases.main,
      [BaseName.BottomTierOne]: bases.bottomTierOne,
      [BaseName.BottomTierTwo]: bases.bottomTierTwo,
      [BaseName.TopTierOne]: bases.topTierOne,
      [BaseName.TopTierTwo]: bases.topTierTwo,

    }
  }

}