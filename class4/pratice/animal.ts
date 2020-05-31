class Animal {
    constructor(public name: string, public race: string, public eyes: number) { }

    eyesQuantity() {
        let message = `${this.name} has ${this.eyes} eyes.`
        if(this.eyes != 2){
            message += ` ${this.eyes} eyes??? That's weird.`
        }
        console.log(message)
    }
}

interface Fish {
    flippers: number
    isShark?: boolean
}

class GoldFish extends Animal implements Fish {

    flippers: number

    constructor() {
        super("Gold Fish", "Fish", 2),
            this.flippers = 5;
    }
}

export { Animal, Fish, GoldFish }