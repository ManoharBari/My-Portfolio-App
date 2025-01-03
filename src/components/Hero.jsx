import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

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
    <section id="home" className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="flex justify-center items-center space-x-4">
            <a href="https://drive.google.com/file/d/1V2CTVlXFm6sdaVDAw7ucSX9dbJ-tc5hz/view?usp=sharing"
              className="inline-flex items-center px-4 py-2 border-2 border-transparent text-base font-medium rounded-md text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-white transition-colors"
            >
              Resume
              <Download className="ml-2" size={20} />
            </a>
            <a href="https://github.com/ManoharBari" className="text-gray-700 dark:text-gray-200" target="_blank"> <Github size={23} className='hover:text-blue-500' /> </a>
            <a href="https://www.linkedin.com/in/manohar-kale" className="text-gray-700 dark:text-gray-200" target="_blank"> <Linkedin size={23} className='hover:text-blue-500' /> </a>
            <a href="mailto:manoharkale5368@gmail.com" className="text-gray-700 dark:text-gray-200"> <Mail size={23} className='hover:text-blue-500' /> </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;