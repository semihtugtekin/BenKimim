import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Terminal, ChevronLeft, ChevronRight, Cpu, Zap, Globe, Sparkles } from 'lucide-react';
import Particles from './Particles';
import Magnetic from './Magnetic';
// Modern Yazılımla Yarının İşletmesini Bugün İnşa Edin
const slides = [
  {
    id: 1,
    badge: "Geleceğin Yazılımları",
    title: " Modern Yazılımla <span class='text-primary'>Yarının İşletmesini</span> Bugün İnşa Edin",
    description: "TUGCore olarak, modern teknolojileri kullanarak işletmenizi dijital dünyada öne çıkarıyoruz.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    cta: "Bizimle Tanışın",
    link: "#support"
  },
  {
    id: 2,
    badge: "Modern Tasarımlar",
    title: "Kullanıcı Dostu <span class='text-primary'>Deneyimler</span> Tasarlıyoruz",
    description: "UI/UX odaklı yaklaşımımızla markanızın dijital yüzünü en profesyonel şekilde kurguluyoruz.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    cta: "Projelerimiz",
    link: "#portfolio"
  },
  {
    id: 3,
    badge: "Hızlı Çözümler",
    title: "Hız ve <span class='text-primary'>Performans</span> Odaklı Yaklaşım",
    description: "En son teknolojileri kullanarak ölçeklenebilir ve yüksek performanslı sistemler inşa ediyoruz.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    cta: "İletişime Geçin",
    link: "#support"
  }
];

const FloatingIcon = ({ icon: Icon, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 0.4, 
      scale: 1,
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 5, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Icon size={40} className="text-primary/40" />
  </motion.div>
);

const Hero = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-main">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-bg-main/70 z-10 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/50 to-bg-main z-10" />
            <img
              src={slides[currentSlide].image}
              alt="Slider Background"
              className="w-full h-full object-cover grayscale opacity-40"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <Particles isDarkMode={isDarkMode} />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <FloatingIcon icon={Cpu} delay={0} className="top-1/4 left-1/10" />
        <FloatingIcon icon={Zap} delay={1} className="top-1/3 right-1/10" />
        <FloatingIcon icon={Globe} delay={2} className="bottom-1/4 left-1/5" />
        <FloatingIcon icon={Sparkles} delay={3} className="bottom-1/3 right-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center pt-32 pb-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 md:mb-12 backdrop-blur-md shadow-lg shadow-primary/5"
            >
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] font-heading">{slides[currentSlide].badge}</span>
            </motion.div>
            
            <h1 
              className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tight text-text-main leading-[1.1] md:leading-[1] select-none font-heading"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />
            
            <p className="text-base sm:text-lg md:text-2xl text-text-sec mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed opacity-80 font-body">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Magnetic>
                <a 
                  href={slides[currentSlide].link}
                  className="group relative inline-flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-primary/40 overflow-hidden font-heading"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {slides[currentSlide].cta}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-text-sec/30 flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );};

export default Hero;
