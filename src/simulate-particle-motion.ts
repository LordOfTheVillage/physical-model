import {
  POSSIBLE_DIRECTIONS,
  TPossibleDirection,
} from "../constants/possible-direction"
import { Position } from "../types/position.type"
import { getRandomDirection } from "./get-random-direction"

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
    let newX = position.x
    let newY = position.y

    switch (direction) {
      case POSSIBLE_DIRECTIONS.up:
        newY -= 1
        break
      case POSSIBLE_DIRECTIONS.down:
        newY += 1
        break
      case POSSIBLE_DIRECTIONS.upRight:
        newY -= 0.5
        newX += 1
        break
      case POSSIBLE_DIRECTIONS.downRight:
        newY += 0.5
        newX += 1
        break
      case POSSIBLE_DIRECTIONS.left:
        newX -= 1
        break
      case POSSIBLE_DIRECTIONS.upLeft:
        newY -= 0.5
        newX -= 1
        break
      case POSSIBLE_DIRECTIONS.downLeft:
        newY += 0.5
        newX -= 1
        break
      default:
        newX += 1
    }

    if (newY < upperLimit) {
      newY = upperLimit + 1
    }
    if (newY > lowerLimit) {
      newY = lowerLimit - 1
    }

    if (newX < 0) {
      newX = 1
    }

    position = { x: newX, y: newY }
    path.push(position)
  }

  return path
}
