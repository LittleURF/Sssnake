import { useEffect, useEffectEvent } from "react";
import { motion } from "framer-motion";
import { useCountdown } from "../../../hooks/useCountdown";

interface CountdownProps {
  /** Duration of the countdown in seconds. */
  duration: number;
  onComplete?: () => void;
}

export function Countdown({ duration, onComplete }: CountdownProps) {
  const countdownCurrentNumber = useCountdown(duration);

  const callOnComplete = useEffectEvent(() => onComplete?.());

  useEffect(() => {
    if (countdownCurrentNumber === 0) {
      callOnComplete();
    }
  }, [countdownCurrentNumber]);

  return (
    <motion.div
      className="inline-flex items-center justify-center px-5 py-3 bg-bg-elevated/80 border border-border rounded-lg box-glow-accent backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {countdownCurrentNumber > 0 ? (
        <span className="font-game text-4xl text-accent text-glow-accent tracking-widest">
          {countdownCurrentNumber}
          <span className="text-text-muted">...</span>
        </span>
      ) : (
        <span className="font-game text-4xl text-accent text-glow-accent tracking-widest">
          {countdownCurrentNumber}
          <span className="text-text-muted">...</span>
        </span>
      )}
    </motion.div>
  );
}
