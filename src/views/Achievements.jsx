import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Icons } from '../components/Icons';

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Milestones, hackathon triumphs, and active community contributions.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
          {achievements.map((item, index) => {
            const IconComponent = Icons[item.icon] || Icons.trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-6 md:p-8 flex flex-col justify-between group hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                  {item.badge}
                </div>

                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
