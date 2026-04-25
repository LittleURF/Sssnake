const COLS = 15;
const ROWS = 17;
const CELL_SIZE = 32; // px

export function GameBoard() {
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
      {Array.from({ length: COLS * ROWS }).map((_, i) => (
        <div key={i} className="border border-border/20" />
      ))}
    </div>
  );
}
