import {Pokemon} from "../../domain/models/pokemon";
import './Chip.css'
import React from "react";
import {useColor} from "../../hooks/useColor";

export interface ChipProps {
  color: "yellow" | "purple" | "gray"
  pokemon: Pokemon
}
export const Chip: React.FC<ChipProps> = ({
                                            pokemon,
                                            color,
                                          }) => {
  const teamColor = useColor(color)

  return <div className="Chip"
              style={{
                borderColor: teamColor,
                backgroundImage: `url(${process.env.PUBLIC_URL}/roster/${pokemon.imageUrl})`
              }} />
}
