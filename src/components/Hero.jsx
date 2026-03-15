import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import Particles from './Particles';

const slides = [
  {
    id: 1,
    badge: "Geleceğin Yazılımları",
    title: "Hayallerinizi <span class='text-primary'>Koda</span> Dönüştürüyoruz",
    description: "TUGCore olarak, modern teknolojileri kullanarak işletmenizi dijital dünyada öne çıkarıyoruz.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    cta: "Bizimle Tanışın",
    link: "#contact"
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
    link: "#contact"
  }
];

const Hero = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-bg-main/80 z-10 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/40 to-bg-main z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Slider Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <Particles isDarkMode={isDarkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 backdrop-blur-sm">
              <Terminal size={16} />
              <span className="text-sm font-bold uppercase tracking-widest">{slides[currentSlide].badge}</span>
            </div>
            
            <h1 
              className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-text-main leading-none"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />
            
            <p className="text-xl md:text-2xl text-text-sec mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex justify-center">
              <a 
                href={slides[currentSlide].link}
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-primary/30 active:scale-95"
              >
                {slides[currentSlide].cta}
                <ArrowRight size={22} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 transition-all duration-500 rounded-full ${
              currentSlide === index ? "w-12 bg-primary" : "w-2.5 bg-text-sec/30 hover:bg-text-sec/50"
            }`}
          />
        ))}
      </div>

      {/* Side Navigation Buttons */}
      <div className="hidden lg:flex absolute inset-x-8 top-1/2 -translate-y-1/2 justify-between z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full bg-bg-card/20 hover:bg-bg-card/50 text-text-main border border-white/10 backdrop-blur-md transition-all pointer-events-auto hover:scale-110 active:scale-90"
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-full bg-bg-card/20 hover:bg-bg-card/50 text-text-main border border-white/10 backdrop-blur-md transition-all pointer-events-auto hover:scale-110 active:scale-90"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );};

export default Hero;
