import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { getSocialIcon, Icons } from '../components/Icons';

const resume = profile.resumePath || '/resume.pdf';

const TypeWriter = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.slice(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient-light dark:hero-gradient" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="gradient-orb w-96 h-96 bg-primary-400 dark:bg-primary-600 top-1/4 -left-48 animate-pulse" />
        <div className="gradient-orb w-80 h-80 bg-primary-300 dark:bg-primary-500 bottom-1/4 -right-40" style={{ animationDelay: '1s' }} />
        <div className="gradient-orb w-64 h-64 bg-blue-300 dark:bg-blue-600 top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-primary-600 dark:text-primary-400 font-mono text-sm md:text-base mb-4"
          >
            Hi there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-surface-900 dark:text-white mb-4"
          >
            {profile.name}
            <span className="text-primary-500">.</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-surface-500 dark:text-surface-400 mb-6 h-12"
          >
            <TypeWriter words={profile.roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-surface-600 dark:text-surface-400 max-w-xl mb-8 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary gap-2"
            >
              Get in Touch
              <Icons.send className="w-4 h-4" />
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline gap-2"
              aria-label="Download resume (opens in new tab)"
            >
              Resume
              <Icons.download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            {profile.socials.map((social) => {
              const IconComponent = getSocialIcon(social.icon);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-200"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-surface-400 dark:text-surface-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <Icons.arrowDown className="w-5 h-5 text-surface-400 dark:text-surface-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
