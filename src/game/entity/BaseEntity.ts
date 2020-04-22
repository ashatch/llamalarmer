import "phaser";
import Scene = Phaser.Scene;
import {BaseController} from "./controller/BaseController";
import MainScene from "../../scene";
import {EmptyController} from "./controller/EmptyController";



export class BaseEntity {
    sprite: Phaser.GameObjects.Sprite;
    controller: BaseController;
    friction = true;
    physicsDirty = false;
    scene: MainScene;

    constructor(scene: MainScene, sprite : string, x: number, y: number, controller: BaseController = new EmptyController(scene)) {
        const configSprite = scene.physics.add.sprite(x, y, sprite);
        this.scene = scene;
        configSprite.setBounce(0.8, 0.8).setCollideWorldBounds(true)

        this.sprite = configSprite;
        this.sprite.setScale(2,2);
        if (controller != null) {
            this.controller = controller
            controller.bind(this)
        }
        scene.addNewEntity(this)
    }




    update(delta: number, scene: Scene) {

        this.physicsDirty = false;
        if(this.controller != null) {
            this.controller.update()
        }
        if(this.friction && !this.physicsDirty) {
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.9;
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.9;

            if(this.sprite.body.velocity.x < 0.001) {
                this.sprite.body.velocity.x = 0
            }
            if(this.sprite.body.velocity.y < 0.001) {
                this.sprite.body.velocity.y = 0
            }
        }
    }

    onOverlap() {

    }

    destroy() {

    }
}
