// DESCRIPTION: Dan is playing a video game in which his character competes in a hurdle race. Hurdles are of varying heights, and Dan has a maximum height he can jump. There is a magic potion he can take that will increase his maximum height by  unit for each dose. How many doses of the potion must he take to be able to jump all of the hurdles.
//
// Given an array of hurdle heights,height, and an initial maximum height Dan can jump, k, determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.
//
// LINK FOR FULL DESCRIPTION:https://www.hackerrank.com/challenges/the-hurdle-race/problem?fbclid=IwAR1tSGl42GUs3X2WJWPbnUjcVVFloeKn-eu3BIKIvwlZhL01ntxe810yAJk


height = [1,1,1]

function hurdleRace(k, height) {
let maxHeight = (Math.max(...height))
let potionAmt = maxHeight -k
if(maxHeight > k){
  return potionAmt
}else{
    return 0
  }

}

console.log(hurdleRace(5,height))
