import "phaser";

import Player from "./player";

export default class MainScene extends Phaser.Scene {
  player: Player;

  preload() {
    this.load.image('player', '../assets/llama-001.png');
  }

  create() {
    this.player = new Player(this, 200, 200);

    this.add
      .text(16, 16, "Llamalarmer wakes...", {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#ffffff"
      })
      .setScrollFactor(0);
  }

  update(time: number, delta: number) {
    this.player.update();
  }
}
