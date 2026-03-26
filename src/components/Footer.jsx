import { Code2, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-main border-t border-border-main pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-primary font-bold text-2xl mb-4">
              <Code2 className="h-8 w-8" />
              <span>TUGCore</span>
            </a>
            <p className="text-text-sec text-sm transition-colors duration-300">
              Yazılım dünyasında yenilikçi çözümlerle geleceği bugünden kodluyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-text-sec hover:text-primary text-sm transition-colors">Ana Sayfa</a></li>
              <li><a href="#services" className="text-text-sec hover:text-primary text-sm transition-colors">Hizmetler</a></li>
              <li><a href="#portfolio" className="text-text-sec hover:text-primary text-sm transition-colors">Projeler</a></li>
              <li><a href="#support" className="text-text-sec hover:text-primary text-sm transition-colors">Destek</a></li>
              <li><a href="#contact" className="text-text-sec hover:text-primary text-sm transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">Web Geliştirme</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">Mobil Uygulama</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">UI/UX Tasarım</a></li>
              <li><a href="#" className="text-text-sec hover:text-primary text-sm transition-colors">Dijital Dönüşüm Danışmanlığı</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-bold mb-4">Takip Edin</h4>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-text-sec hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-text-sec hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-text-sec hover:text-primary transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="#" className="text-text-sec hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-sec text-sm text-center md:text-left transition-colors duration-300">
            &copy; {new Date().getFullYear()} TUGCore . Tüm hakları saklıdır.
          </p>
          <p className="text-text-sec text-sm flex items-center gap-1 transition-colors duration-300">
            Designed by <span className="text-primary">TUGCore Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
