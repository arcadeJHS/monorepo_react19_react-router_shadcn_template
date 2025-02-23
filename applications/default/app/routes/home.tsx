import type { Route } from "./+types/home";
import { Page } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" }
  ];
}

export default function Home() {
  return <Page />;
}
