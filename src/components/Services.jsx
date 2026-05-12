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
    <section id="services" className="py-24 bg-bg-main transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-primary mb-3 font-heading">NELER YAPIYORUZ?</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight font-heading">
              Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sınırları</span> Zorluyoruz
            </h3>
          </Reveal>
        </div>

        <div className="bento-grid !gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bento-item ${service.size} !p-6 group flex flex-col justify-between`}
            >
              {/* Card Background Image (if exists) */}
              {service.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                  <img src={service.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`mb-6 p-3 rounded-xl w-fit ${service.color} group-hover:scale-110 transition-transform duration-500 border border-border-main/20`}>
                  {/* Scaling the icon slightly */}
                  <div className="scale-90">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3 group-hover:text-primary transition-colors font-heading tracking-tight">{service.title}</h3>
                <p className="text-sm text-text-sec leading-relaxed font-body opacity-80">{service.description}</p>
              </div>

              <div className="relative z-10 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[0.6rem] font-bold text-primary transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-heading tracking-widest uppercase">
                  Keşfet <Globe size={10} />
                </div>
                <button className="px-3 py-1.5 bg-primary text-white text-[0.6rem] font-bold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary/90 font-heading tracking-widest uppercase cursor-pointer">
                  Demo Talep Et
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
