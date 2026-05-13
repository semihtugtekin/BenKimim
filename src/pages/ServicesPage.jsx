import Services from '../components/Services';
import FormalProjects from '../components/FormalProjects';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const ServicesPage = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-bg-main">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black text-text-main mb-6 font-heading tracking-tight">
            {language === 'tr' ? (
              <>Tüm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hizmetlerimiz</span></>
            ) : (
              <>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span></>
            )}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-text-sec max-w-2xl mb-12 font-body leading-relaxed">
            {language === 'tr' 
              ? "İşletmenizi dijital dünyada bir adım öne taşıyacak uçtan uca teknoloji çözümleri sunuyoruz." 
              : "We offer end-to-end technology solutions that will take your business one step forward in the digital world."}
          </p>
        </Reveal>
      </div>
      
      <Services />

      <FormalProjects />
      
      {/* CTA section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-text-main mb-6 font-heading">
              {language === 'tr' ? 'Hala Karar Veremediniz mi?' : 'Still Can\'t Decide?'}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-text-sec mb-10 max-w-xl mx-auto font-body">
              {language === 'tr' 
                ? "Hangi hizmetin sizin için en iyisi olduğunu birlikte belirleyelim. Uzman ekibimizle ücretsiz görüşme planlayın."
                : "Let's decide together which service is best for you. Schedule a free meeting with our expert team."}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a 
              href="tel:+905067100717"
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 font-heading uppercase tracking-widest text-sm shadow-xl shadow-primary/20"
            >
              {language === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact Us'}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
