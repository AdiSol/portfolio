import ProjectGrid from "../components/work/ProjectGrid";
import { getAllProjects } from "@/lib/work";
import { tier2Projects } from "@/data/tier2Projects";

export default function WorkPage() {
    const tier1Projects = getAllProjects();
    const gridProjects = [...tier1Projects, ...tier2Projects];

    return (
        <main className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
            <h1 className="mb-10 text-3xl font-bold text-[color:var(--color-text-primary)]">
                Work
            </h1>

            <ProjectGrid projects={gridProjects}/>
        </main>
    )
}