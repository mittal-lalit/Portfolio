import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/education';
import { Icons } from '../components/Icons';

const Education = () => {
  return (
    <section
      id="education"
      className="bg-surface-50 dark:bg-surface-900 transition-colors duration-300"
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-surface-900 dark:text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading">
            Academic qualifications and coursework that built my foundation in CS and AI.
          </p>
        </motion.div>

        {/* Education grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Icons.academic className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-500 text-white">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
                  {edu.institution}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-800 dark:text-surface-200 text-sm font-semibold mb-6">
                  <span>{edu.scoreLabel}:</span>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{edu.score}</span>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-3">
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-800/80 text-surface-700 dark:text-surface-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
