import { create } from "zustand";

export interface GameStore {
  highscores: number[];
  submitScore: (score: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  highscores: [],
  submitScore: (score) =>
    set((state) => ({ highscores: [...state.highscores, score] })),
}));
