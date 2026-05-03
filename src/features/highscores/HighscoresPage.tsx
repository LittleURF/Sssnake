import { Link } from "@tanstack/react-router";
import { useHighscoresStore } from "./store/highscoresStore";
import { Button } from "../../components/Button/Button";
import { ScoreRow } from "./components/ScoreRow";

export function HighscoresPage() {
  const highscores = useHighscoresStore((s) => s.highscores);
  const highscoresSorted = highscores.sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col items-center gap-6 pt-10 w-full max-w-sm px-4">
      <h2 className="font-game text-2xl text-accent text-glow-accent tracking-widest uppercase">
        Highscores
      </h2>

      {highscores.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-8">
          <p className="font-body text-text-muted text-sm">
            No scores yet. Play a game!
          </p>
          <Link to="/game">
            <Button>PLAY</Button>
          </Link>
        </div>
      ) : (
        <>
          <ol className="w-full flex flex-col gap-2">
            {highscoresSorted.map((entry, i) => (
              <ScoreRow key={entry.date} entry={entry} rank={i + 1} />
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
