import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-sec/50 border border-border-main text-primary mb-8 transition-colors duration-300">
            <Terminal size={16} />
            <span className="text-sm font-medium">Yazılımın Geleceği</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-text-main">
            Hayallerinizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Koda</span> Dönüştürüyoruz
          </h1>
          
          <p className="text-xl text-text-sec mb-10 max-w-2xl mx-auto transition-colors duration-300">
            TUGCore olarak, modern teknolojileri kullanarak işletmenizi dijital dünyada öne çıkarıyoruz. Web, mobil ve özel yazılım çözümleri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Bizimle Tanışın
              <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center gap-2 bg-bg-sec hover:bg-bg-card text-text-main px-8 py-4 rounded-lg font-bold transition-all border border-border-main"
            >
              Projelerimiz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
