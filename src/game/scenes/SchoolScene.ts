import BaseScene from './BaseScene';
import { GameSceneConfig } from '../../types';

export default class SchoolScene extends BaseScene {
  constructor() {
    const config: GameSceneConfig = {
      key: 'SchoolScene',
      nextScene: 'UniversityScene',
      playerStartX: 100,
      playerStartY: 300,
      characterSprite: 'school',
      mapTitle: 'Middle & High School',
      interactionPoints: [
        {
          x: 200,
          y: 250,
          text: "중등학교 시절입니다! 축구를 잘 했고, 게임도 즐기고, 친구들과 함께하는 시간을 소중히 여겼어요!"
        },
        {
          x: 400,
          y: 200,
          text: "리더쉽이 있어 매년 반장, 부반장을 항상 맡았어요!"
        },
        {
          x: 600,
          y: 350,
          text: "공부를 소홀히 하지 않았고, 수학과 경제, 그리고 교육에 관심이 많아 동아리 활동으로 멘토링 활동 등 다양한 활동을 했어요!"
        },
        {
          x: 700,
          y: 250,
          text: "오른쪽으로 이동해서 제 다음 이야기를 확인해봐요! 대학교로 가볼까요?"
        }
      ]
    };
    
    super('SchoolScene', config);
  }

  create() {
    // Call parent create method
    super.create();
    
    // Add some simple decorations to represent a school environment
    // Computer lab
    this.add.rectangle(250, 150, 200, 100, 0x6366f1, 0.2).setStrokeStyle(2, 0x6366f1);
    
    // Computers
    for (let x = 180; x <= 320; x += 35) {
      this.add.rectangle(x, 130, 25, 20, 0x14b8a6, 0.4).setStrokeStyle(1, 0x14b8a6);
    }
    
    // Library area
    this.add.rectangle(500, 200, 150, 120, 0xf97316, 0.2).setStrokeStyle(2, 0xf97316);
    
    // Books
    for (let y = 160; y <= 240; y += 20) {
      this.add.rectangle(470, y, 80, 10, 0xf97316, 0.4).setStrokeStyle(1, 0xf97316);
    }
    
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