import { Pokemon } from "../../domain/models/pokemon";
import './Board.css'
import { Player } from "../../domain/models/player";
import React from "react";
import { Team } from "../../domain/models/team";
import { CharacterBoard } from "../CharacterBoard";
import { DrawBoard, DrawElement } from "../DrawBoard";

interface BoardProps {
  teamPurple: Team
  teamYellow: Team
  jungle: Pokemon[]
  image: string
  onPurplePlayerChange: (playerId: string, player: Player) => void
  onYellowPlayerChange: (playerId: string, player: Player) => void
}

interface LayerOrder {
  character: number,
  draw: number
}

export const Board: React.FC<BoardProps> = ({
  teamPurple,
  teamYellow,
  jungle,
  image,
  onPurplePlayerChange,
  onYellowPlayerChange
}) => {

  const [color, setColor] = React.useState('red')
  const [brushSize, setBrushSize] = React.useState(5)
  const [canvasRef, setCanvasRef] = React.useState<DrawElement | null>(null)
  const [layerOrder, setLayerOrder] = React.useState<LayerOrder>({
    character: 1,
    draw: 0
  })

  const handleDraw = () => {
    setLayerOrder({ character: 0, draw: 1 })
  }

  const handleMove = () => {
    setLayerOrder({ character: 1, draw: 0 })
  }

  const handleRefChange = (ref: DrawElement | null) => {
    setCanvasRef(ref)
  }

  const handleClear = () => {
    canvasRef && canvasRef.clear()
  }

  const handleSelectColor = (selectedColor: string) => {
    setColor(selectedColor)
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event && setColor(event.target.value)
  }

  const handleBrushSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(Number(event.target.value))
  }

  return <>
    <header className="BoardToolbar">
      <section>
        {
          Object.entries(teamYellow.players).map(([key, player]) => player && <button
            key={`team-yellow-${key}-color`}
            className="PlayerColorSelector"
            onClick={() => { handleSelectColor(player.color) }}
            style={{
              backgroundColor: player.color,
              backgroundImage: `url(${process.env.PUBLIC_URL}/roster/${player.pokemon.imageUrl})`
            }}
            aria-label={player.pokemon.name}
          />)
        }
      </section>
      <section>
        <button onClick={handleDraw}>Draw</button>
        <button onClick={handleMove}>Move</button>
        <button onClick={handleClear}>Clear</button>
        <input aria-label="brush color" type="color" onChange={handleColorChange} defaultValue="red"/>
        <input aria-label="brush size" type="number" onChange={handleBrushSizeChange} defaultValue={5} />
      </section>
      <section>{
        Object.entries(teamPurple.players).map(([key, player]) => player && <button
          key={`team-purple-${key}-color`}
          className="PlayerColorSelector"
          onClick={() => { handleSelectColor(player.color) }}
          style={{
            backgroundColor: player.color,
            backgroundImage: `url(${process.env.PUBLIC_URL}/roster/${player.pokemon.imageUrl})`
          }}
          aria-label={player.pokemon.name}
        />)
      }
      </section>
    </header>

    <section className="Board"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/maps/${image})`
      }}
    >
      <div style={{ zIndex: layerOrder.draw, position: "absolute" }}>
        <DrawBoard
          brushSize={brushSize}
          color={color}
          onRefChange={handleRefChange} />
      </div>
      <div style={{ zIndex: layerOrder.character, position: "absolute" }}>
        <CharacterBoard
          teamYellow={teamYellow}
          teamPurple={teamPurple}
          jungle={jungle}
          onPurplePlayerChange={onPurplePlayerChange}
          onYellowPlayerChange={onYellowPlayerChange}
        />
      </div>
    </section>
  </>
}