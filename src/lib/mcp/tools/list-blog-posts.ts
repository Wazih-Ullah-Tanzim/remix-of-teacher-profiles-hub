import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/lib/blog";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List public blog articles from the school, optionally filtered by category or a search term.",
  inputSchema: {
    category: z.string().optional().describe("Optional category filter, e.g. 'Academics'."),
    search: z.string().optional().describe("Optional case-insensitive search over title and excerpt."),
    limit: z.number().int().min(1).max(50).optional().describe("Maximum posts to return (default 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search, limit }) => {
    const cat = category?.trim().toLowerCase();
    const q = search?.trim().toLowerCase();
    const rows = blogPosts
      .filter((p) => !cat || p.category.toLowerCase() === cat)
      .filter((p) => !q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q))
      .slice(0, limit ?? 20)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        author: p.author,
        date: p.date,
        category: p.category,
        readTime: p.readTime,
        url: `/blog/${p.slug}`,
      }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { posts: rows },
    };
  },
});
