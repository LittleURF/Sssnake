import { extendTailwindMerge } from "tailwind-merge";

export const twMergeExtended = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-glow": ["text-glow-accent"],
      "box-glow": ["box-glow-accent"],
    },
  },
});
