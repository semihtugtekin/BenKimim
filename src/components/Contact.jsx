import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("qHEjnc04CyvVULi3B");

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // KANKA: EmailJS sendForm yöntemi formdaki tüm alanları otomatik alır.
    emailjs.sendForm(
      'service_9v8jft6', // Service ID
      'template_4ceoioz', // Template ID
      form.current,
      'qHEjnc04CyvVULi3B' // Public Key
    )
    .then((result) => {
        setIsSuccess(true);
        form.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
        console.error('EmailJS Error:', error);
        alert(`Hata oluştu kanka: ${error.text || error.message || 'Bilinmeyen hata'}. EmailJS Dashboard'dan 'To Email' (Alıcı E-postası) kısmını kontrol etmelisin.`);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-bg-sec/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">İletişime Geçin</h2>
          <p className="text-text-sec max-w-2xl mx-auto transition-colors duration-300">
            Projenizi hayata geçirmek için bizimle konuşun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-text-main">Bize Ulaşın</h3>
            <p className="text-text-sec">
              Aşağıdaki iletişim kanallarından veya formu doldurarak bize ulaşabilirsiniz. 7/24 destek ekibimizle yanınızdayız.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bg-card rounded-lg text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-main">E-posta</h4>
                  <p className="text-text-sec">info@tugcore.com.tr</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-bg-card p-8 rounded-xl border border-border-main shadow-xl"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* EmailJS recipient address */}
              <input type="hidden" name="to_email" value="info@tugcore.com.tr" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-sec mb-2">Ad Soyad</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name" // EmailJS template field
                    className="w-full bg-bg-main border border-border-main rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                    placeholder="Adınız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-sec mb-2">E-posta</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="reply_to" // EmailJS template field
                    className="w-full bg-bg-main border border-border-main rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-sec mb-2">Konu</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full bg-bg-main border border-border-main rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
                  placeholder="Proje Hakkında"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-sec mb-2">Mesajınız</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full bg-bg-main border border-border-main rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary hover:bg-primary/90 text-white'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Gönderiliyor...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={20} />
                    Gönderildi!
                  </>
                ) : (
                  <>
                    Gönder
                    <Send size={20} />
                  </>
                )}
              </button>
              
              {isSuccess && (
                <p className="text-green-400 text-sm text-center animate-pulse">
                  Mesajın bize ulaştı kanka, en kısa sürede döneceğiz!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
