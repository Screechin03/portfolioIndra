import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="w-full mt-14 text-center h-screen overflow-x-auto mr-9">
            {/* Title Section */}
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl text-neutral-100 py-10"
            >
                Projects I've Worked on
            </motion.h1>

            {/* Projects List */}
            <div className="flex flex-col md:flex-row items-center space-y-10 md:space-x-10 px-10 overflow-x-auto snap-x snap-mandatory">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="snap-center flex-shrink-0 bg-transparent border p-8 rounded-lg shadow-lg max-w-[600px] w-full md:w-[600px] flex flex-col items-center" // added items-center for alignment
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="mb-4 w-full h-48 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        <p className="mt-2 text-neutral-400">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center"> {/* Added justify-center for consistent alignment */}
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Project;
