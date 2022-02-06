import Planet from './planet';
import Star from './star';

export default class SolarSystem {
    t: number;
    dt: number;
    planets: Planet[];
    star: Star;

    constructor(t = 0, dt = 1 / 24, planets = [], star: Star) {
        this.t = t;
        this.dt = this.validDt(dt);
        this.planets = planets;
        this.star = star;
    }

    validDt(dt: number): number {
        if (dt <= 0) throw new Error('dt has to be positive');

        return dt;
    }

    addPlanet(planet: Planet): void {
        this.planets.push(planet);
    }
}
