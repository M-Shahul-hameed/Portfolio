import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaGlobe,
  FaCode
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 90, color: 'text-accent-500' },
        { name: 'React', icon: FaReact, level: 85, color: 'text-secondary-500' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: 'text-accent-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'text-secondary-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: 'text-accent-500' },
        { name: 'Responsive Design', icon: FaGlobe, level: 88, color: 'text-success-600' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-success-600' },
        { name: 'Express.js', icon: SiExpress, level: 75, color: 'text-primary-700' },
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'text-success-600' },
        { name: 'RESTful APIs', icon: FaCode, level: 75, color: 'text-secondary-500' },
        { name: 'Database Design', icon: FaDatabase, level: 70, color: 'text-secondary-500' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Version Control', icon: FaCode, level: 85, color: 'text-accent-500' },
        { name: 'VS Code', icon: FaCode, level: 90, color: 'text-secondary-500' },
        { name: 'Chrome DevTools', icon: FaGlobe, level: 80, color: 'text-success-600' },
        { name: 'Figma', icon: FaCode, level: 70, color: 'text-accent-500' },
        { name: 'Command Line', icon: FaCode, level: 75, color: 'text-primary-600' }
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4 sm:mb-6"
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-100 rounded-xl flex items-center justify-center shadow-professional">
            <skill.icon className={`text-lg sm:text-xl text-accent-600`} />
          </div>
          <span className="font-semibold text-primary-900 text-sm sm:text-base lg:text-lg">{skill.name}</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-accent-600 bg-accent-50 px-2 sm:px-3 py-1 rounded-full">{skill.level}%</span>
      </div>
      <div className="w-full bg-primary-100 rounded-full h-2 sm:h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className={`h-2 sm:h-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 shadow-professional`}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 text-accent-800 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-professional">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-4 sm:mb-6 lg:mb-8">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card-elevated p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-8 sm:mb-12">
            Additional <span className="text-gradient">Expertise</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {[
              'RESTful APIs', 'Responsive Design', 'Cross-browser Compatibility',
              'Version Control', 'Code Optimization', 'Debugging',
              'Problem Solving', 'Clean Code', 'User Experience',
              'Web Performance', 'Browser DevTools', 'Code Documentation'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-accent-50 text-accent-800 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:bg-accent-100 transition-all duration-300 shadow-professional hover:shadow-professional-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
