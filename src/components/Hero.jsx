import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import Particles from './Particles';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ isDarkMode }) => {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrolled = window.scrollY;
      setIsAtBottom(scrollHeight - clientHeight - scrolled < 120);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll progress range: transitions over 250px of scroll
  const progress = useTransform(scrollY, [0, 250], [1, 0]);

  // Left Content Scroll Animations
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentY = useTransform(scrollY, [0, 200], [0, -30]);

  // Video Widget Scroll Animations (responsive scaling and coordinates mapping)
  const videoSize = useTransform(progress, [0, 1], isMobile ? ["60px", "160px"] : ["80px", "300px"]);
  const videoTop = useTransform(progress, [0, 1], isMobile ? ["calc(100vh - 76px)", "170px"] : ["calc(100vh - 110px)", "50%"]);
  const videoLeft = useTransform(progress, [0, 1], isMobile ? ["calc(100vw - 76px)", "50%"] : ["calc(100vw - 110px)", "72%"]);
  const videoX = useTransform(progress, [0, 1], ["0%", "-50%"]);
  const videoY = useTransform(progress, [0, 1], ["0%", "-50%"]);
  const videoBorderRadius = useTransform(progress, [0, 1], ["9999px", "32px"]);

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

        {/* Right Column: Video Spacer Area (keeps layout stable) */}
        <div className="w-full md:w-[42%] flex items-center justify-center min-h-[160px] sm:min-h-[220px] md:min-h-[350px] relative pointer-events-none select-none">
          {/* Empty spacer so the Grid handles height naturally on mobile */}
        </div>
      </div>

      {/* Floating Video Widget (animates coordinates based on scroll) */}
      <AnimatePresence>
        {!isAtBottom && (
          <motion.div
            key="hero-video-widget"
            style={{
              position: "fixed",
              top: videoTop,
              left: videoLeft,
              x: videoX,
              y: videoY,
              width: videoSize,
              height: videoSize,
            }}
            className="z-50 pointer-events-none"
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {/* Clickable video bubble */}
            <motion.a
              layoutId="hero-video-shared"
              href="tel:+905067100717"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: videoBorderRadius,
              }}
              className="relative overflow-hidden shadow-2xl border-2 border-primary/20 dark:border-primary/40 bg-black block cursor-pointer pointer-events-auto flex-shrink-0 group"
              title={language === 'tr' ? 'Hemen Ara' : 'Call Now'}
            >
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover animate-fade-in"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Phone overlay appearing on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full">
                <Phone size={24} className="text-white animate-bounce" />
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
