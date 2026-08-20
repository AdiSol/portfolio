import Link from "next/link";
import Image from "next/image";

export type ProjectCardData = {
    title: string;
    tagline: string;
    year: number;
    role: string;
    stack: string[];
    coverImage: string;
    slug: string;
    liveUrl?: string;
    repoUrl?: string | null;
    nda?: boolean;
    ndaNote?: string;
    metric?: string;
    context?: string;
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
                <h3 className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                    {project.title}
                </h3>
                <p className="text-sm text-[color:var(--color-text-secondary)]">
                    {project.tagline}
                </p>

                <p className="text-xs text-[color:var(--color-text-secondary)]">
                    {project.role} · {project.year}
                    {project.context ? ` · ${project.context}` : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-[color:var(--color-surface)] px-2.5 py-1 text-xs text-[color:var(--color-text-secondary)]"
                            >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.metric && (
                    <p className="text-sm text-[color:var(--color-text-primary)]">
                        {project.metric}
                    </p>
                )}
                
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
                    {isCaseStudy ? (
                        <Link
                            href={`/work/${project.slug}`}
                            className="font-medium text=[color:var(--color-accent)] hover:underline"
                        >
                             Read case study →
                        </Link>
                    ): (
                        <>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-[color:var(--color-accent)] hover:underline"
                                >
                                    Visit live site →
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-[color:var(--color-accent)] hover:underline"
                                >
                                    View repo →
                                </a>
                            )}
                        </>
                    )}
                </div>

                {project.nda && (
                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                        {project.ndaNote}
                    </p>
                )}
            </div>
        </div>    
    );
}