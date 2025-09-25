import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimized applications that deliver fast, responsive user experiences.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication and problem-solving skills.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and finding creative solutions to complex problems.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 section-bg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 text-accent-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-professional border border-accent-200">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-4 sm:mb-6 lg:mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-6 sm:p-8 order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-800 mb-6 sm:mb-8">
              I'm a <span className="text-gradient">Full Stack Developer</span>
            </h3>
            <div className="space-y-4 sm:space-y-6 text-primary-600 text-base sm:text-lg leading-relaxed">
              <p>
                With expertise in React, Node.js, and modern web technologies, I create dynamic and 
                scalable applications that solve real-world problems. My passion lies in building 
                innovative solutions that combine beautiful user interfaces with robust backend systems.
              </p>
              <p>
                I specialize in developing responsive web applications, RESTful APIs, and mobile apps 
                using cutting-edge technologies. My approach focuses on writing clean, maintainable code 
                and implementing best practices for optimal performance and user experience.
              </p>
              <p>
                Beyond coding, I'm passionate about continuous learning, contributing to open-source 
                projects, and mentoring fellow developers. I believe in the power of technology to 
                transform ideas into impactful digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-interactive p-4 sm:p-6"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-professional">
                  <feature.icon className="text-accent-600 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-primary-900 mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-primary-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            { number: '4+', label: 'Years Learning' },
            { number: '15+', label: 'Projects Built' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-primary-600 font-semibold text-sm sm:text-base lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
