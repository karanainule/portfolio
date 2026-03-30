export const personalInfo = {
  name: 'Karan Ainule',
  firstName: 'Karan',
  lastName: 'Ainule',
  title: 'Full Stack Developer',
  email: 'karanainule@gmail.com',
  phone: '+91 9322390030',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/karanainule',
  linkedin: 'https://www.linkedin.com/in/karan-ainule',
  whatsapp: 'https://wa.me/919322390030?text=Hi%20Karan,%20I%20saw%20your%20portfolio',
  resume: '/KaranAinule_resume.pdf',
  profileImage: '/MyPicture.jpg',
  typingSequence: [
    'Full Stack Developer', 2000,
    'React Developer', 2000,
    'AI & ML Enthusiast', 2000,
    'Problem Solver', 2000,
    'Open Source Builder', 2000,
  ],
  bio: "I'm a final-year Information Technology student at JSPMs JSCOE, Pune, building production-ready applications across the full stack. From crafting pixel-perfect React interfaces to engineering FastAPI backends with AI integrations, I thrive in the intersection of clean code and real-world impact. Currently exploring how AI can supercharge everyday software — turning complex problems into elegant, user-centric solutions.",
}

export const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Internship', value: '1' },
  { label: 'Achievements', value: '2+' },
]

export const skills = [
  {
    category: 'Languages',
    icon: '💻',
    color: 'from-blue-500/10 to-blue-600/5',
    border: 'hover:border-blue-500/50',
    items: ['C++', 'JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-indigo-500/10 to-indigo-600/5',
    border: 'hover:border-indigo-500/50',
    items: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Responsive Design'],
  },
  {
    category: 'Backend & Database',
    icon: '⚙️',
    color: 'from-purple-500/10 to-purple-600/5',
    border: 'hover:border-purple-500/50',
    items: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'REST APIs'],
  },
  {
    category: 'AI & Tools',
    icon: '🛠️',
    color: 'from-pink-500/10 to-pink-600/5',
    border: 'hover:border-pink-500/50',
    items: ['OpenAI API', 'Tesseract OCR', 'OpenCV', 'Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
]

export const experience = [
  {
    role: 'Project Intern',
    company: 'Edunet Foundation',
    period: 'Jan 2025 – Feb 2025',
    duration: '2 months',
    location: 'Pune, Maharashtra (Remote)',
    description: 'Developed full-stack web applications to solve real-world problems as part of an intensive internship program. Collaborated within agile teams to ship high-quality, scalable solutions — sharpening skills in React, REST API design, and modern deployment workflows.',
    type: 'internship',
  },
  {
    role: 'Placement Coordinator',
    company: 'JSPMs Jayawantrao Sawant College of Engineering',
    period: 'Aug 2023 – Sep 2024',
    duration: '1 yr 2 months',
    location: 'Pune, Maharashtra',
    description: 'Spearheaded campus recruitment drives as the key liaison between 100+ students and top-tier recruiters. Organized technical training workshops, maintained placement analytics, and consistently delivered measurable outcomes in student career placements.',
    type: 'role',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering — Information Technology',
    institution: 'JSPMs Jayawantrao Sawant College of Engineering',
    period: '2022 – 2026',
    location: 'Pune, Maharashtra, India',
    description: 'Pursuing B.E. in Information Technology with core focus on full-stack development, data structures & algorithms, and modern software engineering practices. Actively competing in national-level tech events and contributing to open-source projects.',
  },
]

export const projects = [
  {
    id: 'pharmaguard',
    title: 'PharmaGuard',
    emoji: '💊',
    tagline: 'AI-Powered Medicine Authentication',
    description: 'A production-grade medicine authentication platform that helps users verify pharmaceutical product authenticity, access detailed drug information, and find nearby pharmacies — powered by a FastAPI backend and OpenAI-driven drug analysis engine.',
    tech: ['React', 'FastAPI', 'Python', 'OpenAI API', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/karanainule/PharmaGuard',
    live: 'https://pharma-guard-rho.vercel.app/',
    image: '/projects/pharmaguard.png',
    featured: true,
  },
  {
    id: 'degreeguard',
    title: 'Authenticity Validator for Academia',
    emoji: '🎓',
    tagline: 'AI + OCR Credential Verification',
    description: 'A full-stack platform that leverages OCR and AI to detect fraudulent academic certificates in real time. Institutions and employers can instantly validate the legitimacy of degrees — built with a robust FastAPI + OCR pipeline.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'Tesseract OCR', 'OpenCV', 'PostgreSQL', 'SQLite'],
    github: 'https://github.com/karanainule/Authenticity-Validator-for-Academia',
    live: 'https://degreeguard.vercel.app/',
    image: '/projects/degreeguard.png',
    featured: true,
  },
  {
    id: 'bassline',
    title: 'Bassline Music Player',
    emoji: '🎵',
    tagline: 'Spotify-Inspired Web Music Player',
    description: 'A pixel-perfect, fully responsive music player UI inspired by modern streaming platforms. Demonstrates mastery of DOM manipulation, CSS animations, event-driven JavaScript architecture, and accessible UI/UX design from Figma to code.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    github: 'https://github.com/karanainule/bassline-music-player',
    live: null,
    image: '/projects/bassline.png',
    featured: false,
  },
]

export const achievements = [
  {
    id: 'bharatai',
    title: 'Bharat AI Quest Competition',
    organization: 'National Payments Corporation of India (NPCI)',
    date: '2025 | IIT Bombay',
    description: 'Qualified to Level 3 in the prestigious Bharat AI Quest — a nationwide competition by NPCI featuring thousands of participants. Demonstrated strong proficiency in AI/ML applied to the fintech and digital payments domain.',
    badges: ['Level 3 Qualifier', 'AI & ML', 'FinTech', 'IIT Bombay'],
    images: [
      { src: '/bharatai/meiit.jpg', alt: 'Bharat AI Quest at IIT Bombay' },
      { src: '/bharatai/gate.jpg', alt: 'AI Quest Certificate' },
      { src: '/bharatai/posterme.jpg', alt: 'Competition Venue' },
    ],
  },
  {
    id: 'gff',
    title: 'Global Fintech Fest 2025',
    organization: "World's Largest Fintech Conference",
    date: 'Oct 7–9, 2025 | Jio World Centre, Mumbai',
    description: "Attended the 6th edition of Global Fintech Fest (GFF) — organized by NPCI, PCI, and FCC with 100,000+ participants from 75+ countries. Explored cutting-edge fintech innovations, attended AI-powered financial services keynotes, and networked with global industry leaders.",
    badges: ['NPCI Event', 'AI in Finance', 'Networking', '100K+ Attendees'],
    images: [
      { src: '/gff/goodies.jpg', alt: 'GFF Goodies' },
      { src: '/gff/gffamz.jpg', alt: 'GFF Amazon Booth' },
      { src: '/gff/postergff.jpg', alt: 'GFF Poster' },
      { src: '/gff/gffstage.jpg', alt: 'GFF Main Stage' },
      { src: '/gff/npci.jpg', alt: 'GFF NPCI' },
    ],
  },
]
