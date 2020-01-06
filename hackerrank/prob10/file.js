// DIRECTIONS: Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

// LINK:https://www.hackerrank.com/challenges/the-birthday-bar/problem?fbclid=IwAR3ziivqvxsiGtKnW47Nr1F5TwdzBekZ4l9X_R6Kls0PfWJxqtzFtcVqnPg

s = [4,3,1,2]

function birthday(s,d,m){
  let day = d
  let month = m
  sum = 0
  for(i = 0; i < s.length; i++){
  sum =+  s[i] + s[i+1] + s[i+2]
  if(sum == d){
    console.log(sum)
  }


    }

  }

birthday(s,6,3)


// add three numbers in a row together and Im checking to see if they equal what I want
