import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import Reveal from './Reveal';
import { ExternalLink, ChevronRight, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FormalProjects = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-primary mb-3 font-heading">
              {language === 'tr' ? 'REFERANSLARIMIZ' : 'OUR REFERENCES'}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-none tracking-tight font-heading">
              {language === 'tr' ? (
                <>Tamamlanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projelerimiz</span></>
              ) : (
                <>Our Completed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span></>
              )}
            </h3>
          </Reveal>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-bg-sec/30 border border-border-main/50 rounded-2xl p-6 hover:bg-bg-sec/50 transition-all duration-500 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[0.6rem] font-bold rounded uppercase tracking-wider">
                      {language === 'tr' ? project.category : project.categoryEn || project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[0.6rem] text-text-sec opacity-60 flex items-center gap-1">
                          <Tag size={8} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors font-heading mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-text-sec font-body line-clamp-2 opacity-80 max-w-3xl">
                    {language === 'tr' 
                      ? (project.description || project.solution) 
                      : (project.descriptionEn || project.solutionEn || project.description || project.solution)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[0.7rem] font-bold text-text-sec hover:text-primary transition-colors uppercase tracking-widest font-heading"
                    >
                      {language === 'tr' ? 'Canlı İzle' : 'View Live'} <ExternalLink size={12} />
                    </a>
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-3/4 transition-all duration-500 rounded-r" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormalProjects;
