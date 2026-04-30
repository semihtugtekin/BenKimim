import { Code2, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-main border-t border-border-main pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-3 text-primary font-bold text-2xl mb-6 font-heading tracking-tight">
              <Code2 className="h-8 w-8" />
              <span>TUGCore</span>
            </a>
            <p className="text-text-sec text-sm leading-relaxed font-body opacity-70">
              Yazılım dünyasında yenilikçi çözümlerle geleceği bugünden kodluyoruz. Dijital dönüşüm ortağınız.
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-6 font-heading uppercase tracking-widest text-xs">Hızlı Erişim</h4>
            <ul className="space-y-3 font-body">
              <li><a href="#home" className="text-text-sec hover:text-primary text-sm transition-colors">Ana Sayfa</a></li>
              <li><a href="#services" className="text-text-sec hover:text-primary text-sm transition-colors">Hizmetler</a></li>
              <li><a href="#portfolio" className="text-text-sec hover:text-primary text-sm transition-colors">Projeler</a></li>
              <li><a href="#support" className="text-text-sec hover:text-primary text-sm transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-6 font-heading uppercase tracking-widest text-xs">Hizmetler</h4>
            <ul className="space-y-3 font-body">
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">Web Geliştirme</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">Mobil Uygulama</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">UI/UX Tasarım</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">SaaS Çözümleri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-6 font-heading uppercase tracking-widest text-xs">Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-sec hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-sec text-xs font-body opacity-50">
            &copy; {new Date().getFullYear()} TUGCore. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-xs font-body text-text-sec opacity-50">
            Crafted with <span className="text-primary mx-1">❤</span> by <span className="text-text-main font-bold">TUGCore Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
