import { Link } from 'react-router-dom';
import { Code2, Github, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
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
              Yazılım dünyasında yenilikçi çözümlerle geleceği bugünden kodluyoruz. Dijital dönüşüm ortağınız.
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">Hızlı Erişim</h4>
            <ul className="space-y-4 sm:space-y-6 font-body">
              <li><Link to="/" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">Hizmetler</Link></li>
              <li><Link to="/#portfolio" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">Projeler</Link></li>
              <li><Link to="/#support" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">Hizmetler</h4>
            <ul className="space-y-4 sm:space-y-6 font-body">
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">Web Geliştirme</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">Mobil Uygulama</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">UI/UX Tasarım</Link></li>
              <li><Link to="/hizmetler" className="text-text-sec hover:text-primary text-lg sm:text-2xl transition-colors">SaaS Çözümleri</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black mb-8 sm:mb-10 font-heading uppercase tracking-[0.2em] text-xl sm:text-3xl">İletişim</h4>
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
              <a href="#" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Instagram size={24} className="sm:w-8 sm:h-8" />
              </a>
              <a href="#" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Linkedin size={24} className="sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-10 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          <p className="text-base sm:text-xl font-body opacity-50">
            &copy; {new Date().getFullYear()} TUGCore. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2 text-base sm:text-xl font-body text-text-sec opacity-50">
            Crafted with <span className="text-primary mx-2">❤</span> by <span className="text-text-main font-bold">TUGCore Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
