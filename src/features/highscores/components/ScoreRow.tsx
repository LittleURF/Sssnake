import { motion } from "framer-motion";
import { twMergeExtended } from "../../../lib/tw";
import type { HighscoreEntry } from "../../game/store/gameStore";
import { RankBadge } from "./RankBadge";
import { RANK_COLORS } from "../consts";

export function ScoreRow({
  entry,
  rank,
}: {
  entry: HighscoreEntry;
  rank: number;
}) {
  const isTop3 = rank <= 3;
  return (
    <motion.li
      className={twMergeExtended(
        "flex items-center gap-4 px-4 py-3 rounded-lg border transition-colors",
        isTop3
          ? "bg-bg-elevated border-border"
          : "bg-bg-surface border-transparent",
      )}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: rank * 0.05 }}
    >
      <RankBadge rank={rank} />

      <span
        className={twMergeExtended(
          "font-game text-2xl tabular-nums flex-1",
          RANK_COLORS[rank] ?? "text-text-primary",
          rank === 1 && "text-glow-accent",
        )}
      >
        {entry.score}
      </span>

      <span className="font-body text-xs text-text-muted">
        {formatDate(entry.date)}
      </span>
    </motion.li>
  );
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
