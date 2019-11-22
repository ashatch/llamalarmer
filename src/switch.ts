import "phaser";

export default class Switch {
  sprite: Phaser.GameObjects.Sprite;
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.sprite = scene.add.sprite(x, y, 'switch');
    this.sprite.setScale(2,2);
  }

  update() {
    
  }

  destroy() {
  }
}
