import type { ProjectCardData } from "@/app/components/work/ProjectCard";

export const tier2Projects: ProjectCardData[] = [
  {
    title: "AkadsPH",
    tagline: "A two-sided tutoring marketplace: profile-based tutor matching, in-platform booking and payment, and automated tutor payouts.",
    year: 2021,
    role: "Lead Frontend Developer",
    stack: ["React.js", "MaterialUI", "Usability Testing"],
    coverImage: "/images/akadsph-cover.jpg",
    repoUrl: "https://github.com/joshmzndev/akadsph"
  },
  {
    title: "NU-LPR 101",
    tagline: "License plate recognition for parking lot access control, running on an edge device and trained on Taiwan plate data.",
    year: 2022,
    role: "Full Stack Engineer",
    stack: ["React.js", "styled-components", "Flask Python", "Nginx", "REST API", "JWT Auth", "react-i18next (en · zh-TW · zh-CN)"],
    metric: "Rebuilt to run on edge · Reduced CPU usage by 40% · Memory usage by 35%",
    coverImage: "/images/nulpr101-cover.jpg",
    liveUrl: "https://drive.google.com/file/d/1ZbpRZwo0BB0gYTkV2xNMy-l7K9gWiDwt/view",
    repoUrl: null,
    nda: true,
    ndaNote: "Source under NDA"
  },
  {
    title: "Manufacturing Pilot",
    tagline: "Stops a metal press when two sheets are fed in instead of one, before the press is damaged and the part is scrapped.",
    year: 2023,
    role: "Full Stack Engineer",
    stack: ["React.js", "Flask Python", "Server Sent Events", "Redis", "JWT Auth"],
    metric: "1st place, NT$500,000 prize — AI+ Day 2023",
    coverImage: "/images/manufacturing-pilot-cover.jpg",
    repoUrl: null,
    nda: true,
    ndaNote: "Source under NDA"
  }
]