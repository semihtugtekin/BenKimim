import Services from '../components/Services';
import FormalProjects from '../components/FormalProjects';
import Reveal from '../components/Reveal';

const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-bg-main">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black text-text-main mb-6 font-heading tracking-tight">
            Tüm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hizmetlerimiz</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-text-sec max-w-2xl mb-12 font-body leading-relaxed">
            İşletmenizi dijital dünyada bir adım öne taşıyacak uçtan uca teknoloji çözümleri sunuyoruz.
          </p>
        </Reveal>
      </div>
      
      <Services />

      <FormalProjects />
      
      {/* Optional: Add a CTA section at the bottom */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-text-main mb-6 font-heading">Hala Karar Veremediniz mi?</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-text-sec mb-10 max-w-xl mx-auto font-body">
              Hangi hizmetin sizin için en iyisi olduğunu birlikte belirleyelim. Uzman ekibimizle ücretsiz görüşme planlayın.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 font-heading uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
              Bizimle İletişime Geçin
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
