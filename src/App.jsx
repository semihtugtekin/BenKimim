import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Testimonials from './components/Testimonials';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Preloader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader isDarkMode={isDarkMode} />}
      </AnimatePresence>
      
      {!loading && <CustomCursor />}

      <div className={`min-h-screen bg-bg-main text-text-main transition-colors duration-300 selection:bg-primary selection:text-white ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero isDarkMode={isDarkMode} />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
