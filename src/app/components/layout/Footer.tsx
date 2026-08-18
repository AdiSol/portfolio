import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-[color:var(--color-text-secondary)]/10 py-8">
            <div className="mx-auto flex max-w-5xl flex-row items-center gap-2 px-6 text-sm text-[color:var(--color-text-secondary)] sm:flex-row sm:justify-between">
                <p>&copy; {new Date().getFullYear()} Adrienne Soliven</p>
                <div className="flex gap-6">
                    <a 
                        href="mailto:asoliven.work@gmail.com"
                        className="transition-colors hover:text-[color:var(--color-text-primary)]"
                    >
                        <FaEnvelope size={24} className="text-black" />  asoliven.work@gmail.com
                    </a>
                    
                    <a
                        href="https://github.com/adisol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[color:var(--color-text-primary)]"
                    >
                        <FaGithub size={24} className="text-black dark:text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adrienne-soliven-7725831aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[color:var(--color-text-primary)]"
                    >
                        <FaLinkedin size={24} className="text-black dark:text-white" />
                    </a>
                </div>
            </div>
        </footer>
    )
}