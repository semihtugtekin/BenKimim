import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Ana Sayfa', href: '#home' },
    { title: 'Hizmetler', href: '#services' },
    // { title: 'Yolculuğumuz', href: '#milestones' },
    { title: 'Projeler', href: '#portfolio' },
    { title: 'İletişim', href: '#support' },
  ];

  return (
    <div className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'top-2 scale-95' : 'top-6'}`}>
      <div className="max-w-7xl mx-auto border-beam-container rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="border-beam" />
        
        <nav className="navbar-inner transition-all duration-300 glass border border-white/10 rounded-[2.5rem]">
          <div className="px-6 sm:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Left: Menu Items (Desktop) */}
              <div className="hidden md:flex items-center space-x-10">
                {menuItems.map((item) => (
                  <Magnetic key={item.title}>
                    <a
                      href={item.href}
                      className="group relative text-text-sec hover:text-primary text-[0.7rem] font-bold transition-colors uppercase tracking-[0.3em] py-2 font-heading"
                    >
                      {item.title}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </Magnetic>
                ))}
              </div>

              {/* Center: Logo */}
              <div className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
                <Magnetic>
                  <a href="#" className="flex items-center p-2">
                    <img 
                      src={isDarkMode ? "img/Logo/TUGcore3.png" : "img/Logo/TUGcore2.png"} 
                      alt="TUGCore Logo" 
                      className="h-12 w-auto object-contain transition-all duration-500 hover:scale-110 drop-shadow-2xl"
                    />
                  </a>
                </Magnetic>
              </div>
              
              {/* Right: Theme Toggle & Contact Button */}
              <div className="flex items-center gap-6 ml-auto">
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

                <div className="hidden md:block">
                  <Magnetic>
                    <a 
                      href="#support" 
                      className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 font-heading"
                    >
                      Hadi Başlayalım <ArrowRight size={14} />
                    </a>
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
                <div className="px-6 py-10 space-y-6 flex flex-col items-center">
                  {menuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-text-sec hover:text-primary text-2xl font-black transition-colors uppercase tracking-[0.2em] font-heading"
                    >
                      {item.title}
                    </a>
                  ))}
                  <a 
                    href="#support" 
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-primary text-white py-4 rounded-2xl text-lg font-black uppercase tracking-widest font-heading"
                  >
                    Support
                  </a>
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
