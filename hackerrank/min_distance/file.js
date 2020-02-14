// DIRECTIONS: We define the distance between two array values as the number of indices between the two values. Given a , find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.
 // LINK:https://www.hackerrank.com/challenges/minimum-distances/problem?fbclid=IwAR3v8GttUXwML7R4LIkIr4tnnycTRHBB6MUIIp6eZGLoHIIwfh6tWltxgI0

a = [3,7,1,7,0]

 function minimumDistances(a) {
   let array = []
    for(let i = 0; i< a.length; i++){
      for(let j = i+1; j< a.length; j++){
        if (a[i] == a[j]){
          sum = j-i
          array.push(sum)
        }
        }
      }
      let least
      if(array.length == 0){
        least = -1
      }else{
        least = Math.min(...array)
      }
      return least
 }

 console.log(minimumDistances(a))
