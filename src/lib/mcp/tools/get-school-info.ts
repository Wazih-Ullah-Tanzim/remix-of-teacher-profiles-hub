import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  name: "John Amos International School",
  shortName: "JAIS",
  curriculum: "Cambridge curriculum, English Medium",
  location: "19/D Shaheb Ali Road, Mymensingh 2200, Bangladesh",
  website: "https://johnamosbd.com",
  emails: {
    general: "info@johnamosbd.com",
    admissions: "admission@johnamosbd.com",
  },
  whatsapp: "+8801786412300",
  admissions: {
    session: "2026-2027",
    levels: "Play group through Standard V (expanding)",
    applyOnline: "/admissions",
    note: "Online admission applicants receive an extra 10% discount during the current campaign.",
  },
  keyPages: [
    { title: "Admissions", url: "/admissions" },
    { title: "Academics", url: "/academics" },
    { title: "Academic calendar", url: "/academic-calendar" },
    { title: "Our faculty", url: "/faculty" },
    { title: "Campus & facilities", url: "/campus" },
    { title: "English courses & IELTS", url: "/english-courses" },
    { title: "Gallery", url: "/gallery" },
    { title: "Blog", url: "/blog" },
    { title: "Alumni", url: "/alumni" },
    { title: "Careers", url: "/career" },
    { title: "Contact", url: "/contact" },
  ],
};

export default defineTool({
  name: "get_school_info",
  title: "Get school info",
  description:
    "Get public information about John Amos International School: contact details, location, admissions overview and key website pages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
    structuredContent: info,
  }),
});
