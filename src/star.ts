import { Vector3 } from 'three';

export default class Star {
    brightness: number;
    position: Vector3;

    constructor(brightness = 1, position = new Vector3()) {
        // TODO: default unit for brightness
        this.brightness = 1;
        this.position = position;
    }
}
