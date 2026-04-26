import { Direction } from "../game.types";

// All three components are designed facing RIGHT by default, then rotated.
const rotationClass: Record<Direction, string> = {
  right: "rotate-0",
  down: "rotate-90",
  left: "rotate-180",
  up: "-rotate-90",
};

interface DirectionProps {
  direction: Direction;
}

// Head — rounded snout on the right (front), flat back connects to body.
export function SnakeHead({ direction }: DirectionProps) {
  return (
    <div
      className={`relative w-full h-full bg-accent rounded-r-full ${rotationClass[direction]}`}
    >
      {/* eyes */}
      <div className="absolute right-1 top-2 w-[6px] h-[6px] rounded-full bg-bg" />
      <div className="absolute right-1 bottom-2 w-[6px] h-[6px] rounded-full bg-bg" />
      {/* shine */}
      <div className="absolute right-2.5 top-1 w-1 h-1 rounded-full bg-white/25" />
    </div>
  );
}

// Body — straight tube, same rotation logic as head/tail.
export function SnakeBody({ direction }: DirectionProps) {
  return (
    <div
      className={`w-full h-full bg-accent-dim ${rotationClass[direction]}`}
    />
  );
}

// Tail — rounded tip on the right (end of snake), flat left connects to body.
// direction = the direction the tip points (away from the body).
export function SnakeTail({ direction }: DirectionProps) {
  return (
    <div
      className={`w-full h-full bg-accent-dim rounded-r-full opacity-75 ${rotationClass[direction]}`}
    />
  );
}
