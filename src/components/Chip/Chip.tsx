import './Chip.css'
import React from "react";
import {useColor} from "../../hooks/useColor";

export interface ChipProps {
  label: string
  color?: "yellow" | "purple" | "gray"
  image?: string
}

export const Chip: React.FC<ChipProps> = ({
                                            label,
                                            image,
                                            color = "gray",
                                          }) => {
  const teamColor = useColor(color)

  return <div className="Chip"
              aria-label={label}
              style={{
                borderColor: teamColor,
                backgroundImage: image ? `url(${process.env.PUBLIC_URL}/roster/${image})` : ''
              }}/>
}
