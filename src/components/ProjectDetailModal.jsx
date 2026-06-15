import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, CheckCircle2, Target, Lightbulb, Phone, 
  Globe, Laptop, RotateCw, Maximize2, Lock, ArrowRight, Sparkles,
  Key, Copy, Check 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [previewMode, setPreviewMode] = useState('image'); // 'image' or 'live'
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [copiedField, setCopiedField] = useState(null); // 'email' or 'password' or null

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Reset states when the project changes
  useEffect(() => {
    setPreviewMode('image');
    setIframeLoading(true);
    setIframeKey(prev => prev + 1);
  }, [project]);

  if (!project) return null;

  const labels = {
    about: language === 'tr' ? 'Proje Hakkında' : 'About Project',
    problem: language === 'tr' ? 'Müşteri Problemi' : 'Client Challenge',
    solution: language === 'tr' ? 'Geliştirilen Çözüm' : 'Developed Solution',
    features: language === 'tr' ? 'Öne Çıkan Özellikler' : 'Key Features',
    technologies: language === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used',
    liveDemo: language === 'tr' ? 'Projeyi Canlı İncele' : 'View Live Project',
  };

  const getLocalizedContent = (key) => {
    if (language === 'tr') return project[key];
    const enKey = `${key}En`;
    return project[enKey] || project[key];
  };

  // Format URL for browser address bar mockup
  const displayUrl = project.demoUrl ? project.demoUrl.replace(/^https?:\/\/(www\.)?/, '') : '';

  const handleReloadIframe = () => {
    setIframeLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-end p-0 md:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Panel Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 190 }}
            className="relative w-full md:w-[85vw] lg:w-[75vw] xl:w-[70vw] max-w-6xl h-screen bg-bg-main flex flex-col md:flex-row shadow-2xl overflow-hidden border-l border-border-main z-10"
          >
            {/* Split Left: Visual / Browser Iframe Preview */}
            <div className="w-full md:w-[58%] lg:w-[60%] h-[40vh] md:h-full bg-bg-sec/30 border-b md:border-b-0 md:border-r border-border-main flex flex-col p-4 md:p-6 relative select-none">
              
              {/* Image / Live Toggle Switch */}
              {project.demoUrl !== '#' && (
                <div className="flex bg-bg-sec p-1 rounded-xl border border-border-main self-center mb-4 shadow-sm z-10">
                  <button
                    onClick={() => setPreviewMode('image')}
                    className={`flex items-center gap-2 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      previewMode === 'image'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-sec hover:text-primary'
                    }`}
                  >
                    <Laptop size={14} />
                    {language === 'tr' ? 'Ekran Görüntüsü' : 'Screenshot'}
                  </button>
                  <button
                    onClick={() => setPreviewMode('live')}
                    className={`flex items-center gap-2 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      previewMode === 'live'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-sec hover:text-primary'
                    }`}
                  >
                    <Globe size={14} />
                    {language === 'tr' ? 'Canlı Deneyim (Etkileşimli)' : 'Live Interactive'}
                  </button>
                </div>
              )}

              {/* Browser Mockup Wrapper */}
              <div className="flex-1 w-full bg-bg-card rounded-2xl border border-border-main shadow-lg overflow-hidden flex flex-col relative">
                
                {/* Mockup Header */}
                <div className="bg-bg-sec border-b border-border-main px-4 py-2.5 flex items-center justify-between gap-4 flex-shrink-0">
                  {/* Left: Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 block" />
                  </div>

                  {/* Middle: Mock address bar */}
                  <div className="flex-1 max-w-sm sm:max-w-md bg-bg-main border border-border-main/80 rounded-lg px-3 py-1 flex items-center justify-between gap-2 text-[10px] text-text-sec select-none overflow-hidden mx-auto">
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock size={10} className="text-emerald-500 flex-shrink-0" />
                      <span className="truncate text-text-sec/70">{displayUrl || 'local-preview/'}</span>
                    </div>
                    {previewMode === 'live' && (
                      <button 
                        onClick={handleReloadIframe}
                        className="hover:text-primary transition-colors cursor-pointer"
                        title={language === 'tr' ? 'Yeniden Yükle' : 'Reload'}
                      >
                        <RotateCw size={11} />
                      </button>
                    )}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-3">
                    {project.demoUrl !== '#' && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-sec hover:text-primary transition-colors"
                        title={language === 'tr' ? 'Yeni Sekmede Aç' : 'Open in New Tab'}
                      >
                        <Maximize2 size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Mockup Screen Container */}
                <div className="flex-1 w-full h-full overflow-hidden relative bg-bg-main">
                  {previewMode === 'image' || project.demoUrl === '#' ? (
                    /* Image Mode */
                    <div className="w-full h-full relative group flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    /* Interactive IFrame Mode */
                    <div className="w-full h-full relative bg-white">
                      <iframe
                        key={iframeKey}
                        src={project.demoUrl}
                        title={project.title}
                        className="w-full h-full border-0"
                        onLoad={() => setIframeLoading(false)}
                      />
                      
                      {/* IFrame Loading State Overlay */}
                      {iframeLoading && (
                        <div className="absolute inset-0 bg-bg-main/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                          <div className="relative w-12 h-12 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin absolute" />
                            <Sparkles className="text-primary animate-pulse" size={18} />
                          </div>
                          <p className="text-xs text-text-sec tracking-wide font-medium">
                            {language === 'tr' ? 'Canlı Demo Yükleniyor...' : 'Loading Live Demo...'}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Split Right: Bento Details & Narrative */}
            <div className="w-full md:w-[42%] lg:w-[40%] h-[60vh] md:h-full flex flex-col bg-bg-main relative">
              
              {/* Close Button (Floating Top Right) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2.5 bg-bg-sec/90 hover:bg-red-500 hover:text-white text-text-main rounded-full border border-border-main shadow-md transition-all duration-300 backdrop-blur-sm cursor-pointer scale-90 md:scale-100"
              >
                <X size={18} />
              </button>

              {/* Scrollable details panel */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 md:p-8 pt-14 md:pt-16 space-y-8">
                
                {/* Meta details header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-[0.6rem] md:text-xs font-bold rounded-lg uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 border border-border-main bg-bg-sec text-text-sec text-[8px] md:text-[10px] font-bold rounded-lg uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {language === 'tr' ? 'Çalışıyor' : 'Live'}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text-main font-heading tracking-tight leading-tight mb-4">
                    {project.title}
                  </h2>
                </div>

                {/* About Project */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={12} className="text-primary" />
                    {labels.about}
                  </h3>
                  <p className="text-text-sec/90 text-sm leading-relaxed font-body whitespace-pre-line">
                    {getLocalizedContent('description') || (language === 'tr' ? 'Bu proje için detaylı bir açıklama bulunmamaktadır.' : 'No description available for this project.')}
                  </p>

                  {/* Demo Credentials Alert Box */}
                  {(project.loginEmail || project.loginPassword) && (
                    <div className="bg-blue-500/[0.03] dark:bg-blue-500/[0.01] border border-blue-500/50 dark:border-blue-500/30 p-4 rounded-2xl flex flex-col gap-3 mt-4">
                      <h4 className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-extrabold text-xs tracking-wider uppercase">
                        <Key size={14} className="text-blue-500 animate-pulse" />
                        {language === 'tr' ? 'Giriş Bilgileri' : 'Demo Credentials'}
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {project.loginEmail && (
                          <div className="flex flex-col gap-1.5 p-3 bg-bg-sec/50 border border-border-main/50 rounded-xl">
                            <h4 className="text-text-sec/60 font-semibold uppercase tracking-wider text-[9px]">
                              E-Mail
                            </h4>
                            <div className="flex items-center justify-between gap-2 font-mono text-text-main">
                              <h4 className="truncate select-all font-bold text-xs">{project.loginEmail}</h4>
                              <button
                                onClick={() => handleCopy(project.loginEmail, 'email')}
                                className="p-1 hover:bg-bg-sec hover:text-primary rounded text-text-sec transition-colors cursor-pointer"
                                title={language === 'tr' ? 'Kopyala' : 'Copy'}
                              >
                                {copiedField === 'email' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {project.loginPassword && (
                          <div className="flex flex-col gap-1.5 p-3 bg-bg-sec/50 border border-border-main/50 rounded-xl">
                            <h4 className="text-text-sec/60 font-semibold uppercase tracking-wider text-[9px]">
                              {language === 'tr' ? 'Şifre' : 'Password'}
                            </h4>
                            <div className="flex items-center justify-between gap-2 font-mono text-text-main">
                              <h4 className="truncate select-all font-bold text-xs">{project.loginPassword}</h4>
                              <button
                                onClick={() => handleCopy(project.loginPassword, 'password')}
                                className="p-1 hover:bg-bg-sec hover:text-primary rounded text-text-sec transition-colors cursor-pointer"
                                title={language === 'tr' ? 'Kopyala' : 'Copy'}
                              >
                                {copiedField === 'password' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bento Challenge & Solution Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Challenge */}
                  <div className="bg-red-500/[0.02] dark:bg-red-500/[0.01] border border-red-500/10 p-4 rounded-2xl flex flex-col gap-3 transition-colors hover:bg-red-500/[0.04]">
                    <div className="flex items-center gap-2 text-red-500 font-bold text-xs tracking-wider uppercase">
                      <div className="p-1.5 bg-red-500/10 rounded-lg text-red-500">
                        <Target size={14} />
                      </div>
                      {labels.problem}
                    </div>
                    <p className="text-text-sec text-xs leading-relaxed font-medium">
                      {getLocalizedContent('problem') || (language === 'tr' ? 'Açıklama belirtilmemiş.' : 'Not specified.')}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] border border-emerald-500/10 p-4 rounded-2xl flex flex-col gap-3 transition-colors hover:bg-emerald-500/[0.04]">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs tracking-wider uppercase">
                      <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500">
                        <Lightbulb size={14} />
                      </div>
                      {labels.solution}
                    </div>
                    <p className="text-text-sec text-xs leading-relaxed font-medium">
                      {getLocalizedContent('solution') || (language === 'tr' ? 'Çözüm planı belirtilmemiş.' : 'Not specified.')}
                    </p>
                  </div>
                </div>

                {/* Key Features List */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-widest">
                      {labels.features}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {(language === 'tr' ? project.features : project.featuresEn || project.features).map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-bg-sec/40 border border-border-main/50 rounded-xl hover:border-primary/20 transition-all duration-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                            <CheckCircle2 size={12} />
                          </div>
                          <span className="text-text-sec text-xs md:text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                {project.tags && project.tags.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-widest">
                      {labels.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-bg-sec hover:bg-primary/5 hover:text-primary hover:border-primary/20 text-text-sec text-[10px] md:text-xs font-semibold rounded-xl border border-border-main transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 md:p-8 bg-bg-main border-t border-border-main flex flex-col sm:flex-row gap-3 z-10">
                {project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20 text-xs md:text-sm tracking-wide font-heading cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    {labels.liveDemo}
                  </a>
                )}
                <a
                  href="tel:+905067100717"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-bg-sec hover:bg-bg-sec/80 text-text-main border border-border-main rounded-2xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] text-xs md:text-sm tracking-wide font-heading cursor-pointer"
                >
                  <Phone size={16} />
                  {t.portfolio.demo_request}
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
