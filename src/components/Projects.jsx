import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Weather Application',
    description: 'A Weather Application use an API to fetch and display real-time weather data, offering accurate forecasts and current conditions.',
    tech: ['React', 'Node.js', 'API', 'CSS', 'Bootstrap'],
    github: 'https://github.com/ManoharBari/weather_app_react',
    live: 'https://weather-forecast-webapp.vercel.app'
  },
  {
    title: 'Notebook App',
    description: 'Notebook is a full-stack MERN application for managing notes.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Thunder Client', 'Bootstrap'],
    github: 'https://github.com/ManoharBari/Notebook-App',
    live: 'https://notebook-webapp.vercel.app'
  },
  {
    title: 'Project Management System',
    description: 'It is a full-stack MERN application for managing projects.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT'],
    github: 'https://github.com/ManoharBari/Project-Manager',
  },
  {
    title: 'Simon Game',
    description: "This is a classic Simon game built using HTML, CSS, and JavaScript.",
    tech: ['HTML', 'Javascript', 'CSS', 'Bootstrap'],
    github: 'https://github.com/ManoharBari/Simon-Game',
    live: 'https://manoharbari.github.io/Simon-Game'
  },
  {
    title: 'Spotify Clone',
    description: "This is a simple Spotify clone project built using HTML and CSS.",
    tech: ['HTML', 'Javascript', 'CSS', 'Bootstrap'],
    github: 'https://github.com/ManoharBari/Spotify-Clone',
    live: 'https://manoharbari.github.io/Spotify-Clone'
  },
  {
    title: 'Link Tree Clone',
    description: "This is a Link Tree Clone project built using Next.js.",
    tech: ['Next.js', 'Tailwind', 'CSS', 'Bootstrap'],
    github: '',
    live: 'https://link-tree-clone-app.vercel.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto lg:mx-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-white mb-12">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="transition ease-in-out duration-800 hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live
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