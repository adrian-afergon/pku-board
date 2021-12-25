import {Pokemon} from "../models/pokemon";
import Pokemons from '../../data/playable.json'

interface RatingsDto {
  "offense": number,
  "endurance": number,
  "mobility": number,
  "scoring": number,
  "support": number,
  "leveling": number
}

interface StageDto {
  stageId: string,
  level: number
}

interface StatsDto {
  "level": number,
  "hp": number,
  "atk": number,
  "def": number,
  "sp_atk": number,
  "sp_def": number,
  "speed": number
}

interface MoveDto {
  "moveId": string,
  "style": string,
  "category": string,
  "cooldown": number,
  "level": number,
  "color": string
}

interface MovesDto {
  basic: {
    "moveId": string,
    "style": string,
    "boostStyle": string,
    "boostCount": number
  },
  slot1: MoveDto[],
  slot2: MoveDto[],
  "unite": {
    "moveId": string,
    "category": string,
    "level": number,
    "color": string
  },
  "passive": {
    "moveId": string,
    "color": string
  }
}

interface PokemonDto {
  "pokemonId": string,
  "image":string,
  "dex": number,
  "role": string,
  "type": string,
  "style": string,
  "difficulty": string,
  "ratings": RatingsDto,
  "stages": StageDto[],
  "stats": StatsDto[],
  "moves": MovesDto
}

export class PokemonService {

  async getPlayable(): Promise<Pokemon[]> {
    return Pokemons.map( (pokemon: PokemonDto): Pokemon => ({
      id: pokemon.dex,
      imageUrl: pokemon.image,
      name: pokemon.pokemonId
    }))
  }

}