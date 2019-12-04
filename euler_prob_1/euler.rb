
# Description: project euler problem number 1, take multiples of 3 and 5 under 1000 and add them
# https://projecteuler.net/problem=1

def printnums
  sum = 0
    for i in 1..999
        if i % 3 == 0 || i % 5 == 0
          sum += i
          puts i
        end
    end
  return sum
end
print printnums()
