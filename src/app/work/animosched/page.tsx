import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getProjectFrontmatter } from "@/lib/work";

export function generateStaticParams() {
    return getAllSlugs().map((slug) => { slug });
}

export async function generateMetadata({
    params,
} : {
    params: {slug: string};
}) {
    const project = getProjectFrontmatter(params.slug);
    return {
        title: `${project.title} - Adrienne Soliven`,
        description: project.tagline,
    };
}

export default async function CaseStudyPage({
    params,
} : {
    params: { slug: string};
}) {
    const slugs = getAllSlugs();
    if (!slugs.includes(params.slug)){
        notFound();
    }

    const project = getProjectFrontmatter(params.slug);

    let MDXContent;
    try {
        MDXContent = (await import(`@/content/work/${params.slug}.mdx`)).default;
    } catch {
        notFound();
    }

    const currentIndex = slugs.indexOf(params.slug);
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
            </header>
        </main>
    )

}

