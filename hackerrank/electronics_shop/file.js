// DIRECTIONS: Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the 2 items, given her budget.
//
// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesnt have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

 // LINK https://www.hackerrank.com/challenges/electronics-shop/problem?fbclid=IwAR1Ibj-UwiN_L6qZfwroNEMOeVXMFHuZPI5KaBmh6DL3XMbKHDiTdTVAYYc

let b = 2
let keyboards = [2,4,20]
let drives = [2,3]

function getMoneySpent(keyboards, drives, b){
  let prices = []
  for(let i=0; i<keyboards.length; i++){
    for (let j=0; j<drives.length; j++){
      let price = keyboards[i] + drives[j]
      if (price <= b){
        prices.push(price)
      }
    }
  }
  if(prices.length == 0){
    return(-1)
  }
return(Math.max(...prices))
}
console.log(getMoneySpent(keyboards,drives,b))
