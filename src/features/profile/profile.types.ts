// Types owned by the profile feature.

export interface Profile {
  id: string;
  username: string;
  snakeName: string;
  headColor: string;
  bodyColor: string;
}

export interface ProfileStats {
  bestScore: number;
  gamesPlayed: number;
  applesEaten: number;
  totalPlaytimeSeconds: number;
}
