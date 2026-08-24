import pArif from "@/assets/fac-arif.png.asset.json";
import pProgga from "@/assets/fac-progga.jpg.asset.json";
import pWazih from "@/assets/fac-wazih.png.asset.json";
import pHijbullah from "@/assets/fac-hijbullah.jpg.asset.json";
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
    bio: "Muhammad Arif Mujtaba Kamal is the Acting Principal of John Amos International School, Mymensingh, and Center Manager of John Amos Center. An English language education specialist, he brings academic leadership, teacher training and public-speaking experience to the school community.",
    qualifications: [
      "M.A. and B.A. (Honours) in English Language & Literature — University of Chittagong",
      "1st position in the University of Chittagong ‘D’ Unit Admission Test",
      "Cambridge International certified — Integrating Learning and Assessment (ILA)",
      "Advanced leadership training — British Council and Bangladesh Youth Leadership Center (BYLC)",
      "AI in English Classroom Management training — GIST International Foundation / US Embassy",
    ],
    experience: "Acting Principal, John Amos International School • Former Head of Research & Training, English Olympiad", email: "headteacher@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "progga-paromita-ghosh", name: "Progga Paromita Ghosh", title: "Academic Supervisor",
    subject: "Curriculum & Academic Oversight", photo: pProgga.url,
    bio: "Progga Paromita Ghosh is an Academic Supervisor, educator and creative learning leader with nine years of teaching experience. She oversees curriculum delivery, academic assessment and classroom standards while building motivating learning experiences for students and families.",
    qualifications: [
      "M.Sc. in Biotechnology — Bangladesh Agricultural University (GPA 3.48/4.00)",
      "B.Sc. in Biotechnology & Genetic Engineering — Sylhet Agricultural University (GPA 3.53/4.00)",
      "9 years of teaching experience in curriculum development, assessment and creative learning",
      "Experienced Spoken English, Biology, Art, Recitation and Dance Teacher",
      "Academic and administrative leadership, school branding and parent engagement",
    ],
    experience: "9 years in teaching, academic supervision and creative learning leadership", email: "academic@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "wazih-ullah-tanzim", name: "Wazih Ullah Tanzim", title: "Admin",
    subject: "School Administration & Operations", photo: pWazih.url,
    bio: "Wazih Ullah Tanzim serves John Amos International School as a Teacher, Administrator and Web Developer, supporting STEM learning, school operations and the school’s digital infrastructure.",
    qualifications: [
      "B.Sc. in Computer Science & Engineering — Premier University Chattogram (CGPA 3.96/4.00)",
      "Strong academic foundation in Science — GPA 5.00 in S.S.C. and GPA 4.58 in H.S.C.",
      "Lecturer experience at Premier University, teaching Pattern Recognition, Numerical Methods and Discrete Mathematics",
      "First author of BD Sports-10, a 3,000-video Bangladeshi sports dataset published in Data in Brief (Elsevier)",
      "Advanced programming skills in Python, C, C++, JavaScript, MySQL, PHP and Java",
      "Built digital solutions including a PHP-Laravel University Management System, online book shop and React-Node.js portfolio",
      "Web development experience in WordPress customization, SMTP integration and UI troubleshooting",
      "Certified in Deep Learning, Generative AI, Data Science and Cybersecurity; twice earned first-place merit scholarships",
    ],
    experience: "Teacher, Administrator & Web Developer at John Amos International School • Former Lecturer, Premier University", email: "admin@johnamosbd.com", personalMessage: defaultMessage,
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
    bio: "Somaiya Binta Islam is a Fisheries Scientist and Class Teacher who brings academic discipline, creativity and strong organizational leadership to the classroom. Her science background and student-focused approach help create engaging, supportive learning experiences for young learners.",
    qualifications: [
      "M.S. in Fisheries Technology — Bangladesh Agricultural University (2025–present)",
      "B.Sc. (Hons) in Fisheries — Sylhet Agricultural University (2020–2025), CGPA 3.588",
      "GPA 5.00 in both HSC and SSC (Science), Dhaka Board",
      "Startup Co-ordinator, HULT Prize — Sylhet Agricultural University (2024–2025)",
      "Co-Head of Human Resources, Bangladesh Agricultural Olympiad (2022–present)",
      "Organizing Co-ordinator, Binodhan Shangha — Sylhet Agricultural University (2024–2025)",
      "Skilled in MS Office, graphic design, English, Bangla and Arabic",
      "First runner-up, Sylhet Debate Competition (2023); Best Volunteer, Bangladesh Agricultural Olympiad (2023 & 2024)",
    ],
    experience: "Class Teacher • Fisheries Scientist • Student leadership and event coordination experience", email: "somaiya@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "syeda-sajia-afrin-rothy", name: "Syeda Sajia Afrin Rothy", title: "Class Teacher",
    subject: "Primary Class Teacher", photo: pSajia.url,
    bio: "Syeda Sajia Afrin Rothy blends creative activities with clear routines, helping children love school from the very first day.",
    qualifications: ["M.A. in English", "B.Ed"],
    experience: "5 years teaching", email: "sajia@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "hijbullah-ghalib", name: "Hijbullah Ghalib", title: "Class Teacher",
    subject: "Islamic Studies & Moral Education", photo: pHijbullah.url,
    bio: "Hijbullah Ghalib guides young learners in Islamic studies and character education, nurturing values alongside academics.",
    qualifications: ["Dawrah-e-Hadith (Kamil)", "B.A. in Islamic Studies"],
    experience: "5 years teaching", email: "hijbullah@johnamosbd.com", personalMessage: defaultMessage,
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