import React from 'react';

const projects = [
  {
    title: "Payal Demo project",
    description: "A responsive PayPal UI replica built using HTML, CSS, JavaScript, and Bootstrap. Focused on layout, responsiveness, and interaction simulation.",
    tech: [ "JavaScript", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/bharath-709457/Paypal_Project",
    demo: ""
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecast app using OpenWeatherMap API with location-based UI.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app.vercel.app"
  },
  {
    title: "Taskverse - Task Management System",
    description: "A full-stack task management platform with secure login using JWT, Spring Security, and role-based access control. Users can register, log in, create, edit, and manage tasks with a responsive React UI and a secure Spring Boot backend.",
    tech: ["React.js", "Spring Boot", "JWT", "Spring Security", "PostgreSQL", "REST API"],
    github: "https://github.com/bharath-709457/taskverse.git",
    demo: ""
  },


];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
