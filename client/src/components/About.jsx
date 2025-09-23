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
    <section id="about" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-6 shadow-professional border border-accent-200">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-800 mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-4xl font-bold text-primary-800 mb-8">
              I'm a <span className="text-gradient">Full Stack Developer</span>
            </h3>
            <div className="space-y-6 text-primary-600 text-lg leading-relaxed">
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-interactive p-6"
              >
                <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-6 shadow-professional">
                  <feature.icon className="text-accent-600 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-primary-600 leading-relaxed">
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
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '4+', label: 'Years Learning' },
            { number: '15+', label: 'Projects Built' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center card p-6">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                {stat.number}
              </div>
              <div className="text-primary-600 font-semibold text-lg">
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
