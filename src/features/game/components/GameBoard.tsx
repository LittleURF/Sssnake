import { useState } from "react";
import { Food } from "./Food";
import { SnakeBody, SnakeHead, SnakeTail } from "./Snake";
import { Wall } from "./Wall";

// wall, empty, food, head, body, tail
type Cell = "w" | " " | "f" | "h" | "b" | "t";

const COLS = 15;
const ROWS = 17;
const CELL_SIZE = 32; // px

const DEFAULT_MAP: Cell[][] = [
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", "h", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", "b", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", "t", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
];

export function GameBoard({ isActive = false }: { isActive: boolean }) {
  const [map, setMap] = useState(DEFAULT_MAP);

  return (
    <div
      className="border border-border bg-bg"
      style={{
        width: COLS * CELL_SIZE,
        height: ROWS * CELL_SIZE,
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
      }}
    >
      {map.flat().map((cell, i) => (
        <div key={i} className="border border-border/20">
          {renderCell(cell)}
        </div>
      ))}
    </div>
  );
}

function renderCell(cell: Cell) {
  switch (cell) {
    case "w":
      return <Wall />;
    case "f":
      return <Food />;
    case "h":
      return <SnakeHead direction="up" />;
    case "b":
      return <SnakeBody direction="down" />;
    case "t":
      return <SnakeTail direction="down" />;
    default:
      return null;
  }
}
