import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from './Magnetic';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        // The scroll will be handled by a global effect or we can just rely on the browser
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Hizmetler', href: '/hizmetler' },
    { title: 'Projeler', href: '/#portfolio' },
    { title: 'İletişim', href: '/#support' },
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
                    <Link 
                      to="/#support" 
                      onClick={(e) => handleNavClick(e, '/#support')}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 font-heading"
                    >
                      Hadi Başlayalım <ArrowRight size={14} />
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
                    Bize Ulaşın
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
