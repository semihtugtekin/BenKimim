import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

const ScrollToHash = ({ loading }) => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (loading) return;

    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 20) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      setTimeout(tryScroll, 100);
    } else {
      if (prevPathnameRef.current !== pathname) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    prevPathnameRef.current = pathname;
  }, [pathname, hash, loading]);

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
        <ScrollToHash loading={loading} />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home isDarkMode={isDarkMode} /></PageTransition>} />
            <Route path="/hizmetler" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/biz-kimiz" element={<PageTransition><AboutPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('app_theme');
    return savedTheme ? savedTheme === 'dark' : false; // Default to false (light theme)
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('app_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <Router>
      <AnimatedRoutes isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
