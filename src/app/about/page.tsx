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
                        Hi, I&apos;m Adrienne — a frontend engineer in Taipei. I build React and
                        Next.js interfaces for AI and computer-vision products. Somewhere in there I
                        spent a year teaching computer science to kids, who are unforgiving
                        stakeholders and excellent teachers — I came out of it more patient, better
                        at explaining things, and much quicker to notice when someone&apos;s confused
                        but too polite to say so. UX research is where I started and it still shapes
                        how I build.
                    </p>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 text-[color:var(--color-text-secondary)]">
                <p>
                    Outside of work I draw — mostly my friends and whatever I ate that week,
                    which is a fair summary of what I care about — and I&apos;m slowly convincing
                    a jar of kombucha in my kitchen to behave. I climb, and recently got my lead
                    certification, which mainly means I&apos;m nervous higher up now. Weekends
                    I&apos;m often at Long Dong, either above the water or freediving under it.
                    Currently learning ukulele, results pending.
                </p>
            </div>
        </main>
    )
}