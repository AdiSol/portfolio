"use client"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { FaClipboardCheck } from "react-icons/fa";


export default function Socials () {
    const [isCopied, setIsCopied] = useState(false);
    const email = "asoliven.work@gmail.com";
    const iconSize = 38;

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
        <div className='justify-center items-center flex gap-16 mt-2 mb-6 text-white'>
            <a
                href="https://github.com/adisol"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--color-accent)]"
            >
                <FaGithub size={iconSize} />
            </a>
            <a
                href="https://www.linkedin.com/in/adrienne-soliven-7725831aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--color-accent)]"
            >
                <FaLinkedin size={iconSize} />
            </a>

            <button
                onClick={handleCopy}
                className="transition-colors flex items-center gap-2 hover:text-[color:var(--color-accent)] cursor-pointer"
            >
                <div className='relative'>
                    <FaEnvelope size={iconSize} />
                    {isCopied && (
                        <span className='absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 p-1 text-center whitespace-nowrap rounded-(--radius-default) bg-accent text-white'>
                            Copied!
                        </span>
                    )}
                </div>
            </button>
        </div>
    )
}