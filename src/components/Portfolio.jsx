import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';

const categories = ['Tümü', 'Web Geliştirme', 'Mobil Uygulama', 'UI/UX Tasarım'];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const filteredProjects = activeCategory === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="relative py-32 bg-bg-main transition-colors duration-300 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 left-10 text-[15rem] font-black text-text-sec/5 select-none pointer-events-none uppercase tracking-tighter leading-none">
        Works
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4 flex items-center gap-2">
              <Layers size={16} /> PORTFOLYO
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-text-main leading-none tracking-tighter">
              Seçkin <span className="text-primary">Projelerimiz</span>
            </h3>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 bg-bg-sec/50 p-2 rounded-2xl backdrop-blur-md border border-border-main">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                    : 'text-text-sec hover:text-primary hover:bg-bg-main'
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-bg-sec border border-border-main group-hover:border-primary/30 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Info Floating */}
                  <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-black text-white">{project.title}</h4>
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/40 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-bg-main/80 backdrop-blur-md border border-border-main rounded-full text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                    {project.category}
                  </div>
                </div>

                {/* Visible Info Below */}
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-text-main group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-sec text-sm font-medium mt-1 line-clamp-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-text-sec/20 font-black text-4xl select-none group-hover:text-primary/10 transition-colors">
                    0{index + 1}
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
