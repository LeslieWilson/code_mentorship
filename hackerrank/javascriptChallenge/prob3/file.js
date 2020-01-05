// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.
//
// 1. sort numbers
// 2. get largest number
// 3. delete largest
// 4. return last number
//

var nums = [3,5,5,5,5,2,4]

function getSecondLargest(nums) {
    nums.sort(function(a, b){return a-b});
firstLargest = nums.pop()
let secondLargest = nums.pop()
  while (secondLargest == firstLargest){
  secondLargest = nums.pop()

  }


return secondLargest


}

console.log(getSecondLargest(nums))
