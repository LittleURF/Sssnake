import { motion } from "framer-motion";
import {
  selectLatestScore,
  useHighscoresStore,
} from "../../highscores/store/highscoresStore";
import { Link } from "@tanstack/react-router";
import Rating from "@mui/material/Rating";
import { Button } from "../../../components/Button/Button";
import { useState, type SyntheticEvent } from "react";

interface GameOverOverlayProps {
  onPlayAgain: () => void;
}

export function GameOverOverlay({ onPlayAgain }: GameOverOverlayProps) {
  const [rating, setRating] = useState<number | undefined>();
  const latestScore = useHighscoresStore(selectLatestScore);

  function handleRatingChange(_: SyntheticEvent, value: number | null): void {
    if (value === null) {
      return;
    }

    setRating(value);
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4 px-8 py-6 bg-bg-elevated border border-border rounded-xl box-glow-accent"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <span className="font-game text-3xl text-danger tracking-widest uppercase">
          Game Over
        </span>

        <div className="flex flex-col items-center gap-1">
          <span className="font-body text-sm text-text-secondary uppercase tracking-wider">
            Score
          </span>
          <span className="font-game text-5xl text-accent text-glow-accent">
            {latestScore?.score ?? 0}
          </span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <span className="font-body text-xs text-text-secondary uppercase tracking-wider">
            Rate the run
          </span>
          <Rating value={rating} onChange={handleRatingChange} />
        </div>

        <Button onClick={onPlayAgain} className="mt-6">
          Play Again
        </Button>

        <Link to="/highscores">
          <Button className="mt-2">Highscores</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
