// Link:https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?fbclid=IwAR3Xrb304WhqfK8-LXMKAe-AtFMS3AgATKMT7brndusEz1W6C-SZXXcmy7Y


// Directions:Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.divisibleSumPairs has the following parameter(s):
// n: the integer length of array
// ar: an array of integers
// k: the integer to divide the pair sum by (SEE MORE ON WEBSITE)
ar  = [1,2,3,4,5,6]


function divisibleSumPairs(k, ar, n=null) {
  let count  = 0
  for (i=0; i<ar.length; i++){
    for (j=0; j<ar.length; j++){
     if((ar[i] != ar[j])&&(ar[i] + ar[j]) % k == 0  &&  (i < j)){
       count += 1
     }
    }
  }
  return count
}

console.log(divisibleSumPairs(4,ar))
