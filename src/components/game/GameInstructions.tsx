import React, { useState } from 'react';
import { KeySquare, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Space } from 'lucide-react';

const GameInstructions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card mb-6">
      <button 
        className="flex items-center gap-2 w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <KeySquare size={20} className="text-primary" />
        <span className="font-medium">Game Controls</span>
        <ArrowRight 
          size={16} 
          className={`ml-auto transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
        />
      </button>
      
      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-8 flex items-center justify-center bg-surface-light rounded border border-text-muted/20">
                <ArrowUp size={16} />
              </div>
            </div>
            <span className="text-text-secondary">Move Up</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-8 flex items-center justify-center bg-surface-light rounded border border-text-muted/20">
                <ArrowDown size={16} />
              </div>
            </div>
            <span className="text-text-secondary">Move Down</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-8 flex items-center justify-center bg-surface-light rounded border border-text-muted/20">
                <ArrowLeft size={16} />
              </div>
            </div>
            <span className="text-text-secondary">Move Left</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-8 flex items-center justify-center bg-surface-light rounded border border-text-muted/20">
                <ArrowRight size={16} />
              </div>
            </div>
            <span className="text-text-secondary">Move Right</span>
          </div>
          
          <div className="flex items-center gap-3 sm:col-span-2">
            <div className="flex gap-1">
              <div className="w-20 h-8 flex items-center justify-center bg-surface-light rounded border border-text-muted/20">
                <Space size={16} />
              </div>
            </div>
            <span className="text-text-secondary">Interact with objects</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameInstructions;