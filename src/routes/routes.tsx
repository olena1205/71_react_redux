import Lesson17 from "lessons/Lesson17/Lesson17";
import type { RoutePage } from "./types";
import Home from "pages/Home/Home";

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/lesson17", element: <Lesson17 /> },
  { path: "*", element: "Page not found" },
];