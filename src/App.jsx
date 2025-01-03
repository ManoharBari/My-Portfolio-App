import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
          <p className='max-w-7xl mx-auto px-4 sm:px-6 dark:text-white text-gray-700 lg:px-8 text-sm text-center py-8'>Designed By Manohar Kale</p>
      </main>
    </div>
  );
}

export default App;