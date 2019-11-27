import "phaser";

import {BaseEntity} from "./game/entity/BaseEntity";
import {PlayerController} from "./game/entity/controller/PlayerController";

export default class MainScene extends Phaser.Scene {
    entities: BaseEntity[] = [];

    preload() {
        this.load.image('player', '../assets/llama-001.png');
        window["scene"] = this;
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 600);
        this.entities.push(new BaseEntity(this, "player", 200, 200, new PlayerController(this)));
        this.entities.push(new BaseEntity(this, "player", 400, 400));

        this.add
            .text(16, 16, "Llamalarmer wakes...", {
                font: "18px monospace",
                fill: "#000000",
                padding: {x: 20, y: 10},
                backgroundColor: "#ffffff"
            })
            .setScrollFactor(0);
    }

    update(time: number, delta: number) {
        for (const entity of this.entities) {
            entity.update(delta, this)
            for (const entity2 of this.entities) {
                if (entity2 !== entity) {
                    this.physics.collide(entity.sprite, entity2.sprite);
                }
            }
        }
    }

    addNewEntity(entity) {
        for (const entity2 of this.entities) {
            if (entity2 !== entity) {
                this.physics.add.collider(entity.sprite, entity2.sprite,physicsCallback, null, {
                    scene: this,
                    entity: entity,
                    entity2: entity2,
                });
            }
        }
    }
}

function physicsCallback(entity, entity2) {
console.log("collider hook call")
    this.entity.controller.collisionCallback(this.entity, this.entity2, this.scene)
    this.entity2.controller.collisionCallback(this.entity2, this.entity, this.scene)
}
