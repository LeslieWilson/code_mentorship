// # find greatest product of any two integers in an array

var array = [1 , 2 , 3 , 6 , 12 , 13 , 17 , 3];
var largest = 0;
var largest2 = 0;
var sum = 0

array.sort(function(a, b){return a-b});
var removed = array.splice(-2,2)
var sum = removed[0] * removed[1]

  console.log(sum)
