import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: t.process.step1,
      desc: t.process.step1Desc,
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: t.process.step2,
      desc: t.process.step2Desc,
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: t.process.step3,
      desc: t.process.step3Desc,
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t.process.step4,
      desc: t.process.step4Desc,
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section className="py-32 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center justify-center gap-2 font-heading">
              {t.process.badge}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-4xl md:text-6xl font-black text-text-main leading-none tracking-tight mb-6 font-heading">
              {t.process.title}
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border-main to-transparent hidden lg:block -z-10" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%">
              <div className="relative group text-center lg:text-left">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-0.5 mb-8 mx-auto lg:mx-0 transform group-hover:rotate-6 transition-transform duration-500`}>
                  <div className="w-full h-full bg-bg-main rounded-[calc(1.5rem-2px)] flex items-center justify-center text-text-main group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 lg:right-auto lg:left-16 text-6xl font-black opacity-5 text-text-main font-heading group-hover:opacity-10 transition-opacity">
                  0{idx + 1}
                </div>

                <h4 className="text-xl font-bold text-text-main mb-4 font-heading tracking-tight">{step.title}</h4>
                <p className="text-text-sec text-sm leading-relaxed font-body opacity-70">{step.desc}</p>
                
                {idx < steps.length - 1 && (
                  <div className="mt-8 flex justify-center lg:hidden">
                    <ArrowRight className="text-border-main rotate-90" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
