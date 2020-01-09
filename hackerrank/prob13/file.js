// Link: https://www.hackerrank.com/challenges/bon-appetit/problem?fbclid=IwAR1hLWMxFsLNimjODjoIVly8Ka__WYb9Ef6PXfm6zz8SNeDrlgLiFkrM77U
//
// Directions: Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

let bill=[10,3,5,7]

function bonAppetit(bill, k, b){
  let sum = 0
bill.forEach(function(number){
  if(bill[k] != number){
    sum += number
    }
  })
  let owed = b-(sum/2)
  if(owed == 0){
    console.log('Bon Apetite')
  }
  return owed
}
console.log(bonAppetit(bill,2,14))
