import {Pokemon} from "../../domain/models/pokemon";
import './Board.css'
import {Player} from "../../domain/models/player";
import {DraggableChip} from "../DraggableChip";
import React from "react";
import {Team} from "../../domain/models/team";

interface BoardProps {
  teamPurple: Team
  teamYellow: Team
  jungle: Pokemon[]
  image: string
  onPurplePlayerChange: (playerId: string, player: Player) => void
  onYellowPlayerChange: (playerId: string, player: Player) => void
}

export const Board: React.FC<BoardProps> = ({
  teamPurple,
  teamYellow,
  jungle,
  image,
  onPurplePlayerChange,
  onYellowPlayerChange
}) => {
  return <section className="Board"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/maps/${image})`
    }}
  >
    {Object.entries(teamPurple.players).map(([key, player]) => <DraggableChip
      color={teamPurple.color}
      key={`purple-${player.pokemon.name}`}
      pokemon={player.pokemon}
      positionX={player.position.x}
      positionY={player.position.y}
      onPositionChange={(event) => onPurplePlayerChange(key, event)}
    />)}

    {Object.entries(teamYellow.players).map(([key, player]) => <DraggableChip
      color={teamYellow.color}
      key={`yellow-${player.pokemon.name}`}
      pokemon={player.pokemon}
      positionX={player.position.x}
      positionY={player.position.y}
      onPositionChange={(event) => onYellowPlayerChange(key, event)}
    />)}
  </section>
}