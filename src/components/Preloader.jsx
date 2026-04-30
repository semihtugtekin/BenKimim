import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ isDarkMode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-main-solid"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Placeholder (since we use images, we'll use a stylized TUGCore text or a generic icon for loading) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img 
            src={isDarkMode ? "/img/Logo/TUGcore3.png" : "/img/Logo/TUGcore2.png"} 
            alt="TUGCore Logo" 
            className="h-20 w-auto object-contain filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-bg-sec rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        
        {/* Progress Text */}
        <div className="flex flex-col items-center mt-6">
          <motion.span 
            className="text-text-main font-bold tracking-[0.3em] text-[0.6rem] uppercase font-heading"
          >
            Sistem Hazırlanıyor {progress}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
