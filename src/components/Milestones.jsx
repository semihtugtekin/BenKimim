import { motion } from 'framer-motion';
import { Rocket, Target, Users, BookOpen, Star } from 'lucide-react';
import Reveal from './Reveal';

const milestones = [
  {
    year: "2020",
    title: "Kuruluş",
    description: "Kurucumuz yazılım dünyasındaki tecrübelerini paylaşma isteğiyle yola çıktık.",
    icon: <Rocket size={24} />,
  },
  {
    year: "2021",
    title: "İlk Eser ve Rehberlik",
    description: "\"A'dan Z'ye Yazılımın Derinliklerine\" kitabının yayınlanmasıyla toplulukta rehberlik faaliyetleri hız kazandı.",
    icon: <BookOpen size={24} />,
  },
  {
    year: "2022",
    title: "Topluluk ve Medya",
    description: "Topluluğumuz aktifleşti, medya kanallarımız çoğaldı ve etki alanımız genişledi.",
    icon: <Users size={24} />,
  },
  {
    year: "2023",
    title: "Yazılıma.org Kamp",
    description: "Yazılım eğitimleri verdiğimiz kampımız kuruldu. İlk öğrencilerimizle sektörel çalışmalara başladık.",
    icon: <Target size={24} />,
  },
  {
    year: "2024",
    title: "Geleceğe Bakış",
    description: "Modern teknolojilerle işletmelere dijital dönüşüm süreçlerinde öncülük etmeye devam ediyoruz.",
    icon: <Star size={24} />,
  }
];

const Milestones = () => {
  return (
    <section id="milestones" className="relative py-32 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center justify-center gap-2">
              <Target size={16} /> YOLCULUĞUMUZ
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-5xl md:text-7xl font-black text-text-main leading-none tracking-tighter">
              Bizim <span className="text-primary">Hikayemiz</span>
            </h3>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year Badge */}
                <div className="flex-1 flex justify-center md:justify-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`text-3xl md:text-2xl font-black text-primary ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right w-full'} text-center md:text-left`}
                  >
                    {milestone.year}
                  </motion.div>
                </div>

                {/* Central Icon/Dot */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-bg-card border-2 border-primary flex items-center justify-center text-primary shadow-xl shadow-primary/20"
                  >
                    {milestone.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="p-6 md:p-8 rounded-[2rem] bg-bg-card/50 backdrop-blur-xl border border-border-main hover:border-primary/50 transition-all group"
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-text-main mb-3 md:mb-4 group-hover:text-primary transition-colors font-heading tracking-tight">
                      {milestone.title}
                    </h4>
                    <p className="text-sm md:text-lg text-text-sec leading-relaxed opacity-80 font-body">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
