import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Target, Lightbulb, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const { t, language } = useLanguage();
  if (!project) return null;

  const labels = {
    about: language === 'tr' ? 'Proje Hakkında' : 'About Project',
    problem: language === 'tr' ? 'Problem' : 'Problem',
    solution: language === 'tr' ? 'Çözüm' : 'Solution',
    features: language === 'tr' ? 'Öne Çıkan Özellikler' : 'Key Features',
    technologies: language === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used',
    liveDemo: language === 'tr' ? 'Canlı Demoyu Gör' : 'View Live Demo',
  };

  const getLocalizedContent = (key) => {
    if (language === 'tr') return project[key];
    const enKey = `${key}En`;
    return project[enKey] || project[key];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-main/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-bg-card rounded-2xl border border-border-main shadow-2xl overflow-hidden flex flex-col transition-colors duration-300"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-bg-sec/50 hover:bg-bg-sec text-text-main rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            {/* Scrollable Area */}
            <div className="overflow-y-auto custom-scrollbar">
              {/* Header Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-primary font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-2">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Description & Details */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                        <Target className="text-primary" size={20} />
                        {labels.about}
                      </h3>
                      <p className="text-text-sec leading-relaxed text-lg transition-colors duration-300">
                        {getLocalizedContent('description')}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-bg-sec/50 p-5 rounded-xl border border-border-main transition-colors duration-300">
                        <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
                          <X className="text-red-400" size={18} />
                          {labels.problem}
                        </h4>
                        <p className="text-text-sec text-sm leading-relaxed transition-colors duration-300">
                          {getLocalizedContent('problem')}
                        </p>
                      </div>
                      <div className="bg-bg-sec/50 p-5 rounded-xl border border-border-main transition-colors duration-300">
                        <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
                          <Lightbulb className="text-yellow-400" size={18} />
                          {labels.solution}
                        </h4>
                        <p className="text-text-sec text-sm leading-relaxed transition-colors duration-300">
                          {getLocalizedContent('solution')}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={20} />
                        {labels.features}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(language === 'tr' ? project.features : project.featuresEn || project.features).map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-text-sec text-sm transition-colors duration-300">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Meta Info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-text-main font-bold mb-4">{labels.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-bg-sec text-text-sec rounded-lg text-xs font-medium border border-border-main transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border-main space-y-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ExternalLink size={18} />
                        {labels.liveDemo}
                      </a>
                      <a
                        href="tel:+905067100717"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-bg-sec hover:bg-bg-sec/80 text-text-main border border-border-main rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Phone size={18} />
                        {t.portfolio.demo_request}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
