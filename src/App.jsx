import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide splash screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

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