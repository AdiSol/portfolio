import { getAllProjects, getAllSlugs } from "@/lib/work";

export default function TestWorkPage() {
  const projects = getAllProjects();
  const slugs = getAllSlugs();

  console.log("SLUGS:", slugs);
  console.log("PROJECTS:", projects);

  return (
    <pre className="p-8 text-sm">
      {JSON.stringify({ slugs, projects }, null, 2)}
    </pre>
  );
}