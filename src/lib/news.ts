export type Notice = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  body: string;
  details: string[];
  href?: string;
};

export const notices: Notice[] = [
  { slug: "admissions-open-2026-27", date: "20 Jun 2026", tag: "Admissions", title: "Admissions open for Standard I–V (2026-27)", body: "Limited seats. Online and on-campus applications accepted.", href: "/admissions", details: ["Applications are open for the 2026-2027 session.", "Parents may apply online or visit the campus admissions office.", "Online admission applicants receive an extra 10% discount as part of the current admission campaign."] },
  { slug: "pitha-utsob-gallery-live", date: "14 Jun 2026", tag: "Event", title: "Pitha Utsob photo gallery now live", body: "View the highlights from this year's winter festival.", href: "/gallery/pitha-utsob", details: ["The gallery includes student stalls, family moments and cultural performances.", "Parents can browse the full photo collection from the Gallery menu."] },
  { slug: "cambridge-checkpoint-dates", date: "02 Jun 2026", tag: "Academics", title: "Cambridge Checkpoint dates announced", body: "Year 6 examination schedule has been shared with parents.", href: "/academics", details: ["The academic office has published the checkpoint preparation timeline.", "Subject teachers will share revision plans, mock assessments and parent conference dates."] },
  { slug: "summer-holiday-schedule", date: "21 May 2026", tag: "Notice", title: "Summer holiday schedule", body: "The school will be closed from 5 Jul to 13 Jul. Classes resume 14 Jul.", href: "/academic-calendar", details: ["Friday remains the weekly holiday and Saturday is reserved for ECA activities where scheduled.", "Please follow the academic calendar page for TD and OFF day updates."] },
  { slug: "new-ielts-batch-june", date: "10 May 2026", tag: "Programme", title: "New IELTS batch starting June", body: "Spoken English batches also open for registration.", href: "/english-courses", details: ["British Council IELTS Registration Centre guidance is available through the school office.", "Students and guardians can speak to the admissions desk for batch timing and placement guidance."] },
];
