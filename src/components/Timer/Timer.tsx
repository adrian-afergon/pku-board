import React from "react";
import './Timer.css'

interface TimerProps {
  time: number
  maxTime?: number
  minTime?: number
  onChange?: (time: number) => void
}

export const Timer: React.FC<TimerProps> = ({
  time,
  maxTime = 600,
  minTime = 0,
  onChange
}) => {

  const handleChange = (event: any) => {
    const newTime = Number(event.target.value)

    onChange
    && newTime >= minTime && newTime <= maxTime
    && onChange(Number(event.target.value))
  };

  return <input
    type="range"
    min={minTime}
    max={maxTime}
    step="1"
    className="Timer"
    value={time}
    onChange={handleChange}
  />
}