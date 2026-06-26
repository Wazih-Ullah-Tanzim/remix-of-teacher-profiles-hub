const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  { slug: "why-cambridge-curriculum-matters", title: "Why the Cambridge Curriculum Matters in 2026", excerpt: "How an international framework shapes confident, curious, globally-minded learners from day one.", cover: u("photo-1503676260728-1c00da094a0b"), author: "Ms. Sarah Rahman", date: "12 Jan 2026", category: "Academics", readTime: "6 min" },
  { slug: "early-years-play-based-learning", title: "Play-Based Learning in the Early Years", excerpt: "Inside the classrooms where every game has a learning intention.", cover: u("photo-1509062522246-3755977927d7"), author: "Ms. Nadia Haque", date: "20 Jan 2026", category: "Early Years", readTime: "5 min" },
  { slug: "building-confident-readers", title: "Building Confident Readers from Age Five", excerpt: "Our phonics-rich, story-led approach to literacy.", cover: u("photo-1512820790803-83ca734da794"), author: "Ms. Fatima Chowdhury", date: "02 Feb 2026", category: "Literacy", readTime: "7 min" },
  { slug: "mathematics-without-fear", title: "Mathematics Without Fear", excerpt: "Concrete, pictorial, abstract — how we make maths joyful.", cover: u("photo-1509228468518-180dd4864904"), author: "Mr. Ahmed Karim", date: "15 Feb 2026", category: "Mathematics", readTime: "6 min" },
  { slug: "science-fair-2026", title: "Inside Our Science Fair 2026", excerpt: "From volcanoes to vertical farms — what our students built.", cover: u("photo-1532094349884-543bc11b234d"), author: "Mr. Rashed Islam", date: "01 Mar 2026", category: "STEM", readTime: "5 min" },
  { slug: "language-club-stories", title: "Language Club: Stories from Our Speakers", excerpt: "Bangla, English, Arabic and beyond — voices from our weekly club.", cover: u("photo-1457369804613-52c61a468e7d"), author: "Language Club", date: "12 Mar 2026", category: "Clubs", readTime: "4 min" },
  { slug: "ielts-tips-from-trainers", title: "IELTS Tips From Our British Council Trainers", excerpt: "Five things that move a candidate from 6.5 to 7.5.", cover: u("photo-1434030216411-0b793f4b4173"), author: "IELTS Faculty", date: "25 Mar 2026", category: "IELTS", readTime: "8 min" },
  { slug: "parenting-the-cambridge-learner", title: "Parenting the Cambridge Learner", excerpt: "What parents can do at home to amplify school learning.", cover: u("photo-1511895426328-dc8714191300"), author: "Counselling Team", date: "05 Apr 2026", category: "Parenting", readTime: "6 min" },
  { slug: "art-as-academic-discipline", title: "Art as an Academic Discipline", excerpt: "Why art is not a break from learning — it is learning.", cover: u("photo-1513475382585-d06e58bcb0e0"), author: "Art Department", date: "18 Apr 2026", category: "Arts", readTime: "5 min" },
  { slug: "preparing-for-igcse", title: "Preparing for IGCSE: A Five-Year Plan", excerpt: "How we sequence skills from Year 5 to Year 10.", cover: u("photo-1456513080510-7bf3a84b82f8"), author: "Academic Office", date: "30 Apr 2026", category: "IGCSE", readTime: "9 min" },
  { slug: "wellbeing-in-school", title: "Wellbeing Is the Curriculum's Foundation", excerpt: "Counselling, health and a school culture of kindness.", cover: u("photo-1488521787991-ed7bbaae773c"), author: "Ms. Sarah Rahman", date: "12 May 2026", category: "Wellbeing", readTime: "6 min" },
  { slug: "global-perspectives", title: "Global Perspectives: Local Roots, World Citizens", excerpt: "How we connect Mymensingh to the world in every lesson.", cover: u("photo-1532094349884-543bc11b234d"), author: "International Office", date: "25 May 2026", category: "Global", readTime: "7 min" },
  { slug: "boishakh-on-campus", title: "Boishakh on Campus: Heritage in Action", excerpt: "Why we treat Pohela Boishakh as a learning festival.", cover: u("photo-1535905557558-afc4877a26fc"), author: "Cultural Committee", date: "14 Apr 2026", category: "Culture", readTime: "4 min" },
  { slug: "library-favourites-of-the-year", title: "Library Favourites of the Year", excerpt: "Our librarians' picks for primary and secondary readers.", cover: u("photo-1521587760476-6c12a4b040da"), author: "School Library", date: "02 Jun 2026", category: "Library", readTime: "5 min" },
  { slug: "alumni-spotlight-aisha", title: "Alumni Spotlight: From John Amos to Cambridge UK", excerpt: "Aisha shares her journey from Year 6 here to Cambridge undergrad.", cover: u("photo-1494790108377-be9c29b29330"), author: "Alumni Office", date: "15 Jun 2026", category: "Alumni", readTime: "6 min" },
  { slug: "yearbook-2026-behind-the-scenes", title: "Yearbook 2026: Behind the Scenes", excerpt: "How students designed, wrote and photographed this year's edition.", cover: u("photo-1481627834876-b7833e8f5570"), author: "Yearbook Committee", date: "20 Jun 2026", category: "Yearbook", readTime: "5 min" },
].map((p) => ({
  ...p,
  content: [
    `Welcome to "${p.title}". This article shares a closer look at what's happening inside John Amos International School and the thinking behind our approach.`,
    "At John Amos, every initiative — from a classroom routine to a campus-wide festival — is designed around one belief: every child can flourish in the right environment. The Cambridge framework gives us the rigour; our community gives it the warmth.",
    "In this piece, we explore the principles, the practice, and the small moments that make our school what it is. Teachers, students, parents and alumni all contribute to the story.",
    "If you'd like to learn more, visit our campus, talk to our teachers, or read more of our journal entries. We'd love to welcome you.",
  ],
}));
