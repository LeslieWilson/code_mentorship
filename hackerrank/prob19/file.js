// DIRECTIONS:// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12 , its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
// Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  i - (reverse i) is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.
// Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.
// beautifulDays has the following parameter(s):
// i: the starting day number
// j: the ending day number
// k: the divisor

// FOR FULL DIRECTIONS LINK:https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?fbclid=IwAR0xWdYzZ0h0egZiU2rMOh0Sq6CPCx_rGz-ddJARoRgnOot7eZtLVOMEk1k

function beautifulDays(i, j, k) {
  function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )
  }
  let sum = 0
  for(i; i <= j; i++){
    let reversed = reversedNum(i)
    let finalNum = i-reversed
    if(finalNum % k  == 0){
      sum += 1
    }
  }
  return(sum)
}

console.log(beautifulDays(13,45,3))
