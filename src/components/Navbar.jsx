import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, ArrowRight, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/#' + id);
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { title: t.nav.home, href: '/' },
    { title: t.nav.services, href: '/hizmetler' },
    { title: t.nav.portfolio, href: '/#portfolio' },
    { title: t.pricing.badge, href: '/#pricing' },
    { title: t.nav.contact, href: '/#support' },
  ];

  return (
    <div className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'top-2 scale-95' : 'top-6'}`}>
      <div className="max-w-7xl mx-auto border-beam-container rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="border-beam" />
        
        <nav className="navbar-inner transition-all duration-300 glass border border-white/10 rounded-[2.5rem]">
          <div className="px-6 sm:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Left: Menu Items (Desktop) */}
              <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                {menuItems.map((item) => (
                  <Magnetic key={item.title}>
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group relative text-text-sec hover:text-primary text-[0.7rem] font-bold transition-colors uppercase tracking-[0.3em] py-2 font-heading"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </Magnetic>
                ))}
              </div>

              {/* Center: Logo */}
              <div className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
                <Magnetic>
                  <Link to="/" className="flex items-center p-2">
                    <img 
                      src={isDarkMode ? "img/Logo/TUGcore3.png" : "img/Logo/TUGcore2.png"} 
                      alt="TUGCore Logo" 
                      className="h-12 w-auto object-contain transition-all duration-500 hover:scale-110 drop-shadow-2xl"
                    />
                  </Link>
                </Magnetic>
              </div>
              
              {/* Right: Language, Theme Toggle & Contact Button */}
              <div className="flex items-center gap-3 sm:gap-6 ml-auto">
                <div className="hidden sm:flex items-center gap-4">
                  <Magnetic>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-bg-sec/50 hover:bg-primary/20 text-text-main transition-all duration-300 border border-border-main glass text-[0.6rem] font-bold uppercase tracking-widest font-heading"
                    >
                      <Languages size={14} className="text-primary" />
                      {language === 'tr' ? 'EN' : 'TR'}
                    </button>
                  </Magnetic>

                  <Magnetic>
                    <button
                      onClick={toggleTheme}
                      className="p-3 rounded-full bg-bg-sec/50 hover:bg-primary/20 text-text-main transition-all duration-300 border border-border-main group glass"
                      aria-label="Toggle Theme"
                    >
                      <motion.div
                        animate={{ rotate: isDarkMode ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary" />}
                      </motion.div>
                    </button>
                  </Magnetic>
                </div>

                <div className="hidden lg:block">
                  <Magnetic>
                    <Link 
                      to="/#support" 
                      onClick={(e) => handleNavClick(e, '/#support')}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 font-heading"
                    >
                      {language === 'tr' ? 'Hadi Başlayalım' : "Let's Start"} <ArrowRight size={14} />
                    </Link>
                  </Magnetic>
                </div>

                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-text-sec hover:text-primary focus:outline-none transition-colors"
                  >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden glass border-t border-border-main overflow-hidden"
              >
                <div className="px-8 py-12 space-y-8 flex flex-col items-center">
                  <div className="flex gap-4 mb-4">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 font-bold uppercase tracking-widest text-xs"
                    >
                      <Languages size={16} /> {language === 'tr' ? 'English' : 'Türkçe'}
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="p-3 rounded-2xl bg-bg-sec/50 border border-border-main"
                    >
                      {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary" />}
                    </button>
                  </div>

                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-text-sec hover:text-primary text-3xl font-black transition-all uppercase tracking-[0.2em] font-heading hover:scale-110 active:scale-95"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link 
                    to="/#support" 
                    onClick={(e) => handleNavClick(e, '/#support')}
                    className="w-full text-center bg-primary text-white py-5 rounded-3xl text-xl font-black uppercase tracking-widest font-heading shadow-xl shadow-primary/20"
                  >
                    {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
