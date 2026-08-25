import Hero from "@/app/components/home/Hero";
import ProjectGrid from "@/app/components/work/ProjectGrid";
import Link from "next/dist/client/link";
import { getAllProjects } from "@/lib/work";

export default function Home() {
  const featuredProjects = getAllProjects();
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6">
        <ProjectGrid projects={featuredProjects} />
        <div className="mt-12 text-center mb-8">
          <Link href="/work" className="text-[color:var(--color-accent)] border rounded-full px-5 py-3 hover:text-white hover:bg-[color:var(--color-accent)]">
             See more →
          </Link>
        </div>
      </section>
    </main>
  );
}
