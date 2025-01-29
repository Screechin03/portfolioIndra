import React from "react";
import { motion } from "framer-motion";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    const handleResumeClick = () => {
        window.open("/INDRADEEP_RES.pdf", "_blank"); // Replace with the actual path to your resume
    };

    return (
        <div className="flex min-h-screen items-center justify-center text-center  ">
            <div className="flex flex-col items-center">
                {/* BIO */}
                <motion.h1
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="pb-6 text-4xl font-bold lg:text-7xl"

                >
                    HI! Indradeep here,
                </motion.h1>

                <motion.h1
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="pb-6 text-4xl font-bold lg:text-7xl"
                >
                    a FullStack developer
                </motion.h1>
                <motion.h1
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 mt-5 lg:text-xl font-light text-sm"
                >
                    I build scalable applications with eye-catching designs and seamless user experience.
                </motion.h1>

                {/* View Resume Button */}
                <motion.button
                    variants={container(0.3)}
                    initial="hidden"
                    animate="visible"
                    onClick={handleResumeClick}
                    className="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group backdrop-blur opacity-80 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                >
                    {/* Border Animations */}
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>

                    {/* Button Text */}
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease ">
                        Download Resume
                    </span>
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
