import BaseScene from './BaseScene';
import { GameSceneConfig } from '../../types';

export default class HomeScene extends BaseScene {
  constructor() {
    const config: GameSceneConfig = {
      key: 'HomeScene',
      nextScene: 'KindergartenScene',
      playerStartX: 100,
      playerStartY: 300,
      characterSprite: 'baby',
      mapTitle: 'Home (Childhood)',
      interactionPoints: [
        {
          x: 200,
          y: 200,
          text: "제 이야기의 시작이에요! 대구에서 태어나, 말을 늦게 시작한 저는 궁금한 게 많았다고 해요!"
        },
        {
          x: 300,
          y: 400,
          text: "차에 타면 잠을 잘자고, 2002년 월드컵에 응원을 우렁차게 했다고 하네요!"
        },
        {
          x: 600,
          y: 300,
          text: "오른쪽으로 이동해서 제 다음 이야기를 확인해봐요! 유치원과 초등학교 시절로 가볼까요?"
        }
      ]
    };
    
    super('HomeScene', config);
  }

  preload() {
    // Preload assets if needed
    // In a real implementation, you would load tilemap, sprites, etc.
  }

  create() {
    // Call parent create method
    super.create();
    
    // Add some simple decorations to represent a home
    this.add.rectangle(400, 100, 200, 150, 0x14b8a6, 0.3).setStrokeStyle(2, 0x14b8a6);
    this.add.rectangle(600, 400, 150, 100, 0x6366f1, 0.3).setStrokeStyle(2, 0x6366f1);
    this.add.rectangle(200, 350, 120, 120, 0xf97316, 0.3).setStrokeStyle(2, 0xf97316);
    
    // Add an arrow pointing to the next scene
    const arrow = this.add.triangle(750, 300, 0, -15, 20, 0, 0, 15, 0xf97316);
    this.tweens.add({
      targets: arrow,
      x: 770,
      duration: 500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}