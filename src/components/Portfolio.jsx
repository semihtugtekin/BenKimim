import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Layers, Phone } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryKeys = ['all', 'web', 'mobile', 'design'];
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');

  const targetRef = useRef(null);
  
  const filteredProjects = activeCategoryKey === 'all'
    ? projects
    : projects.filter(p => {
        const catMap = {
          web: 'Web Geliştirme',
          mobile: 'Mobil Uygulama',
          design: 'UI/UX Tasarım'
        };
        return p.category === catMap[activeCategoryKey];
      });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDemoClick = (e) => {
    e.stopPropagation();
    window.location.href = "tel:+905067100717";
  };

  return (
    <section id="portfolio" className="relative py-24 bg-bg-main transition-colors duration-300 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 left-10 text-[7rem] font-black text-text-sec/5 select-none pointer-events-none uppercase tracking-tighter leading-none font-heading">
        {language === 'tr' ? 'İşler' : 'Works'}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl flex flex-col items-center"
          >
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-primary mb-3 flex items-center gap-2 font-heading justify-center">
              <Layers size={12} /> {t.portfolio.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main/95 mb-6 font-heading leading-relaxed max-w-2xl mx-auto">
              {t.portfolio.description_top}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight font-heading">
              <span className="text-primary">{t.portfolio.title}</span>
            </h3>
            <p className="text-xs md:text-sm text-text-sec/70 mt-3.5 font-body italic flex items-center gap-2 justify-center">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.portfolio.note}
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex items-center justify-start md:justify-center gap-1.5 overflow-x-auto pb-3 md:pb-0 no-scrollbar p-1.5 rounded-2xl bg-bg-sec border border-border-main shadow-sm scroll-smooth">
            {categoryKeys.map((key) => {
              const label = t.portfolio.categories[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategoryKey(key)}
                  className={`whitespace-nowrap px-5 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider font-heading cursor-pointer ${
                    activeCategoryKey === key
                      ? 'bg-primary text-white shadow-md'
                      : 'text-text-sec hover:text-text-main hover:bg-bg-card'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-bg-sec border border-border-main group-hover:border-primary/50 transition-all duration-500 shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Demo Request Button Overlay - Solid & Tactile */}
                  <div className="absolute top-4 left-4 transform -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={handleDemoClick}
                      className="flex items-center gap-2 px-3.5 py-1.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-all font-heading shadow-lg cursor-pointer"
                    >
                      <Phone size={12} /> {t.portfolio.demo_request}
                    </button>
                  </div>

                  {/* Project Info Floating on Hover */}
                  <div className="absolute bottom-5 left-5 right-5 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-1.5 mb-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-black/80 border border-white/20 rounded-md text-[9px] font-bold text-white uppercase tracking-wider font-heading">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-white font-heading">{project.shortTitle || project.title}</h4>
                      <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shadow-md transform group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-bg-main/90 border border-border-main rounded-lg text-[9px] font-bold text-primary uppercase tracking-wider font-heading shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Visible Info Below - Crisp & Confident */}
                <div className="mt-4 flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors duration-200 font-heading tracking-tight">
                      {project.shortTitle || project.title}
                    </h3>
                    <p className="text-text-sec text-xs font-medium mt-1 line-clamp-1 font-body">
                      {project.subtitle || (language === 'tr' ? project.description : project.descriptionEn || project.description)}
                    </p>

                    {/* Micro Highlight Badges - Solid Matte */}
                    {project.badges && project.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {project.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-bg-sec border border-border-main text-text-sec group-hover:border-primary/40 group-hover:text-primary transition-colors"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-text-sec/20 font-black text-2xl select-none group-hover:text-primary/30 transition-colors font-heading flex-shrink-0">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
