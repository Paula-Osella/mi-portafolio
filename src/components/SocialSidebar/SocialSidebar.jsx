import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialSidebar = () => {
    return (
        <div className="fixed bottom-8 left-8 flex flex-col items-center gap-6 z-40 text-text">
            <a
                href="https://github.com/Paula-Osella"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:-translate-y-1 text-xl md:text-2xl lg:text-3xl"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/paula-osella-387b81335/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:-translate-y-1 text-xl md:text-2xl lg:text-3xl"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://www.instagram.com/pau.osella/?__d=11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:-translate-y-1 text-xl md:text-2xl lg:text-3xl"
            >
                <FaInstagram />
            </a>
        </div>
    );
};

export default SocialSidebar;
