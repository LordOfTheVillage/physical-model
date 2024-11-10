import {
  POSSIBLE_DIRECTIONS,
  TPossibleDirection,
} from "../constants/possible-direction"
import { Position } from "../types/position.type"
import { getRandomDirection } from "./direction"

export function simulateParticleMotion(
  length: number,
  upperLimit: number,
  lowerLimit: number,
  directions: Array<TPossibleDirection>
): Array<Position> {
  let position = { x: 0, y: (upperLimit + lowerLimit) / 2 }
  const path = [position]

  for (let i = 1; i <= length; i++) {
    const direction = getRandomDirection(directions)
    let newY = position.y

    switch (direction) {
      case POSSIBLE_DIRECTIONS.up:
        newY -= 1
        break
      case POSSIBLE_DIRECTIONS.down:
        newY += 1
        break
      case POSSIBLE_DIRECTIONS.up45:
        newY -= 0.5
        position.x += 1
        break
      case POSSIBLE_DIRECTIONS.down45:
        newY += 0.5
        position.x += 1
        break
      default:
        position.x += 1
    }

    if (newY < upperLimit) {
      newY = upperLimit + 1
    }
    if (newY > lowerLimit) {
      newY = lowerLimit - 1
    }

    position = { x: position.x, y: newY }
    path.push(position)
  }
  return path
}
