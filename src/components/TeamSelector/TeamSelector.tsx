import {Player} from "../../domain/models/player";
import {PlayerRow} from "../PlayerRow";
import React from "react";
import './TeamSelector.css'
import {Pokemon} from "../../domain/models/pokemon";
import {useColor} from "../../hooks/useColor";

interface TeamSelectorProps {
  title: string
  color: "yellow" | "purple"
  pokemonOptions: Pokemon[]
  onPlayerChange: (playerId: string, player: Player) => void
  onPlayerDelete: (playerId: string) => void
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
  onPlayerChange,
  onPlayerDelete
}) => {

  const rolesOptions = color === "yellow" ? yellowPositionsRoles : purplePositionsRoles

  const teamColor = useColor(color)

  return <form className="TeamSelector" style={{
    borderColor: teamColor
  }}>
    <h3>{title}</h3>
    <ul>
      {[
        'player1',
        'player2',
        'player3',
        'player4',
        'player5'
      ].map(playerName =>
        <PlayerRow
          key={playerName}
          label={playerName}
          rolesOptions={rolesOptions}
          pokemonOptions={pokemonOptions}
          onChange={(player) => {onPlayerChange(playerName, player)}}
          onDelete={() => {onPlayerDelete(playerName)}}
        />
      )}
    </ul>
  </form>

}