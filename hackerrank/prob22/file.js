// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
// For example, there are n =3  sticks of lengths arr=[1,2,3]. The shortest stick length is 1 , so we cut that length from the longer two and discard the pieces of length 1 . Now our lengths are arr = [1,2] . Again, the shortest stick is of length 1, so we cut that amount from the longer stick and discard those pieces. There is only one stick left,arr = [1] , so we discard that stick. Our lengths are .
// array being passed are the sticklengths, take the smallest of the sticklengths subtract it from all the other lengths, have a count of how many sticks you have left each time.

// FULL DIRECTIONS LINK:https://www.hackerrank.com/challenges/cut-the-sticks/problem?fbclid=IwAR0RKpERnE1pc1o0ZPuUqAOhhT8hApR2htElnvwu2oB17RxI1lq41AY7TbU

arr = [5,4,4,2,2,8]
function cutTheSticks(arr) {

  let least = Math.min(...arr)
while(arr.length != 0){
let newLeast = []
for (let i = 0; i<arr.length; i++){
  if(arr[i] - least != 0){
newLeast.push(arr[i] - least)
 console.log(newLeast)
    }

  }

let sticksLeft = newLeast.length
console.log(sticksLeft)
}
}

console.log(cutTheSticks(arr))
