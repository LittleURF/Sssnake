import { createFileRoute } from "@tanstack/react-router";
import { StartPage } from "../features/start/StartPage";

export const Route = createFileRoute("/")({
  component: StartPage,
});
