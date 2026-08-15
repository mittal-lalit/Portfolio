import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { techStack, softSkills } from '../data/skills';
import { Icons } from '../components/Icons';

const About = () => {
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <section
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Get to know my technical background, expertise, and passion for AI & software engineering.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
              Professional Summary
            </h3>
            <p className="text-surface-700 dark:text-surface-300 text-lg leading-relaxed mb-4">
              {profile.bio}
            </p>
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
              {profile.bioExtended}
            </p>

            {/* Soft skills chips */}
            {softSkills && softSkills.length > 0 && (
              <div className="pt-4 border-t border-surface-200 dark:border-surface-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-3">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-8 text-center">
            Technical Stack & Frameworks
          </h3>

          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStack
                    .filter((t) => t.category === category)
                    .map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="tech-badge"
                        title={tech.name}
                      >
                        <img
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
