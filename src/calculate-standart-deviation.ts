import { Position } from "../types/position.type"

export function calculateStandardDeviation(
  paths: Array<Array<Position>>,
  meanPath: Array<Position>
): number[] {
  const length = meanPath.length
  const deviations: number[] = []

  for (let i = 0; i < length; i++) {
    const varianceSum = paths.reduce((sum, path) => {
      return sum + Math.pow(path[i].y - meanPath[i].y, 2)
    }, 0)
    const standardDeviation = Math.sqrt(varianceSum / paths.length)
    deviations.push(standardDeviation)
  }

  return deviations
}
