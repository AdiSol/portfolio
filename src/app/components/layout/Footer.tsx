import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-[color:var(--color-text-secondary)]/10 py-8">
            <div className="mx-auto max-w-5xl items-center flex-row gap-6 px-6 text-sm text-[color:var(--color-text-secondary)] sm:flex-row sm:justify-between"> 
                <div>
                    <a 
                        href="mailto:asoliven.work@gmail.com"
                        className="transition-colors flex items-center gap-2 hover:text-[color:var(--color-text-primary)]"
                    >
                        <FaEnvelope size={24} className="text-black" />
                        <span>asoliven.work@gmail.com</span>
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
                <p className='items-center'>&copy; Adrienne Soliven {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}