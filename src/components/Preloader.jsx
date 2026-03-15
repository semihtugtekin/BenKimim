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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-main"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Placeholder (since we use images, we'll use a stylized TUGCore text or a generic icon for loading) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src={isDarkMode ? "/img/Logo/TUGcore2.png" : "/img/Logo/TUGcore3.png"} 
            alt="TUGCore Logo" 
            className="h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-bg-sec rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 bg-primary"
          />
        </div>
        
        {/* Progress Text */}
        <motion.span 
          className="mt-4 text-primary font-bold tracking-[0.2em] text-sm"
        >
          {progress}%
        </motion.span>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-text-sec text-xs uppercase tracking-widest font-medium"
        >
          Yükleniyor...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
