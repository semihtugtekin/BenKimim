import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, CheckCircle2, Target, Lightbulb, Phone, 
  Globe, Laptop, RotateCw, Maximize2, Lock, ArrowRight, Sparkles,
  Key, Copy, Check, Users, Layers, Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [previewMode, setPreviewMode] = useState('image'); // 'image' or 'live'
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [copiedField, setCopiedField] = useState(null); // 'email' or 'password' or null
  const [activeModuleTab, setActiveModuleTab] = useState(0);

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
    setActiveModuleTab(0);
  }, [project]);

  if (!project) return null;

  const labels = {
    about: language === 'tr' ? 'Proje Hakkında' : 'About Project',
    problem: language === 'tr' ? 'Müşteri Problemi' : 'Client Challenge',
    solution: language === 'tr' ? 'Geliştirilen Çözüm' : 'Developed Solution',
    modules: language === 'tr' ? 'Modüller & Yetenekler' : 'Modules & Capabilities',
    features: language === 'tr' ? 'Öne Çıkan Özellikler' : 'Key Features',
    technologies: language === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used',
    targetAudience: language === 'tr' ? 'Kimler İçin İdeal?' : 'Target Audience',
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
                className="absolute top-4 right-4 z-50 p-2.5 bg-bg-sec hover:bg-red-500 hover:text-white text-text-main rounded-xl border border-border-main shadow-md transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Scrollable details panel */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 md:p-8 pt-14 md:pt-16 space-y-6">
                
                {/* Meta details header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 border border-border-main bg-bg-sec text-text-sec text-[10px] font-bold rounded-md uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {language === 'tr' ? 'Çalışıyor' : 'Live'}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text-main font-heading tracking-tight leading-tight mb-2">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-xs md:text-sm text-text-sec font-medium font-body leading-relaxed">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Metrics Highlight Bento Bar */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5">
                    {project.metrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx} 
                        className="p-3 bg-bg-sec border border-border-main rounded-xl flex flex-col items-center text-center hover:border-primary/40 transition-colors shadow-sm"
                      >
                        <span className="text-xs sm:text-sm font-black text-primary font-heading tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-text-sec font-bold uppercase tracking-wider mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* About Project */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={12} className="text-primary" />
                    {labels.about}
                  </h3>
                  <p className="text-text-sec text-xs md:text-sm leading-relaxed font-body">
                    {getLocalizedContent('description') || (language === 'tr' ? 'Bu proje için detaylı bir açıklama bulunmamaktadır.' : 'No description available for this project.')}
                  </p>

                  {/* Demo Credentials Alert Box */}
                  {(project.loginEmail || project.loginPassword) && (
                    <div className="bg-bg-sec border border-primary/30 p-4 rounded-xl flex flex-col gap-3 mt-3 shadow-sm">
                      <h4 className="flex items-center gap-2 text-primary font-extrabold text-xs tracking-wider uppercase">
                        <Key size={14} />
                        {language === 'tr' ? 'Demo Giriş Bilgileri' : 'Demo Credentials'}
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {project.loginEmail && (
                          <div className="flex flex-col gap-1.5 p-2.5 bg-bg-main border border-border-main rounded-lg">
                            <h4 className="text-text-sec font-semibold uppercase tracking-wider text-[9px]">
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
                          <div className="flex flex-col gap-1.5 p-2.5 bg-bg-main border border-border-main rounded-lg">
                            <h4 className="text-text-sec font-semibold uppercase tracking-wider text-[9px]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Challenge */}
                  <div className="bg-bg-sec border border-red-500/20 p-3.5 rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-red-500 font-bold text-xs tracking-wider uppercase">
                      <Target size={13} />
                      {labels.problem}
                    </div>
                    <p className="text-text-sec text-xs leading-relaxed font-medium">
                      {getLocalizedContent('problem') || (language === 'tr' ? 'Açıklama belirtilmemiş.' : 'Not specified.')}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-bg-sec border border-emerald-500/20 p-3.5 rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs tracking-wider uppercase">
                      <Lightbulb size={13} />
                      {labels.solution}
                    </div>
                    <p className="text-text-sec text-xs leading-relaxed font-medium">
                      {getLocalizedContent('solution') || (language === 'tr' ? 'Çözüm planı belirtilmemiş.' : 'Not specified.')}
                    </p>
                  </div>
                </div>

                {/* Modules & Capabilities (Interactive Tabbed Bento) */}
                {project.modules && project.modules.length > 0 ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-wider flex items-center gap-2">
                        <Layers size={13} className="text-primary" />
                        {labels.modules}
                      </h3>
                      <span className="text-[10px] text-text-sec font-semibold">
                        {project.modules.length} {language === 'tr' ? 'Modül' : 'Modules'}
                      </span>
                    </div>

                    {/* Module Tabs Navigation */}
                    <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar p-1 bg-bg-sec rounded-xl border border-border-main">
                      {project.modules.map((mod, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveModuleTab(idx)}
                          className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all uppercase tracking-wider font-heading cursor-pointer ${
                            activeModuleTab === idx
                              ? 'bg-primary text-white shadow-sm'
                              : 'text-text-sec hover:text-text-main hover:bg-bg-card'
                          }`}
                        >
                          {mod.name}
                        </button>
                      ))}
                    </div>

                    {/* Active Module Items */}
                    <div className="grid grid-cols-1 gap-2">
                      {project.modules[activeModuleTab]?.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx}
                          className="p-3 bg-bg-sec border border-border-main rounded-xl hover:border-primary/40 transition-all"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 size={13} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xs font-bold text-text-main font-heading">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-text-sec mt-0.5 leading-relaxed font-body">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Fallback to simple features list */
                  project.features && project.features.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-wider">
                        {labels.features}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {(language === 'tr' ? project.features : project.featuresEn || project.features).map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-2.5 p-2.5 bg-bg-sec border border-border-main rounded-xl"
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                              <CheckCircle2 size={12} />
                            </div>
                            <span className="text-text-sec text-xs font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {/* Target Audience (Kimler İçin İdeal?) */}
                {project.targetAudience && project.targetAudience.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-wider flex items-center gap-2">
                      <Users size={12} className="text-primary" />
                      {labels.targetAudience}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.targetAudience.map((aud, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 bg-bg-sec text-text-main border border-border-main text-[10px] md:text-xs font-medium rounded-lg"
                        >
                          ✓ {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                {project.tags && project.tags.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold text-text-sec uppercase tracking-wider">
                      {labels.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-bg-sec hover:border-primary/40 text-text-sec text-[10px] font-semibold rounded-lg border border-border-main transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons Footer - Solid, Crisp, High-Contrast */}
              <div className="p-5 md:p-6 bg-bg-sec border-t border-border-main flex flex-col sm:flex-row gap-2.5 z-10">
                {project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-md text-xs md:text-sm tracking-wide font-heading cursor-pointer"
                  >
                    <ExternalLink size={15} />
                    {labels.liveDemo}
                  </a>
                )}
                <a
                  href="tel:+905067100717"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-bg-card hover:bg-bg-main text-text-main border border-border-main rounded-xl font-bold transition-all text-xs md:text-sm tracking-wide font-heading cursor-pointer"
                >
                  <Phone size={15} />
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
