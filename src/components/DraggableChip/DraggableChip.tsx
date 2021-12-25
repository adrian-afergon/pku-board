import {Chip} from "../Chip";
import {ChipProps} from "../Chip/Chip";
import React from "react";
import {Player} from "../../domain/models/player";

interface DraggableChipProps extends ChipProps {
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
    onPointerLeave={handlePointerLeave}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    onPointerMove={handlePointerMove}
  ><Chip
    pokemon={pokemon}
    positionX={positionX}
    positionY={positionY}
    color={color}
  /></div>

}