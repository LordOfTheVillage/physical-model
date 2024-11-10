import { CanvasRenderingContext2D, createCanvas } from "canvas"
import { Chart, registerables } from "chart.js"
import { writeFile } from "fs/promises"

Chart.register(...registerables)

export async function plotGraph(
  paths: Array<Array<{ x: number; y: number }>>,
  filePath: string
) {
  const canvas = createCanvas(800, 400)
  const ctx = canvas.getContext("2d") as unknown as CanvasRenderingContext2D

  new Chart(ctx, {
    type: "line",
    data: {
      datasets: paths.map((path, index) => ({
        label: `Experiment ${index + 1}`,
        data: path.map((point) => ({ x: point.x, y: point.y })),
        borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
        fill: false,
      })),
    },
    options: {
      scales: {
        x: { type: "linear", position: "bottom" },
      },
    },
  })

  await writeFile(filePath, canvas.toBuffer())
}
