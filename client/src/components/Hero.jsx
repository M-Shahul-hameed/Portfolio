import React from 'react';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shahul-hameed-87b786320', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:shameed2404@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-100 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-100 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-6 shadow-professional border border-accent-200">
                👋 Hello, I'm
              </span>
              <h1 className="text-6xl md:text-8xl font-bold text-primary-800 mb-6 leading-tight">
                M Shahul
                <span className="text-gradient block">Hameed</span>
              </h1>
              <div className="text-2xl md:text-3xl text-primary-700 mb-8">
                <span className="font-semibold">Full Stack Developer</span>
                <br />
                <span className="text-accent-500 font-semibold">& UI/UX Designer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-primary-600 mb-10 max-w-2xl leading-relaxed"
            >
              I create beautiful, functional, and user-centered digital experiences that bring ideas to life. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10"
            >
              <button className="btn-primary inline-flex items-center space-x-3">
                <FaDownload />
                <span>Download Resume</span>
              </button>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline inline-flex items-center space-x-3"
              >
                <span>Get In Touch</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white shadow-professional rounded-2xl flex items-center justify-center hover:shadow-professional-lg transition-all duration-300 transform hover:scale-110 hover:bg-accent-50"
                  aria-label={social.label}
                >
                  <social.icon className="text-primary-700 hover:text-accent-600" size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-96 h-96 bg-white rounded-3xl shadow-professional-lg p-2">
                <div className="w-full h-full bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl flex items-center justify-center">
                  <div className="w-80 h-80 bg-white rounded-2xl shadow-professional flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-2xl shadow-professional animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-primary-500 rounded-2xl shadow-professional animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-success-500 rounded-2xl shadow-professional animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center shadow-professional">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-600 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
