import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Instagram, Linkedin, Twitter, Mail, Phone, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrolled = window.scrollY;
      // Trigger bottom state when within 120px of the absolute bottom
      setIsAtBottom(scrollHeight - clientHeight - scrolled < 120);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-bg-main border-t border-border-main pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 mb-20 sm:mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-4 text-primary font-black text-4xl sm:text-6xl mb-8 sm:mb-10 font-heading tracking-tighter">
              <Code2 className="h-10 w-10 sm:h-16 sm:w-16" />
              <span>TUGCore</span>
            </Link>
            <p className="text-lg sm:text-2xl leading-relaxed font-body opacity-70 max-w-md">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">
              {language === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
            </h4>
            <ul className="space-y-4 sm:space-y-6 font-body">
              <li><Link to="/" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/#portfolio" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/#support" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">
              {t.nav.services}
            </h4>
            <ul className="space-y-4 sm:space-y-6 font-body">
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{language === 'tr' ? 'Web Geliştirme' : 'Web Development'}</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{language === 'tr' ? 'Mobil Uygulama' : 'Mobile App'}</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">{language === 'tr' ? 'UI/UX Tasarım' : 'UI/UX Design'}</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">SaaS Çözümleri</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">
              {t.nav.contact}
            </h4>
            <ul className="space-y-4 sm:space-y-6 font-body text-lg sm:text-2xl text-text-sec">
              <li className="flex items-center gap-4 hover:text-primary transition-colors">
                <Mail size={24} className="sm:w-7 sm:h-7" />
                <a href="mailto:info@tugcore.com.tr" className="break-all">info@tugcore.com.tr</a>
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors">
                <Phone size={24} className="sm:w-7 sm:h-7" />
                <a href="tel:+905067100717">0506 710 07 17</a>
              </li>
            </ul>
            <div className="flex space-x-6 mt-10 sm:mt-12">
              <a href="https://www.instagram.com/tugcore.ly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Instagram size={24} className="sm:w-8 sm:h-8" />
              </a>
              <a href="" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Facebook size={24} className="sm:w-8 sm:h-8" />
              </a>
              {/* <a href="#" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Linkedin size={24} className="sm:w-8 sm:h-8" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-10 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          <p className="text-base sm:text-xl font-body opacity-50">
            &copy; {new Date().getFullYear()} TUGCore. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-base sm:text-xl font-body text-text-sec opacity-50">
            Crafted with <span className="text-primary mx-2">❤</span> by <span className="text-text-main font-bold">TUGCore Team</span>
          </div>
        </div>

        {/* Video landing section at the very bottom of the page */}
        <div className="border-t border-border-main/30 mt-8 pt-8 flex items-center justify-center w-full h-[100px] sm:h-[180px]">
          <div className="flex items-center gap-4">
            {isAtBottom && (
              <motion.a
                layoutId="hero-video-shared"
                href="tel:+905067100717"
                style={{
                  width: isMobile ? "100px" : "180px",
                  height: isMobile ? "100px" : "180px",
                  borderRadius: "16px",
                }}
                className="overflow-hidden shadow-2xl border border-border-main/50 bg-black block cursor-pointer flex-shrink-0"
              >
                <video
                  src="/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.a>
            )}

            {isAtBottom && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="pointer-events-none select-none"
              >
                <span className="text-3xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-heading tracking-tighter">
                  TUGCore
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
