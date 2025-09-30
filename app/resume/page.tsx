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
              Nitin Kabi
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
              <span>nitinkabi123@gmail.com</span>
              <span>+91 7735647656</span>
              <span>Bhubaneswar, Odisha</span>
              <span><Link href="https://github.com/nitin00201/" target="_blank" className="text-gray-700 dark:text-gray-300">GitHub</Link></span>
              <span><Link href="https://linkedin.com/in/nitin-kabi-980532247/" target="_blank" className="text-gray-700 dark:text-gray-300">Linkedin</Link></span>

            </motion.div>
          </div>

          {/* Letter body */}
          <div className="p-8">
     

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Highly skilled Full Stack Developer in designing and implementing 
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
                      <span className="text-gray-700 dark:text-gray-300">Java, Spring boot</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">MongoDB, AWS</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2 mt-10">
                Professional Experience
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer Intern</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">Inxtinct Security | july-2025 - Present</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
Developed a user-friendly and responsive UI for the application, significantly improving usability
, performance, and overall user experience.                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
 Integrated a robust virus scanning feature for inbound email attachments, improving security and 
minimizing threat exposure.                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
 Implemented advanced sensitive data loss prevention using Google DLP, ensuring compliance with data 
privacy standards.                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Apparentice</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">Hyscaler</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Implemented third-party shipping API integrations to enhance backend functionality and optimize order 
fulfillment workflows. </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Modified and optimized frontend components using Next.js, improving user experience and interface 
responsiveness.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
Authored comprehensive technical documentation detailing backend upgrades, facilitating smoother future 
development and onboarding.
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-amber-500 pb-2 mt-10">
                Education
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">MCA</h3>
                <p className="text-amber-700 dark:text-amber-400 font-medium">Veer Surendra Sai University of Technology | 2022 - 2024</p>
                
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