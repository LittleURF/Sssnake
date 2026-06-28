import { growSnake, stepSnake } from "./game.utils";

describe(stepSnake.name, () => {
  it("moves the snake head in the requested direction", () => {
    expect(
      stepSnake(
        [
          [2, 2],
          [2, 1],
          [2, 0],
        ],
        "right",
      ),
    ).toEqual([
      [2, 3],
      [2, 2],
      [2, 1],
    ]);
  });
});

describe(growSnake.name, () => {
  it("keeps the tail when growing", () => {
    expect(
      growSnake(
        [
          [2, 2],
          [2, 1],
          [2, 0],
        ],
        "up",
      ),
    ).toEqual([
      [1, 2],
      [2, 2],
      [2, 1],
      [2, 0],
    ]);
  });
});
