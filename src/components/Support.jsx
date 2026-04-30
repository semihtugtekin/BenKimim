import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  LifeBuoy, 
  Cpu, 
  Globe, 
  Headphones, 
  ChevronDown, 
  MessageSquare,
  Mail,
  Phone,
  Sparkles,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

emailjs.init("qHEjnc04CyvVULi3B");

const Support = () => {
  const form = useRef();
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const faqs = [
    {
      question: "Nasıl destek alabilirim?",
      answer: "Destek almak için aşağıdaki formu doldurabilir, info@tugcore.com.tr adresine e-posta gönderebilir veya +90 506 710 0717 numaralı telefondan bize ulaşabilirsiniz."
    },
    {
      question: "Çalışma saatleriniz nedir?",
      answer: "Hafta içi 09:00 - 18:00 saatleri arasında aktif destek sağlıyoruz. Acil durumlar için e-posta yoluyla 7/24 bize ulaşabilirsiniz."
    },
    {
      question: "Teknik destek kapsamınız nedir?",
      answer: "Yazılım geliştirme, web tasarımı, bulut bilişimi ,yapay zeka destekli sistemler vb. alanlarda kapsamlı teknik destek sunuyoruz."
    },
    {
      question: "Projeler ne kadar sürede tamamlanıyor?",
      answer: "Proje süresi, projenin kapsamına ve karmaşıklığına bağlı olarak değişmektedir. İlk görüşmemizde size özel bir zaman çizelgesi sunuyoruz."
    }
  ];

  const categories = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Teknik Destek",
      desc: "Yazılım ve altyapı sorunlarınız için uzman ekibimiz yanınızda."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Dijital Çözümler",
      desc: "Web siteniz ve dijital varlıklarınız için destek alın."
    },
    // {
    //   icon: <ShieldCheck className="w-8 h-8" />,
    //   title: "Güvenlik",
    //   desc: "Siber güvenlik ve veri koruma konularında danışmanlık."
    // },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Müşteri İlişkileri",
      desc: "Genel sorularınız ve önerileriniz için buradayız."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_9v8jft6',
      'template_ogiqw8j',
      form.current,
      'qHEjnc04CyvVULi3B'
    )
    .then(() => {
      setIsSuccess(true);
      form.current?.reset?.();
      setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
      console.error('EmailJS Error:', error);
      alert(`Hata oluştu : ${error.text || error.message || 'Bilinmeyen hata'}`);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="support" className="relative py-32 bg-bg-main transition-colors duration-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 skew-x-12 transform -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center justify-center gap-2 font-heading">
              <LifeBuoy size={14} /> SUPPORT
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-5xl md:text-7xl font-black text-text-main leading-none tracking-tight mb-6 font-heading">
              Size Nasıl <span className="text-primary">Destek</span> Olabiliriz?
            </h3>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-text-sec text-lg font-medium max-w-2xl mx-auto opacity-70 font-body">
              Sorularınız, teknik problemleriniz veya yeni projeleriniz için buradayız. 
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Reveal>
            <a href="mailto:info@tugcore.com.tr" className="group flex items-center gap-6 p-8 rounded-3xl glass border border-border-main hover:border-primary/30 transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 mb-1 font-heading">E-POSTA</div>
                <div className="text-lg font-bold text-text-main group-hover:text-primary transition-colors font-heading tracking-tight">info@tugcore.com.tr</div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="tel:+905067100717" className="group flex items-center gap-6 p-8 rounded-3xl glass border border-border-main hover:border-primary/30 transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 mb-1 font-heading">TELEFON</div>
                <div className="text-lg font-bold text-text-main group-hover:text-primary transition-colors font-heading tracking-tight">+90 506 710 0717</div>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {categories.map((cat, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="p-8 rounded-3xl glass border border-border-main hover:border-primary/20 transition-all duration-700 group h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold text-text-main mb-3 font-heading tracking-tight">{cat.title}</h4>
                <p className="text-text-sec text-sm opacity-70 leading-relaxed font-body">{cat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* FAQ Section */}
          <div className="lg:w-1/2">
            <Reveal>
              <h4 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-3 font-heading tracking-tight">
                <HelpCircle className="text-primary" size={24} /> Sıkça Sorulan Sorular
              </h4>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={0.2 + (0.1 * idx)}>
                  <div className="rounded-2xl glass border border-border-main overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors font-heading"
                    >
                      <span className="font-bold text-text-main pr-4 text-sm">{faq.question}</span>
                      <ChevronDown 
                        className={`text-primary transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                        size={18} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-6 pt-0 text-text-sec text-sm border-t border-border-main/20 leading-relaxed font-body">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Contact/Support Form */}
          <div className="lg:w-1/2">
            <Reveal>
              <div className="p-8 md:p-12 rounded-[2.5rem] glass border border-border-main relative overflow-hidden group shadow-2xl">
                <h4 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-3 font-heading tracking-tight">
                  <MessageSquare className="text-primary" size={24} /> Destek Talebi
                </h4>

                <form ref={form} onSubmit={handleSubmit} className="space-y-5 font-body">
                  <input type="hidden" name="to_email" value="info@tugcore.com.tr" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 ml-2 font-heading">İSİM SOYİSİM</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Adınız?" 
                        name="from_name"
                        className="w-full px-6 py-4 rounded-2xl bg-bg-main/50 border border-border-main focus:border-primary outline-none transition-all duration-300 text-text-main text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 ml-2 font-heading">E-POSTA</label>
                      <input 
                        required
                        type="email" 
                        placeholder="E-posta adresiniz" 
                        name="from_email"
                        className="w-full px-6 py-4 rounded-2xl bg-bg-main/50 border border-border-main focus:border-primary outline-none transition-all duration-300 text-text-main text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 ml-2 font-heading">KONU</label>
                    <select name="subject" className="w-full px-6 py-4 rounded-2xl bg-bg-main/50 border border-border-main focus:border-primary outline-none transition-all duration-300 text-text-main appearance-none text-sm">
                      <option>Teknik Destek</option>
                      <option>Satış / Yeni Proje</option>
                      <option>Ödeme İşlemleri</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-text-sec/50 ml-2 font-heading">MESAJINIZ</label>
                    <textarea 
                      required
                      rows="4" 
                      placeholder="Size nasıl yardımcı olabiliriz?" 
                      name="message"
                      className="w-full px-6 py-4 rounded-2xl bg-bg-main/50 border border-border-main focus:border-primary outline-none transition-all duration-300 text-text-main resize-none text-sm"
                    ></textarea>
                  </div>

                  <Magnetic>
                    <button 
                      disabled={isSubmitting || isSuccess}
                      className={`w-full py-4 rounded-2xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 font-heading ${
                        isSuccess 
                          ? 'bg-green-500 text-white' 
                          : 'bg-primary text-white hover:opacity-90 shadow-xl shadow-primary/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : isSuccess ? (
                        <>TAMAMDIR! <CheckCircle2 size={20} /></>
                      ) : (
                        <>GÖNDER <Send size={16} /></>
                      )}
                    </button>
                  </Magnetic>
                </form>

                {/* Status Message */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 flex items-center gap-3 text-green-500 font-bold justify-center"
                    >
                      <Sparkles size={20} /> Mesajın ulaştı , hemen dönüyoruz!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
