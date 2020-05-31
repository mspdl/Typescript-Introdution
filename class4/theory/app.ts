import { Spacecraft, ContainerShip } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let mf = new MillenniumFalcon()
mf.jumpIntoHyperspace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(mf) ? 'yes' : 'no'}`)