import type { Cell, Direction } from "./game.types";

export type Pos = [row: number, col: number];

export type MapPatch = { pos: Pos; cell: Cell };

/**
 * Returns a new map with the given patches applied.
 * All map state changes go through this — composable by merging patch arrays.
 */
export function applyToMap(map: Cell[][], patches: MapPatch[]): Cell[][] {
  const next = map.map((row) => [...row]);
  for (const {
    pos: [r, c],
    cell,
  } of patches) {
    next[r][c] = cell;
  }
  return next;
}

const DIRECTION_OFFSET: Record<Direction, Pos> = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
};

/** Returns the next snake segment positions after one step in the given direction. */
export function stepSnake(snake: Pos[], direction: Direction): Pos[] {
  const [r, c] = snake[0];
  const [dr, dc] = DIRECTION_OFFSET[direction];
  return [[r + dr, c + dc], ...snake.slice(0, -1)];
}

/**
 * Returns the map patches needed to transition from prevSnake to nextSnake.
 * Combine with other patches (e.g. food removal) before calling applyToMap.
 */
export function snakePatches(prevSnake: Pos[], nextSnake: Pos[]): MapPatch[] {
  const patches: MapPatch[] = [
    { pos: prevSnake[prevSnake.length - 1], cell: " " }, // clear vacated tail
  ];
  for (let i = 0; i < nextSnake.length; i++) {
    const cell: Cell = i === 0 ? "h" : i === nextSnake.length - 1 ? "t" : "b";
    patches.push({ pos: nextSnake[i], cell });
  }
  return patches;
}

/**
 * Like stepSnake but keeps the tail — used when the snake eats food and grows by 1.
 */
export function growSnake(snake: Pos[], direction: Direction): Pos[] {
  const [r, c] = snake[0];
  const [dr, dc] = DIRECTION_OFFSET[direction];
  return [[r + dr, c + dc], ...snake];
}

/**
 * Picks a random cell that is currently empty (" ").
 * Returns null if no empty cells remain.
 */
export function randomEmptyCell(map: Cell[][]): Pos | null {
  const empty: Pos[] = [];
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === " ") empty.push([r, c]);
    }
  }
  if (empty.length === 0) return null;
  return empty[Math.floor(Math.random() * empty.length)];
}
