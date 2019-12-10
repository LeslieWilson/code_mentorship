
// make a function that checks to see if the multiple of two 3-diget numbers is a palindrome, find the largest one  and the one divisible  by three
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
  var product_array = []
  for (i = 0; i < threedigetnumbers.length; i++){
    for (n = 0; n < threedigetnumbers.length; n++){
      product  = threedigetnumbers[i] * threedigetnumbers[n]
      product_array.push(product)
    }
  }
  return product_array
}

function palindrome_array_creator(product_array){
  var palindromearray = []
  for (i =0; i < product_array.length; i++){
    not_reversed = product_array[i]
    reversed = reverse_a_number(product_array[i])
    if (reversed == not_reversed){
      palindromearray.push(not_reversed)
    }
  }
  var divisibleByThree = []
  palindromearray.sort(function(a,b){return a-b});
    for  (i=0; i <  palindromearray.length; i++){
      if  (i  % 3 == 0){
        divisibleByThree.push(palindromearray[i])
  }
}
  var answer = divisibleByThree.pop()
  return answer
}

array = three_diget_numbers()
palindrome_list = (palindrome_array_creator(array))
console.log(palindrome_list)
