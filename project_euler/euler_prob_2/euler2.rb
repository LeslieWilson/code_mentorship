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

  array.each do |i|
    first = array[0]
    second = array[1]
    third = first + second
    fourth =  third + second
  end
  return array

end
print fibonacci(4000000)
