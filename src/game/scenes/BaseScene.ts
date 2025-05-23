import Phaser from 'phaser';
import { GameSceneConfig } from '../../types';

export default class BaseScene extends Phaser.Scene {
  protected player!: Phaser.Physics.Arcade.Sprite;
  protected cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  protected spaceKey!: Phaser.Input.Keyboard.Key;
  protected interactionZones: Phaser.GameObjects.Zone[] = [];
  protected activeInteraction: number | null = null;
  protected config: GameSceneConfig;
  protected playerSpeed = 500;
  protected canTransition = true;

  constructor(key: string, config: GameSceneConfig) {
    super(key);
    this.config = config;
  }

  create() {
    // Create simple background
    this.createBackground();
    
    // Create player
    this.createPlayer();
    
    // Set up input
    this.setupInput();
    
    // Create map title
    this.createMapTitle();
    
    // Create interaction zones
    this.createInteractionZones();
    
    // Setup camera to follow player
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setZoom(2);
  }

  update() {
    // Handle player movement
    this.handlePlayerMovement();
    
    // Handle scene transition
    this.handleSceneTransition();
    
    // Handle interaction
    this.handleInteraction();
  }

  private createBackground() {
    // Simple background with a grid pattern
    const bg = this.add.rectangle(0, 0, 800, 600, 0x1a1a24);
    bg.setOrigin(0);
    
    // Create a grid pattern
    const graphics = this.add.graphics();
    graphics.lineStyle(1, 0x6366f1, 0.1);
    
    // Vertical lines
    for (let x = 0; x <= 800; x += 32) {
      graphics.moveTo(x, 0);
      graphics.lineTo(x, 600);
    }
    
    // Horizontal lines
    for (let y = 0; y <= 600; y += 32) {
      graphics.moveTo(0, y);
      graphics.lineTo(800, y);
    }
    
    graphics.strokePath();
  }

  private createPlayer() {
    // Create a simple player character
    this.player = this.physics.add.sprite(
      this.config.playerStartX,
      this.config.playerStartY,
      'player'
    );
    
    // If sprite isn't loaded yet, create a placeholder
    if (!this.textures.exists('player')) {
      this.createPlayerPlaceholder();
    }
    
    // Set player properties
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0, 0, 800, 600);
  }

  private createPlayerPlaceholder() {
    const graphics = this.add.graphics();
    graphics.fillStyle(0x6366f1);
    graphics.fillRect(0, 0, 24, 32);
    graphics.generateTexture('player', 24, 32);
    graphics.destroy();
  }

  private setupInput() {
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    // Handle space key press
    this.spaceKey.on('down', () => {
      if (this.activeInteraction !== null) {
        const interaction = this.config.interactionPoints[this.activeInteraction];
        this.game.events.emit('dialog', interaction.text);
      } else {
        this.game.events.emit('dialog-close');
      }
    });
  }

  private createMapTitle() {
    // Add title text
    const titleText = this.add.text(400, 50, this.config.mapTitle, {
      fontFamily: 'monospace',
      fontSize: '20px',
      color: '#f8fafc',
      stroke: '#0f0f14',
      strokeThickness: 4
    });
    titleText.setOrigin(0.5);
    titleText.setScrollFactor(0);
  }

  private createInteractionZones() {
    // Create interaction zones based on config
    this.config.interactionPoints.forEach((point, index) => {
      // Create a visual indicator
      const indicator = this.add.circle(point.x, point.y, 8, 0x6366f1, 0.6);
      
      // Create an invisible zone for interaction
      const zone = this.add.zone(point.x, point.y, 48, 48);
      this.physics.world.enable(zone);
      this.interactionZones.push(zone);
      
      // Add overlap detection
      this.physics.add.overlap(
        this.player,
        zone,
        () => {
          this.activeInteraction = index;
          indicator.setFillStyle(0xf97316, 0.8);
        },
        undefined,
        this
      );
    });
  }

  private handlePlayerMovement() {
    // Reset velocity
    this.player.setVelocity(0);
    
    // Handle movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    }
    
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-this.playerSpeed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(this.playerSpeed);
    }
    
    // Normalize velocity for diagonal movement
    this.player.body.velocity.normalize().scale(this.playerSpeed);
  }

  private handleSceneTransition() {
    // Check if player reached the right edge of the scene
    if (this.player.x > 780 && this.canTransition && this.config.nextScene) {
      this.canTransition = false;
      
      // Add a fade transition
      this.cameras.main.fadeOut(500, 0, 0, 0, (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
        if (progress === 1) {
          this.scene.start(this.config.nextScene!);
        }
      });
    }
  }

  private handleInteraction() {
    // Reset active interaction if player is not overlapping any zone
    let isOverlapping = false;
    
    this.interactionZones.forEach((zone, index) => {
      const bounds = zone.getBounds();
      const playerBounds = this.player.getBounds();
      
      if (Phaser.Geom.Rectangle.Overlaps(bounds, playerBounds)) {
        isOverlapping = true;
        this.activeInteraction = index;
      }
    });
    
    if (!isOverlapping) {
      this.activeInteraction = null;
      
      // Reset all indicators
      this.config.interactionPoints.forEach((point, index) => {
        const indicator = this.children.getAt(index + 3); // +3 because of background, grid and player
        if (indicator && indicator instanceof Phaser.GameObjects.Arc) {
          indicator.setFillStyle(0x6366f1, 0.6);
        }
      });
    }
    
    // Show/hide interaction hint
    const interactionHint = this.add.text(
      this.player.x,
      this.player.y - 30,
      'Press SPACE',
      {
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#f8fafc',
        backgroundColor: '#6366f1'
      }
    );
    interactionHint.setOrigin(0.5);
    interactionHint.setPadding(4, 2, 4, 2);
    interactionHint.setVisible(this.activeInteraction !== null);
    
    // Clean up the previous hint if it exists
    const previousHint = this.children.getByName('interactionHint');
    if (previousHint) previousHint.destroy();
    
    interactionHint.setName('interactionHint');
  }
}