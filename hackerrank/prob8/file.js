//Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?fbclid=IwAR27WaiTEV8vJ9-6NiM-g6geeWcTDZDl3udZCYfDsA7bqXrMfJy_rf35iUs
// Directions: make function that takes an array of candle heights, checks for repeating largest numbers, prints the amount of these largest numbers. This represents the number of candles that can be blown out by your neice(she can only blow out the tallest ones)



let ar = [2,3,3,4,4]

function birthdayCakeCandles(ar){
  let largest = Math.max(...ar)
  let sum = 0
  ar.forEach(function(item){
  if (item === largest){
    sum += 1

  }

  })
    console.log(sum)
}
birthdayCakeCandles(ar)
