import { Vector3 } from 'three';
import { Location } from './location';
import Planet from './planet';
import SolarSystem from './solar-system';
import Star from './star';

// Sun is reference. Plane with earth(?) is z=0 plane.
// Time in seconds
// Distance in meters
// Speed in meters / second

// Construct solar system
const sun = new Star(1);
const milkyway = new SolarSystem(0, 3600, [], sun);

const earth = new Planet(new Vector3(150e9, 0, 0), new Vector3(0, 0, 1), 86_160, milkyway);
milkyway.addPlanet(earth);

console.log(milkyway);

const netherlands: Location = {
    latitude: 52,
    longitude: 4,
};
const perceivedBrightness = earth.perceivedBrightness(netherlands);

console.log(perceivedBrightness);
