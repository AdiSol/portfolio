import ProjectCard, { ProjectCardData } from "@/app/components/work/ProjectCard";

export default function ProjectGrid({
    projects,
}: {
    projects: ProjectCardData[];
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
            {projects.map((project) => (
                <ProjectCard key={project.slug ?? project.title} project={project}/>
            ))}
        </div>
    );
}