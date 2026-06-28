import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/apiClient";

interface HighscoreDto {
  score: number;
  date: string;
}

const getHighscores = (): Promise<HighscoreDto[]> => {
  return api.get("/highscores");
};
export const getHighscoresQueryOptions = () => {
  return queryOptions({
    queryKey: ["highscores"],
    queryFn: getHighscores,
    select: (highscoreDtos) => highscoreDtos.map((h) => h),
  });
};

export const useHighscores = () => {
  return useQuery(getHighscoresQueryOptions());
};
