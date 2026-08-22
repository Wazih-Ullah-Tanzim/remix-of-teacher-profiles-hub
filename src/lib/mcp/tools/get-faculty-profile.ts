import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faculty } from "@/lib/faculty";

export default defineTool({
  name: "get_faculty_profile",
  title: "Get faculty profile",
  description:
    "Get the full public profile of one teacher — bio, qualifications, experience, subject and contact email.",
  inputSchema: {
    id: z
      .string()
      .min(1)
      .describe("Faculty id from list_faculty, e.g. 'muhammad-arif-mujtaba-kamal'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const key = id.trim().toLowerCase();
    const teacher =
      faculty.find((t) => t.id === key) ||
      faculty.find((t) => t.name.toLowerCase() === key);
    if (!teacher) throw new ToolError(`No faculty member found with id "${id}".`);
    const profile = {
      id: teacher.id,
      name: teacher.name,
      title: teacher.title,
      subject: teacher.subject,
      bio: teacher.bio,
      qualifications: teacher.qualifications,
      experience: teacher.experience,
      email: teacher.email,
      personalMessage: teacher.personalMessage ?? null,
      profileUrl: `/faculty/${teacher.id}`,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
