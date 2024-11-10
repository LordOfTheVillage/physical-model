export const POSSIBLE_DIRECTIONS = {
  up: "up",
  down: "down",
  upRight: "up-right",
  downRight: "down-right",
  upLeft: "up-left",
  downLeft: "down-left",
  right: "right",
  left: "left",
} as const

export type TPossibleDirection =
  (typeof POSSIBLE_DIRECTIONS)[keyof typeof POSSIBLE_DIRECTIONS]
