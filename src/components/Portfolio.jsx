import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';

const categories = ['Tümü', 'Web Geliştirme', 'Mobil Uygulama', 'UI/UX Tasarım'];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredProjects = activeCategory === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 bg-bg-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Projelerimiz</h2>
          <p className="text-text-sec max-w-2xl mx-auto transition-colors duration-300">
            Gururla geliştirdiğimiz bazı referans projelerimiz. Detayları görmek için projelere tıklayabilirsiniz.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-bg-sec text-text-sec border-border-main hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)}
                className="group bg-bg-card rounded-xl overflow-hidden border border-border-main hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-pointer shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-bg-main/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold px-2 py-1 bg-primary/90 text-white rounded-md uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-sec text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-bg-sec/50 text-text-main rounded border border-border-main">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] px-2 py-1 bg-bg-sec/50 text-text-main rounded border border-border-main">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Portfolio;
