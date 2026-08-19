"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const links = [
    {href: "/", label: "Home"},
    {href: "/work", label: "Work"},
    {href: "/about", label: "About"}
]

export default function Header () {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 ">
            <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-3 py-2 sm:px-6 sm:py-4">
                <Link
                    href="/"
                    className="justify-self-start text-lg font-semibold text-[color:var(--color-text-primary)]"
                >
                    <Image
                        src="/logo.png"
                        alt="A logo that looks like the letter 'A' and also a girl"
                        width={45}
                        height={45}
                        className="h-8 w-8 sm:h-11.25 sm:w-11.25"
                    />
                </Link>
                <nav
                    className={`flex items-center justify-self-center gap-2 sm:gap-3 rounded-full p-1 sm:p-3 transition-colors duration-300 ${
                        scrolled
                            ? "bg-[color:var(--color-surface)]/95 shadow-sm"
                            : "bg-transparent"
                    }`}
                >
                {links.map((link) => {
                    const active = link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2 ${
                                active
                                    ? `${scrolled && `bg-[color:var(--nav-active)]`} text-[color:var(--nav-selected)] text-extrabold`
                                    : "text-[color:var(--nav-text)] hover:border-1 hover:bg-[color:var(--color-surface-alt)] hover:text-[color:var(--nav-hover)]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full shadow-sm bg-[color:var(--color-accent)] px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-4 sm:py-2"
                    >
                        Résumé
                    </a>
                </nav>
            </div>
        </header>
    )
}