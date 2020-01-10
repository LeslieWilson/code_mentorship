// DIRECTIONS:Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight. You are given  queries in the form of X, Y, and Z  representing the respective positions for cats A and B, and C for mouse . Complete the function catandmouse to return the appropriate answer to each query, which will be printed on a new line.
// If cat  a catches the mouse first, print Cat A.
// If cat b catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// Sample Input 0
//
// 2
// 1 2 3
// 1 3 2
// Sample Output 0
//
// Cat B
// Mouse C

// Link:https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?fbclid=IwAR0HUzni8qwhxNDHwZnxYs-NJ0I8-wOy6n0PcI_TzYui9_k1hQysGOlfVSw

function catAndMouse(x,y,z){
  let xdifference = Math.abs(x-z)
  let ydifference = Math.abs(y-z)

  let result



  if(xdifference > ydifference){
    result = 'Cat A'
  }else if(xdifference === ydifference){
      result = 'Mouse C'
    }else{
    result = 'Cat B'
  }
  console.log(result)
}


console.log(catAndMouse(1,3,2))
console.log(catAndMouse(3,4,9))
