import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listFaculty from "./tools/list-faculty";
import getFacultyProfile from "./tools/get-faculty-profile";
import listNotices from "./tools/list-notices";
import listBlogPosts from "./tools/list-blog-posts";
import getSchoolInfo from "./tools/get-school-info";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "john-amos-international-school",
  title: "John Amos International School",
  version: "0.1.0",
  instructions:
    "Tools for John Amos International School (Mymensingh, Bangladesh). Use `get_school_info` for contact, location and admissions basics, `list_faculty` and `get_faculty_profile` for teacher profiles, `list_notices` for news and announcements, and `list_blog_posts` for articles. All tools are read-only.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getSchoolInfo, listFaculty, getFacultyProfile, listNotices, listBlogPosts],
});
