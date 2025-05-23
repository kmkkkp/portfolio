import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <SectionTitle>Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;