import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExperienceItem } from '../../types';

interface TimelineItemProps {
  data: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row ${
        isEven ? 'md:flex-row-reverse' : ''
      } items-start`}
    >
      <div className="hidden md:block w-1/2"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/30 transform -translate-x-1/2 z-10"></div>
      
      {/* Content */}
      <div 
        className={`md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'} ${
          inView ? 'animate-slide-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="card">
          <span className="text-sm font-mono text-primary-light mb-1 block">
            {data.period}
          </span>
          <h3 className="text-xl font-semibold mb-1">{data.title}</h3>
          <h4 className="text-lg text-text-secondary mb-3">{data.organization}</h4>
          <p className="text-text-secondary">{data.description}</p>
          
          {data.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span 
                  key={skill}
                  className="text-xs bg-primary/20 text-primary-light px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;