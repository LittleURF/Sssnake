import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GameSession } from "./components/GameSession";
import { GameOverOverlay } from "./components/GameOverOverlay";

export function GamePage() {
  const [gameKey, setGameKey] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePlayAgain = () => {
    setGameKey((k) => k + 1);
    setIsGameOver(false);
  };

  return (
    <div className="pt-8">
      <div className="relative inline-block">
        <GameSession
          key={gameKey}
          isGameOver={isGameOver}
          onGameOver={() => setIsGameOver(true)}
        />
        <AnimatePresence>
          {isGameOver && <GameOverOverlay onPlayAgain={handlePlayAgain} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
