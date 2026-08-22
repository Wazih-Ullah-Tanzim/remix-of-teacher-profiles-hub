import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { notices } from "@/lib/news";

export default defineTool({
  name: "list_notices",
  title: "List news and notices",
  description:
    "List published school news, notices and announcements (admissions, events, academics).",
  inputSchema: {
    tag: z
      .string()
      .optional()
      .describe("Optional tag filter, e.g. 'Admissions', 'Event', 'Academics', 'Notice'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tag }) => {
    const wanted = tag?.trim().toLowerCase();
    const rows = notices
      .filter((n) => !wanted || n.tag.toLowerCase() === wanted)
      .map((n) => ({
        slug: n.slug,
        date: n.date,
        tag: n.tag,
        title: n.title,
        summary: n.body,
        details: n.details,
        url: `/academics/news/${n.slug}`,
      }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { notices: rows },
    };
  },
});
