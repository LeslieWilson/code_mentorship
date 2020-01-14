ar = [2,4,6,3]

function findGreatest(ar){
  let greatest = 0
  ar.forEach(function(number){
    if (number > greatest){
      greatest = number
    }
  })
    console.log(greatest)
}
console.log(findGreatest(ar))
