"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Skincare Brand Landing Page",
      description: "A landing page for a product with a clean and modern design.",
      category: "web",
      technologies: ["React", "Tailwind css"],
      githubUrl: "https://github.com/nitin00201/figma-landing-page",
      deployedUrl: "https://figma-landing-page-ten.vercel.app/"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A RESTful API for task management with authentication and real-time updates.",
      category: "backend",
      technologies: ["Spring boot", "MySQL", "React js", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/username/task-management-app",
      deployedUrl: "https://task-management-app-demo.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design and smooth animations.",
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "/",
      deployedUrl: "/"
    },
    {
      id: 4,
      title: "Project Management System",
      description: "A dashboard for managing projects and tasks with project management features.",
      category: "web",
      technologies: ["Next.js", "postgresql", "shadcn/ui", "Tailwind CSS"],
      githubUrl: "https://github.com/nitin00201/SprintFlow",
      deployedUrl: "https://sprint-flow.vercel.app/"
    },
    {
      id: 5,
      title: "Codeshad - AN UI library",
      description: "A UI library for React with over 100 components and a simple design.",
      category: "web",
      technologies: ["Next js", "shadcn", "TailwindCSS", "fumadocs"],
      githubUrl: "https://github.com/nitin00201/react-ui",
      deployedUrl: "https://react-ui-topaz.vercel.app/"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A full-stack chat application for real-time messaging.",
      category: "web",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "socket.io"],
      githubUrl: "https://github.com/nitin00201/chatapp",
      deployedUrl: "https://github.com/nitin00201/chatapp"
    },
     {
      id: 7,
      title: "Nebula X – AR Phone Landing Page",
      description: "A futuristic product landing page for Nebula X, an AR-enabled smartphone. Built using Next.js, GSAP, and Tailwind.",
      category: "web",
      technologies: ["React", "Tailwind css"],
      githubUrl: "https://github.com/nitin00201/nebula-x",
      deployedUrl: "https://nebula-x-kappa.vercel.app/"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "backend", label: "Backend APIs" },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each project reflects my passion for creating
            exceptional digital experiences on both frontend and backend.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="premium-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.deployedUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}