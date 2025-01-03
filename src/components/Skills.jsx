import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'],
  'Tools & Others': ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transition-colors"
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