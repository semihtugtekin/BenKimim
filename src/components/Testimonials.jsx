import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "E-Ticaret Yöneticisi",
    content: "TUGCore ile çalışmak projemizin kaderini değiştirdi. Beklediğimizden çok daha hızlı ve modern bir çözüm sundular.",
    avatar: "https://i.pravatar.cc/150?u=ahmet",
    rating: 5
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Pazarlama Müdürü",
    content: "Tasarım süreçlerindeki titizlikleri ve kullanıcı deneyimine verdikleri önem gerçekten takdire şayan.",
    avatar: "https://i.pravatar.cc/150?u=ayse",
    rating: 5
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "CEO, Tech Solutions",
    content: "Teknik yetkinlikleri ve iletişim becerileri çok yüksek. Karmaşık bir projeyi tereyağından kıl çeker gibi hallettiler.",
    avatar: "https://i.pravatar.cc/150?u=mehmet",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Müşteri Yorumları</h2>
          <p className="text-text-sec max-w-2xl mx-auto">
            Birlikte çalıştığımız iş ortaklarımızın bizim hakkımızdaki düşünceleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-card p-8 rounded-2xl border border-border-main relative shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-text-sec italic mb-8 relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-text-main">{t.name}</h4>
                  <p className="text-xs text-text-sec">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
