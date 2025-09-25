import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance & Personal Projects',
      location: 'Remote',
      period: '2021 - Present',
      type: 'Freelance',
      description: 'Developing full-stack web applications and mobile solutions for various clients and personal projects.',
      achievements: [
        'Built multiple responsive web applications using React and Node.js',
        'Developed interactive games and educational tools',
        'Created portfolio websites with modern UI/UX design',
        'Implemented RESTful APIs and database integration'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'MongoDB']
    },
    {
      title: 'Web Developer',
      company: 'Personal Projects',
      location: 'Remote',
      period: '2020 - 2021',
      type: 'Personal',
      description: 'Focused on learning modern web technologies and building personal projects to showcase skills.',
      achievements: [
        'Developed Rock Paper Scissors game with modern JavaScript',
        'Created responsive web applications with clean code',
        'Learned React, Node.js, and modern development practices',
        'Built projects to demonstrate technical capabilities'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'Git']
    },
    {
      title: 'Student Developer',
      company: 'Self-Learning',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Learning',
      description: 'Self-directed learning in web development, focusing on frontend technologies and programming fundamentals.',
      achievements: [
        'Mastered HTML, CSS, and JavaScript fundamentals',
        'Learned responsive design principles',
        'Completed online courses and tutorials',
        'Built first portfolio website'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'VS Code']
    }
  ];

  const Education = [
    {
      degree: 'Self-Taught Developer',
      institution: 'Online Learning Platforms',
      location: 'Remote',
      period: '2019 - Present',
      description: 'Comprehensive self-directed learning in web development, focusing on modern technologies and best practices.'
    },
    {
      degree: 'Computer Science Foundation',
      institution: 'Various Online Courses',
      location: 'Remote',
      period: '2018 - 2019',
      description: 'Completed multiple online courses covering programming fundamentals, data structures, and algorithms.'
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            My professional journey and the experiences that have shaped my career in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-12 sm:top-16 w-0.5 h-full bg-gray-300"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 gradient-bg rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-12 sm:ml-16 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-xs sm:text-sm text-white font-medium gradient-bg px-2 sm:px-3 py-1 rounded-full shadow-lg mt-2 sm:mt-0 w-fit">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <FaBriefcase className="mr-2 text-sm" />
                      <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mt-3 sm:mt-4 mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>
                    
                    <div className="mb-3 sm:mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 rounded-2xl p-6 sm:p-8 sticky top-8 border border-primary-100 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Education
              </h3>
              
              {Education.map((edu, index) => (
                <div key={index} className="mb-4 sm:mb-6">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{edu.degree}</h4>
                  <p className="text-primary-700 font-medium mb-1 text-xs sm:text-sm">{edu.institution}</p>
                  <p className="text-gray-600 text-xs mb-1">{edu.location}</p>
                  <p className="text-gray-600 text-xs mb-1">{edu.period}</p>
                  <p className="text-gray-600 text-xs">{edu.description}</p>
                </div>
              ))}

              <div className="mt-6 sm:mt-8">
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Skills & Certifications</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <p className="font-medium text-gray-900 text-xs sm:text-sm">JavaScript Fundamentals</p>
                    <p className="text-gray-600 text-xs">Self-Learned</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <p className="font-medium text-gray-900 text-xs sm:text-sm">React Development</p>
                    <p className="text-gray-600 text-xs">Online Courses</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <p className="font-medium text-gray-900 text-xs sm:text-sm">Node.js Backend</p>
                    <p className="text-gray-600 text-xs">Self-Taught</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <p className="font-medium text-gray-900 text-xs sm:text-sm">Responsive Web Design</p>
                    <p className="text-gray-600 text-xs">CSS & HTML5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
