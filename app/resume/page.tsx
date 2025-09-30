"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white dark:bg-gray-900 shadow-2xl rounded-lg overflow-hidden border-2 border-amber-200 dark:border-amber-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Letterhead */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-900 dark:from-amber-900 dark:to-amber-800 p-8 text-center text-white">
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nitin
            </motion.h1>
            <motion.p 
              className="text-xl font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.div 
              className="mt-4 flex justify-center space-x-6 text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>nitin@example.com</span>
              <span>+1 (555) 123-4567</span>
              <span>San Francisco, CA</span>
            </motion.div>
          </div>

          {/* Letter body */}
          <div className="p-8">
            <motion.div 
              className="mb-8 text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-gray-700 dark:text-gray-300">September 27, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Highly skilled Full Stack Developer with over 5 years of experience in designing and implementing 
                scalable web applications. Proficient in both frontend and backend technologies, with a strong 
                focus on creating exceptional user experiences and robust server-side solutions. Passionate about 
                staying current with emerging technologies and applying best practices to deliver high-quality software.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2 mt-10">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">React, Next.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">TypeScript, JavaScript</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">HTML5, CSS3, Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">Node.js, Express</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">Python, Django</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">MongoDB, PostgreSQL</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2 mt-10">
                Professional Experience
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Full Stack Developer</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">Tech Innovations Inc. | 2022 - Present</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Led development of a customer portal serving 100,000+ users, improving response times by 40%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Architected and implemented a microservices-based backend system using Node.js and Docker
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Mentored junior developers and established coding standards that improved code quality by 30%
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">Digital Solutions LLC | 2020 - 2022</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Developed and maintained 15+ client websites using React and WordPress, increasing client retention by 25%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Integrated payment systems using Stripe API, reducing transaction processing time by 30%
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2 mt-10">
                Education
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">B.S. Computer Science</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">University of Technology | 2015 - 2019</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Graduated with honors. Specialized in software engineering and web development.
                </p>
              </div>

              <div className="mt-12 pt-6 border-t-2 border-amber-200 dark:border-amber-900">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "I am committed to delivering exceptional digital experiences through clean code, 
                  innovative solutions, and a deep understanding of user needs."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="bg-amber-50 dark:bg-gray-800 p-6 text-center">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all shadow-md"
            >
              Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}