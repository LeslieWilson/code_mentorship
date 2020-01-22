// DIRECTIONS: We define the distance between two array values as the number of indices between the two values. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.
// For example, if a = [3,2,1,2,3], there are two matching pairs of values:3 and 2 . The indices of the 3's are  i = 0 and j = 4, so their distance is d[i,j] = |j - i| = 4.
// Complete the minimumDistances function in the editor below. It should return the minimum distance between any two matching elements.
// minimumDistances has the following parameter(s):
// a: an array of integers
// FOR COMPLETE DIRECTIONS LINK: https://www.hackerrank.com/challenges/minimum-distances/problem?fbclid=IwAR2l_LjSji3v2DwEBcEtcIDl3Rt9sP_g85DK9eyMdLKCi0YaJVEhEF5x7yQ


// MY NOTES:
// -need to find i and j
// -need to subtract j from i
// -print that number

function minimumDistances(a){
  let dict = {}
 for(let i=0; i<a.length; i++){
     if( typeof dict[a[i]=="undefined" && dict[a[i]]] j != i && a[j] == a[i]){
      let index = j - i
      indexArr.push(index)
      let posArr = indexArr.map(Math.abs)

   }
 }
  return(Math.min(...posArr))
}

a = [7,1,3,4,1,7]

console.log(minimumDistances(a))
