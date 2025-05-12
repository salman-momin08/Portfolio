import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Wrench, FolderKanban, Code, Target } from 'lucide-react'; // Added Target icon

export interface NavItem {
  name: string;
  href: string;
}

export interface ContactLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  company: string; 
  role: string;
  period: string;
  description: string[];
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon: LucideIcon;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: "Salman", // Updated name
  preferredName: "Khwajamainuddin", 
  title: "Aspiring Software Engineer | Web Developer | Tech Enthusiast | GenAI Enthusiast", 
  subtitle: "Eager to build beautiful and functional web applications and kickstart my career.", 
  ctaText: "Get In Touch",
  ctaLink: "#contact",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Highly motivated and results-oriented aspiring software engineer with a passion for creating innovative and user-centric web applications. Strong foundation in web development principles gained through academic projects and self-learning.", // Adjusted for fresher
    "I thrive in collaborative environments and enjoy tackling challenging problems. Constantly learning and exploring new technologies to build a strong skillset.",
    "Actively seeking opportunities to apply my knowledge, contribute to exciting projects, and grow as a software engineer.", 
  ],
};

// Updated Experience section for a fresher
export const experienceData: ExperienceItem[] = [
  {
    company: 'Learning & Projects', 
    role: 'Aspiring Software Engineer', 
    period: 'Ongoing',
    description: [
      'Actively seeking my first full-time software engineering role.',
      'Developed several projects (see Projects section) to apply and showcase my skills.',
      'Continuously learning new technologies and best practices in web development.',
      'Eager to contribute to a team and learn from experienced professionals.',
    ],
    icon: Target, 
  },

  {
    company: 'Leosias Technologies',
    role: 'Data Analyst',
    period: 'Nov 2024 - Jan 2025',
    description: [
      'Contributed to AQI project for air quality analysis.',
      'Getting insights of 5 metropolitian cities.',
      'Collaborated with the community via GitHub issues and PRs.',
    ],
    icon: Github,
  },
];


export const projectsData: ProjectItem[] = [
  {
    title: 'Online Cake Shop',
    description: 'A full-featured e-commerce website built with Next.js, Stripe, and Firebase. Demonstrates full-stack capabilities.', // Added context
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Firebase', 'Full-Stack'],
    link: 'https://github.com/yourusername/ecommerce', 
    icon: FolderKanban,
  },
  {
    title: 'Face Recognition System',
    description: 'A collaborative task management application using MERN stack. Showcases API development and database integration.', // Added context
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'MERN'],
    link: 'https://github.com/yourusername/task-manager', 
    icon: FolderKanban,
  },
  {
    title: 'ResearchSphere',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS to showcase my skills and projects.', // Added context
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
    link: 'https://github.com/yourusername/ecommerce',
    icon: FolderKanban,
  },
  // Add more projects as needed
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Pyhton', 'Java', 'Javascript', 'C programming'],
    icon: Code,
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    icon: Code,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'], 
    icon: Code,
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    icon: Code,
  },
  {
    title: 'Tools & Concepts', 
    skills: ['Git', 'Docker', 'AWS (Basic)', 'Google Cloud (Basic)', 'CI/CD (Concepts)'], 
    icon: Wrench,
  },
  {
    title: 'Others',
    skills: ['GenAI', 'Prompt Engineering', 'Data Structures', 'Algorithms', 'Excellent Communication', 'Leadership', 'Time Management'],
    icon: Code,
  },
];

export const educationData: EducationItem[] = [
   // Keep relevant education
   {
    institution: 'KLE SOCIETYS COLLEGE OF BCA GOKAK', 
    degree: 'Bachelor of Computer Application (BCA)', 
    period: '2020 - 2023 (CGPA: 8.9)', 
    icon: GraduationCap,
  },
  // Add M.S. if applicable
   {
    institution: 'The Oxford College of Engineering', // Replace with actual university
    degree: 'Master of Computer Application (MCA)', // Replace with actual degree
    period: '2023 - Present', // Replace with actual dates or expected graduation
    icon: GraduationCap,
  },
];

export const contactData = {
  title: "Get In Touch",
  description: "I'm actively looking for entry-level software engineering roles and eager to connect. Feel free to reach out!", // Adjusted for fresher
  email: "khwajamainuddinmomin@gmail.com", // Replace with actual email
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/salman-momin08', icon: Github }, // Replace with actual username
    { name: 'LinkedIn', href: 'https://linkedin.com/in/khwajamainuddin-momin-9b406921b/', icon: Linkedin }, // Replace with actual username
  ] as ContactLink[], // Explicitly type socialLinks
};

export const footerData = {
  text: `© ${new Date().getFullYear()} ${heroData.preferredName || heroData.name}. `
}

