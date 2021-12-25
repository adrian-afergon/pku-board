import {Player} from "../../domain/models/player";
import {PlayerRow} from "../PlayerRow";
import React from "react";
import './TeamSelector.css'
import {Pokemon} from "../../domain/models/pokemon";

interface TeamSelectorProps {
  title: string
  color: "yellow" | "purple"
  pokemonOptions: Pokemon[]
  onPlayerChange: (playerId: string, player: Player) => void
}

const yellowPositionsRoles = {
  top: {
    x: 355,
    y: 80
  },
  jungle: {
    x: 270,
    y: 304
  },
  bottom: {
    x: 355,
    y: 550
  },
  invade: {
    x: 600,
    y: 304
  }
}

const purplePositionsRoles = {
  top: {
    x: 575,
    y: 80
  },
  jungle: {
    x: 670,
    y: 304
  },
  bottom: {
    x: 575,
    y: 550
  },
  invade: {
    x: 340,
    y: 304
  }
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  title,
  color,
  pokemonOptions,
  onPlayerChange
}) => {

  const rolesOptions = color === "yellow" ? yellowPositionsRoles : purplePositionsRoles

  return <form className="TeamSelector">
    <h3>{title}</h3>
    <ul>
      <PlayerRow rolesOptions={rolesOptions} pokemonOptions={pokemonOptions} onChange={(player) => {onPlayerChange('player1', player)}}/>
      <PlayerRow rolesOptions={rolesOptions} pokemonOptions={pokemonOptions} onChange={(player) => {onPlayerChange('player2', player)}}/>
      <PlayerRow rolesOptions={rolesOptions} pokemonOptions={pokemonOptions} onChange={(player) => {onPlayerChange('player3', player)}}/>
      <PlayerRow rolesOptions={rolesOptions} pokemonOptions={pokemonOptions} onChange={(player) => {onPlayerChange('player4', player)}}/>
      <PlayerRow rolesOptions={rolesOptions} pokemonOptions={pokemonOptions} onChange={(player) => {onPlayerChange('player5', player)}}/>
    </ul>
  </form>

}