import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Support from '../components/Support';
import { useLanguage } from '../context/LanguageContext';

const Home = ({ isDarkMode }) => {
  const { language } = useLanguage();

  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      <TechStack />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Support />
      
      {/* Final CTA Strip */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8 font-heading tracking-tight">
            {language === 'tr' ? "Hayalindeki Projeyi Birlikte İnşa Edelim" : "Let's Build Your Dream Project Together"}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="tel:+905067100717"
              className="px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-opacity-90 transition-all hover:scale-105 font-heading uppercase tracking-widest text-sm shadow-2xl"
            >
              {language === 'tr' ? "Hemen Ara" : "Call Now"}
            </a>
            <a 
              href="mailto:info@tugcore.com.tr"
              className="px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-primary transition-all hover:scale-105 font-heading uppercase tracking-widest text-sm"
            >
              {language === 'tr' ? "E-posta Gönder" : "Send Email"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
