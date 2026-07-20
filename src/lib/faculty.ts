import pArif from "@/assets/fac-arif.png.asset.json";
import pProgga from "@/assets/fac-progga.jpg.asset.json";
import pWazih from "@/assets/fac-wazih.png.asset.json";
import pHijbullah from "@/assets/fac-hijbullah.jpg.asset.json";
import pIrin from "@/assets/fac-irin.jpg.asset.json";
import pMahmuda from "@/assets/fac-mahmuda.png.asset.json";
import pMary from "@/assets/fac-mary.jpg.asset.json";
import pSomaiya from "@/assets/fac-somaiya.png.asset.json";
import pSajia from "@/assets/fac-sajia.jpg.asset.json";

const u = (id: string, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;


export type Teacher = {
  id: string;
  name: string;
  title: string;
  subject: string;
  photo: string;
  bio: string;
  qualifications: string[];
  experience: string;
  email: string;
  personalMessage?: string;
};

const defaultMessage =
  "Teaching at John Amos has been a journey of discovery for both my students and myself. Every day in the classroom reminds me that learning is a partnership — built on curiosity, patience and the courage to ask questions. I am grateful to walk this path alongside young minds who inspire me to keep growing as an educator.";

export const faculty: Teacher[] = [
  {
    id: "muhammad-arif-mujtaba-kamal", name: "Muhammad Arif Mujtaba Kamal", title: "Head Teacher",
    subject: "School Leadership & Academics", photo: pArif.url,
    bio: "As Head Teacher, Muhammad Arif Mujtaba Kamal leads the academic vision of John Amos International School with warmth, rigour and a deep commitment to every child's growth.",
    qualifications: ["M.A. in English Language & Literature", "Post-Graduate Diploma in Educational Leadership", "Cambridge Professional Development Certificate"],
    experience: "15+ years in international schooling", email: "headteacher@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "progga-paromita-ghosh", name: "Progga Paromita Ghosh", title: "Academic Supervisor",
    subject: "Curriculum & Academic Oversight", photo: pProgga.url,
    bio: "Progga Paromita Ghosh oversees curriculum quality, teaching standards and academic progression across all key stages.",
    qualifications: ["M.A. in Education", "B.A. Honours in English", "Certified Cambridge Curriculum Coordinator"],
    experience: "10+ years in academic leadership", email: "academic@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "wazih-ullah-tanzim", name: "Wazih Ullah Tanzim", title: "Admin",
    subject: "School Administration & Operations", photo: pWazih.url,
    bio: "Wazih Ullah Tanzim manages the day-to-day administration of the school, ensuring smooth operations for students, parents and staff.",
    qualifications: ["BBA in Management", "Diploma in Educational Administration"],
    experience: "6 years in school administration", email: "admin@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "hijbullah-ghalib", name: "Hijbullah Ghalib", title: "Class Teacher",
    subject: "Islamic Studies & Moral Education", photo: pHijbullah.url,
    bio: "Hijbullah Ghalib guides young learners in Islamic studies and character education, nurturing values alongside academics.",
    qualifications: ["Dawrah-e-Hadith (Kamil)", "B.A. in Islamic Studies"],
    experience: "5 years teaching", email: "hijbullah@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "irin-rashid-nipa", name: "Irin Rashid Nipa", title: "Class Teacher",
    subject: "Primary Class Teacher", photo: pIrin.url,
    bio: "Irin Rashid Nipa creates a caring, structured classroom where young children build confidence, curiosity and strong learning habits.",
    qualifications: ["B.Ed in Primary Education", "B.A. Honours"],
    experience: "6 years with young learners", email: "irin@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "mahmuda-akter", name: "Mahmuda Akter", title: "Class Teacher",
    subject: "Primary Class Teacher", photo: pMahmuda.url,
    bio: "Mahmuda Akter brings warmth and patience into every lesson, helping students develop both literacy and life skills.",
    qualifications: ["M.A. in Bangla", "B.Ed"],
    experience: "8 years teaching", email: "mahmuda@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "mary-sixjan-capistrano", name: "Mary Six Jan I. Capistrano", title: "Class Teacher",
    subject: "English Language — International Faculty", photo: pMary.url,
    bio: "Mary Six Jan I. Capistrano joins John Amos from the Philippines, bringing an international lens and strong English-language teaching to our classrooms.",
    qualifications: ["Bachelor of Secondary Education — Major in English (Philippines)", "TESOL Certified"],
    experience: "7 years in international schools", email: "mary@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "somaiya-binta-islam", name: "Somaiya Binta Islam", title: "Class Teacher",
    subject: "Primary Class Teacher", photo: pSomaiya.url,
    bio: "Somaiya Binta Islam supports her students with a calm, encouraging classroom culture and a passion for reading and inquiry.",
    qualifications: ["B.A. Honours in English", "Diploma in Early Childhood Care"],
    experience: "4 years teaching", email: "somaiya@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "syeda-sajia-afrin-rothy", name: "Syeda Sajia Afrin Rothy", title: "Class Teacher",
    subject: "Primary Class Teacher", photo: pSajia.url,
    bio: "Syeda Sajia Afrin Rothy blends creative activities with clear routines, helping children love school from the very first day.",
    qualifications: ["M.A. in English", "B.Ed"],
    experience: "5 years teaching", email: "sajia@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "sarah-rahman", name: "Ms. Sarah Rahman", title: "Principal",
    subject: "School Leadership", photo: u("photo-1573496359142-b8d87734a5a2"),
    bio: "Sarah leads John Amos with a deep belief that every child can flourish in the right environment.",
    qualifications: ["M.Ed in Educational Leadership — University of Dhaka", "B.A. Honours in English — North South University", "Cambridge International Diploma for Teachers & Trainers"],
    experience: "18 years in international education", email: "principal@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "ahmed-karim", name: "Mr. Ahmed Karim", title: "Head of Cambridge Primary",
    subject: "Mathematics", photo: u("photo-1560250097-0b93528c311a"),
    bio: "Ahmed makes mathematics tactile and joyful through real-world problem solving.",
    qualifications: ["M.Sc Mathematics — BUET", "Cambridge Primary Maths Teacher Certificate"],
    experience: "12 years teaching", email: "ahmed@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "fatima-chowdhury", name: "Ms. Fatima Chowdhury", title: "Senior English Teacher",
    subject: "English Language & Literature", photo: u("photo-1494790108377-be9c29b29330"),
    bio: "Fatima nurtures confident readers and fearless writers from the earliest years.",
    qualifications: ["MA English Literature — University of Dhaka", "CELTA — Cambridge"],
    experience: "10 years", email: "fatima@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "rashed-islam", name: "Mr. Rashed Islam", title: "Science Coordinator",
    subject: "Physics & General Science", photo: u("photo-1507003211169-0a1dd7228f2d"),
    bio: "Rashed brings the lab into every lesson — inquiry, experiment, wonder.",
    qualifications: ["M.Sc Physics — Jahangirnagar University", "Cambridge Lower Secondary Science Cert."],
    experience: "9 years", email: "rashed@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "nadia-haque", name: "Ms. Nadia Haque", title: "Early Years Lead",
    subject: "Foundation Stage", photo: u("photo-1580489944761-15a19d654956"),
    bio: "Nadia designs a play-rich, language-rich start to school life.",
    qualifications: ["B.Ed Early Childhood Education", "Montessori Diploma"],
    experience: "8 years with young learners", email: "nadia@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "tanvir-ahmed", name: "Mr. Tanvir Ahmed", title: "ICT Teacher",
    subject: "Computing & Digital Literacy", photo: u("photo-1568602471122-7832951cc4c5"),
    bio: "Tanvir turns curiosity into code — from Scratch to Python.",
    qualifications: ["B.Sc Computer Science — IUT", "Microsoft Certified Educator"],
    experience: "6 years", email: "tanvir@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "anika-sultana", name: "Ms. Anika Sultana", title: "Art & Design Teacher",
    subject: "Visual Arts", photo: u("photo-1438761681033-6461ffad8d80"),
    bio: "Anika opens children's eyes to colour, line and the courage to create.",
    qualifications: ["BFA Fine Arts — Dhaka University", "Cambridge Art & Design Pathway"],
    experience: "7 years", email: "anika@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "imran-hossain", name: "Mr. Imran Hossain", title: "Physical Education",
    subject: "Sports & Wellbeing", photo: u("photo-1531427186611-ecfd6d936c79"),
    bio: "Imran believes physical confidence builds emotional confidence.",
    qualifications: ["B.Sc Physical Education", "Football Coaching Level 2"],
    experience: "9 years", email: "imran@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "samira-khan", name: "Ms. Samira Khan", title: "IELTS & Spoken English Lead",
    subject: "English for International Exams", photo: u("photo-1551836022-d5d88e9218df"),
    bio: "Samira coaches learners to speak English with clarity, fluency and confidence.",
    qualifications: ["MA Applied Linguistics — University of Leeds, UK", "IELTS Examiner (Trained)"],
    experience: "11 years", email: "samira@johnamosbd.com", personalMessage: defaultMessage,
  },
];

export const directors = [
  { name: "Mr. M. A. Hannan", role: "Chairman", photo: u("photo-1556157382-97eda2d62296"), bio: "A community leader with two decades of investment in education in Mymensingh." },
  { name: "Dr. Salma Akter", role: "Vice Chair", photo: u("photo-1573497019940-1c28c88b4f3e"), bio: "Educationist and child psychologist guiding the school's pedagogical direction." },
  { name: "Mr. Reza Hossain", role: "Director, Finance", photo: u("photo-1519085360753-af0119f7cbe7"), bio: "Chartered accountant ensuring sustainable growth and transparent governance." },
  { name: "Ms. Tahmina Begum", role: "Director, Operations", photo: u("photo-1580489944761-15a19d654956"), bio: "Two decades of school operations and campus excellence." },
  { name: "Mr. Karim Uddin", role: "Director, Community", photo: u("photo-1500648767791-00dcc994a43e"), bio: "Building bridges between the school and the wider Mymensingh community." },
];

export const advisors = [
  { name: "Prof. Anwar Hossain", role: "Academic Advisor", photo: u("photo-1472099645785-5658abf4ff4e"), bio: "Former Dean of Education, Dhaka University. Curriculum and standards advisor." },
  { name: "Dr. Nasrin Jahan", role: "Wellbeing Advisor", photo: u("photo-1551836022-d5d88e9218df"), bio: "Child psychologist supporting our care and pastoral programmes." },
  { name: "Mr. James O'Connor", role: "Cambridge Liaison", photo: u("photo-1519085360753-af0119f7cbe7"), bio: "Cambridge International specialist, ex-British Council Bangladesh." },
];