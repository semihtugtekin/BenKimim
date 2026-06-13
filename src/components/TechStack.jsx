import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Database, Shield, Smartphone, Layout, Search, Sparkles, Code2, Server, HardDrive } from 'lucide-react';
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
      icon: <Code2 className="w-8 h-8" />,
      name: "C# / ASP.NET",
      category: "Backend",
      size: "large",
      color: "bg-violet-500/10 text-violet-500",
      desc: language === 'tr' ? "Güçlü ve ölçeklenebilir backend geliştirme." : "Powerful and scalable backend development."
    },
    {
      icon: <Server className="w-8 h-8" />,
      name: "ASP.NET Core MVC",
      category: "Framework",
      size: "medium",
      color: "bg-indigo-500/10 text-indigo-500",
      desc: language === 'tr' ? "Kurumsal düzeyde web uygulamaları." : "Enterprise-level web applications."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      name: "MSSQL",
      category: "Database",
      size: "medium",
      color: "bg-orange-500/10 text-orange-500",
      desc: language === 'tr' ? "Güvenilir ve yüksek performanslı veritabanı." : "Reliable and high-performance database."
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
    <section className="py-16 md:py-32 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-20">
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

        {/* Infinite Horizontal Marquee (Responsive: Compact on Mobile, Large on Desktop) */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-2 md:gap-6 w-max"
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="w-[calc((100vw-48px)/3)] md:w-[330px] h-[90px] md:h-[180px] flex-shrink-0 relative rounded-2xl md:rounded-[2rem] glass border border-border-main hover:border-primary/30 transition-all duration-500 flex flex-col justify-center md:justify-between items-center md:items-start gap-1.5 md:gap-0 p-3 md:p-8 overflow-hidden text-center md:text-left group"
              >
                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${tech.color} flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-8 md:[&>svg]:h-8 md:mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {tech.icon}
                </div>
                
                <div>
                  <div className="hidden md:block text-[0.6rem] font-bold uppercase tracking-widest opacity-50 mb-1">{tech.category}</div>
                  <h4 className="text-[0.6rem] md:text-xl font-black md:font-bold text-text-main font-heading truncate md:normal-case w-full md:w-auto px-1 md:px-0">{tech.name}</h4>
                  {tech.desc && <p className="hidden md:block text-xs text-text-sec mt-2 opacity-70 line-clamp-2">{tech.desc}</p>}
                </div>

                {/* Decorative background element */}
                <div className={`absolute -right-4 -bottom-4 w-12 h-12 md:w-24 md:h-24 rounded-full ${tech.color} opacity-5 md:opacity-0 md:group-hover:opacity-10 blur-xl md:blur-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
