import BaseScene from './BaseScene';
import { GameSceneConfig } from '../../types';

export default class KindergartenScene extends BaseScene {
  constructor() {
    const config: GameSceneConfig = {
      key: 'KindergartenScene',
      nextScene: 'SchoolScene',
      playerStartX: 100,
      playerStartY: 300,
      characterSprite: 'kindergarten',
      mapTitle: 'Kindergarten & Elementary School',
      interactionPoints: [
        {
          x: 200,
          y: 200,
          text: "제 유년시절입니다! 보드게임을 좋아했다고 해요!"
        },
        {
          x: 400,
          y: 350,
          text: "초등학교 땐, 축구, 피아노, 수영, 바둑 다양한 것을 배우며 활발한 성격으로 자랐어요!"
        },
        {
          x: 600,
          y: 250,
          text: "오른쪽으로 이동해서 제 다음 이야기를 확인해봐요! 고등학교로 가볼까요?"
        }
      ]
    };
    
    super('KindergartenScene', config);
  }

  create() {
    // Call parent create method
    super.create();
    
    // Add some simple decorations to represent a kindergarten/school
    const desks = [
      { x: 200, y: 150 },
      { x: 250, y: 150 },
      { x: 200, y: 200 },
      { x: 250, y: 200 },
      { x: 400, y: 150 },
      { x: 450, y: 150 },
      { x: 400, y: 200 },
      { x: 450, y: 200 }
    ];
    
    desks.forEach(pos => {
      this.add.rectangle(pos.x, pos.y, 30, 20, 0x14b8a6, 0.4).setStrokeStyle(1, 0x14b8a6);
    });
    
    // Teacher's desk
    this.add.rectangle(320, 100, 60, 30, 0x6366f1, 0.4).setStrokeStyle(2, 0x6366f1);
    
    // Playground area
    this.add.circle(500, 400, 80, 0xf97316, 0.2).setStrokeStyle(2, 0xf97316);
    
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