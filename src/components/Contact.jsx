import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Magnetic from './Magnetic';
import Reveal from './Reveal';

// Initialize EmailJS
emailjs.init("qHEjnc04CyvVULi3B");

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_9v8jft6',
      'template_4ceoioz',
      form.current,
      'qHEjnc04CyvVULi3B'
    )
    .then((result) => {
        setIsSuccess(true);
        form.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
        console.error('EmailJS Error:', error);
        alert(`Hata oluştu kanka: ${error.text || error.message || 'Bilinmeyen hata'}`);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-bg-main transition-colors duration-300 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Unconventional Header */}
          <div className="lg:w-1/3">
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-2">
                <MessageSquare size={16} /> İLETİŞİM
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <h3 className="text-5xl md:text-7xl font-black text-text-main leading-none tracking-tighter mb-10">
                Hadi <span className="text-primary">Konuşalım</span>
              </h3>
            </Reveal>
            <Reveal delay={0.6}>
              <p className="text-text-sec text-xl font-medium leading-relaxed opacity-80 mb-12">
                Fikirlerinizi gerçeğe dönüştürmek için sabırsızlanıyoruz. Bize her zaman ulaşabilirsiniz.
              </p>
            </Reveal>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-sec border border-border-main flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-sec/50 mb-1">E-POSTA GÖNDER</h4>
                  <p className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">info@tugcore.com.tr</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-sec border border-border-main flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-text-sec/50 mb-1">BİZİ ARAYIN</h4>
                  <p className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">+90 555 555 55 55</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-bg-card/50 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-border-main shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={120} className="text-primary" />
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <input type="hidden" name="to_email" value="info@tugcore.com.tr" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      name="from_name"
                      className="w-full bg-transparent border-b-2 border-border-main py-4 text-xl font-bold text-text-main focus:outline-none focus:border-primary transition-all peer placeholder-transparent"
                      placeholder="Ad Soyad"
                      required
                    />
                    <label htmlFor="name" className="absolute left-0 top-0 text-text-sec/50 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary pointer-events-none">
                      Ad Soyad
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      name="from_email"
                      className="w-full bg-transparent border-b-2 border-border-main py-4 text-xl font-bold text-text-main focus:outline-none focus:border-primary transition-all peer placeholder-transparent"
                      placeholder="E-posta"
                      required
                    />
                    <label htmlFor="email" className="absolute left-0 top-0 text-text-sec/50 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary pointer-events-none">
                      E-posta Adresi
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-border-main py-4 text-xl font-bold text-text-main focus:outline-none focus:border-primary transition-all peer placeholder-transparent resize-none"
                    placeholder="Mesajınız"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-0 text-text-sec/50 font-bold uppercase tracking-widest text-xs transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary pointer-events-none">
                    Projenizden Bahsedin
                  </label>
                </div>

                <div className="flex justify-end">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group bg-primary text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center gap-4 shadow-2xl shadow-primary/40 overflow-hidden disabled:opacity-70"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Loader2 className="animate-spin" />
                          </motion.div>
                        ) : isSuccess ? (
                          <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                            <CheckCircle2 /> Gönderildi!
                          </motion.div>
                        ) : (
                          <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                            Gönder <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                  </Magnetic>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
