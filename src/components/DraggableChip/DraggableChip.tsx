import {Chip} from "../Chip";
import {ChipProps} from "../Chip/Chip";
import React from "react";
import {Player} from "../../domain/models/player";
import './DraggableChip.css'

interface DraggableChipProps extends ChipProps {
  positionX: number,
  positionY: number,
  onPositionChange: (player: Player) => void
}

export const DraggableChip: React.FC<DraggableChipProps> = ({
                                                            pokemon,
                                                            positionX,
                                                            positionY,
                                                            color,
                                                            onPositionChange
}) => {

  const [isDragging, setIsDragging] = React.useState(false);

  const handlePointerDown = (event: any) => {
    setIsDragging(true);
  };

  const handlePointerUp = (event: any) => {
    setIsDragging(false);
  };

  const handlePointerMove = (event: any) => {
    if (isDragging) onPositionChange({
      pokemon,
      position: {
        x: positionX + event.movementX,
        y: positionY + event.movementY
      }
    })
  };

  const handlePointerLeave = (event: any) => {
    setIsDragging(false)
  }

  return <div
    className="DraggableChip"
    onPointerLeave={handlePointerLeave}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    onPointerMove={handlePointerMove}
    style={{
      transform: `translateX(${positionX}px) translateY(${positionY}px)`,
    }}
  ><Chip
    pokemon={pokemon}
    color={color}
  /></div>

}