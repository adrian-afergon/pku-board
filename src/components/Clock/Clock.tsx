import React from "react";

interface ClockProps {
  time: number
}

export const Clock: React.FC<ClockProps> = ({time}) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const toTimeString = (item: number) => {
    const text = item.toString()
    return text.length > 1 ? text : `0${text}`
  }

  return <>
    <span>{toTimeString(minutes)}</span> : <span>{toTimeString(seconds)}</span>
  </>

}