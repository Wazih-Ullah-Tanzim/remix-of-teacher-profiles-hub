const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

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
  table?: { headers: string[]; rows: string[][] };
  steps?: string[];
  equations?: { name: string; formula: string; use: string }[];
};

const author = "Wazih Ullah Tanzim";

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-cambridge-international-curriculum", title: "Understanding the Cambridge International Curriculum", category: "Academics", date: "12 January 2026", readTime: "8 min", author, cover: u("photo-1503676260728-1c00da094a0b"), excerpt: "A guide to the Cambridge Pathway, from early learning through university preparation.", content: [
      "The global educational landscape relies heavily on rigorous frameworks that support international mobility and academic excellence. The Cambridge International Curriculum provides a structured, seamless progression from early childhood through pre-university education.",
      "Rather than treating primary and secondary education as separate phases, the Cambridge Pathway builds a pedagogical continuum. Foundational concepts are expanded iteratively, developing literacy, numeracy, scientific inquiry and deeper cognitive skills over time.",
      "The pathway commonly progresses through Cambridge Primary (ages 5–11), Lower Secondary (11–14), Upper Secondary and IGCSE/O Level (14–16), and Cambridge Advanced AS & A Levels (16–19). Each stage has clear assessment milestones while remaining flexible for local contexts.",
      "Cambridge prioritizes conceptual understanding over rote memorization. Its globally recognized qualifications, particularly AS and A Levels, give students a strong foundation for international university admissions and professional opportunities."
    ]
  },
  {
    slug: "everything-you-need-to-know-about-ielts", title: "Everything You Need to Know About the IELTS Exam", category: "IELTS", date: "9 February 2026", readTime: "7 min", author, cover: u("photo-1434030216411-0b793f4b4173"), excerpt: "Understanding the four IELTS components and the skills each one assesses.", content: [
      "The International English Language Testing System, or IELTS, is one of the world’s most recognized benchmarks for English proficiency. Universities, employers and immigration authorities use it to assess a candidate’s ability to communicate in real English environments.",
      "IELTS evaluates four domains: Listening, Reading, Writing and Speaking. The Listening, Reading and Writing tests run consecutively for approximately two hours and forty minutes, requiring sustained focus and careful time management.",
      "Listening includes 40 questions across four recordings; Reading includes three long texts and 40 questions; Writing requires a 150-word data response and a 250-word essay; Speaking is an 11–14 minute recorded interview in three parts.",
      "The exam rewards communicative competence rather than isolated grammar recitation. Public Band Descriptors assess fluency, coherence, vocabulary, grammar and pronunciation, resulting in a Band Score from 0 to 9."
    ]
  },
  {
    slug: "ielts-tips-from-british-council-trained-trainers", title: "IELTS Tips From Our British Council–Trained Trainers", category: "IELTS", date: "26 February 2026", readTime: "6 min", author, cover: u("photo-1457369804613-52c61a468e7d"), excerpt: "Practical strategy, timing and test-day preparation for IELTS candidates.", content: [
      "Strong IELTS results require strategic test-taking, disciplined timing and psychological preparation alongside language ability. British Council–trained educators emphasize a balanced approach that combines skill development with calm logistical execution.",
      "Writing time is especially important: candidates should spend no more than 20 minutes on Task 1 and preserve 40 minutes for the higher-weighted Task 2. Use the exam-room clock consistently during Reading and Writing.",
      "Before the test, sleep well, eat a nutritious meal, verify the test-centre location and arrive early for identity checks. Electronic devices, including smartwatches, are not permitted; a transparent water bottle is normally allowed.",
      "In Speaking, focus on natural communication rather than memorized answers. Demonstrate fluency, lexical resource, grammar and pronunciation while following every invigilator instruction exactly."
    ]
  },
  {
    slug: "mathematics-in-action-equations", title: "Mathematics in Action: Equations and Their Real-World Uses", category: "Mathematics", date: "14 March 2026", readTime: "7 min", author, cover: u("photo-1509228468518-180dd4864904"), excerpt: "How equations power architecture, engineering, medicine and modern technology.", content: [
      "Mathematics is often seen as abstract theory, yet it is the language used to describe, engineer and optimize the world. Equations turn numerical logic into scientific and technological advancement.",
      "The Pythagorean theorem, a² + b² = c², helps engineers calculate distances in architecture, surveying and computer graphics. Newton’s law of gravitation remains essential for orbital mechanics, satellite deployment and space exploration.",
      "Other transformative equations include E = mc² in energy and medical imaging, Euler’s identity in electrical engineering and telecommunications, and the Navier–Stokes equations in aerodynamics and weather prediction.",
      "Learning equations is not abstract memorization: it is learning the codes of physical reality, enabling people to optimize systems and push technological boundaries."
    ]
  },
  {
    slug: "importance-of-bengali-cultural-programs", title: "Importance of Bengali Cultural Programs", category: "Culture", date: "30 March 2026", readTime: "6 min", author, cover: u("photo-1535905557558-afc4877a26fc"), excerpt: "Why Bengali cultural programs preserve heritage, values and community identity.", content: [
      "Cultural heritage provides a society with shared memory, moral frameworks and a living connection to its history. Mymensingh has a rich folk tradition shaped by its role as a cultural and educational centre near the Old Brahmaputra river.",
      "The Maimansingha Gitika is a landmark collection of Bengali folk ballads compiled by scholars including Dinesh Chandra Sen and Kumar De. Its narratives of love, bravery and tragedy have long preserved local oral history.",
      "Through Jatra, music and dance, cultural programs bring those stories to life. They highlight female agency, religious harmony and ethical lessons such as loyalty, sacrifice and justice for younger generations.",
      "By sustaining inclusive cultural programs, schools and communities protect a pluralistic heritage and ensure that ancient stories continue to inform contemporary values."
    ]
  },
  {
    slug: "benefits-of-salah-and-reciting-quran", title: "Benefits of Salah and Reciting the Quran", category: "Wellbeing", date: "16 April 2026", readTime: "6 min", author, cover: u("photo-1542816417-0983c9c9ad53"), excerpt: "A reflection on the spiritual, physical and emotional value of prayer and recitation.", content: [
      "Salah and Quran recitation are foundational practices of Islamic devotion that bring spiritual focus while also supporting physical routine and emotional calm.",
      "The postures of prayer—standing, bowing, prostrating and sitting—create a gentle sequence of movement. They encourage awareness of posture, controlled breathing and a moment of purposeful pause within a busy day.",
      "Prayer and recitation can nurture mindfulness, reduce feelings of stress and create a regular opportunity for reflection. Their rhythm can strengthen concentration, gratitude and emotional balance.",
      "For believers, this integration of physical practice, spiritual attention and community connection supports a holistic approach to wellbeing."
    ]
  },
  {
    slug: "hygiene-101-keeping-your-body-healthy", title: "Hygiene 101: Keeping Your Body Healthy", category: "Health", date: "3 May 2026", readTime: "5 min", author, cover: u("photo-1584515933487-779824d29309"), excerpt: "Everyday hygiene habits that help protect health and prevent infection.", content: [
      "Personal hygiene is a core part of preventative healthcare. It helps interrupt the transmission of infectious organisms and supports the body’s natural protective barriers.",
      "Regular bathing removes sweat, excess oil and environmental pollutants that may encourage bacterial or fungal growth. Handwashing with soap and water remains one of the most effective ways to reduce respiratory and gastrointestinal infection risks.",
      "Oral hygiene matters too: brushing and flossing disrupt plaque and support dental health. Good sleep hygiene—consistent schedules and a calm sleep environment—also supports restoration, concentration and immunity.",
      "A disciplined daily routine across personal, oral and environmental hygiene is not only about appearance; it protects long-term health and wellbeing."
    ]
  },
  {
    slug: "how-to-speak-properly", title: "How to Speak Properly", category: "Communication", date: "21 May 2026", readTime: "5 min", author, cover: u("photo-1551836022-d5d88e9218df"), excerpt: "Clear speech through breathing, articulation, posture and confident delivery.", content: [
      "Speaking clearly and persuasively is a learned skill shaped by biomechanics, phonetics and confidence. Effective communication helps listeners understand both meaning and emotion without unnecessary effort.",
      "Diaphragmatic breathing creates the airflow needed for a steady, resonant voice. Clear articulation requires intentional use of the lips, tongue, jaw and palate so consonants and vowels are distinct.",
      "Prosody—the rhythm, pace, stress and intonation of speech—keeps a message engaging. Upright posture improves breath support and can help speakers project calm confidence.",
      "Eye contact and purposeful gestures should support the spoken message. Regular practice transforms speech from an automatic habit into a clear, credible and engaging form of expression."
    ]
  },
  {
    slug: "english-literature-and-shakespeare", title: "English Literature and Shakespeare", category: "Literature", date: "8 June 2026", readTime: "6 min", author, cover: u("photo-1507842217343-583bb7270b66"), excerpt: "Why Shakespeare continues to shape English language, drama and human understanding.", content: [
      "English literature remains deeply influenced by William Shakespeare, whose 37 plays and 154 sonnets transformed dramatic storytelling and the expressive reach of Early Modern English.",
      "His characters are psychologically complex: Hamlet’s doubt, Macbeth’s ambition and Othello’s jealousy remain meaningful because they explore enduring human conflict rather than simple moral lessons.",
      "Shakespeare popularized thousands of words, used soliloquies to reveal inner thought, and mastered iambic pentameter to create a memorable dramatic rhythm.",
      "Studying Shakespeare is not merely literary history. It is an active engagement with the language, ideas and narrative structures that continue to shape modern English thought."
    ]
  },
  {
    slug: "beauty-of-english-poetry", title: "The Beauty of English Poetry", category: "Literature", date: "25 June 2026", readTime: "5 min", author, cover: u("photo-1455390582262-044cdead277a"), excerpt: "How rhythm, imagery and form make poetry a powerful mode of expression.", content: [
      "Poetry distils language into its most evocative and rhythmic form. Through compression, metaphor and sound, it can evoke a broad emotional world in only a few lines.",
      "English poetry has evolved from strict forms such as the sonnet to free verse. Across every style, devices such as alliteration, assonance and internal rhyme give words an auditory texture.",
      "Metaphor and simile create new connections; enjambment shapes pace and suspense; meter creates an internal pulse that guides the reader’s emotional response.",
      "Reading poetry develops attention, imagination and empathy, inviting readers to explore the subtle beauty and complexity of human experience."
    ]
  },
  {
    slug: "benefits-of-eating-fruits", title: "Benefits of Eating Fruits", category: "Health", date: "11 July 2026", readTime: "5 min", author, cover: u("photo-1490474418585-ba9bad8fd0ea"), excerpt: "The role of fruit, fibre and micronutrients in everyday nutrition.", content: [
      "Fruits are rich sources of vitamins, minerals, fibre and protective plant compounds. They support balanced nutrition far beyond their natural sweetness.",
      "Vitamin C, flavonoids and anthocyanins help protect cells from oxidative stress. Berries, citrus fruits and tropical fruits each offer different combinations of useful nutrients.",
      "Dietary fibre helps slow the absorption of sugars, supports digestive regularity and nourishes beneficial gut bacteria. Potassium-rich fruits can also support healthy fluid balance.",
      "A colourful variety of whole fruits is a simple and enjoyable way to support healthy eating habits as part of a balanced lifestyle."
    ]
  },
  {
    slug: "how-to-improve-spoken-english", title: "How to Improve Spoken English", category: "English", date: "29 July 2026", readTime: "6 min", author, cover: u("photo-1544717305-2782549b5136"), excerpt: "Practical methods for building confidence, fluency and natural pronunciation.", content: [
      "Spoken English improves when passive knowledge becomes active practice. Speaking is a motor skill as well as a language skill, so regular use is essential for fluency.",
      "Phonetic shadowing is especially effective: listen to clear English audio and repeat alongside the speaker. This trains rhythm, intonation, linking and unfamiliar sounds.",
      "Combine comprehensible input with active output. Listen to material slightly above your current level, build useful phrases in context, then use them in low-pressure conversations.",
      "With steady listening, articulation practice and contextual vocabulary, learners can move from translation-based hesitation to spontaneous, confident communication."
    ]
  },
  {
    slug: "ten-scientific-innovations-that-changed-the-world", title: "10 Famous Scientific Innovations That Changed the World", category: "Science", date: "15 August 2026", readTime: "7 min", author, cover: u("photo-1532094349884-543bc11b234d"), excerpt: "Breakthrough inventions that changed health, industry, knowledge and global connection.", content: [
      "Human history is shaped by scientific breakthroughs that transform health, industry and communication. Each major innovation often becomes a foundation for discoveries that follow.",
      "The printing press democratized knowledge; vaccination transformed public health; the steam engine powered industrial growth; and penicillin began the antibiotic era.",
      "The transistor enabled modern computing, while the Internet reconfigured global communication. The compass, optical lenses, the pacemaker and the Haber–Bosch process each reshaped navigation, medicine, agriculture and scientific discovery.",
      "Studying innovation reveals how ideas create system-wide change—and how scientific knowledge continues to engineer the world we live in."
    ]
  },
  {
    slug: "time-management-tips-for-students", title: "Time Management Tips for Students", category: "Study Skills", date: "2 September 2026", readTime: "6 min", author, cover: u("photo-1499750310107-5fef28a66643"), excerpt: "Use prioritization and focused study intervals to protect your time and energy.", content: [
      "Academic success depends not only on ability but on managing time and attention effectively. Structured planning helps students resist distractions, reduce procrastination and prevent burnout.",
      "The Eisenhower Matrix categorizes tasks by urgency and importance. Do urgent, important work first; schedule important long-term work; minimize minor urgent tasks; and eliminate low-value distractions.",
      "For deep work, use focused intervals such as the Pomodoro Technique: study intently for 25–50 minutes, then take a brief break. This rhythm can make difficult work feel more manageable.",
      "Effective time management is the practice of making deliberate choices that protect meaningful learning while safeguarding mental energy."
    ]
  },
  {
    slug: "why-reading-books-matters", title: "Why Reading Books Matters", category: "Literacy", date: "19 September 2026", readTime: "6 min", author, cover: u("photo-1512820790803-83ca734da794"), excerpt: "How sustained reading strengthens attention, empathy and analytical thinking.", content: [
      "In a fast-paced digital world, sustained reading remains one of the best exercises for cognitive development and emotional maturity. Deep reading requires focused attention that differs from quick online skimming.",
      "Books invite readers to build internal images, follow complex ideas and interpret language actively. This develops vocabulary, critical thinking and the ability to recognize patterns in arguments.",
      "Narrative fiction also strengthens empathy through Theory of Mind: readers follow the perspectives, motives and emotions of people whose experiences may differ greatly from their own.",
      "Reading is not an outdated way to receive information. It is a powerful lifelong practice for concentration, imagination and a thoughtful, empathetic mind."
    ]
  },
  {
    slug: "importance-of-physical-education-and-sports", title: "Importance of Physical Education and Sports", category: "Sports", date: "6 November 2026", readTime: "6 min", author, cover: u("photo-1517649763962-0c623066013b"), excerpt: "Why movement, sport and physical education are essential to learning and wellbeing.", content: [
      "Physical education is not separate from learning: regular movement supports cognition, emotional regulation and overall academic wellbeing.",
      "Exercise improves circulation and helps deliver oxygen and glucose to the brain. Physical activity is associated with attention, memory and the healthy functioning of brain systems involved in learning.",
      "Sports also develop practical social skills. Team settings require communication, decision-making, resilience and the ability to respond constructively to pressure.",
      "A strong physical education programme gives students opportunities to build healthy habits, confidence and the social-emotional skills that support achievement in and beyond the classroom."
    ]
  },
];