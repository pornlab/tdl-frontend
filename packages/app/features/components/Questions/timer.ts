import { useEffect, useState } from 'react'

export enum TimerMode {
  EXAM,
  DEFAULT,
}

type Timer = (
  value: number,
  mode: TimerMode
) => {
  value: number[]
  stop: () => void
}

export const getTimerValue = ([hours, minutes, seconds]: number[]): string => {
  return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }`
}

const useTimer: Timer = (value, mode: TimerMode) => {
  const [countDown, setCount] = useState(value)
  const [stopped, setStopped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (stopped) return
      const count = mode === TimerMode.DEFAULT ? countDown + 1 : countDown - 1
      setCount(count < 0 ? 0 : count)
    }, 1000)

    return () => clearInterval(interval)
  }, [countDown])

  const stop = () => setStopped(true)

  return {
    value: getReturnValues(countDown),
    stop,
  }
}

const getReturnValues = (countDown) => {
  const hours = Math.floor(countDown / 3600)
  const leftSec = countDown % 3600
  const minutes = Math.floor(leftSec / 60)
  const seconds = leftSec % 60

  return [hours, minutes, seconds]
}

export { useTimer }
