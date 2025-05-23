import React from 'react';
import { X } from 'lucide-react';
import { TechDetails } from '../../types';

interface TechModalProps {
  tech: TechDetails;
  onClose: () => void;
}

const TechModal: React.FC<TechModalProps> = ({ tech, onClose }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl p-6 max-w-lg w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-semibold mb-4">{tech.name}</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-2">Experience Level</h4>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2"
                style={{ width: `${tech.experienceLevel}%` }}
              />
            </div>
            <p className="text-text-secondary mt-2">
              {tech.yearsOfExperience} years of experience
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Key Skills</h4>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              {tech.keySkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {tech.projects && (
            <div>
              <h4 className="text-lg font-medium mb-2">Notable Projects</h4>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                {tech.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechModal;