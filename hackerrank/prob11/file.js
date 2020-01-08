// Directions:Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
// Link:https://www.hackerrank.com/challenges/counting-valleys/problem?fbclid=IwAR1FAUUttnpUkvOdW7JbMs0_69FuE4fClqhm9C7VUE-eUo5ArN3iyXEKi44
//


//
//
//
// in the case of 2:
// 1 down 1 up
//
//
// in the case of 3:
// 1 down 2 up
// 2  downs 1 up
//
//
// in the case of 4:
// 1 up  2 down 1 up,
//
// 3 down 1 up
// 1 down 3 ups
//
// 2 down 2 up
//
//
// if first letter in array starts with d and u appears * the index youre on
// if not, if second letter is followed by d  and has u times the index
// if not, if third letter is followed by d and has u  times index

function countingValleys(s, n = null){
let sum=0
let answerCount = 0

  let letters = s.split("")
 letters.forEach(function(letter){
   if(sum ==  0 & letter == "D"){
     answerCount += 1
   }

   if(letter == "D"){

   sum +=  1


 }else if (letter =="U"){
   sum -=1
 }


 })

return answerCount

}

  let s = 'DDUUUUDDUUDDDDUUUUUUUDDDDDDDD'
console.log(countingValleys(s))
