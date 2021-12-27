import React from "react";
import './Timer.css'
import {Clock} from "../Clock";

export const Timer: React.FC = () => {

  const [time, setTime] = React.useState<number>(0)

  const handleChange = (event: any) => {
    setTime(event.target.value)
  };

  return <>
    <input
      type="range"
      min="0"
      max="600"
      step="1"
      className="Timer"
      value={time}
      onChange={handleChange}
    />
    <Clock time={time} />
  </>
}