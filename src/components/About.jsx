import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16 px-4 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Bharath Datta Sai S, a passionate Java Full Stack Developer with a love for building scalable,
          secure, and user-friendly web applications. I specialize in modern web stacks like React.js,
          Spring Boot, and AWS.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I enjoy solving real-world problems, collaborating with cross-functional teams, and constantly learning
          new technologies. Whether it's frontend design or backend performance, I care deeply about clean code
          and great user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
