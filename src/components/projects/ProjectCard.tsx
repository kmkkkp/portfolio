import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`card overflow-hidden flex flex-col ${
        inView ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {project.image && (
        <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
      )}
      
      <div className="flex items-center gap-2 text-sm text-primary mb-2">
        <Calendar size={16} />
        <span>{project.period}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-text-secondary mb-4">{project.description}</p>
      
      {project.technologies && (
        <div className="mt-auto pt-4 flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs bg-surface-light px-3 py-1 rounded-full border border-text-muted/20"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex gap-4">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
        
        {project.repoUrl && (
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard