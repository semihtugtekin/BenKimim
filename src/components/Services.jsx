import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Database, Layout, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Web Geliştirme',
    description: 'Modern, hızlı ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar geliştiriyoruz.'
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Özel Yazılım',
    description: 'İşletmenizin ihtiyaçlarına özel, ölçeklenebilir yazılım çözümleri.'
  },
  {
    icon: <Database className="w-8 h-8 text-secondary" />,
    title: 'Veritabanı Yönetimi',
    description: 'Verilerinizi güvenli, hızlı ve erişilebilir şekilde yapılandırıyoruz.'
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı deneyimini ön planda tutan, modern ve estetik arayüz tasarımları.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: 'Siber Güvenlik',
    description: 'Sistemlerinizi olası tehditlere karşı koruyor, güvenlik testleri yapıyoruz.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            İşletmenizi bir üst seviyeye taşıyacak teknolojik çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
