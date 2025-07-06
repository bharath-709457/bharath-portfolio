import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm Bharath Datta Sai S
            </h1>

            {/* Typing Animation */}
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

            <p className="max-w-xl text-lg mb-6">
                I design and build full-stack applications using Java, Spring Boot,
                React, and cloud platforms. Passionate about clean code and building
                user-first experiences.
            </p>

            <a
                href="/Bharath_Resume.docx"
                download
                className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
                Download Resume
            </a>
            <div className="flex space-x-6 mt-6">
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
            </div>
        </section>
    );
};

export default Hero;
