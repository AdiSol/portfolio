"use client"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
    const [isCopied, setIsCopied] = useState(false);
    const email = "asoliven.work@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 800);
        } catch (error) {
            console.error("failed to copy text: ", error);
        }
    }

    return (
        <footer className="border-t border-[color:var(--color-text-secondary)]/10 py-8">
            <div className="mx-auto max-w-5xl flex flex-col gap-6 px-6 text-sm text-[color:var(--color-text-secondary)]">
                <div className="flex flex-col items-start gap-6">
                    <button
                        onClick={handleCopy}
                        className="transition-colors flex items-center gap-2 hover:text-[color:var(--color-accent)]"
                    >
                        <FaEnvelope size={24} className="dark:text-white" />
                        {isCopied 
                            ?
                            <span className='absolute translate-x-8 mt-1 px-2 p-1 text-center whitespace-nowrap rounded-(--radius-default) bg-accent text-white'>
                                Copied to clipboard
                            </span>
                            
                            :
                            <span>Email</span>
                        }
                        
                        
                    </button>

                    <a
                        href="https://github.com/adisol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors flex gap-2 hover:text-[color:var(--color-accent)]"
                    >
                        <FaGithub size={24} className="dark:text-white" />
                        <span>Github</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adrienne-soliven-7725831aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors flex gap-2 hover:text-[color:var(--color-accent)]"
                    >
                        <FaLinkedin size={24} className="dark:text-white" />
                        <span>LinkedIn</span>
                    </a>
                </div>
                <p className="text-center">&copy; Adrienne Soliven {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}