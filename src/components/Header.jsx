import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-50 dark:bg-gray-900 px-5 py-3">
      <div className="max-w-7xl md:mx-20 my-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            <a href="#" className='text-blue-600 dark:text-blue-400'> Meet Manohar </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </nav>

          {/* Social Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/ManoharBari" className="text-gray-700 dark:text-gray-200">
              <Github size={20} className='hover:text-blue-500' />
            </a>
            <a href="https://www.linkedin.com/in/manohar-kale" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <Linkedin size={20} className='hover:text-blue-500' />
            </a>
            <a href="mailto:manoharkale5368@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              <Mail size={20} className='hover:text-blue-500' />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-200" /> : <Menu size={24} className="text-gray-700 dark:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;