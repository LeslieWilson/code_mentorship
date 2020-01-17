// DIRECTIONS:Aerith is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. Her character must jump from cloud to cloud until it reaches the start again.
//
// To play, Aerith is given an array of clouds,  and an energy level . She starts from  and uses  unit of energy to make a jump of size  to cloud . If Aerith lands on a thundercloud, , her energy () decreases by  additional units. The game ends when Aerith lands back on cloud .
//
// can you determine the final value of  after the game ends?
//
// LINK FOR FULL DIRECTIONS: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?fbclid=IwAR3aPW7RZjBrLvzch2J3QLhWh_PaEL4lRpTgAe9kKELQch0pWPtSwT_TBcA

// I have a score that starts at 100, every time i jump i take one away from it, and if i land on a 1 in my array i take an extra 2 away and i keep jumping at 2 at a time (k) till i get back to the first index
//
// print score at end

let score = 100
let arr = [0,0,1,0,0,1,1,0]

function jumpingOnClouds(c, k) {
var firstTimeThrough = true
for(let i= 0; i< Number.POSITIVE_INFINITY; i+=k){
  if(arr[i%c] == 0 && firstTimeThrough == false){
    score -= 1
  }else if(arr[i%c] == 1 && firstTimeThrough == false){
    score -= 3
  }
  if(i%c == 0 && firstTimeThrough == false){
    break
  }
  firstTimeThrough = false
}

console.log(score)
}

console.log(jumpingOnClouds(8,2))
