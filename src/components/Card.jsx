import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

const ProjectCard = ({ project, index }) => {
  const { title, description, techStack, liveUrl, githubUrl, image } = project;

  // Determine icon based on title/tech
  const isAI = techStack.some(t => ['Python', 'LLMs', 'RAG', 'MediaPipe', 'OpenCV', 'TensorFlow', 'Neo4j'].includes(t));

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group overflow-hidden flex flex-col h-full hover:shadow-card-hover transition-all duration-300"
    >
      {/* Project Banner */}
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary-900/40 via-surface-900 to-primary-950/60 border-b border-surface-200/10 flex items-center justify-center p-6 text-center">
        {image ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="p-3.5 rounded-2xl bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
              {isAI ? <Icons.brain className="w-8 h-8" /> : <Icons.code className="w-8 h-8" />}
            </div>
            <span className="text-xs font-mono tracking-wider text-primary-400 uppercase">
              {isAI ? 'AI / ML System' : 'Full-Stack SaaS'}
            </span>
          </div>
        )}

        {/* Action button header */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-900/80 backdrop-blur-md text-surface-200 hover:text-white hover:bg-primary-600 transition-all duration-200 shadow-md"
              aria-label={`View ${title} repository on GitHub`}
              title="View Repository"
            >
              <Icons.github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-900/80 backdrop-blur-md text-surface-200 hover:text-white hover:bg-primary-600 transition-all duration-200 shadow-md"
              aria-label={`View ${title} live demo`}
              title="Live Demo"
            >
              <Icons.externalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-500/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
