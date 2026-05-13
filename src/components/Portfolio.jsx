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
  const categories = [t.portfolio.categories.all, t.portfolio.categories.web, t.portfolio.categories.mobile, t.portfolio.categories.design];
  const [activeCategory, setActiveCategory] = useState(t.portfolio.categories.all);

  const targetRef = useRef(null);
  
  const filteredProjects = activeCategory === t.portfolio.categories.all
    ? projects
    : projects.filter(p => {
        const catMap = {
          [t.portfolio.categories.web]: 'Web Geliştirme',
          [t.portfolio.categories.mobile]: 'Mobil Uygulama',
          [t.portfolio.categories.design]: 'UI/UX Tasarım'
        };
        return p.category === catMap[activeCategory];
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-primary mb-3 flex items-center gap-2 font-heading">
              <Layers size={12} /> {t.portfolio.badge}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight font-heading">
              <span className="text-primary">{t.portfolio.title}</span>
            </h3>
          </motion.div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar glass p-2 rounded-3xl border border-border-main scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-[0.6rem] font-bold transition-all uppercase tracking-widest font-heading ${activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-text-sec hover:text-primary hover:bg-bg-main/50'
                  }`}
              >
                {cat}
              </button>
            ))}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-bg-sec border border-border-main group-hover:border-primary/20 transition-all duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/95 via-bg-main/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Demo Request Button Overlay */}
                  <div className="absolute top-4 left-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button 
                      onClick={handleDemoClick}
                      className="flex items-center gap-2 px-4 py-2 glass border border-white/20 rounded-full text-[0.6rem] font-bold text-white bg-primary/80 hover:bg-primary transition-colors uppercase tracking-widest font-heading shadow-xl"
                    >
                      <Phone size={12} /> {t.portfolio.demo_request}
                    </button>
                  </div>

                  {/* Project Info Floating */}
                  <div className="absolute bottom-5 left-5 right-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 glass border border-white/10 rounded-full text-[8px] font-bold text-text-main uppercase tracking-widest font-heading">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-text-main font-heading">{project.title}</h4>
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 transform group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 glass border border-border-main rounded-full text-[7px] font-bold text-primary uppercase tracking-[0.2em] font-heading">
                    {project.category}
                  </div>
                </div>

                {/* Visible Info Below */}
                <div className="mt-4 flex justify-between items-start">
                  <div className="max-w-[80%]">
                    <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors duration-300 font-heading tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-text-sec text-[0.65rem] font-medium mt-1 line-clamp-1 opacity-60 font-body">
                      {language === 'tr' ? project.description : project.descriptionEn || project.description}
                    </p>
                  </div>
                  <span className="text-text-sec/10 font-black text-2xl select-none group-hover:text-primary/5 transition-colors font-heading">
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
