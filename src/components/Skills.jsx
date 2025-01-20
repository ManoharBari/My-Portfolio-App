import React from 'react';

const skills = {
  'Frontend': ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind CSS', 'Next.js', 'EJS', 'Redux', 'Bootstrap'],
  'Backend': ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST API', 'JWT'],
  'Tools & Others': ['Git', 'GitHub', 'AWS', 'CI/CD', 'Agile', 'Linux'],
  'Programming Language': ['Java', 'C++', 'Python', 'JavaScript'],
  'Personal Skills': ['Communication', 'Leadership', 'Team Work', 'Problem Solving'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto lg:mx-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-white mb-12">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="transition ease-in-out duration-800 hover:-translate-y-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;