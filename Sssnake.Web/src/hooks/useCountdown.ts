import { useState, useEffect } from "react";

/** @param duration - Initial countdown value in seconds. */
export const useCountdown = (duration: number) => {
  const [currentNumber, setCurrentNumber] = useState(duration);

  useEffect(() => {
    setCurrentNumber(duration);

    const intervalId = setInterval(() => {
      setCurrentNumber((n) => (n <= 1 ? 0 : n - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration]);

  return currentNumber;
};
