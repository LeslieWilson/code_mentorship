// DIRECTIONS: You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
//
// The first kangaroo starts at location x1  and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// LINK FOR FULL DIRECTIONS: https://www.hackerrank.com/challenges/kangaroo/problem
//
// if x1 + v1 are multiples of x2 + v2, YES
//
// if x2 > x1 && v2> v1, NO

function kangaroo(x1, v1, x2, v2) {
  let kang1 = x1 + v1
  let kang2 = x2 + v2
  if (x2 > x1 && v2 > v1){
    return("NO")
  }else if(x1 > x2 && v1 > v2){
      return("NO")
  }else if(kang2 % kang1 != 0 && v1 < v2){
      return("NO")
  }else{
  return("YES")
  }
}



// function kangaroo(x1, v1, x2, v2) {
//   let kang1 = x1 + v1
//   let kang2 = x2 + v2
//   if (x2 > x1 && v2 > v1){
//     return("NO")
//   }else if(x1 > x2 && v1 > v2){
//       return("NO")
//   }else if(kang2 % kang1 != 0){
//       return("NO")
//   }else{
//   return("YES")
//   }
// }
let x1 = 21
let v1 = 6

let x2 = 47
let v2 = 3

console.log(kangaroo(x1, v1, x2, v2))
