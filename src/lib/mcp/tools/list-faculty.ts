import { defineTool } from "@lovable.dev/mcp-js";
import { faculty } from "@/lib/faculty";

export default defineTool({
  name: "list_faculty",
  title: "List faculty",
  description:
    "List all teachers and staff of John Amos International School with their id, name, title and subject.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rows = faculty.map((t) => ({
      id: t.id,
      name: t.name,
      title: t.title,
      subject: t.subject,
      profileUrl: `/faculty/${t.id}`,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { faculty: rows },
    };
  },
});
