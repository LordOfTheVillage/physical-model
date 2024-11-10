export const POSSIBLE_DIRECTIONS = {
  up: "up",
  down: "down",
  up45: "up45",
  down45: "down45",
  forward: "forward",
} as const

export type TPossibleDirection =
  (typeof POSSIBLE_DIRECTIONS)[keyof typeof POSSIBLE_DIRECTIONS]
