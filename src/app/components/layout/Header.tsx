"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    {href: "/", label: "Home"},
    {href: "/work", label: "Work"},
    {href: "/about", label: "About"}
]

export default function Header () {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 ">
            <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
                <Link
                    href="/"
                    className="justify-self-start text-lg font-semibold text-[color:var(--color-text-primary)]"
                >
                    Adrienne
                </Link>
                <nav className="hidden justify-self-center sm:flex sm:items-center sm:gap-3  bg-[color:var(--color-surface)]/95 rounded-[var(--radius-round)] p-3 rounded-full">
                {links.map((link) => {
                    const active = link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                active
                                    ? "bg-[color:var(--nav-active)] text-[color:var(--color-text-primary)]"
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
                        className="rounded-full shadow-sm bg-[color:var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                        Résumé
                    </a>
                </nav>
            </div>
        </header>
    )
}