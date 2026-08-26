import Link from "next/link";
import Image from "next/image";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

export type ProjectCardData = {
    title: string;
    tagline: string;
    year: number;
    role: string;
    stack: string[];
    coverImage: string;
    liveUrl?: string;
    repoUrl?: string | null;
    nda?: boolean;
    ndaNote?: string;
    metric?: string;
    context?: string;
    slug?: string // only for projects with case study pages
}

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const isCaseStudy = Boolean(project.slug);
    return (
        <div className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-[color:var(--color-surface-alt)]">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={project.coverImage}
                    alt={`${project.title} cover image`}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                        {project.title}
                    </h3>
                    <p className="shrink-0 text-xs text-[color:var(--color-text-secondary)]">
                        {project.role} · {project.year}
                        {project.context ? ` · ${project.context}` : ""}
                    </p>
                </div>
                <p className="text-sm text-[color:var(--color-text-secondary)]">
                    {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-[color:var(--tech-pill)] bg-[color:var(--color-surface)] px-2.5 py-1 text-xs text-[color:var(--tech-text)] "
                            >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* {project.metric && (
                    <p className="text-sm text-[color:var(--color-text-primary)]">
                        {project.metric}
                    </p>
                )} */}
                <hr className="mt-2 border-t border-gray-300" />
                <div className="mt-auto flex flex-nowrap items-center gap-4 overflow-x-auto text-sm pt-1">
                    {isCaseStudy && 
                        <Link
                            href={`/work/${project.slug}`}
                            className="shrink-0 whitespace-nowrap font-medium text-[color:var(--link-accent)] hover:text-[color:var(--color-accent)] hover:underline flex gap-1"
                        >
                            <HiOutlineDocumentText size={20} />
                            Case study
                        </Link>
                    }
                    <>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 whitespace-nowrap font-medium text-[color:var(--link-accent)] hover:text-[color:var(--color-accent)] hover:underline flex gap-1"
                            >
                                <FiExternalLink size={20} />
                                {project.title === "AnimoSched" ? <span>Published</span> : <span>Demo</span>}
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 whitespace-nowrap font-medium text-[color:var(--link-accent)] hover:text-[color:var(--color-accent)] hover:underline flex gap-1"
                            >
                                <FiGithub size={20} />
                                Repo
                            </a>
                        )}
                        {project.nda && (
                        <div className="shrink-0 whitespace-nowrap font-medium text-xs text-[color:var(--color-text-secondary)] flex gap-2">
                            <FaLock size={17}/>
                            <span>NDA</span>
                        </div>
                )}
                    </>
                </div>

                
            </div>
        </div>    
    );
}