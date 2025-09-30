"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "Springboot/Java",
    "MongoDB/AWS",
    "HTML/CSS/Tailwind",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm Nitin, a passionate full-stack developer creating
                  modern web applications. My journey in development started when I was in college,
                  and I've been in love with coding ever since.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  As a full-stack developer, I specialize in building responsive, accessible, and performant 
                  websites and applications using modern technologies on both frontend and backend. 
                  I believe in writing clean, maintainable code and following best practices.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm always eager to learn new technologies and improve my skills.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Skills
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50"
                    variants={item}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <h5 className="font-bold text-gray-900 dark:text-white">MCA in computer Application</h5>
                    <p className="text-gray-600 dark:text-gray-400">Veer Surendra Sai University of Technology (2024)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}