import Phaser from 'phaser';
import HomeScene from './scenes/HomeScene';
import KindergartenScene from './scenes/KindergartenScene';
import SchoolScene from './scenes/SchoolScene';
import UniversityScene from './scenes/UniversityScene';
import UIScene from './scenes/UIScene';

export const initGame = (parent: HTMLElement): Phaser.Game => {
  // Check if a game already exists on the parent element and destroy it
  const existingGame = parent.getAttribute('data-game-instance');
  if (existingGame) {
    const gameInstance = (window as any)[existingGame];
    if (gameInstance && typeof gameInstance.destroy === 'function') {
      gameInstance.destroy(true);
    }
  }

  // Create config
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent,
    width: parent.clientWidth,
    height: parent.clientHeight,
    backgroundColor: '#1a1a24',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: [HomeScene, KindergartenScene, SchoolScene, UniversityScene, UIScene],
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
  };

  // Create the game instance
  const game = new Phaser.Game(config);
  
  // Store a reference to the game on the window for cleanup
  const gameId = `phaserGame_${Date.now()}`;
  (window as any)[gameId] = game;
  parent.setAttribute('data-game-instance', gameId);
  
  // Handle window resize
  const resizeGame = () => {
    if (game.isRunning) {
      game.scale.resize(parent.clientWidth, parent.clientHeight);
    }
  };
  
  window.addEventListener('resize', resizeGame);
  
  // Add a cleanup handler to the game
  const originalDestroy = game.destroy;
  game.destroy = (removeCanvas?: boolean, noReturn?: boolean) => {
    window.removeEventListener('resize', resizeGame);
    delete (window as any)[gameId];
    return originalDestroy.call(game, removeCanvas, noReturn);
  };
  
  return game;
};