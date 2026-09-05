export const profile = {
  name: "Anmol Raj",
  title: "Full Stack Developer | AI Integration",
  location: "Jaipur, Rajasthan, India",
  origin: "East Champaran, Bihar",
  email: "araj97855@gmail.com",
  linkedin: "https://www.linkedin.com/in/raj-anmol/",
  github: "https://github.com/Raj-Anmol",
  summary: "Full Stack Developer specializing in the MERN stack, with a focus on integrating AI into production web applications. Skilled in RESTful APIs, real-time systems, and cloud deployment.",
  profileImage: "/profile.png",
  resumeUrl: "/resume/Anmol-Raj-Resume.pdf",
};

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Jagannath University",
    location: "Jaipur, Rajasthan",
    period: "Jul 2023 – Jul 2027 (Expected)",
  },
];

export const experience = [
  {
    role: "Artificial Intelligence Intern",
    company: "Edunet Foundation (AICTE × IBM SkillsBuild)",
    period: "May 11, 2026 – Jun 21, 2026 (6 weeks)",
    location: "Remote",
    bullets: [
      "Completed 6-week intensive training on AI models, cloud workflows, and system deployment",
      "Developed full-stack web interfaces integrated with backend AI services for real-time data processing",
      "Implemented API endpoint handlers and connected client-side components to IBM cloud infrastructure",
    ],
    certificateUrl: "https://drive.google.com/file/d/17cCJ57TTcNw7Rq38QXAGQbhB98EarZcx/view?usp=drivesdk",
  },
  {
    role: "Emerging Technologies Intern",
    company: "Edunet Foundation (AICTE × IBM SkillsBuild)",
    period: "May 15, 2026 – Jun 12, 2026 (4 weeks)",
    location: "Remote",
    bullets: [
      "Engineered capstone project utilizing IBM Cloud, IBM BOB, and Agentic AI workflow models",
      "Developed RESTful microservices with automated request routing, input validation, and structured error logging",
      "Participated in technical reviews and verified cloud deployment pipelines for seamless execution",
    ],
    certificateUrl: "https://drive.google.com/file/d/1djgOPfvq_09919SodRx6Sja-kN1OR6q9/view?usp=drivesdk",
  },
  {
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt. Ltd. (AICTE x MSME)",
    period: "Dec 11, 2025 - Jan 24, 2026",
    location: "Remote",
    bullets: [
      "Completed virtual internship in Web Development using HTML, CSS, and JavaScript",
      "Developed responsive web interfaces and client-side logic",
      "Built modular front-end components adhering to web standards",
    ],
    certificateUrl: "https://drive.google.com/file/d/APSPL2524992/view",
  },
];

export const projects = [
  {
    id: "ai-student-travel-planner",
    name: "AI Student Travel Planner",
    tagline: "Budget-first travel planning for students — instant smart expense breakdown",
    description: "A lightweight Streamlit web app where students enter budget and trip duration to get an instant, rule-based expense allocation across Stay (35%), Food (30%), Transport (20%), and Emergency Buffer (15%). Built with Python, Streamlit, and Pandas — zero external API dependencies.",
    tech: ["Python", "Streamlit", "Pandas", "Streamlit Cloud"],
    image: "/project-image/ai-student-travel-planner.png",
    ogImage: "/project-image/ai-student-travel-planner.png",
    liveUrl: "https://ai-student-travel-planner-nyqx4lam9g4elezp3ppcyd.streamlit.app/",
    githubUrl: "https://github.com/Raj-Anmol/AI-Student-Travel-Planner",
    caseStudyUrl: "/projects/ai-student-travel-planner",
    featured: true,
  },
  {
    id: "krishi-seva-center",
    name: "Krishi Seva Center",
    tagline: "AI-powered farmer platform: disease detection, live weather, mandi prices, bilingual advisory",
    description: "Full-stack React + FastAPI application for Indian farmers. Features: AI crop disease detection (8 crops, Hindi/English), live Patna weather via Open-Meteo API, real-time mandi commodity prices, farm health analytics, bilingual UI, nearby agri-shop locator, FAQ, scan history. Deployed on Vercel (frontend) and Render (backend).",
    tech: ["React 19", "Vite", "FastAPI", "Python", "Open-Meteo API", "Vercel", "Render"],
    image: "/project-image/krishi-seva-center.png",
    ogImage: "/project-image/krishi-seva-center.png",
    liveUrl: "https://krishi-seva-center.vercel.app/",
    githubUrl: "https://github.com/Raj-Anmol/krishi-seva-center",
    caseStudyUrl: "/projects/krishi-seva-center",
    featured: true,
  },
];

export const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "Python"],
  frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Context API", "Bootstrap", "Streamlit"],
  backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Authentication", "WebSockets (Socket.io)"],
  databases: ["MongoDB", "Mongoose ORM", "PostgreSQL"],
  cloudTools: ["Cloudinary", "IBM Cloud", "Git", "GitHub", "Postman", "Vercel", "Render", "NPM", "VS Code"],
};

export const certificates = [
  {
    name: "Artificial Intelligence Internship",
    issuer: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "6 Weeks | May–Jun 2026",
    verifyUrl: "https://drive.google.com/file/d/17cCJ57TTcNw7Rq38QXAGQbhB98EarZcx/view?usp=drivesdk",
  },
  {
    name: "Emerging Technologies Internship",
    issuer: "Edunet Foundation × AICTE × IBM SkillsBuild",
    period: "4 Weeks | May–Jun 2026",
    verifyUrl: "https://drive.google.com/file/d/1djgOPfvq_09919SodRx6Sja-kN1OR6q9/view?usp=drivesdk",
  },
  {
    name: "Web Development Internship",
    issuer: "ApexPlanet Software Pvt. Ltd. × AICTE × MSME",
    period: "6 Weeks | Dec 2025 – Jan 2026",
    verifyUrl: "https://drive.google.com/file/d/APSPL2524992/view",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Internships" },
  { value: 8, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Tech Stacks" },
  { value: 500, suffix: "+", label: "GitHub Contributions" },
];

export const siteConfig = {
  name: "Anmol Raj",
  description: "Full Stack Developer | AI Integration — Building scalable web applications with MERN stack and AI-powered solutions",
  url: "https://anmol-raj.vercel.app",
  ogImage: "/profile.png",
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "MERN Stack",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "Web Development",
  ],
  university: {
    name: "Jagannath University",
    url: "https://www.jagannathuniversity.org/",
    location: "https://maps.app.goo.gl/mZndMdJXAeTUZnmM8",
  },
};