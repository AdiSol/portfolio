import Image from "next/image"
import Socials from "./Socials"

export default function Hero() {
    const CX = 150
    const R = 125        //bigger = flatter
    const CY = 150
    return (
        <section className="mx-auto max-w-3xl flex-col items-center gap-6 px-6 pb-20 pt-10 text-center sm:pt-15">
            <div
                className="justify-center items-center flex"
            >
                <div className="relative h-105 w-87.5">
                    <Image
                        src={"/images/me-3d.png"}
                        alt="3D cartoon image of me"
                        fill
                        className="rounded-[40%] object-contain object-bottom z-10"
                    />
                    <svg
                        viewBox="0 0 300 300"
                        className="pointer-events-none overflow-visible absolute inset-x-0 top-0 aspect-square w-full origin-center fill-text-primary text-3xl tracking-[0.3rem] motion-safe:animate-[hero-orbit_12s_linear_infinite]"
                    >
                        <defs>
                            <path
                                id="hero-circle-text-path"
                               d={`M ${CX} ${CY} m ${-R} 0 a ${R} ${R} 0 1 1 ${R * 2} 0 a ${R} ${R} 0 1 1 ${-R * 2} 0`}
                            />
                        </defs>
                        <text>
                            <textPath href="#hero-circle-text-path" startOffset="27%" textAnchor="middle">
                                Hello There!
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
            <Socials />
            <h1 className="text-4xl font-bold leading-tight text=[color:var(--color-text-primary)] sm:text-4xl">
                I'm Adrienne
            </h1>
            <h2 className="text-2xl font-semibold leading-tight text=[color:var(--color-text-primary)] sm:text-3xl">
                Frontend engineer building React interfaces for AI and EdTech products
            </h2>
        </section>
    )
}