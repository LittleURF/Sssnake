import { twMergeExtended } from "../../../lib/tw";
import { RANK_COLORS, RANK_LABELS } from "../consts";

export function RankBadge({ rank }: { rank: number }) {
  const colorClass = RANK_COLORS[rank] ?? "text-text-muted";
  const label = RANK_LABELS[rank] ?? `${rank}TH`;
  return (
    <span
      className={twMergeExtended(
        "font-game text-xs w-8 text-right tabular-nums",
        colorClass,
      )}
    >
      {label}
    </span>
  );
}
