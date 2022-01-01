import React from "react";
import {Timer} from "../Timer";
import {Clock} from "../Clock";
import './TimeSection.css'

interface TimerSelectorProps {
  maxTime?: number
}

export const TimeSection: React.FC<TimerSelectorProps> = ({
  maxTime
}) => {

  const [time, setTime] = React.useState<number>(0)

  const handleTimeChange = (time: number) => {
    setTime(time)
  }

  return <section className="TimeSection" title="Time section">
    <Timer time={time} onChange={handleTimeChange} maxTime={maxTime}/>
    <Clock time={time} onChange={handleTimeChange} maxTime={maxTime}/>
  </section>
}