import { useEffect, useEffectEvent, useState } from "react";
import { Direction } from "../game.types";
import type { Cell } from "../game.types";
import {
  applyToMap,
  growSnake,
  randomEmptyCell,
  snakePatches,
  stepSnake,
} from "../game.utils";
import type { Pos } from "../game.utils";
import { useGameStore } from "../store/gameStore";

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

const INITIAL_SNAKE: Pos[] = [
  [10, 8], // head
  [11, 8], // body
  [12, 8], // tail
];

const TICK_INTERVAL = 300; // ms

const OPPOSITE: Record<Direction, Direction> = {
  [Direction.Up]: Direction.Down,
  [Direction.Down]: Direction.Up,
  [Direction.Left]: Direction.Right,
  [Direction.Right]: Direction.Left,
};

const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowUp: Direction.Up,
  ArrowDown: Direction.Down,
  ArrowLeft: Direction.Left,
  ArrowRight: Direction.Right,
};

interface UseSnakeGameEngineOptions {
  isActive: boolean;
  onGameOver: () => void;
}

export function useSnakeGameEngine({
  isActive,
  onGameOver,
}: UseSnakeGameEngineOptions) {
  const submitScore = useGameStore((s) => s.submitScore);

  const [map, setMap] = useState<Cell[][]>(() => {
    const food = randomEmptyCell(DEFAULT_MAP);
    return food
      ? applyToMap(DEFAULT_MAP, [{ pos: food, cell: "f" }])
      : DEFAULT_MAP;
  });
  const [snake, setSnake] = useState<Pos[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(Direction.Up);
  const [score, setScore] = useState(0);

  const tick = useEffectEvent(() => {
    const [nr, nc] = stepSnake(snake, direction)[0];
    const nextCell = map[nr][nc];
    const [tr, tc] = snake[snake.length - 1];

    const isWallCollision = nextCell === "w";
    // Tail vacates on a normal move, so entering its cell is safe
    const isSelfCollision =
      (nextCell === "h" || nextCell === "b" || nextCell === "t") &&
      !(nr === tr && nc === tc);

    if (isWallCollision || isSelfCollision) {
      submitScore(score);
      onGameOver();
      return;
    }

    const ateFood = nextCell === "f";
    const nextSnake = ateFood
      ? growSnake(snake, direction)
      : stepSnake(snake, direction);
    const patches = snakePatches(snake, nextSnake);

    if (ateFood) {
      setScore((s) => s + 1);
      const newFood = randomEmptyCell(applyToMap(map, patches));
      if (newFood) patches.push({ pos: newFood, cell: "f" });
    }

    setSnake(nextSnake);
    setMap((prev) => applyToMap(prev, patches));
  });

  // Game loop
  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(() => tick(), TICK_INTERVAL);
    return () => clearInterval(id);
  }, [isActive]);

  // Keyboard controls
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const next = KEY_TO_DIRECTION[e.key];
      if (!next) return;
      e.preventDefault();
      setDirection((prev) => (next === OPPOSITE[prev] ? prev : next));
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { map, direction, score };
}
