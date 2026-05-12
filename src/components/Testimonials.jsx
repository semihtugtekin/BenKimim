import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Nergiz K*****",
    role: "Nergiz Güzellik Salonu",
    content: "TUGCore ile çalışmak alışkınlıklarımızı ve hızımızı büyük ölçüde değiştirdi. Beklediğimizden çok daha hızlı ve modern bir çözüm sundular. Aynı zaman da sorunlarımıza çok kısa sürelerde çözümler ürettiler.",
    rating: 5
  },
  {
    id: 2,
    name: "Dilan V***",
    role: "Kişisel uygulama  ",
    content: "Tasarım süreçlerindeki titizlikleri ve kullanıcı deneyimine verdikleri önem gerçekten takdire şayan. Aklıma gelmeyecek fikirler de verdiler ve ekleme -çıkartma yaparak hayata geçirdiler . Açıkcası ben bu kadarını beklemiyordum",
    rating: 5
  },
  {
    id: 3,
    name: "Erkan T****",
    role: "Ecem diş kliniği",
    content: "Teknik yetkinlikleri ve iletişim becerileri çok yüksek. Hızlı ve güven veren bir hizmet sundular. Geliştirme aşamasında istediğim her zaman ulaşım sağladım ve iyi bir tempoyla çalıştık, aklımdaki diğer fikirleri de kesinlikle TUGCORE ile hayata geçireceğim.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-bg-main relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-primary mb-3 font-heading text-center">GÜVEN VE MEMNUNİYET</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight font-heading mb-6">
              Müşteri <span className="text-primary">Deneyimleri</span>
            </h3>
          </motion.div>
          <p className="text-text-sec text-lg font-medium max-w-2xl mx-auto opacity-70 font-body">
            Birlikte değer kattığımız iş ortaklarımızın başarı hikayeleri.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-bg-card p-10 md:p-16 rounded-[3rem] border border-border-main relative shadow-2xl group min-h-[400px] flex flex-col justify-center"
            >
              <Quote className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors" size={80} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-text-main text-xl md:text-2xl leading-relaxed mb-12 relative z-10 font-body font-medium italic">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center gap-6 mt-auto">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl font-black font-heading">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-text-main font-heading tracking-tight text-lg">{testimonials[current].name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/70 font-heading">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button onClick={prev} className="p-4 rounded-full glass border border-border-main text-text-sec hover:text-primary hover:border-primary transition-all">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${current === i ? 'bg-primary w-8' : 'bg-primary/20'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-4 rounded-full glass border border-border-main text-text-sec hover:text-primary hover:border-primary transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
