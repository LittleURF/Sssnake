import { create } from "zustand";

export interface HighscoreEntry {
  score: number;
  date: string; // ISO date string
}

export interface HighscoresStore {
  highscores: HighscoreEntry[];
  submitScore: (score: number) => void;
}

export const useHighscoresStore = create<HighscoresStore>((set) => ({
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

export const selectLatestScore = (store: HighscoresStore) =>
  store.highscores.at(-1);

export const selectHighestScore = (s: HighscoresStore) =>
  s.highscores.reduce((max, e) => (e.score > max ? e.score : max), 0);
