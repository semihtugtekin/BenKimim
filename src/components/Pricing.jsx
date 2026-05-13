import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown, Phone } from 'lucide-react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t.pricing.starter,
      icon: <Zap className="w-6 h-6" />,
      price: language === 'tr' ? "5000" : "249",
      currency: language === 'tr' ? "₺" : "$",
      features: language === 'tr' ? [
        "Modern Web Tasarımı",
        "Mobil Uyumluluk",
        "SEO Altyapısı",
        "İletişim Formu",
        "1 Yıl Ücretsiz Destek"
      ] : [
        "Modern Web Design",
        "Mobile Compatibility",
        "SEO Infrastructure",
        "Contact Form",
        "1 Year Free Support"
      ],
      color: "bg-blue-500/10 text-blue-500",
      border: "border-blue-500/20"
    },
    {
      name: t.pricing.pro,
      icon: <Shield className="w-6 h-6" />,
      price: language === 'tr' ? "20.000" : "599",
      currency: language === 'tr' ? "₺" : "$",
      popular: true,
      features: language === 'tr' ? [
        "Özel UI/UX Tasarımı",
        "Admin Paneli",
        "Blog Sistemi",
        "Hız Optimizasyonu",
        "Gelişmiş Analitik",
        "7/24 Teknik Destek"
      ] : [
        "Custom UI/UX Design",
        "Admin Panel",
        "Blog System",
        "Speed Optimization",
        "Advanced Analytics",
        "24/7 Technical Support"
      ],
      color: "bg-primary/10 text-primary",
      border: "border-primary/40",
      featured: true
    },
    {
      name: t.pricing.enterprise,
      icon: <Crown className="w-6 h-6" />,
      price: language === 'tr' ? "Özel" : "Custom",
      currency: "",
      features: language === 'tr' ? [
        "E-Ticaret Çözümleri",
        "Özel SaaS Geliştirme",
        "API Entegrasyonları",
        "Yüksek Güvenlik Paketi",
        "Sınırsız Sayfa/Özellik",
        "Öncelikli Destek Hattı"
      ] : [
        "E-Commerce Solutions",
        "Custom SaaS Development",
        "API Integrations",
        "High Security Package",
        "Unlimited Pages/Features",
        "Priority Support Line"
      ],
      color: "bg-purple-500/10 text-purple-500",
      border: "border-purple-500/20"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-bg-main relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center justify-center gap-2 font-heading">
              {t.pricing.badge}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-4xl md:text-6xl font-black text-text-main leading-none tracking-tight mb-6 font-heading">
              {t.pricing.title}
            </h3>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-text-sec text-lg max-w-2xl mx-auto opacity-70 font-body">
              {t.pricing.desc}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%">
              <div className={`relative p-8 md:p-10 rounded-[2.5rem] glass border transition-all duration-500 hover:translate-y-[-10px] h-full flex flex-col ${plan.featured ? `${plan.border} shadow-2xl shadow-primary/10` : 'border-border-main'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[0.6rem] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    {language === 'tr' ? "EN POPÜLER" : "MOST POPULAR"}
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl ${plan.color} flex items-center justify-center mb-8`}>
                  {plan.icon}
                </div>

                <h4 className="text-2xl font-bold text-text-main mb-4 font-heading tracking-tight">{plan.name}</h4>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-text-main font-heading">{plan.price}</span>
                  <span className="text-xl font-bold text-text-sec">{plan.currency}</span>
                  {plan.currency && <span className="text-sm text-text-sec opacity-50 ml-1 font-body">/ {language === 'tr' ? 'başlayan' : 'starts'}</span>}
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-sec text-sm font-body">
                      <div className={`w-5 h-5 rounded-full ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Magnetic>
                  <a
                    href="tel:+905067100717"
                    className={`w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 font-heading ${plan.featured ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-bg-sec/50 text-text-main hover:bg-bg-sec border border-border-main'}`}
                  >
                    {t.pricing.button} <ArrowRight size={18} />
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-sec text-sm font-body opacity-50">
            {t.pricing.contact} <a href="mailto:info@tugcore.com.tr" className="text-primary hover:underline">info@tugcore.com.tr</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default Pricing;
