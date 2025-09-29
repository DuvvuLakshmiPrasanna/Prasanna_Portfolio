import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Technical Hub",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "May 2025 – Present",
    points: [
      "Built full stack applications with a focus on React Native for mobile platforms.",
      "Developed and deployed modern landing pages and portfolio websites",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Optimized application performance with a focus on responsiveness and load times.",
    ],
  },
  {
    title: "Member, Technical Club",
    company_name: "Aditya College of Engineering and Technology",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "January 2024 – Present",
    points: [
      "Strengthened technical skills through active participation in workshops and collaborative projects.",
      "Organized campus-wide coding competitions and provided mentorship to junior members.",
      "Contributed to various initiatives like hackathons, tech talks, and open-source projects.",
      "Developed strong teamwork and leadership skills through event management and community building.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LUMIX – AI-Powered Tools",
    description:
      "Built an AI-rich development environment integrating intelligent search, AI assistant, project drives, and placement guidance to streamline developer workflows and enhance productivity.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://lumixproject.onrender.com",
    live_website_link: "https://lumixproject.onrender.com",
  },
  {
    name: "Notice Hub",
    description:
      "Developed a modern web-based notice hub platform to centralize and display announcements, ensuring easy access and improved communication for users with a clean, responsive interface.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://sushmitadasari.github.io/Notice_hub/",
    live_website_link: "https://sushmitadasari.github.io/Notice_hub/",
  },
  {
    name: "Library Management System",
    description:
      "I built a library management system using data structures like stacks and queues to streamline the book borrowing and return process.",
    tags: [
      {
        name: "DSA",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "cpp",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/DuvvuLakshmiPrasanna/code-blooded.git",
    // project link ⬇️
    live_website_link: "https://github.com/DuvvuLakshmiPrasanna/code-blooded.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
