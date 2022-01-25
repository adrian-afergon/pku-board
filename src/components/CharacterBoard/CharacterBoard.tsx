import React from 'react'
import './CharacterBoard.css'
import {Team} from "../../domain/models/team";
import {Pokemon} from "../../domain/models/pokemon";
import {Player} from "../../domain/models/player";
import {DraggableChip} from "../DraggableChip";

interface CharacterBoardProps {
  teamPurple: Team
  teamYellow: Team
  jungle: Pokemon[]
  onPurplePlayerChange: (playerId: string, player: Player) => void
  onYellowPlayerChange: (playerId: string, player: Player) => void
}

export const CharacterBoard: React.FC<CharacterBoardProps> = ({
  teamPurple,
  teamYellow,
  onPurplePlayerChange,
  onYellowPlayerChange
}) => {
  return <>
    {Object.entries(teamPurple.players).map(([key, player]) => player && <DraggableChip
      color={teamPurple.color}
      key={`purple-${player.pokemon.name}`}
      pokemon={player.pokemon}
      positionX={player.position.x}
      positionY={player.position.y}
      backgroundColor={player.color}
      onPositionChange={(event) => onPurplePlayerChange(key, event)}
    />)}

    {Object.entries(teamYellow.players).map(([key, player]) => player && <DraggableChip
            color={teamYellow.color}
            key={`yellow-${player.pokemon.name}`}
            pokemon={player.pokemon}
            positionX={player.position.x}
            positionY={player.position.y}
            backgroundColor={player.color}
            onPositionChange={(event) => onYellowPlayerChange(key, event)}/>)}
  </>
}