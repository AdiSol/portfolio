import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "src/content/work");

export type ProjectFrontmatter = {
    title: string;
    slug: string;
    year: number;
    role: string;
    stack: string[];
    tagline: string;
    coverImage: string;
    liveUrl?: string;
    repoUrl?: string | null;
    nda?: boolean;
    ndaNote?: string;
    context?: string;
    metric?: string;
};

export function getAllProjects(): ProjectFrontmatter[] {
    const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx"));

    const projects = files.map((filename) => {
        const filePath = path.join(WORK_DIR, filename);
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        return data as ProjectFrontmatter;
    });

    return projects.sort((a, b) => b.year - a.year);
}

export function getProjectSource(slug: string): string {
    const filePath = path.join(WORK_DIR, `${slug}.mdx`);
    return fs.readFileSync(filePath, "utf8");
}

export function getProjectFrontmatter(slug: string): ProjectFrontmatter {
    const source = getProjectSource(slug);
    const { data } = matter(source);
    return data as ProjectFrontmatter;
}

export function getAllSlugs() : string[] {
    const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx"));
    return files.map((f) => f.replace(/\.mdx$/,""));
}