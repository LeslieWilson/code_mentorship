

function staircase(n) {
let sign = "#"
for(i=n; i> 0; i--){
console.log(sign.repeat(i+1))
  }
}

n = 6
console.log(staircase(n))
