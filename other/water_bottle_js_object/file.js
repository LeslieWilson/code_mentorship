// directions: make a water bottle object - initializes with an integer that is an amount of water - has a method to drink water that removes water from the amount and a method to add water. for the drink and add methods they take a number you're either going to drink or add


class WaterBottle{
  constructor(waterAmt){
    this.waterAmt = waterAmt

}
  drinkWater(num){
    let drank = this.waterAmt-num
    this.waterAmt = drank
    return(`you now have ${drank} liters of water`)
  }


  addWater(num2){
    let added = this.waterAmt + num2
    this.waterAmt = added
    return(`you now have ${added} liters of water`)
  }
}

const waterStatus = new WaterBottle(10)
console.log(waterStatus.waterAmt)

console.log(waterStatus.addWater(4))
console.log(waterStatus.waterAmt)

console.log(waterStatus.drinkWater(2))
console.log(waterStatus.waterAmt)
