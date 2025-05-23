import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TechDetails } from '../../types';
import TechModal from './TechModal';

interface TechCategoryProps {
  title: string;
  technologies: TechDetails[];
  delay: number;
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, technologies, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTech, setSelectedTech] = useState<TechDetails | null>(null);

  return (
    <>
      <div 
        ref={ref}
        className={`card ${inView ? 'animate-slide-up' : 'opacity-0'}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <button 
              key={tech.name} 
              onClick={() => setSelectedTech(tech)}
              className="flex flex-col items-center gap-2 p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors"
            >
              <div className="text-3xl">{tech.icon}</div>
              <span className="text-sm text-text-secondary">{tech.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedTech && (
        <TechModal 
          tech={selectedTech} 
          onClose={() => setSelectedTech(null)} 
        />
      )}
    </>
  );
};

export default TechCategory;