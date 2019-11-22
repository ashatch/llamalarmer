import "phaser";

export default class Switch {
  sprite: Phaser.GameObjects.Sprite;
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    scene.anims.create({
      key: "switch-up-and-down",
      frames: scene.anims.generateFrameNumbers("switch", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: -1
    });


    this.sprite = scene.add.sprite(x, y, 'switch');
    this.sprite.setScale(2,2);
  }

  update() {
    this.sprite.anims.play("switch-up-and-down", true);
  }

  destroy() {
  }
}
