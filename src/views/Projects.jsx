import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/Card';
import { Icons } from '../components/Icons';
import { profile } from '../data/profile';

const Projects = () => {
  return (
    <section
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            A selection of projects I&apos;ve worked on. Each one taught me something new.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={profile.socials.find((s) => s.icon === 'github')?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline gap-2"
          >
            View More on GitHub
            <Icons.externalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
