import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import TechCategory from './tech/TechCategory';
import { 
  frontendTech, 
  backendTech, 
  devOpsTech,
  collaborationTech 
} from '../data/techStackData';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="tech-stack" 
      ref={ref}
      className={`py-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <SectionTitle>Tech Stack</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TechCategory 
          title="Frontend" 
          technologies={frontendTech}
          delay={0}
        />
        
        <TechCategory 
          title="Backend" 
          technologies={backendTech}
          delay={200}
        />
        
        <TechCategory 
          title="DevOps" 
          technologies={devOpsTech}
          delay={400}
        />
        
        <TechCategory 
          title="Collaboration" 
          technologies={collaborationTech}
          delay={600}
        />
      </div>
    </section>
  );
};

export default TechStack;