import { Link } from "@tanstack/react-router";
import { Button } from "../../components/Button";

export function StartPage() {
  return (
    <div className="flex flex-col gap-4 pt-12">
      <Link to="/game">
        <Button className="w-full">PLAY</Button>
      </Link>
      <Link to="/highscores">
        <Button variant="secondary" className="w-full">
          HIGHSCORES
        </Button>
      </Link>
      <Link to="/profile">
        <Button variant="secondary" className="w-full">
          YOUR SNAKE
        </Button>
      </Link>
    </div>
  );
}
