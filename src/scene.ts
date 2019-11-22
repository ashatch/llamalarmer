import "phaser";

import Player from "./player";
import Switch from "./switch";

export default class MainScene extends Phaser.Scene {
  player: Player;
  switch: Switch;

  preload() {
    this.load.image('player', '../assets/llama-001.png');
    this.load.spritesheet(
      "switch",
      "../assets/switch.png",
      {
        frameWidth: 32,
        frameHeight: 32,
        margin: 0,
        spacing: 0
      }
    );
    this.load.audio('soundtrack', '../assets/llamalarmer.mp3');
  }

  create() {
    this.player = new Player(this, 200, 200);
    this.switch = new Switch(this, 400, 200);

    this.add
      .text(16, 16, "Llamalarmer wakes...", {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#ffffff"
      })
      .setScrollFactor(0);

    this.sound.play('soundtrack');
  }

  update(time: number, delta: number) {
    this.player.update();
    this.switch.update();
  }
}
