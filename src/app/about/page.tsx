import SelfPortrait from "@/app/components/about/SelfPortrait";

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-10 text-3xl font-bold text-[color:var(--color-text-primary)]">
                About
            </h1>

            <div className="rounded-2xl border border-white/50 bg-[#fffcf9]/60 p-6 backdrop-blur-2xl backdrop-saturate-150 sm:p-8">
                <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[280px_1fr]">

                    <SelfPortrait />

                    <p className="max-w-[65ch] text-2xl font-medium leading-[1.7] text-[color:var(--color-text-primary)]">
                        Hi, I&apos;m Adrienne — a frontend engineer in Taipei. I build
                        React and Next.js interfaces for AI and computer-vision products.
                    </p>
                </div>

                <div className="mt-8 flex flex-col gap-5 text-[color:var(--color-text-primary)]">
                    <p className="max-w-[65ch] font-medium leading-[1.7]">
                        Somewhere in there I spent a year teaching computer science to
                        kids, who are unforgiving clients and excellent teachers. I
                        came out of it more patient, better at explaining things, and much
                        quicker to notice when someone&apos;s confused but too polite to
                        say so.
                    </p>

                    <p className="max-w-[65ch] font-medium leading-[1.7]">
                        UX research is where I started, and it still shapes how I build.
                    </p>

                    <p className="max-w-[65ch] font-medium leading-[1.7]">
                        Outside of work I draw, mostly my friends and whatever I ate that
                        week, which is a fair summary of what I care about. I climb, I
                        dive, and I&apos;m slowly convincing a jar of kombucha in my
                        kitchen to behave. Currently learning ukulele, results pending.
                    </p>
                </div>

                <p className="mt-6 text-sm text-[color:var(--color-text-secondary)]">
                    PADI Open Water · AIDA1 · Top Rope &amp; Lead
                </p>
            </div>
        </main>
    )
}