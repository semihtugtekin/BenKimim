import { motion } from 'framer-motion';
import {
  Code2, Cpu, Layers, Terminal, Database,
  Workflow, ArrowUpRight, Award, Zap, Shield, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { language } = useLanguage();

  const trContent = {
    manifestoBadge: "MANIFESTO // 01",
    manifestoTitle: "Geleceği Satır Satır İnşa Ediyoruz.",
    manifestoText: "Tugcore, salt yazılımlar üreten bir geliştirme ajansı değildir. Bizler, karmaşık mühendislik problemlerini basit ve ölçeklenebilir yapılara dönüştüren bir teknoloji stüdyosu ve yazılım laboratuvarıyız (R&D Lab). Yazdığımız her satır kodun bir sanat eseri titizliğinde olmasına, kurduğumuz her mimarinin yarının yüksek trafikli sistemlerini taşıyabilmesine odaklanıyoruz. Estetiği fonksiyonla, inovasyonu kararlılıkla birleştiriyoruz.",

    focusBadge: "ODAK ALANLARIMIZ",
    focusTitle: "Neler Üretiyoruz?",
    focusAreas: [
      {
        num: "01",
        title: "Yazılım Mimarisi",
        desc: "Karmaşık iş mantıklarını temiz ve sürdürülebilir yapılara dönüştürüyoruz. Domain-Driven Design (DDD) ve monolitik/mikroservis hiyerarşilerinde en optimum çözümleri kurguluyoruz."
      },
      {
        num: "02",
        title: "İnovasyon Laboratuvarı",
        desc: "Geleceğin teknolojilerini (Yapay Zeka entegrasyonları, büyük veri işleme, web otomasyon araçları) araştırıyor, test ediyor ve çalışan prototiplere dönüştürüyoruz."
      },
      {
        num: "03",
        title: "Ölçeklenebilir Sistemler",
        desc: "Docker, Supabase, PostgreSQL ve ASP.NET Core gibi yüksek performanslı araçları harmanlayarak, anlık binlerce isteği karşılayabilen gecikmesiz altyapılar geliştiriyoruz."
      },
      {
        num: "04",
        title: "Kullanıcı Deneyimi",
        desc: "Faydalı bir yazılımın kusursuz bir tasarımla taçlandırılması gerektiğine inanıyoruz. Mikro-animasyonlar ve fütüristik minimalist arayüzlerle kullanıcıyı büyüleyen deneyimler tasarlıyoruz."
      }
    ],

    ecosystemBadge: "EKOSİSTEM // PORTFÖY",
    ecosystemTitle: "Tugcore Çatısı Altında",
    ecosystemDesc: "Laboratuvarımız bünyesinde hayata geçirilen veya çekirdek altyapısı hazırlanan temel teknolojiler.",
    ecosystemItems: [
      {
        name: "Vestige Core",
        type: "Veri ve Keşif Motoru",
        desc: "Bilgiye ulaşma biçiminizi değiştiren dijital keşif aracı . ."
      },
      {
        name: "Otomasyon Ekosistemi",
        type: "Bulut Sipariş & Masa Yönetimi",
        desc: "QR menü, garson, mutfak ve yönetici ekranlarını tek bir merkezde senkronize eden, kafe ve restoranların dijital dönüşümünü sağlayan SaaS platformları."
      },
      {
        name: "Mobil & Web Mimarileri",
        type: "Özel SDK & Framework Entegrasyonları",
        desc: "Çok hızlı çalışan ve düşük donanımlı cihazlarda bile yüksek performans sunan, özelleştirilmiş mobil ve web arayüz kütüphanelerimiz."
      }
    ],

    techTitle: "Teknolojik Vizyon & Stack",
    techDesc: "Geliştirme yaparken kararlılığından, performansından ve güvenliğinden taviz vermediğimiz ana teknolojilerilerimiz.",

    footerText: "TUGCORE // LAB",
    footerSub: "Mühendislik, araştırma ve ürün mimarisi odaklı yazılım laboratuvarı.",
    footerStamp: "HER SATIRDA HASSASİYET • TÜM SİSTEMLER OPERASYONEL"
  };

  const enContent = {
    manifestoBadge: "MANIFESTO // 01",
    manifestoTitle: "We Build the Future Line by Line.",
    manifestoText: "Tugcore is not just a standard development agency producing generic software. We are a technology studio and software research laboratory (R&D Lab) that transforms complex engineering problems into clean, scalable architectures. We focus on writing every line of code with the precision of an art piece, ensuring every system we build carries tomorrow's high-traffic networks. We merge aesthetics with function, and innovation with stability.",

    focusBadge: "OUR FOCUS AREAS",
    focusTitle: "What We Build?",
    focusAreas: [
      {
        num: "01",
        title: "Software Architecture",
        desc: "We transform complex business logics into clean and maintainable structures. We build optimum solutions utilizing Domain-Driven Design (DDD) and monolithic/microservices hierarchies."
      },
      {
        num: "02",
        title: "Innovation Lab",
        desc: "We research, test, and convert futuristic technologies (AI integrations, large data processing, web automation tools) into fully functional prototypes."
      },
      {
        num: "03",
        title: "Scalable Systems",
        desc: "By blending high-performance tools like Docker, Supabase, PostgreSQL, and ASP.NET Core, we develop zero-latency backends that handle thousands of concurrent requests."
      },
      {
        num: "04",
        title: "User Experience",
        desc: "We believe valuable software must be crowned with flawless design. We craft immersive user experiences using micro-animations and futuristic minimalist interfaces."
      }
    ],

    ecosystemBadge: "ECOSYSTEM // PORTFOLIO",
    ecosystemTitle: "Under Tugcore's Roof",
    ecosystemDesc: "Core technologies brought to life or architected inside our research and development laboratory.",
    ecosystemItems: [
      {
        name: "Vestige Core",
        type: "Data & Discovery Engine",
        desc: "Our proprietary search engine core designed to execute web crawling, data mining, and real-time indexing operations with zero latency."
      },
      {
        name: "Automation Ecosystem",
        type: "Cloud Ordering & Table Management",
        desc: "SaaS platforms that synchronize QR menu, waiter, kitchen, and admin panels in a single center, driving digital transformation for cafes and restaurants."
      },
      {
        name: "Mobile & Web Infrastructures",
        type: "Custom SDK & Framework Integrations",
        desc: "Customized mobile and web UI libraries optimized to run lightning-fast and provide outstanding performance even on low-end devices."
      }
    ],

    techTitle: "Technical Vision & Stack",
    techDesc: "Core technologies we rely on, never compromising on stability, performance, and security.",

    footerText: "TUGCORE // LAB",
    footerSub: "Software research laboratory focused on engineering, R&D, and product architecture.",
    footerStamp: "PRECISION IN EVERY LINE • ALL SYSTEMS OPERATIONAL"
  };

  const content = language === 'tr' ? trContent : enContent;

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  return (
    <div className="bg-white dark:bg-[#09090b] text-zinc-800 dark:text-zinc-100 min-h-screen font-jakarta selection:bg-orange-500 dark:selection:bg-[#00f5d4] selection:text-white dark:selection:text-black transition-colors duration-300 relative overflow-hidden pt-28 pb-20">

      {/* Decorative Cyberpunk Background Glows */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-orange-500/[0.02] dark:bg-[#00f5d4]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-[-10%] w-[500px] h-[500px] bg-orange-600/[0.015] dark:bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10 space-y-28">

        {/* Section 1: Intro / Manifesto */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-orange-500 dark:text-[#00f5d4] font-space text-xs tracking-[0.25em] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-[#00f5d4] animate-ping" />
            {content.manifestoBadge}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.h1
              variants={itemVariants}
              className="lg:col-span-7 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-orange-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-zinc-50 dark:via-zinc-100 dark:to-zinc-400 font-jakarta"
            >
              {content.manifestoTitle}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="lg:col-span-5 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-light pt-2"
            >
              {content.manifestoText}
            </motion.p>
          </div>
        </motion.section>

        {/* Section 2: Focus Areas Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-zinc-400 dark:text-zinc-500 font-space text-[0.65rem] tracking-[0.3em] font-bold uppercase">{content.focusBadge}</span>
            <h2 className="text-3xl font-bold tracking-tight font-jakarta text-zinc-900 dark:text-zinc-100">{content.focusTitle}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.focusAreas.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-md hover:border-orange-500/30 dark:hover:border-[#00f5d4]/20 transition-all duration-500 flex flex-col justify-between h-64 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/50"
              >
                <div className="flex justify-between items-start">
                  <span className="font-space text-zinc-400 dark:text-zinc-600 text-sm font-bold tracking-wider">{item.num} //</span>
                  {index === 0 && <Code2 size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-[#00f5d4] transition-colors duration-500" />}
                  {index === 1 && <Cpu size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-[#00f5d4] transition-colors duration-500" />}
                  {index === 2 && <Layers size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-[#00f5d4] transition-colors duration-500" />}
                  {index === 3 && <Sparkles size={18} className="text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 dark:group-hover:text-[#00f5d4] transition-colors duration-500" />}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-zinc-850 dark:text-zinc-200 group-hover:text-orange-500 dark:group-hover:text-zinc-100 transition-colors font-jakarta tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Portfolio / Ecosystem Overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
            <span className="text-zinc-400 dark:text-zinc-500 font-space text-[0.65rem] tracking-[0.3em] font-bold uppercase">{content.ecosystemBadge}</span>
            <h2 className="text-3xl font-bold tracking-tight font-jakarta text-zinc-900 dark:text-zinc-100">{content.ecosystemTitle}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">{content.ecosystemDesc}</p>
          </motion.div>

          <div className="lg:col-span-8 space-y-4">
            {content.ecosystemItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-880/30 hover:border-orange-500/30 dark:hover:border-zinc-800/80 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-100 font-jakarta">{item.name}</h3>
                    <span className="px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 rounded-md text-[9px] font-space text-orange-500 dark:text-[#00f5d4]/70 uppercase tracking-widest font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>

                <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 group-hover:border-orange-500/30 dark:group-hover:text-[#00f5d4] dark:group-hover:border-[#00f5d4]/30 dark:group-hover:bg-[#00f5d4]/5 transition-all duration-300 self-end sm:self-center">
                  <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Technical Stackviz Card */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="p-8 sm:p-10 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/40 backdrop-blur-md space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/[0.01] dark:bg-[#00f5d4]/[0.01] blur-2xl rounded-full" />

          <motion.div variants={itemVariants} className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight font-jakarta text-zinc-900 dark:text-zinc-100">{content.techTitle}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm font-light leading-relaxed">{content.techDesc}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
          >
            {[
              { name: "Next.js", type: "Client Framework" },
              { name: "Supabase", type: "Serverless BaaS" },
              { name: "ASP.NET Core", type: "Enterprise API" },
              { name: "PostgreSQL", type: "Relational DB" },
              { name: "Docker", type: "Container System" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/40 hover:border-orange-500 dark:hover:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-all flex flex-col justify-between h-24 font-space"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-[#00f5d4]/80" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">{tech.name}</h4>
                  <span className="text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{tech.type}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 5: LAB Signature Card (En Alt) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-zinc-200 dark:border-zinc-800/50 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-orange-500 dark:text-[#00f5d4]" />
              <h3 className="font-space text-sm font-black text-zinc-800 dark:text-zinc-100 tracking-widest uppercase">{content.footerText}</h3>
            </div>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs leading-relaxed font-light">{content.footerSub}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start md:items-end text-left md:text-right space-y-1 md:space-y-2 font-space"
          >
            <div className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold tracking-[0.2em]">{content.footerStamp}</div>
            <div className="text-[8px] text-zinc-500 dark:text-zinc-700 tracking-[0.3em] font-mono">TUGCORE_RND_SYS_READY // OK</div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
};

export default AboutPage;
