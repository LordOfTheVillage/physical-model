import { CanvasRenderingContext2D, createCanvas } from "canvas"
import { Chart, registerables } from "chart.js"
import { writeFile } from "fs/promises"
import { calculateMeanPath } from "./calculate-mean-path"
import { calculateStandardDeviation } from "./calculate-standart-deviation"
import { Position } from "../types/position.type"

Chart.register(...registerables)

export async function plotGraph(
  paths: Array<Array<Position>>,
  filePath: string
) {
  const canvas = createCanvas(1200, 600)
  const ctx = canvas.getContext("2d") as unknown as CanvasRenderingContext2D
  const opacity = paths.length > 1 ? 0.3 : 1

  const datasets = paths.map((path, index) => ({
    label: `Ex${index + 1}`,
    data: path.map((point) => ({ x: point.x, y: point.y })),
    borderColor: `rgba(${Math.floor(Math.random() * 150)}, ${Math.floor(
      Math.random() * 150
    )}, ${Math.floor(Math.random() * 150)}, ${opacity})`,
    borderWidth: 1,
    fill: false,
  }))

  if (paths.length > 1) {
    const meanPath = calculateMeanPath(paths)
    const standardDeviations = calculateStandardDeviation(paths, meanPath)

    datasets.push(
      {
        label: "Mean Path",
        data: meanPath.map((point) => ({ x: point.x, y: point.y })),
        borderColor: "rgba(0, 0, 255, 1)",
        borderWidth: 3,
        fill: false,
      },
      {
        label: "Deviation Range (+)",
        data: meanPath.map((point, index) => ({
          x: point.x,
          y: point.y + standardDeviations[index],
        })),
        borderColor: "rgba(255, 0, 0, 0.8)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Deviation Range (-)",
        data: meanPath.map((point, index) => ({
          x: point.x,
          y: point.y - standardDeviations[index],
        })),
        borderColor: "rgba(255, 0, 0, 0.8)",
        borderWidth: 2,
        fill: false,
      }
    )
  }

  new Chart(ctx, {
    type: "line",
    data: {
      datasets,
    },
    options: {
      scales: {
        x: { type: "linear", position: "bottom" },
        y: { beginAtZero: true },
      },
      elements: {
        line: {
          tension: 0.1,
        },
        point: {
          radius: 0,
        },
      },
    },
  })

  await writeFile(filePath, canvas.toBuffer())
}
