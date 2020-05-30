class Animal {
    constructor(public name: string, public race: string, public eyes: number) {}

    eyesQuantity(){
        console.log(`${this.name} has ${this.eyes} eyes.`)
    }
}

let maggie = new Animal('Maggie', 'Dog', 2)
console.log(`There's ${maggie.name}! It's a ${maggie.race}.`)
maggie.eyesQuantity()

interface Fish {
    flippers: number
    isShark?: boolean
}

class GoldFish extends Animal implements Fish {

    flippers: number

    constructor(){
        super("Gold Fish", "Fish", 2),
        this.flippers = 5;
    }
}

let goldy = new GoldFish();
goldy.eyesQuantity()