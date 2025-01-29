import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="flex flex-col gap-y-8 fixed z-[100] bg-zinc-800/100 backdrop-blur-2xl text-gray-200 
                    left-0 p-6 pl-2 pr-4 sm:p-7 sm:pl-3 sm:pr-5 md:p-8 md:pl-4 md:pr-6 rounded-e-full top-1/4 ">

            {/* GitHub */}
            <a href="https://github.com/moyezr" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:scale-125 hover:text-red-300 transition-transform duration-300" />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/MoyezRabbani" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className="text-2xl hover:scale-125 hover:text-red-300 transition-transform duration-300" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/moyez-rabbani-4a647421b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:scale-125 hover:text-red-300 transition-transform duration-300" />
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/channel/UCpd5TSiaz1rDTGj9YQo1WIQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:scale-125 hover:text-red-300 transition-transform duration-300" />
            </a>

        </div>
    );
};

export default Navbar;
