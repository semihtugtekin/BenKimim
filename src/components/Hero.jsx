import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Particles from './Particles';

const Hero = ({ isDarkMode }) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrolled = window.scrollY;
      // Trigger bottom state when within 120px of the absolute bottom
      setIsAtBottom(scrollHeight - clientHeight - scrolled < 120);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll range: progress goes from 1 to 0 as we scroll 200px (faster transition for mobile/desktop)
  const progress = useTransform(scrollY, [0, 200], [1, 0]);

  // Interpolate video size:
  // Desktop: 33vw to 100px
  // Mobile: 150px to 50px
  const size = useTransform(progress, (p) => {
    if (isMobile) {
      return `${50 + p * (150 - 50)}px`;
    }
    return `calc(100px + ${p} * (33vw - 100px))`;
  });
  
  // Dynamic border radius
  const borderRadius = useTransform(progress, (p) => `${16 + p * 16}px`);

  // Slogan fade out: opacity goes from 1 to 0 as we scroll 100px
  const sloganOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const sloganX = useTransform(scrollY, [0, 100], [0, 20]); // slide right slightly as it fades

  // Left position animation: from 50% (centered) to 16px (far left-aligned)
  const containerLeft = useTransform(progress, [0, 1], ["16px", "50%"]);
  
  // X translation animation: from 0% (left-aligned) to -50% (centered)
  const containerX = useTransform(progress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-bg-main"
    >
      {/* Floating Hero Content Wrapper (Video + Slogan) */}
      <AnimatePresence>
        {!isAtBottom && (
          <motion.div
            key="hero-video-wrapper"
            style={{
              left: containerLeft,
              x: containerX,
              y: "-50%",
            }}
            className="fixed top-1/2 flex items-center z-50 pointer-events-none"
            exit={{ opacity: 0 }}
          >
            {/* Floating Video Link Container */}
            <motion.a
              layoutId="hero-video-shared"
              href="tel:+905067100717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: size,
                height: size,
                borderRadius: borderRadius,
              }}
              className="overflow-hidden shadow-2xl border border-border-main/50 bg-black block cursor-pointer pointer-events-auto flex-shrink-0"
            >
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.a>

            {/* Slogan Text next to/below the video */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[90vw] max-w-sm sm:left-full sm:translate-x-0 sm:top-auto sm:mt-0 sm:ml-6 md:ml-10 sm:w-[50vw] sm:max-w-md md:max-w-lg">
              <motion.div
                style={{
                  opacity: sloganOpacity,
                  x: sloganX,
                }}
                className="text-center sm:text-left pointer-events-none select-none"
              >
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-text-main leading-tight tracking-tight font-heading">
                  Dijitalin en samimi ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">hızlı başlangıcı</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles Overlay */}
      <Particles isDarkMode={isDarkMode} />
    </section>
  );
};

export default Hero;
