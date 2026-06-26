import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { incrementVisitCounter } from "@/lib/site.functions";

export function VisitCounter() {
  const increment = useServerFn(incrementVisitCounter);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const counted = sessionStorage.getItem("jais-visit-counted");
      if (counted) return;
      sessionStorage.setItem("jais-visit-counted", "1");
      const result = await increment();
      if (!cancelled) setTotal(result.total);
    };
    run().catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [increment]);

  if (!total) return null;
  return <span>Visitor count: {total.toLocaleString()}</span>;
}
