import type { Route } from "./+types/home";
import { Page } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" }
  ];
}

export default function Home() {
  return <Page />;
}
