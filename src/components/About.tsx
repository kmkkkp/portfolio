import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import { Heart, Brain, Clock, Users, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "동글동글한 사람",
      description: "누구와도 잘 지내며, 모난 데 없으며, 부드럽습니다."
    },
    {
      icon: <Brain className="text-primary" size={24} />,
      title: "문제해결력",
      description: "작은 문제도 먼저 발견하고, 미리 해결하려 노력합니다."
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "준비성",
      description: "항상 미리 준비하고, 기한에 급하게 쫓기지 않도록 합니다."
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "추진력과 책임감의 균형",
      description: "빠르게 움직이면서도, 책임감 있게 일을 처리합니다."
    },
    {
      icon: <MessageCircle className="text-primary" size={24} />,
      title: "진정성 있는 소통력",
      description: "진정성 있고, 사려깊고 솔직한 소통을 통해 신뢰를 쌓습니다."
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="card hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;