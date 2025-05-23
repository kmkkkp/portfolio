import BaseScene from './BaseScene';
import { GameSceneConfig } from '../../types';

export default class UniversityScene extends BaseScene {
  constructor() {
    const config: GameSceneConfig = {
      key: 'UniversityScene',
      playerStartX: 100,
      playerStartY: 300,
      characterSprite: 'university',
      mapTitle: 'University & Career',
      interactionPoints: [
        {
          x: 200,
          y: 200,
          text: "이제 대학교 시절이에요! 재수를 하고 차석 입학하며 사이버보안을 전공하며, 다양한 프로그래밍 언어와 기술을 배웠어요."
        },
        {
          x: 350,
          y: 300,
          text: "다양한 프로젝트, 해커톤, 대내활동을 통해 실력을 쌓았고, 특히 웹 개발에 흥미를 느꼈어요!"
        },
        {
          x: 500,
          y: 200,
          text: "여전히 친구들과 어울리는 걸 좋아해, 봉사동아리에 들어가 야학당 운영도 하고, 다양한 사람들과 소통하며 성장했어요."
        },
        {
          x: 650,
          y: 350,
          text: "인턴 경험도 하며, 실무에서의 경험을 쌓았고, 다양한 기술 스택을 익혔어요."
        },
        {
          x: 400,
          y: 450,
          text: "지금까지 제 이야기를 함께 해줘서 고마워요! 제 이야기를 마무리하며, 앞으로의 여정도 기대해 주세요!"
        }
      ]
    };
    
    super('UniversityScene', config);
  }

  create() {
    // Call parent create method
    super.create();
    
    // Add some simple decorations to represent a university and workplace environment
    // University building
    this.add.rectangle(200, 100, 150, 120, 0x6366f1, 0.2).setStrokeStyle(2, 0x6366f1);
    
    // Windows
    for (let x = 150; x <= 250; x += 30) {
      for (let y = 70; y <= 130; y += 30) {
        this.add.rectangle(x, y, 20, 20, 0x6366f1, 0.4).setStrokeStyle(1, 0x6366f1);
      }
    }
    
    // Office building
    this.add.rectangle(600, 150, 180, 140, 0x14b8a6, 0.2).setStrokeStyle(2, 0x14b8a6);
    
    // Windows
    for (let x = 540; x <= 660; x += 30) {
      for (let y = 100; y <= 200; y += 30) {
        this.add.rectangle(x, y, 20, 20, 0x14b8a6, 0.4).setStrokeStyle(1, 0x14b8a6);
      }
    }
    
    // Laptop workstation
    this.add.rectangle(400, 350, 60, 40, 0xf97316, 0.4).setStrokeStyle(2, 0xf97316);
    this.add.rectangle(400, 320, 40, 5, 0xf97316, 0.6);
    
    // End game message
    const completionText = this.add.text(400, 530, 'Journey Complete! Explore all interaction points!', {
      fontFamily: 'monospace',
      fontSize: '16px',
      color: '#f8fafc',
      backgroundColor: '#6366f1'
    });
    completionText.setPadding(8, 4, 8, 4);
    completionText.setOrigin(0.5);
    
    // Add pulsing effect
    this.tweens.add({
      targets: completionText,
      alpha: 0.6,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}