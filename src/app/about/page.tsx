import SelfPortrait from "@/app/components/about/SelfPortrait";

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-10 text-3xl front-bold text-[color:var(--color:text-primary)]">
                About
            </h1>

            <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[280px_1fr]">
                <SelfPortrait />

                <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[280ox_1fr]">
                    <p className="text-lg text-[color:var(--color-text-primaray)]">
                        Hi, I&apos;m Adrienne — a frontend engineer with a deep interest
                        in UI/UX, especially UX research. I like playing with ideas and
                        interface designs, and finding ways to solve real problems
                        through a mix of design and technology.
                    </p>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 text-[color:var(--color-text-secondary)]">
                <p>
                    When I&apos;m not building interfaces, you&apos;ll usually find me
                    drawing — mostly portraits of my friends, sometimes experimenting
                    with new mediums. I&apos;m a foodie at heart, and I try to stay
                    active through hiking and working out — anything that makes me
                    feel strong. Every so often I&apos;ll go scuba diving or bouldering
                    too.
                </p>
            </div>
        </main>
    )
}