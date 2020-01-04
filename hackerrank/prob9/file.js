// Directions: Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
// gradingStudents has the following parameter(s): grades: an array of integers representing grades before rounding. every student receives a grade between 0 to 100 and if differece between grade and next multiple of 5 is less than 3 I must round up. grades below 38 don't round because they are failing. returns array of rounded grades
//
// Link: https://www.hackerrank.com/challenges/grading/problem?fbclid=IwAR364-_9cplh0L2GhCKXcS1J4w458NmnG8xlIQoFAre1UdTcRUdBjO_D1tc

ar = [33,67,43,75]

function gradingStudents(ar){
let array = []
  ar.forEach(function(number){
    if (number % 5 == 0){
    console.log(number)

  }else{
      if (number %5 != 0){
        array.push(number)

        // if (number + 2 == multipleFive){
        //   console.log(Math.ceil(number/5)*5)
        // }

      }

    }



  })

  array.forEach(function(item){

      if (item % 5 > 2 && item > 35){
        console.log(Math.ceil(item/5)*5)
      }else{
        console.log(item)

    }
  })

  }


gradingStudents(ar)
