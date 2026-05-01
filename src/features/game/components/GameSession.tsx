import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Countdown } from "./Countdown";
import { GameBoard } from "./GameBoard";

export function GameSession({ onGameOver }: { onGameOver: () => void }) {
  const [showCountdown, setShowCountdown] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGameOver = () => {
    setIsGameOver(true);
    onGameOver();
  };

  return (
    <div className="pt-8">
      <div className="relative inline-block">
        <GameBoard
          isActive={!showCountdown && !isGameOver}
          onGameOver={handleGameOver}
        />
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
