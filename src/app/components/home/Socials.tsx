"use client"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { FaClipboardCheck } from "react-icons/fa";


export default function Socials () {
    const [isCopied, setIsCopied] = useState(false);
    const email = "asoliven.work@gmail.com"
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
        <div className='justify-center items-center flex gap-8 mt-2 mb-6 pointer-fine:'>
            <a
                href="https://github.com/adisol"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--color-text-primary)]"
            >
                <FaGithub size={24} className="text-gray dark:text-white" />
            </a>
            <a
                href="https://www.linkedin.com/in/adrienne-soliven-7725831aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[color:var(--color-text-primary)]"
            >
                <FaLinkedin size={24} className="text-gray dark:text-white" />
            </a>

            <button
            onClick={handleCopy}
                className="transition-colors flex items-center gap-2 hover:text-[color:var(--color-text-primary)]"
            >
                {isCopied ? "Copied!" : <FaEnvelope size={24} className="text-gray" />}
            </button>
        </div>
    )
}