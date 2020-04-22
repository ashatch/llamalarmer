import {BaseController} from "./BaseController";
import Scene = Phaser.Scene;


export class PlayerController extends BaseController {
    private up: Phaser.Input.Keyboard.Key;
    private left: Phaser.Input.Keyboard.Key;
    private down: Phaser.Input.Keyboard.Key;
    private right: Phaser.Input.Keyboard.Key;

    constructor(scene: Scene) {
        super(scene);
        this.up = scene.input.keyboard.addKey('W');
        this.left = scene.input.keyboard.addKey('A');
        this.down = scene.input.keyboard.addKey('S');
        this.right = scene.input.keyboard.addKey('D');

    }

    update() {

        if(this.entity != undefined) {
            if (this.up.isDown) {
                this.entity.sprite.body.velocity.y += -1
                this.entity.physicsDirty = true;

            } else if (this.left.isDown) {
                this.entity.sprite.body.velocity.x += -1
                this.entity.physicsDirty = true;

            } else if (this.right.isDown) {
                this.entity.sprite.body.velocity.x += 1
                this.entity.physicsDirty = true;



            } else if (this.down.isDown) {
                this.entity.sprite.body.velocity.y += 1
                this.entity.physicsDirty = true;

            }
        }
    }

    collisionCallback(entity1, entity2, scene) {
        scene.add.text(entity1.sprite.x, entity1.sprite.y, "Angry Llama noises", {
            font: "18px monospace",
            fill: "#000000",
            padding: {x: 20, y: 10},
            backgroundColor: "#ffffff"
        })
            .setScrollFactor(0);
    }


}