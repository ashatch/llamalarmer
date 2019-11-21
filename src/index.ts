import MainScene from "./scene";

import "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  render: {
    pixelArt: true,
  },
  backgroundColor: "#1d212d",
  scene: MainScene
};

new Phaser.Game(config);     
