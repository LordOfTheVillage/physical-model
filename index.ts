import { FORWARD_DIRECTIONS } from "./constants/forward-directions"
import { simulateParticleMotion } from "./src/simulate-particle-motion"
import { plotGraph } from "./src/plot-graph"
import { ANY_DIRECTIONS } from "./constants/any-directions"

const firstPath = simulateParticleMotion(200, 0, 20, FORWARD_DIRECTIONS)
plotGraph([firstPath], "graphs/first-experiment-one-iteration.png")

const firstManyPaths = []
for (let i = 0; i < 80; i++) {
  firstManyPaths.push(simulateParticleMotion(200, 0, 20, FORWARD_DIRECTIONS))
}

plotGraph(firstManyPaths, "graphs/first-experiment-many-iterations.png")

const secondPath = simulateParticleMotion(100, 0, 20, ANY_DIRECTIONS)
plotGraph([secondPath], "graphs/second-experiment-one-iteration.png")

const secondManyPaths = []
for (let i = 0; i < 80; i++) {
  secondManyPaths.push(simulateParticleMotion(100, 0, 20, ANY_DIRECTIONS))
}

plotGraph(secondManyPaths, "graphs/second-experiment-many-iterations.png")
