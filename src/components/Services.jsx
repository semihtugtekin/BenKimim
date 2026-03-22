import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Database, Layout, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Web Geliştirme',
    description: 'Modern, hızlı ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin.',
    size: 'md:col-span-2 md:row-span-2',
    color: 'bg-primary/5',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için performanslı mobil uygulamalar.',
    size: 'md:col-span-1 md:row-span-1',
    color: 'bg-secondary/5'
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Özel Yazılım',
    description: 'İşletmenizin ihtiyaçlarına özel çözümler.',
    size: 'md:col-span-1 md:row-span-1',
    color: 'bg-primary/5'
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: 'Veritabanı',
    description: 'Güvenli ve hızlı veri yapıları.',
    size: 'md:col-span-1 md:row-span-2',
    color: 'bg-secondary/5',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: 'UI/UX Tasarım',
    description: 'Modern ve estetik arayüzler.',
    size: 'md:col-span-2 md:row-span-1',
    color: 'bg-primary/5'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-bg-main transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">NELER YAPIYORUZ?</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <h3 className="text-5xl md:text-7xl font-black text-text-main leading-tight">
              Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sınırları</span> Zorluyoruz
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.size} group relative rounded-3xl overflow-hidden border border-border-main bg-bg-card p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500`}
            >
              {/* Card Background Image (if exists) */}
              {service.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={service.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              )}
              
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-text-main mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text-sec text-lg leading-relaxed">{service.description}</p>
              </div>

              <div className="relative z-10 mt-4 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Detayları Gör <Globe size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
