import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import GameInstructions from './game/GameInstructions';
import { initGame } from '../game/initGame';

const GameSection: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameInitializedRef = useRef(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !gameInitializedRef.current && gameContainerRef.current) {
      // Small delay to ensure container is ready
      const timer = setTimeout(() => {
        gameInitializedRef.current = true;
        initGame(gameContainerRef.current!);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section 
      id="game" 
      ref={ref}
      className={`py-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <SectionTitle>My Life Journey</SectionTitle>
      
      <div className="mb-8">
        <p className="text-text-secondary mb-4">
          제 인생의 여정을 상호작용 게임으로 해봐요! 화살표 키로 이동하고, 스페이스바로 npc와 이야기해봐요!
        </p>
        
        <GameInstructions />
      </div>
      
      <div 
        ref={gameContainerRef} 
        className="w-full h-[500px] bg-surface rounded-xl shadow-lg overflow-hidden relative"
      >
        {!inView && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-text-muted">Loading game...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameSection;