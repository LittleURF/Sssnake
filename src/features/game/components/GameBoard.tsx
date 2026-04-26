import type { Cell } from "../game.types";
import { Direction } from "../game.types";
import { useSnakeGameEngine } from "../hooks/useSnakeGameEngine";
import { Food } from "./Food";
import { SnakeBody, SnakeHead, SnakeTail } from "./Snake";
import { Wall } from "./Wall";

// should come from snakeEngine.
const COLS = 15;
const ROWS = 17;
const CELL_SIZE = 32; // px

export function GameBoard({
  isActive = false,
  onGameOver,
}: {
  isActive: boolean;
  onGameOver: () => void;
}) {
  const { map, direction } = useSnakeGameEngine({ isActive, onGameOver });

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
          {renderCell(cell, direction)}
        </div>
      ))}
    </div>
  );
}

function renderCell(cell: Cell, direction: Direction) {
  switch (cell) {
    case "w":
      return <Wall />;
    case "f":
      return <Food />;
    case "h":
      return <SnakeHead direction={direction} />;
    case "b":
      return <SnakeBody direction={direction} />;
    case "t":
      return <SnakeTail direction={direction} />;
    default:
      return null;
  }
}
