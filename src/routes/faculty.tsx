import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title: "Our Faculty — John Amos International School" }, { name: "description", content: "Meet the teachers and academic leadership of John Amos International School." }] }),
  component: () => <Outlet />,
});