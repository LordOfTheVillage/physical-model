import { TPossibleDirection } from "../constants/possible-direction"

export function getRandomDirection(directions: Array<TPossibleDirection>) {
  const randomIndex = Math.floor(Math.random() * directions.length)
  return directions[randomIndex]
}
