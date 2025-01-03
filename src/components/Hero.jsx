import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypeWriter';

const Hero = () => {
  const roles = useTypewriter({
    words: [
      'Full Stack Developer',
      'UI/UX Enthusiast',
      'MERN Stack Developer',
      'Software Engineer'
    ]
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Manohar Kale</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {roles}
          </p>
          <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 mb-8">
            A Full Stack Developer designs and implements both front-end <br />
            and back-end solutions, ensuring seamless integration and<br />
            functionality across applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;