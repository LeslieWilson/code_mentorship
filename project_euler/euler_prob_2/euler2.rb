# Description:  add previous two numbers to get next number in  sequence, find all even numbers under 4 million, add them
# https://projecteuler.net/problem=2


def fibonacci(number)
  a = 1
  b = 2
  array1=[]
  array2=[]
  sum = 0
  while b < number
    array1.push(b)
    a, b = b, a+b
  end
  array1.each do |i|
    if i.even?
    array2.push(i)
  end
  end
  array2.each do |i|
  sum += i
  end
  print sum
end
print fibonacci(4000000)
