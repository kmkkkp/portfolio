import React from 'react';
import { ArrowDown, FileDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <header id="home" className="min-h-screen flex flex-col justify-center relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 15, 20, 0) 70%)',
        }}
      ></div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 z-10 ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <h2 className="text-xl sm:text-3xl font-light text-primary mb-2">안녕하세요, 풀스택 개발자</h2>
        <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold mb-6">
          김민규 <span className="text-xl sm:text-3xl font-light text-primary mb-2">입니다</span>
        </h1>
        <p className="text-2xl sm:text-3xl font-light text-text-secondary mb-8 max-w-2xl">
          저는 소프트웨어 엔지니어로서, 다양한 기술 스택을 활용하여 문제를 해결하고, 
          사용자 경험을 향상시키는 데 열정을 가지고 있습니다. 
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#tech-stack" 
            className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors"
          >
            제가 궁금하다면?
          </a>
          <a 
            href="/resume.pdf" 
            download
            className="flex items-center gap-2 border border-text-secondary hover:border-primary px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FileDown size={20} />
            CV 다운로드
          </a>
          <a 
            href="#contact" 
            className="border border-text-secondary hover:border-primary px-6 py-3 rounded-lg font-medium transition-colors"
          >
            연락방법
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </header>
  );
};

export default Header;