import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import TimelineItem from './experience/TimelineItem';
import { experienceData } from '../data/experienceData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      ref={ref}
      className={`py-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <SectionTitle>Career & Education</SectionTitle>
      
      <div className="relative">
        {/* Timeline center line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-text-muted/30 transform md:translate-x-px"></div>
        
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <TimelineItem 
              key={index}
              data={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;