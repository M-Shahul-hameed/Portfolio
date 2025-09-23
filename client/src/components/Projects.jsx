import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaEnvelope, FaStar, FaCalendarAlt, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'fullstack',
      liveUrl: 'https://ecommerce-demo.com',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates'],
      status: 'Featured',
      year: '2024',
      rating: 5
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Express. Users can create projects, assign tasks, track progress, and communicate through built-in chat.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      category: 'fullstack',
      liveUrl: 'https://taskmanager-demo.com',
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'Progress Tracking'],
      status: 'Live',
      year: '2024',
      rating: 4
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A cross-platform mobile banking application built with React Native. Features include account management, money transfers, bill payments, and transaction history.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Biometric Auth', 'Push Notifications'],
      category: 'mobile',
      liveUrl: 'https://banking-app-demo.com',
      features: ['Secure Authentication', 'Money Transfers', 'Bill Payments', 'Transaction History'],
      status: 'Live',
      year: '2023',
      rating: 5
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions, forecasts, and weather maps. Built with React and integrated with multiple weather APIs.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: 'https://weather-dashboard-demo.com',
      features: ['Current Weather', '7-Day Forecast', 'Interactive Maps', 'Location Search'],
      status: 'Live',
      year: '2023',
      rating: 4
    },
    {
      id: 5,
      title: 'Rock Paper Scissors Game',
      description: 'An interactive web-based game built with modern JavaScript and CSS. Features include animated transitions, score tracking, and responsive design for all devices.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      category: 'frontend',
      liveUrl: 'https://rock-paper-scissors-demo.com',
      features: ['Interactive Gameplay', 'Score Tracking', 'Responsive Design', 'Smooth Animations'],
      status: 'Live',
      year: '2023',
      rating: 4
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router', 'EmailJS'],
      category: 'frontend',
      liveUrl: 'https://shahul-portfolio.com',
      features: ['Responsive Design', 'Smooth Animations', 'Contact Form', 'Modern UI'],
      status: 'Live',
      year: '2024',
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaGlobe },
    { id: 'fullstack', name: 'Full Stack', icon: FaCode },
    { id: 'frontend', name: 'Frontend', icon: FaGlobe },
    { id: 'backend', name: 'Backend', icon: FaCode },
    { id: 'mobile', name: 'Mobile', icon: FaMobile }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaRocket className="text-accent-500" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-800 mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            A curated timeline of projects highlighting scope, stack, and links — no cards.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-accent-500 text-white'
                  : 'bg-white text-primary-600 hover:bg-accent-50 hover:text-accent-600 border border-primary-200'
              }`}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Vertical timeline list (no cards) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-200 via-primary-200 to-transparent" />

          <ul className="space-y-10">
            {filteredProjects.map((project, index) => (
              <li key={project.id} className="relative">
                {/* Node */}
                <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 w-3.5 h-3.5 rounded-full bg-accent-500 ring-4 ring-accent-100" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-start ${index % 2 === 0 ? 'sm:[&>*:first-child]:order-1' : ''}`}
                >
                  {/* Meta */}
                  <div className="pl-10 sm:pl-0">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-primary-400" size={14} />
                      <span className="text-sm text-primary-500">{project.year}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        project.status === 'Featured'
                          ? 'bg-accent-50 text-accent-600 border-accent-200'
                          : 'bg-success-50 text-success-700 border-success-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary-100 text-primary-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-10 sm:pl-0">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-700 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.features?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-accent-50 text-accent-700 border border-accent-100">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 4 && (
                          <span className="text-xs px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 border border-primary-100">
                            +{project.features.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${i < project.rating ? 'text-yellow-400' : 'text-primary-300'}`}
                        />
                      ))}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-accent-700 hover:text-accent-800 font-semibold"
                        >
                          <FaExternalLinkAlt size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-3xl p-10 border border-accent-100">
            <h3 className="text-3xl font-bold text-primary-800 mb-3">Ready to Start Your Next Project?</h3>
            <p className="text-primary-600 mb-6 text-lg max-w-2xl mx-auto">
              I’m always excited to work on new and challenging ideas.
            </p>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4"
            >
              <FaEnvelope />
              <span>Get In Touch</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
