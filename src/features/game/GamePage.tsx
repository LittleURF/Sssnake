// Entry-point component for the /game route.
// Composes GameHud + GameBoard, manages game-over modal overlay.
// Drives useSnakeEngine and passes state down as props.

export function GamePage() {
  return (
    <div className="p-8">
      <p className="text-text-muted">Game — in progress</p>
    </div>
  );
}
