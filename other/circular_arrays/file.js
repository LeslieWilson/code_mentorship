
//
//
// DIRECTIONS function that takes an array and a number, go through the array and subtract from the input number each number in the array. stop when the number gets to zero or below. Tell me what index of the array you land on when the number gets to zero or below.



function circular(arr, n){
  let index = 0
  while(n>0){
    for(i=0; i <arr.length; i++){
      if (n <= 0){
        break
      }
        n -= arr[i]
        index = i
    }
  }
  return index
}

arr = [1,2,3,5]
console.log(circular(arr,3))
