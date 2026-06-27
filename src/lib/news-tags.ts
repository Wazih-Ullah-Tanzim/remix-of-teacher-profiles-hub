export const TAG_COLORS: Record<string, string> = {
  Admissions: "bg-blue-100 text-blue-800 border-blue-200",
  Event: "bg-green-100 text-green-800 border-green-200",
  Academics: "bg-purple-100 text-purple-800 border-purple-200",
  Notice: "bg-orange-100 text-orange-800 border-orange-200",
  Programme: "bg-teal-100 text-teal-800 border-teal-200",
};

export function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? "bg-secondary text-primary border-border";
}
