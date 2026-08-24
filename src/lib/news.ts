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
  { slug: "swimming-class-registration-2026", date: "25 Aug 2026", tag: "Programme", title: "Registration for swimming classes is now open", body: "Students can now register for upcoming swimming classes.", details: [] },
  { slug: "spoken-english-registration-2026", date: "25 Aug 2026", tag: "Programme", title: "Registration for Spoken English is now open", body: "Registration is ongoing for the next Spoken English course batch.", details: [] },
  { slug: "ielts-mock-test-registration-2026", date: "25 Aug 2026", tag: "Programme", title: "IELTS Mock Test registration is now open", body: "Register now for the upcoming IELTS Mock Test at our official test centre.", details: [] },
  { slug: "admissions-open-2026-27", date: "20 Jun 2026", tag: "Admissions", title: "Admissions open for Standard I–V (2026-27)", body: "Limited seats. Online and on-campus applications accepted.", href: "/admissions", details: ["Applications are open for the 2026-2027 session.", "Parents may apply online or visit the campus admissions office.", "Online admission applicants receive an extra 10% discount as part of the current admission campaign."] },
  { slug: "new-ielts-batch-june", date: "10 May 2026", tag: "Programme", title: "New IELTS batch starting June", body: "Spoken English batches also open for registration.", href: "/english-courses", details: ["British Council IELTS Registration Centre guidance is available through the school office.", "Students and guardians can speak to the admissions desk for batch timing and placement guidance."] },
];
