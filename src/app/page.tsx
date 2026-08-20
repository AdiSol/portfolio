import Hero from "@/app/components/home/Hero";
import ProjectGrid from "@/app/components/work/ProjectGrid";
import Link from "next/dist/client/link";
import { getAllProjects } from "@/lib/work";

export default function Home() {
  const featuredProjects = getAllProjects();
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-6">
        <ProjectGrid projects={featuredProjects} />
        <div className="mt-8 text-center">
          <Link href="/work" className="text-[color:var(--color-accent)] hover:underline">
             See all work →
          </Link>
        </div>
      </section>
    </main>
  );
}
