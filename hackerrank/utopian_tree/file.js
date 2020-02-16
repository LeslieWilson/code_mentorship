// DIRECTIONS:The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter. Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after N growth cycles?

// LINK: https://www.hackerrank.com/challenges/utopian-tree/problem?fbclid=IwAR0UO7ICX5PBX6vYUYJYfJbnVshTpT5DqJPFnmbfA2hOTVlX-iTFxzSd-Uw



function utopianTree(n){
  let  sum = 0
  for (let i = 0; i <= n + 1; i++){
    if (i % 2 == 0){
      sum = sum*2
    }else if(i % 2 != 0){
      sum += 1
    }else if(i == 0){
      sum += 1
    }
  }
return sum
}



let n = 5
console.log(utopianTree(n))
