import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";

export function GameOverOverlay() {
  const lastScore = useGameStore(
    ({ highscores }: { highscores: number[] }) =>
      highscores[highscores.length - 1] ?? 0,
  );
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
            {lastScore}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
