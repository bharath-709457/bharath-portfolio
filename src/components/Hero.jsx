import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "../assets/Bharath-Pic.jpg";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            id="home"
            className={`min-h-screen flex flex-col justify-center items-center text-center px-4 ${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
                } overflow-x-hidden`}
        >
            {/* Animated Profile Picture */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-6"
            >
                <img
                    src={profilePic}
                    alt="Bharath"
                    className="w-35 h-35 md:w-44 md:h-44 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                />
            </motion.div>

            {/* Animated Name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                Hi, I'm Bharath Datta Sai S
            </motion.h1>

            {/* Animated Typing Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <TypeAnimation
                    sequence={[
                        "Java Full Stack Developer",
                        2000,
                        "React Frontend Engineer",
                        2000,
                        "Spring Boot Backend Developer",
                        2000,
                    ]}
                    wrapper="h2"
                    cursor={true}
                    repeat={Infinity}
                    className="text-xl md:text-2xl mb-6 text-gray-400"
                />
            </motion.div>

            {/* Animated Bio */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="max-w-xl text-lg mb-6"
            >
                I design and build full-stack applications using Java, Spring Boot,
                React, and cloud platforms. Passionate about clean code and building
                user-first experiences.
            </motion.p>

            {/* Animated Resume Button */}
            <motion.a
                href="/Bharath_Resume.docx"
                download
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
                Download Resume
            </motion.a>

            {/* Animated Social Icons */}
            <motion.div
                className="flex space-x-6 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
            >
                <a
                    href="https://github.com/bharath-709457"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-2xl hover:text-gray-400" />
                </a>
                <a
                    href="https://www.linkedin.com/in/bharath-datta-sai-singanamala/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="text-2xl hover:text-gray-400" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
