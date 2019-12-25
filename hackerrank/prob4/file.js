// 1. first go thru and get acount of how many numbers are in the array and thats the denominator
//
// 2. i fstatements counting numbers that fall between certain values and saving each of those into a sum variable (id have 3)
//
// 3. do some division to get the floats of these values
//
// 4. print values with newline




// arr = [-4,3,-9,0,4,1]

function plusMinus(arr) {

  let denominator = arr.length
  var count_zeros = 0
  var count_positives = 0
  var count_negatives = 0

arr.forEach(function(value){
    if(value < 0){
    count_negatives += 1
  }else if(value == 0){
      count_zeros += 1
    }else if(value > 0){
        count_positives += 1

    }

  })
let zfloat = count_zeros/denominator
let pfloat = count_positives/denominator
let nfloat = count_negatives/denominator

let array = [zfloat,pfloat,nfloat]
let changedArray = array.map(function(v){
return parseFloat(v.toFixed(6))


})
let string = ""
let num1 = arr.pop(changedArray)
let num2 = arr.pop(changedArray)
let num3 = arr.pop(changedArray)
num = num1.toFixed(6)
numn= num2.toFixed(6)
numm = num3.toFixed(6)

return (`${num}\n${numn}\n${numm}`)

}



console.log(plusMinus([-4,3,-9,0,4,1]))
