import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: 'Jan 2022 - Present',
    description: 'Led development of multiple full-stack applications, mentored junior developers, and implemented CI/CD pipelines.',
  },
  {
    title: 'Software Developer',
    company: 'Startup Inc',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained multiple web applications using React and Node.js. Collaborated with design team for UI/UX improvements.',
  },
  {
    title: 'Junior Developer',
    company: 'Tech Solutions',
    period: 'Jun 2019 - Feb 2020',
    description: 'Assisted in developing frontend components and fixing bugs. Participated in code reviews and team meetings.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar size={20} className="mr-2" />
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;