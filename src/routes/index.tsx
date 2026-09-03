import { createFileRoute } from "@tanstack/react-router";
import { PortfolioApp } from "@/components/portfolio-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PortfolioApp />;
}
