import { useState } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Ana Sayfa', href: '#home' },
    { title: 'Hizmetler', href: '#services' },
    { title: 'Projeler', href: '#portfolio' },
    { title: 'İletişim', href: '#contact' },
  ];

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-6">
      <div className="max-w-7xl mx-auto rgb-border-container rounded-[2rem] shadow-2xl">
        {/* Animated Gradient Background */}
        <div className="rgb-border-bg" />
        
        {/* Inner Content */}
        <nav className="navbar-inner transition-all duration-300">
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left: Menu Items (Desktop) */}
              <div className="hidden md:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-text-sec hover:text-primary text-sm font-semibold transition-colors uppercase tracking-wider"
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              {/* Center: Logo */}
              <div className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
                <a href="#" className="flex items-center">
                  <img 
                    src={isDarkMode ? "/img/Logo/TUGcore2.png" : "/img/Logo/TUGcore3.png"} 
                    alt="TUGCore Logo" 
                    className="h-14 w-auto object-contain transition-all duration-500 hover:scale-105"
                  />
                </a>
              </div>
              
              {/* Right: Theme Toggle & Mobile Menu Button */}
              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-bg-sec hover:bg-primary/10 text-text-main transition-all duration-300 border border-border-main"
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2.5 rounded-full text-text-sec hover:text-primary focus:outline-none transition-colors"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-bg-card rounded-b-[2rem] border-t border-border-main overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-text-sec hover:text-primary block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
