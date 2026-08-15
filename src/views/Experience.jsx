import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Icons } from '../components/Icons';

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-surface-950 transition-colors duration-300"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey and hands-on software development experience.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 md:pl-8 border-l-2 border-primary-500/30 dark:border-primary-500/20 pb-10 last:pb-0"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-0 p-1.5 rounded-full bg-primary-500 text-white shadow-lg ring-4 ring-white dark:ring-surface-950">
                <Icons.briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="glass-card p-6 md:p-8 hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-base">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Icons.calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400 mb-4">
                  <Icons.mapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-surface-700 dark:text-surface-300 text-sm md:text-base leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-100 dark:border-surface-800">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
