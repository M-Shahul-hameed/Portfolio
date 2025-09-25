import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shahul-hameed-87b786320', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:shameed2404@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text"> M Shahul Hameed</span>
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Full Stack Developer passionate about creating innovative solutions 
              and beautiful user experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-9 h-9 sm:w-10 sm:h-10 gradient-bg rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
                    aria-label={social.label}
                  >
                    <IconComponent size={16} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:shameed2404@gmail.com"
                className="block text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base break-all"
              >
                shameed2404@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
              >
                +1 (555) 123-4567
              </a>
              <p className="text-gray-300 text-sm sm:text-base">
                San Francisco, CA
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-800 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Shahul Hameed. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="hidden sm:inline">using React & Tailwind CSS</span>
              <span className="sm:hidden">React & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
