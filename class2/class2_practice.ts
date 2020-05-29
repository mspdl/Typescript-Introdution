// author: Morgan
// I created this code on my own

function bmiCalculator(height: number, weight: number): number {
    return weight / (height * height)
}

let myWeight = 110
let myHeight = 1.88
console.log(`A person with ${myWeight}kg and ${myHeight}m has a BMI = ${bmiCalculator(myHeight, myWeight)}`)

let whatIWantToEat = (food: string) => console.log(`Today, I want to eat ${food}!`)
whatIWantToEat('pasta')

let dollarPriceToday = 4.15

function calculateDolarPrice(dollarQuantity: number, dollarPrice : number = dollarPriceToday) : number{
    return dollarQuantity * dollarPrice;
}
let dollarAmount = 10
let dollarPriceSomeday = 3.07
console.log(`Today, $${dollarAmount} costs $${calculateDolarPrice(dollarAmount)}.`)
console.log(`When dollar price is $${dollarPriceSomeday}, $${dollarAmount} will cost $${calculateDolarPrice(dollarAmount, dollarPriceSomeday)}.`)