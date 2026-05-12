import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [hash]);

  return null;
};

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
    }, 1800);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToHash />
      <AnimatePresence>
        {loading && <Preloader isDarkMode={isDarkMode} />}
      </AnimatePresence>
      
      {!loading && <CustomCursor />}

      <div className={`min-h-screen bg-bg-main text-text-main transition-colors duration-300 selection:bg-primary selection:text-white ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
