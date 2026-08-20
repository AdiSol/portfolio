import ProjectCard, { ProjectCardData } from "@/app/components/work/ProjectCard";

export default function ProjectGrid({
    projects,
}: {
    projects: ProjectCardData[];
}) {
    return (
        <div className="grid grid-cols=[repeat(auto-fit, minmax(280px, 1fr))] gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.slug ?? project.title} project={project}/>
            ))}
        </div>
    );
}