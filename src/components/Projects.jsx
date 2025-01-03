import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with payment integration',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Project 3',
    description: 'Mobile-first social media application',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">PROJECTS</h2>
        <div className="grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="hover:translate-y-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;