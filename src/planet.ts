import { Vector3 } from 'three';
import { Location } from './location';
import SolarSystem from './solar-system';

export default class Planet {
    position: Vector3;
    orientation: Vector3;
    rotationDuration: number;
    solarSystem: SolarSystem;
    zeroCoordinate: Vector3;

    constructor(
        position = new Vector3(),
        orientation = new Vector3(0, 0, 1),
        rotationDuration = 0,
        solarSystem: SolarSystem,
    ) {
        this.position = position;
        this.orientation = this.isValidOrientation(orientation);
        this.rotationDuration = rotationDuration;
        this.solarSystem = solarSystem;
        this.zeroCoordinate = new Vector3(1, 0, 0);
    }

    isValidOrientation(orientation: Vector3): Vector3 {
        if (orientation.length() === 0) throw new Error('Orientation cannot be 0 vector');

        return orientation.normalize();
    }

    perceivedBrightness(location: Location): number {
        const toStar = this.solarSystem.star.position.clone().sub(this.position);

        const locationVector = this.solarSystemReferencedLocation(location);

        const brightnessVector = toStar.clone().projectOnVector(locationVector).length();

        return brightnessVector / toStar.length();
    }

    solarSystemReferencedLocation(location: Location): Vector3 {
        // TODO: translate location (long, lat) to vector.
        // Take in account that planet is "slanted" by this.orientation and
        // the relative zero coordinate is at this.zeroCoordinate (vector).
        return new Vector3();
    }
}
