
// make a function that checks to see if the multiple of two 3-diget numbers is a palindrome, find the largest one
// https://projecteuler.net/problem=4

function reverse_a_number(n){
  n = n + "";
  return n.split("").reverse().join("");
}

function three_diget_numbers(){
  threedigetnumbers = []
  for (i = 999; i > 99; i-=1){
    threedigetnumbers.push(i)
}
  return threedigetnumbers
}

function palindrome_array_creator(array){
  var palindromearray = []
  var product_array = []
  for (i = 0; i < array.length; i++){
    for (n = 0; n < array.length; n++){
      product = array[i] * array[n]
      product_array.push(product)
    }
  }
  for (i =0; i < product_array.length; i++){
    not_reversed = product_array[i]
    reversed = reverse_a_number(product_array[i])
    if (reversed == not_reversed){
      palindromearray.push(not_reversed)
    }
  }
return palindromearray
}

array = three_diget_numbers()
palindrome_list = (palindrome_array_creator(array))
palindrome_list.sort(function(a,b){return a-b});
console.log(palindrome_list.pop())
