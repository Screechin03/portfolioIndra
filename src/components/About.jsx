import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6">
            <h2 className="text-4xl text-center mb-10">
                About<span className="text-neutral-500"> Me</span>
            </h2>

            {/* Container Div for Three Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* First Section - Introduction */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="relative p-6 bg-neutral-900 bg-opacity-40 backdrop-blur-md border border-neutral-500 rounded-xl flex items-center justify-center"
                >
                    <p className="text-center text-lg tracking-tight">
                        👋 Hi! I'm a passionate <span className="text-cyan-300">developer & problem solver</span> who loves turning ideas into reality. I specialize in **modern web technologies** and enjoy tackling challenges that push me to learn and innovate.
                    </p>
                </motion.div>

                {/* Second Section - Skills & Expertise */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="relative p-6 bg-neutral-900 bg-opacity-40 backdrop-blur-md border border-neutral-500 rounded-xl flex items-center justify-center"
                >
                    <p className="text-center text-lg tracking-tight">
                        🚀 I work with **React, Next.js, Tailwind CSS, Firebase, and Node.js**, crafting intuitive user experiences. I'm also experienced in **data structures, algorithms, and AI-driven solutions**, helping create scalable and efficient applications.
                    </p>
                </motion.div>

                {/* Third Section - Vision & Goals */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.7 }}
                    className="relative p-6 bg-neutral-900 bg-opacity-40 backdrop-blur-md border border-neutral-500 rounded-xl flex items-center justify-center"
                >
                    <p className="text-center text-lg tracking-tight">
                        🌎 My goal is to **build meaningful products** that make a difference. Whether it's an AI-powered tool, a blockchain project, or a seamless web app, I strive to push the boundaries of what's possible with technology.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
