import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Database, Shield, Smartphone, Layout, Search, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    {
      icon: <Layout className="w-8 h-8" />,
      name: "React / Next.js",
      category: "Frontend",
      size: "large",
      color: "bg-blue-500/10 text-blue-500",
      desc: language === 'tr' ? "Modern ve hızlı web arayüzleri." : "Modern and fast web interfaces."
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Supabase / Firebase",
      category: "Backend",
      size: "small",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      name: "React Native",
      category: "Mobile",
      size: "small",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Tailwind CSS",
      category: "Styling",
      size: "medium",
      color: "bg-cyan-500/10 text-cyan-500",
      desc: language === 'tr' ? "Esnek ve modern tasarım." : "Flexible and modern design."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "AI Integration",
      category: "Advanced",
      size: "large",
      color: "bg-amber-500/10 text-amber-500",
      desc: language === 'tr' ? "Yapay zeka destekli akıllı çözümler." : "AI-powered smart solutions."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "REST / GraphQL",
      category: "API",
      size: "small",
      color: "bg-pink-500/10 text-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Security",
      category: "Auth",
      size: "small",
      color: "bg-red-500/10 text-red-500",
    },
  ];

  const gridStyles = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <section className="py-32 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center justify-center gap-2 font-heading">
              <Cpu size={14} /> TECH STACK
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-4xl md:text-6xl font-black text-text-main leading-none tracking-tight mb-6 font-heading">
              {language === 'tr' ? <>Kullandığımız <span className="text-primary">Teknolojiler</span></> : <>Technologies We <span className="text-primary">Use</span></>}
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${gridStyles[tech.size]} group relative p-8 rounded-[2rem] glass border border-border-main hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col justify-between`}
            >
              <div className={`w-12 h-12 rounded-2xl ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                {tech.icon}
              </div>
              
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest opacity-50 mb-1">{tech.category}</div>
                <h4 className="text-xl font-bold text-text-main font-heading">{tech.name}</h4>
                {tech.desc && <p className="text-xs text-text-sec mt-2 opacity-70 line-clamp-2">{tech.desc}</p>}
              </div>

              {/* Decorative background element */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${tech.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
