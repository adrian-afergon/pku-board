import React from 'react'
import CanvasDraw from "react-canvas-draw";

interface DrawBoardProps {
  color: string
  brushSize: number
  onRefChange: (element: DrawElement | null) => void
}

export type DrawElement = CanvasDraw

export const DrawBoard: React.FC<DrawBoardProps> = ({
  color,
  brushSize,
  onRefChange
}) => {
  return <section>
    <CanvasDraw
      ref={onRefChange}
      hideGrid
      style={{
        backgroundColor: "transparent"
      }}
      brushRadius={brushSize}
      brushColor={color}
      canvasHeight={768}
      canvasWidth={1024}
    />
  </section>
}