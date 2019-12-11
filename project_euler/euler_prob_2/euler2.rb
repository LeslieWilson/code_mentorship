
def fibonacci(number)
  array = []
  while number > 0
    number -= 1
    array.push(number)

  end
  array.each do |i|
    first = array[0]
    second = array[1]
    third = first + second
    fourth =  third + second
  end
  return array
end


print fibonacci()
