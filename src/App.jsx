import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
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

const AnimatedRoutes = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" isDarkMode={isDarkMode} />}
      </AnimatePresence>
      
      {!loading && <CustomCursor />}

      <div className={`min-h-screen bg-bg-main text-text-main transition-colors duration-300 selection:bg-primary selection:text-white ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home isDarkMode={isDarkMode} /></PageTransition>} />
            <Route path="/hizmetler" element={<PageTransition><ServicesPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToHash />
      <AnimatedRoutes isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
