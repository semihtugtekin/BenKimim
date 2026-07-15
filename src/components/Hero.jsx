import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Particles from './Particles';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ isDarkMode }) => {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll progress range: transitions over 250px of scroll
  const progress = useTransform(scrollY, [0, 250], [1, 0]);

  // Left Content Scroll Animations
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentY = useTransform(scrollY, [0, 200], [0, -30]);


  // Staggered entry variants for left branding content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 180, damping: 25 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-bg-main transition-colors duration-300"
    >
      {/* Background Particles */}
      <Particles isDarkMode={isDarkMode} />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-28 pb-16 relative z-20">

        {/* Left Column: Brand Metinleri & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: contentOpacity, y: contentY }}
          className="w-full md:w-[55%] flex flex-col items-start text-left space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[0.6rem] sm:text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={12} className="animate-pulse" />
            {t.hero.badge}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main leading-none tracking-tight font-heading"
          >
            {t.hero.title}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t.hero.titleAccent}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-sec text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-body font-medium"
          >
            {t.hero.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center text-xs uppercase tracking-widest font-heading shadow-lg shadow-primary/25 cursor-pointer"
            >
              {t.hero.cta_primary}
            </a>
            <a
              href="#support"
              className="px-8 py-4 bg-bg-sec hover:bg-bg-sec/80 text-text-main border border-border-main font-bold rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center text-xs uppercase tracking-widest font-heading shadow-md cursor-pointer"
            >
              {t.hero.cta_secondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Logo Area */}
        <div className="w-full md:w-[42%] flex items-center justify-center min-h-[160px] sm:min-h-[220px] md:min-h-[350px] relative select-none">
          <a href="tel:+905067100717" className="cursor-pointer">
            <img
              src="/img/Logo/logo_full.png"
              alt="TUGCore Logo"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
