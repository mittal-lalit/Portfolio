import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Icons } from '../components/Icons';

const Skills = () => {
  return (
    <section
      id="skills"
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
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="section-subheading">
            Specializing in AI / ML systems, RAG & LLM workflows, full-stack web applications, and backend engineering.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((skill, index) => {
            const IconComponent = Icons[skill.icon] || Icons.web;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-6 md:p-8 text-center group hover:shadow-card-hover transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
