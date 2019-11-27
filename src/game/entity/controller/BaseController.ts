import {BaseEntity} from "../BaseEntity";
import Scene = Phaser.Scene;


export abstract class BaseController {
    scene: Scene;
    constructor(scene: Scene) {
        this.scene = scene;
    }

    entity: BaseEntity

    abstract update()

    bind(entity: BaseEntity) {
        this.entity = entity;
    }

   abstract collisionCallback(entity1, entity2, scene);


}