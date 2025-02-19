import type { Route } from "./+types/home";
import { Page } from "../login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" }
  ];
}

export default function Login() {
  return <Page />;
}
