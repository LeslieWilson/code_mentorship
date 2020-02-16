// DIRECTIONS:Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// LINK TO FULL DIRECTIONS:https://www.hackerrank.com/challenges/diagonal-difference/problem

let arr=[[1,2,3], [4,5,6], [9,8,9]]

function diagonalDifference(arr){
 let indexAdded = 0
 let indexSubtracted = arr.length - 1
 let left = 0
 let right = 0


  for(let i = 0; i < arr.length; i++ ){
    let leftMatrices = arr[i][indexAdded]
    indexAdded += 1
    left += leftMatrices

    let rightMatrices = arr[i][indexSubtracted]
    indexSubtracted -= 1
    right += rightMatrices

  }
  let difference = left - right
  return(Math.abs(difference))
  }



console.log(diagonalDifference(arr))
