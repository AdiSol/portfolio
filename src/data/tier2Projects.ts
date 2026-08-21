import type { ProjectCardData } from "@/app/components/work/ProjectCard";

export const tier2Projects: ProjectCardData[] = [
    {
        title: "NU-LPR 101",
        tagline: "A License Plate Recognition System for parking lot access control",
        year: 2022,
        role: "Full Stack Engineer",
        stack: ["React.js", "Flask Python", "Deep Stream", "Nginx", "REST API"],
        metric: "Improved: CPU usage by 40% · Memory usage by 35%",
        coverImage: "/images/nulpr101-cover.jpg",
        repoUrl: null,
        nda: true,
        ndaNote: "Source under NDA"
    },
    {
    title: "Manufacturing Pilot",
    tagline: "AI-assisted defect detection for a factory production line",
    year: 2023,
    role: "Full Stack Engineer",
    stack: ["React.js", "Flask Python"],
    metric: "1st place, NT$500,000 prize — AI+ Day 2023",
    coverImage: "/images/manufacturing-pilot-cover.jpg",
    repoUrl: null,
    nda: true,
    ndaNote: "Source under NDA",
  },
  {
    title: "AkadsPH",
    tagline: "Tutor-matching platform with payments and credit-store flows",
    year: 2021,
    role: "Lead Frontend Developer",
    stack: ["React", "Node.js", "PostgreSQL"],
    coverImage: "/images/akadsph-cover.jpg",
    repoUrl: "https://github.com/joshmzndev/akadsph",
  },
]