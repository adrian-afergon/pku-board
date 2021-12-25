import {Pokemon} from "../../domain/models/pokemon";
import './Chip.css'
import React from "react";

export interface ChipProps {
  color: "yellow" | "purple" | "gray"
  pokemon: Pokemon
  positionX: number
  positionY: number
}

const mapOfColors: Record<"yellow" | "purple" | "gray", string> = {
  purple: "#43337c",
  yellow: "#d88d1a",
  gray: "#a5a5a5"
}

export const Chip: React.FC<ChipProps> = ({
                                            pokemon,
                                            positionX,
                                            positionY,
                                            color,
                                          }) => {


  return <div className="Chip"
              style={{
                borderColor: mapOfColors[color] || mapOfColors.gray,
                transform: `translateX(${positionX}px) translateY(${positionY}px)`,
                backgroundImage: `url(${process.env.PUBLIC_URL}/roster/${pokemon.imageUrl})`
              }} />
}
