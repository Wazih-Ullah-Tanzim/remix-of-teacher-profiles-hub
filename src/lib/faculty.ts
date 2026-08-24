import pArif from "@/assets/fac-arif.png.asset.json";
import pProgga from "@/assets/fac-progga.jpg.asset.json";
import pWazih from "@/assets/fac-wazih.png.asset.json";
import pHijbullah from "@/assets/fac-hijbullah.jpg.asset.json";
import pMahmuda from "@/assets/fac-mahmuda.png.asset.json";
import pMary from "@/assets/fac-mary.jpg.asset.json";
import pSomaiya from "@/assets/fac-somaiya.png.asset.json";
import pSajia from "@/assets/fac-sajia.jpg.asset.json";
import pSilvia from "@/assets/fac-silvia-islam.jpeg.asset.json";
import pTanzila from "@/assets/fac-tanzila-hossain.jpeg.asset.json";

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
    bio: "Mahmuda Akter (Sumi) is a Class Teacher with a strong academic foundation in Bangla language and literature. She brings higher-education teaching experience, thoughtful classroom leadership and a student-centred approach to supporting primary learners.",
    qualifications: [
      "M.A. in Bangla Language & Literature — Jatiya Kabi Kazi Nazrul Islam University (2011), CGPA 3.49/4.00, 1st Class 3rd",
      "B.A. (Honours) in Bangla Language & Literature — Jatiya Kabi Kazi Nazrul Islam University (2010), CGPA 3.34/4.00, 1st Class 5th",
      "Lecturer in Bangla, Fulbaria Royel College (2015–2018)",
      "Assistant Teacher, Faruk's Special Batch (2014–2015)",
      "Completed the 8th College Teacher Registration in Bangla",
      "Proficient in Bangla and English, Microsoft Office, internet research, teamwork and time management",
    ],
    experience: "Class Teacher • Former Bangla Lecturer at Fulbaria Royel College", email: "mahmuda@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "mary-sixjan-capistrano", name: "Mary Six Jan I. Capistrano", title: "Class Teacher",
    subject: "English Language — International Faculty", photo: pMary.url,
    bio: "Mary Six Jan I. Capistrano is an international faculty member from the Philippines who brings a Psychology background, healthcare experience and a caring, service-focused approach to English language learning. Her professional experience supports an organized, empathetic and engaging classroom environment.",
    qualifications: [
      "Bachelor of Science in Psychology — Our Lady of Fatima University, Philippines (2018)",
      "Over three years of retail pharmacy assistant and technician experience at Southstar Drug & Watsons",
      "Experienced in inventory control, medication storage, dispensing support and safety compliance",
      "Healthcare internship experience at San Beda University, Armed Forces of the Philippines and Holy Spirit Clinic",
      "Customer service experience, including inquiry support, transaction records and point-of-sale operations",
      "Safety Officer Certification; proficient in English and Tagalog",
    ],
    experience: "Class Teacher • Former Retail Pharmacy Assistant / Technician in the Philippines", email: "mary@johnamosbd.com", personalMessage: defaultMessage,
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
    bio: "Syeda Sajia Afrin Rothy is a Primary Class Teacher who brings a caring, organized and creative approach to early learning. Her background in Islamic History and Culture, classroom management and arts-based activities helps students learn with confidence and enthusiasm.",
    qualifications: [
      "M.A. in Islamic History & Culture — Ananda Mohon College, Mymensingh (2020)",
      "B.A. in Islamic History & Culture — Ananda Mohon College, Mymensingh (2018)",
      "Strong classroom management, motivation, teamwork, art and craft skills",
      "Proficient in MS Word, Excel, PowerPoint, internet research and professional communication",
      "Very good Bengali and English communication skills, with Hindi listening and speaking ability",
      "Interested in photography and community-based social activities",
    ],
    experience: "Class Teacher • Primary education and creative classroom learning", email: "sajia@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "hijbullah-ghalib", name: "Hijbullah Ghalib", title: "Class Teacher",
    subject: "Islamic Studies & Moral Education", photo: pHijbullah.url,
    bio: "Hijbullah Ghalib is a Class Teacher of Islamic Studies and Moral Education who supports students in developing knowledge, character and values. His advanced Islamic scholarship, strong communication skills and disciplined approach help create a respectful, purposeful learning environment.",
    qualifications: [
      "Takmil Fil Hadith (Master's Equivalent) — Jamia Madania Baridhara Madrasa, Dhaka (2024–2025)",
      "Jayyid Jiddan (1st Class equivalent) — Al-Haiatul Ulya Lil-Jamiatil Qawmia",
      "Hifzul Quran — Madinatul Ulum (Beg) Madrasa (2017–2018)",
      "Mumtaz result and 3rd position on the Befaqul Madarisil Arabia Bangladesh board merit list",
      "Fluent in Bengali and Arabic, with working proficiency in English",
      "Proficient in MS Office and email communication, with strengths in teamwork, problem-solving and adaptability",
    ],
    experience: "Class Teacher • Islamic Studies & Moral Education", email: "hijbullah@johnamosbd.com", personalMessage: defaultMessage,
  },
  {
    id: "mst-silvia-islam", name: "Mst. Silvia Islam", title: "Class Teacher",
    subject: "English Language", photo: pSilvia.url,
    bio: "Mst. Silvia Islam is a passionate English educator with an advanced academic background in English literature and language. She brings experience in curriculum delivery, student mentoring and digital classroom integration to create inclusive, engaging learning experiences.",
    qualifications: [
      "M.A. in English — Rajshahi College, National University (2010 / held 2013)",
      "B.A. (Honours) in English — Rajshahi College, National University (2009 / held 2011)",
      "English Teacher for Classes 6–10, Shishu Shorgo Biddaniketon (2016–2017)",
      "Experienced in English language and literature instruction, reading, writing, speaking and critical-thinking development",
      "Diploma in IT Management (NIIT), with proficiency in Microsoft Office and digital lesson delivery",
      "Skilled in curriculum execution, student assessment, mentoring and inclusive classroom management",
    ],
    experience: "Class Teacher • English educator with secondary-level teaching experience", email: "silvia.setu@gmail.com", personalMessage: defaultMessage,
  },
  {
    id: "tanzila-hossain", name: "Tanzila Hossain", title: "Class Teacher",
    subject: "Science & Environmental Studies", photo: pTanzila.url,
    bio: "Tanzila Hossain is a science and environmental studies educator with academic, research and professional experience in environmental data, health impacts and sustainability. She brings an analytical mindset, clear communication and a supportive approach to student learning.",
    qualifications: [
      "M.Sc. — Bangladesh Agricultural University, Mymensingh (2022), CGPA 3.41/4.00",
      "B.Sc. — Noakhali Science & Technology University (2018), CGPA 3.10/4.00",
      "Research on household cooking-fuel air pollutants and associated health impacts in Mymensingh City",
      "Research on the socio-economic impact of arsenic in Noakhali District",
      "Professional experience in an executive environment at Mahmud Denims Limited (2024)",
      "Skilled in environmental data collection and analysis, Microsoft Office, English and Bangla communication, teamwork and time management",
    ],
    experience: "Class Teacher • Environmental research and professional operations experience", email: "tanzilahossain488@gmail.com", personalMessage: defaultMessage,
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