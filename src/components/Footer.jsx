import React from 'react';
import { profile } from '../data/profile';
import { getSocialIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-surface-500 dark:text-surface-400">
            &copy; {currentYear} {profile.name}. Built with React & Tailwind CSS.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {profile.socials.map((social) => {
              const IconComponent = getSocialIcon(social.icon);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
