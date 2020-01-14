// DESCRIPTION: Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to 1.
//
// Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created. pickingNumbers has the following parameter(s):
// a: an array of integers
//
// LINK TO FULL DESCRIPTION:https://www.hackerrank.com/challenges/picking-numbers/problem?fbclid=IwAR1w_Jf5SO4NdkL6_RiYfQQh6DTJxcdjk7ZiSUvatZ7lf3z1N5WUVDODALk

let a = [1,1,2,2,4,4,5,5,5]

function pickingNumbers(a) {
let array = []
let greatestArray = []
  for(let i=0; i<a.length;i++){
    let array = []
      for(let j=0; j<a.length; j++){
        let difference = Math.abs(a[i] - a[j])
          if (difference <= 1){
            array.push(a[j])
          }
        }
if (array.length > greatestArray.length){
  greatestArray = array
}
      }
console.log(greatestArray.length)
}

console.log(pickingNumbers(a))
