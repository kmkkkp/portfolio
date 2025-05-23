import Phaser from 'phaser';

export default class UIScene extends Phaser.Scene {
  private dialogBox!: Phaser.GameObjects.Rectangle;
  private dialogText!: Phaser.GameObjects.Text;
  private closeText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'UIScene', active: true });
  }

  create() {
    // Create invisible dialog elements (will show when needed)
    this.createDialogBox();
    
    // Listen for events from the game scenes
    this.listenToEvents();
  }

  private createDialogBox() {
    const width = this.scale.width;
    const height = this.scale.height;
    
    // Dialog background
    this.dialogBox = this.add.rectangle(
      width / 2,
      height - 100,
      width * 0.8,
      160,
      0x0f0f14,
      0.9
    );
    this.dialogBox.setStrokeStyle(2, 0x6366f1);
    this.dialogBox.setVisible(false);
    
    // Dialog text
    this.dialogText = this.add.text(
      width / 2 - (width * 0.8 - 40) / 2,
      height - 160,
      '',
      {
        fontFamily: 'monospace',
        fontSize: '16px',
        color: '#f8fafc',
        wordWrap: { width: width * 0.8 - 40 }
      }
    );
    this.dialogText.setVisible(false);
    
    // Close instruction
    this.closeText = this.add.text(
      width / 2,
      height - 40,
      'Press SPACE to close',
      {
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#cbd5e1'
      }
    );
    this.closeText.setOrigin(0.5);
    this.closeText.setVisible(false);
  }

  private listenToEvents() {
    // Listen for dialog events from other scenes
    this.game.events.on('dialog', this.showDialog, this);
    this.game.events.on('dialog-close', this.hideDialog, this);
    
    // Resize event
    this.scale.on('resize', this.resize, this);
  }

  private showDialog(text: string) {
    // Show dialog box with the given text
    this.dialogBox.setVisible(true);
    this.dialogText.setText(text);
    this.dialogText.setVisible(true);
    this.closeText.setVisible(true);
    
    // Add a small typing effect
    const fullText = text;
    this.dialogText.setText('');
    
    let i = 0;
    this.time.addEvent({
      callback: () => {
        this.dialogText.text += fullText[i] || '';
        i++;
      },
      repeat: fullText.length - 1,
      delay: 20
    });
  }

  private hideDialog() {
    this.dialogBox.setVisible(false);
    this.dialogText.setVisible(false);
    this.closeText.setVisible(false);
  }

  private resize(gameSize: Phaser.Structs.Size) {
    const width = gameSize.width;
    const height = gameSize.height;
    
    // Update dialog box position and size
    this.dialogBox.setPosition(width / 2, height - 100);
    this.dialogBox.setSize(width * 0.8, 160);
    
    // Update text positions
    this.dialogText.setPosition(width / 2 - (width * 0.8 - 40) / 2, height - 160);
    this.dialogText.setWordWrapWidth(width * 0.8 - 40);
    this.closeText.setPosition(width / 2, height - 40);
  }
}