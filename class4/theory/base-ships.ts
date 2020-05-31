class Spacecraft {

    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}.`)
    }

}

interface ContainerShip {
    cargoContainers: number
    wings?: number
}

export { Spacecraft, ContainerShip }