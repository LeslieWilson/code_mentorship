// directions: write a function that takes in two arguments in a try catch block, first tries to add the arguments and if it fails print out error message

function tryCatch(n1,n2){
try {
  let added = n1 + n2
  return(added)
  } catch (err) {
  return(err.message)
  }
}


console.log(tryCatch(1, 4))
