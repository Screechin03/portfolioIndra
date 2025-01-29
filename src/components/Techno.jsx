import React from 'react'
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiGraphql, SiJavascript, SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSolidity } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const techStack = [
    { icon: <TbBrandNextjs className="text-6xl" />, duration: 2.5 },
    { icon: <SiMongodb className="text-6xl text-green-500" />, duration: 2.0 },
    { icon: <SiExpress className="text-6xl text-yellow-500" />, duration: 2.2 },
    { icon: <FaNodeJs className="text-6xl text-green-500" />, duration: 2.4 },
    { icon: <RiReactjsLine className="text-6xl text-cyan-500" />, duration: 2.7 },
    { icon: <SiSolidity className="text-6xl text-cyan-300" />, duration: 2.3 },
    { icon: <SiPostgresql className="text-6xl text-blue-500" />, duration: 2.3 },
    { icon: <RiTailwindCssLine className="text-6xl text-blue-500" />, duration: 2.3 },
    { icon: <FaGit className="text-6xl text-blue-500" />, duration: 2.3 },
    { icon: <SiGraphql className="text-6xl text-blue-500" />, duration: 2.3 },
    { icon: <SiTypescript className="text-6xl text-blue-500" />, duration: 2.3 },
    { icon: <SiJavascript className="text-6xl text-blue-500" />, duration: 2.3 },
];

const Techno = () => {
    return (
        <div className=" pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="my-20 text-center text-4xl "
            >
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center"
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(tech.duration)}
                        initial="initial"
                        animate="animate"
                        className="flex items-center justify-center rounded-2xl border-4 border-neutral-600 bg-slate-300 bg-opacity-25 p-6"
                    >
                        {tech.icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Techno;
