// LINK: https://www.hackerrank.com/challenges/staircase/problem?fbclid=IwAR3peWiaB22l9fvotEZq7tB88oI8JmuFlFlM5F9cTosJ-sVxSZQ66ak9uA4

// DIRECTIONS:
// Consider a staircase of size :
//
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size n.


// function staircase(n){
//   for(i= 0; i< n; i++)
//   {
//
//     for(j=0; j<n; j++){
//       console.log("#")
//     }
//   }
// }
//
// console.log(staircase(6))



function staircase(n){
    let i = 0;
    while (i < n) {
        i +=1;
        let j = 0
        let string = ""
        let spaceNumber = n - i
        let spaces = " "
        let realspaces = spaces.repeat(spaceNumber)
        string += realspaces
        while (j < i){
        j +=1
        string += "#"
    }
  console.log(string)
  }
}

console.log(staircase(6))
