import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Countdown } from "./components/Countdown";
import { GameBoard } from "./components/GameBoard";
import { GameOverOverlay } from "./components/GameOverOverlay";

export function GamePage() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="pt-8">
      <div className="relative inline-block">
        <GameBoard
          isActive={!showCountdown && !isGameOver}
          onGameOver={() => setIsGameOver(true)}
        />
        <AnimatePresence>{isGameOver && <GameOverOverlay />}</AnimatePresence>
        <AnimatePresence>
          {showCountdown && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <Countdown
                duration={3}
                onComplete={() => setShowCountdown(false)}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
