import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getProjectFrontmatter } from "@/lib/work";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectFrontmatter(slug);
  return {
    title: `${project.title} — Adrienne Soliven`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const project = getProjectFrontmatter(slug);

  let MDXContent;
    try {
    MDXContent = (await import(`@/content/work/${slug}.mdx`)).default;
    console.log(MDXContent);
    console.log("found");
    } catch (err) {
    console.error("MDX import failed:", err);
    notFound();
    }

  const currentIndex = slugs.indexOf(slug);
  const prevSlug = slugs[currentIndex - 1];
  const nextSlug = slugs[currentIndex + 1];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/work"
        className="mb-8 inline-block text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
      >
        ← Back to work
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[color:var(--color-text-primary)] sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-[color:var(--color-text-secondary)]">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[color:var(--color-surface-alt)] px-3 py-1 text-xs text-[color:var(--color-text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--color-accent)] hover:underline"
            >
              View Live →
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--color-accent)] hover:underline"
            >
              View Repo →
            </a>
          )}
        </div>

        {project.nda && (
          <p className="mt-3 text-sm text-[color:var(--color-text-secondary)]">
            {project.ndaNote}{" "}
          </p>
        )}
      </header>

      <article className="prose prose-neutral max-w-none">
        <MDXContent />
      </article>

      <nav className="mt-16 flex justify-between border-t border-[color:var(--color-text-secondary)]/10 pt-8 text-sm">
        {prevSlug ? (
          <Link
            href={`/work/${prevSlug}`}
            className="text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
          >
            ← Previous
          </Link>
        ) : (
          <span />
        )}
        {nextSlug ? (
          <Link
            href={`/work/${nextSlug}`}
            className="text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
          >
            Next →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}