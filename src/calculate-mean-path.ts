import { Position } from "../types/position.type"

export function calculateMeanPath(
  paths: Array<Array<Position>>
): Array<Position> {
  const length = paths[0].length
  const meanPath: Array<Position> = []

  for (let i = 0; i < length; i++) {
    const sumY = paths.reduce((sum, path) => sum + path[i].y, 0)
    const meanY = sumY / paths.length
    meanPath.push({ x: i, y: meanY })
  }

  return meanPath
}
