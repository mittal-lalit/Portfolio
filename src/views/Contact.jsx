import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';
import { getSocialIcon, Icons } from '../components/Icons';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Fallback: open mailto
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have an opportunity, collaboration idea, or question? I&apos;d love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <Icons.alertCircle className="w-4 h-4 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-input"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <Icons.alertCircle className="w-4 h-4 shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or just say hi..."
                  rows={5}
                  className="form-input resize-none"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <Icons.alertCircle className="w-4 h-4 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Icons.loader className="w-5 h-5" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <Icons.check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <Icons.alertCircle className="w-5 h-5" />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <Icons.send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success message */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 dark:text-green-400 text-center"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {/* Error message */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 text-center"
                >
                  Something went wrong. You can also email me directly below.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Email */}
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Icons.mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-surface-900 dark:text-white">Email</h3>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Icons.phone className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-surface-900 dark:text-white">Phone</h3>
              </div>
              <a
                href={`tel:${profile.phone}`}
                className="text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                {profile.phone}
              </a>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Icons.mapPin className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-surface-900 dark:text-white">Location</h3>
              </div>
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                {profile.address}
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-3">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((social) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 bg-surface-50 dark:bg-surface-800 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-200"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Direct email link */}
            <div className="pt-4 border-t border-surface-200 dark:border-surface-800">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Or send me an email directly →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
