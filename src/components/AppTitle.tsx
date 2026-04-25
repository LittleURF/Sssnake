import { twMergeExtended } from "../lib/tw";

export function AppTitle({ className }: { className?: string }) {
  return (
    <span
      className={twMergeExtended(
        "font-game font-black text-accent text-glow-accent tracking-widest cursor-default",
        className,
      )}
    >
      🐍 SSSNAKES
    </span>
  );
}
