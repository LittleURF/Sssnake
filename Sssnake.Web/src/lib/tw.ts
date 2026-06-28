import { extendTailwindMerge } from "tailwind-merge";

export const twMergeExtended = extendTailwindMerge({
  extend: {
    classGroups: {
      // @ts-expect-error Nope
      "text-glow": ["text-glow-accent"],
      "box-glow": ["box-glow-accent"],
    },
  },
});
