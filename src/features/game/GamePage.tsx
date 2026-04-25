import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Countdown } from "./components/Countdown";
import { GameBoard } from "./components/GameBoard";

export function GamePage() {
  const [showCountdown, setShowCountdown] = useState(true);

  return (
    <div className="pt-8">
      <div className="relative inline-block">
        <GameBoard isActive={!showCountdown} />
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
