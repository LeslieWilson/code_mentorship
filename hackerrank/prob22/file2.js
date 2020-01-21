// DIRECTIONS: refactor to use map

arr = [5,4,4,2,2,8]
function cutTheSticks(arr) {
  while(arr.length !=0){
    console.log(arr.length)
  arr = arr.map(function(val){
    let least = Math.min(...arr)
    return val-least
  }).filter(function(val){
  return val != 0
  })
}
}

console.log(cutTheSticks(arr))
