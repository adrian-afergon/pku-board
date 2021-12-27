import React from "react";
import {Pokemon} from "../../domain/models/pokemon";
import {Player} from "../../domain/models/player";
import {Position} from "../../domain/models/position";

interface PlayerRowProps {
  rolesOptions: { top: Position, jungle: Position, bottom: Position, invade: Position },
  pokemonOptions: Pokemon[],
  onChange: (player: Player) => void
}

export const PlayerRow: React.FC<PlayerRowProps> = ({
                                                      rolesOptions,
                                                      pokemonOptions,
                                                      onChange
                                                    }) => {

  const [pokemon, setPokemon] = React.useState<Pokemon | undefined>()
  const [role, setRole] = React.useState<string | undefined>()

  const handlePokemonChange = (event: any) => {
    const selectedPokemon = pokemonOptions.find(option => option.id === Number(event.target.value))
    setPokemon(selectedPokemon)
    if (role && selectedPokemon && selectedPokemon !== pokemon) {
      onChange({
        pokemon: selectedPokemon,
        // @ts-ignore
        position: rolesOptions[role]
      })
    }
  }

  const handleRoleChange = (event: any) => {
    // @ts-ignore
    const selectedPosition = rolesOptions[event.target.value]
    setRole(event.target.value)
    if (pokemon && selectedPosition && selectedPosition !== role) {
      onChange({
        pokemon,
        position: selectedPosition
      })
    }
  }

  return <li>
    <select onChange={handlePokemonChange}>
      <option value="">Pokémon</option>
      {pokemonOptions.map(pokemon => <option value={pokemon.id} key={`option-${pokemon.id}`}>
        {pokemon.name}
      </option>)}
    </select>
    <select onChange={handleRoleChange}>
      <option value="">Role</option>
      <option value="top">Top</option>
      <option value="jungle">Jungle</option>
      <option value="bottom">Bottom</option>
      <option value="invade">Invade</option>
    </select>
  </li>

}