import { createFileRoute } from "@tanstack/react-router";
import { HighscoresPage } from "../features/highscores/HighscoresPage";

export const Route = createFileRoute("/highscores")({
  component: HighscoresPage,
});
