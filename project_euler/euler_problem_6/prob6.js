// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


function sum_of_squares(){
  sum_of_squares =  0
  for (i = 0; i < 101; i++){
    squares = i * i
    sum_of_squares += squares
  }
  return sum_of_squares
}

function squared_sums(){
  sum = 0
    for  (i = 0; i < 101;i++){
      sum += i
      squared_sums = sum*sum
    }
  return squared_sums
}

difference = (squared_sums() - sum_of_squares())
console.log(difference)
