import React from 'react';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shahul-hameed-87b786320', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:shameed2404@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-50 w-full max-w-full">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-accent-100 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-primary-100 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 text-accent-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-professional border border-accent-200">
                👋 Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-800 mb-4 sm:mb-6 leading-tight">
                M Shahul
                <span className="text-gradient block">Hameed</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-700 mb-6 sm:mb-8">
                <span className="font-semibold">Full Stack Developer</span>
                <br />
                <span className="text-accent-500 font-semibold">& UI/UX Designer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-primary-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              I create beautiful, functional, and user-centered digital experiences that bring ideas to life. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <button className="btn-primary inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                <FaDownload />
                <span>Download Resume</span>
              </button>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
              >
                <span>Get In Touch</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-professional rounded-2xl flex items-center justify-center hover:shadow-professional-lg transition-all duration-300 transform hover:scale-110 hover:bg-accent-50"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-primary-700 hover:text-accent-600" size={20} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-professional-lg p-2">
                <div className="w-full h-full bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white rounded-2xl shadow-professional flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl lg:text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-accent-500 rounded-2xl shadow-professional animate-float"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-primary-500 rounded-2xl shadow-professional animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-6 sm:-left-12 w-6 h-6 sm:w-8 sm:h-8 bg-success-500 rounded-2xl shadow-professional animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-300 rounded-full flex justify-center shadow-professional">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-accent-600 rounded-full mt-1.5 sm:mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
