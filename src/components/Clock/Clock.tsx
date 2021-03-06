import React from "react";

interface ClockProps {
  time: number
  maxTime?: number
  minTime?: number
  onChange?: (time: number) => void
}

export const Clock: React.FC<ClockProps> = ({
                                              time,
                                              maxTime = 600,
                                              minTime = 0,
                                              onChange
                                            }) => {
  const maxMinutes = Math.floor(maxTime / 60);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const toTimeString = (item: number) => {
    const text = item.toString()
    return text.length > 1 ? text : `0${text}`
  }

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSeconds = Number(event.target.value)
    const newTime = minutes * 60 + newSeconds

    onChange &&
    newSeconds >= 0 && newSeconds <= 60 &&
    newTime >= minTime && newTime <= maxTime &&
    onChange(newTime)
  }

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = Number(event.target.value)
    const newTime = newMinutes * 60 + seconds

    onChange &&
    newMinutes >= 0 && newMinutes <= maxMinutes &&
    newTime >= minTime && newTime <= maxTime &&
    onChange(newTime)
  }

  return <div>
    <input
      aria-label="minutes"
      name="minutes"
      type="number"
      value={toTimeString(minutes)}
      onChange={handleMinutesChange}
      max={maxMinutes}
      min={0}
    />
    <span>:</span>
    <input
      aria-label="seconds"
      name="seconds"
      type="number"
      value={toTimeString(seconds)}
      max={60}
      min={0}
      onChange={handleSecondsChange}
    />
  </div>

}