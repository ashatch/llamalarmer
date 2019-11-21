import "phaser";

export default class Player {
  sprite: Phaser.GameObjects.Sprite;
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.sprite = scene.add.sprite(x, y, 'player');
    this.sprite.setScale(2,2);
  }

  update() {
    
  }

  destroy() {
  }
}
