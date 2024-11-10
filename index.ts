import { FORWARD_DIRECTIONS } from "./constants/forward-directions"
import { simulateParticleMotion } from "./src/simulate-particle-motion"
import { plotGraph } from "./src/plot-graph"

const path = simulateParticleMotion(100, 0, 100, FORWARD_DIRECTIONS)
plotGraph([path], "graphs/first-experiment.png")

const allPaths = []
for (let i = 0; i < 20; i++) {
  allPaths.push(simulateParticleMotion(100, 0, 100, FORWARD_DIRECTIONS))
}

plotGraph(allPaths, "graphs/second-experiment.png")
