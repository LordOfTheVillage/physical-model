import { FORWARD_DIRECTIONS } from "./constants/forward-directions"
import { simulateParticleMotion } from "./src/simulate-particle-motion"
import { plotGraph } from "./src/plot-graph"

const path = simulateParticleMotion(200, 0, 20, FORWARD_DIRECTIONS)
plotGraph([path], "graphs/first-experiment.png")

const allPaths = []
for (let i = 0; i < 80; i++) {
  allPaths.push(simulateParticleMotion(200, 0, 20, FORWARD_DIRECTIONS))
}

plotGraph(allPaths, "graphs/second-experiment.png")
