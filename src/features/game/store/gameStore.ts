import { create } from "zustand";

export interface HighscoreEntry {
  score: number;
  date: string; // ISO date string
}

export interface GameStore {
  highscores: HighscoreEntry[];
  submitScore: (score: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  highscores: [],
  submitScore: (score) =>
    set((state) => {
      const entry: HighscoreEntry = {
        score,
        date: new Date().toISOString(),
      };

      return { highscores: [...state.highscores, entry] };
    }),
}));

export const selectLatestScore = (store: GameStore) => store.highscores.at(-1);

export const selectHighestScore = (s: GameStore) =>
  s.highscores.reduce((max, e) => (e.score > max ? e.score : max), 0);
