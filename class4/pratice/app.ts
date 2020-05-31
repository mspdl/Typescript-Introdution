import { Animal, Fish, GoldFish } from "./animal";

function getEyesQuantity(): number {
    return Math.floor(Math.random() * (8 - 2 + 1)) + 2
}

let maggie = new Animal('Maggie', 'Dog', getEyesQuantity())
console.log(`There's ${maggie.name}! It's a ${maggie.race}.`)
maggie.eyesQuantity()

let goldy = new GoldFish();
goldy.eyesQuantity()