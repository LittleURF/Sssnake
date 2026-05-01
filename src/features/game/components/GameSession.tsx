import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Countdown } from "./Countdown";
import { GameBoard } from "./GameBoard";

export function GameSession({
  isGameOver,
  onGameOver,
}: {
  isGameOver: boolean;
  onGameOver: () => void;
}) {
  const [showCountdown, setShowCountdown] = useState(true);

  return (
    <div className="pt-8">
      <div className="relative inline-block">
        <GameBoard
          isActive={!showCountdown && !isGameOver}
          onGameOver={onGameOver}
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
