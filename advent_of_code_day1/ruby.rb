# "test"


# for every number, divide by 3. round down and subtract  2 to get the fuel requirement and then add all the fuel requiremnets

# 1. I want something to read input.txt line by line

  # File.foreach("input.txt") { |line| puts line }

# 2. I want something that converts it to an integer, rounds it down and divides each line by 3

# File.foreach("input.txt") { |line| puts (line.to_i)/3}
#
# 3. want something that subtracts 2

# File.foreach("input.txt") { |line| puts ((line.to_i)/3)-2}

# 4. want something that adds them all together


sum = 0
File.foreach("input.txt") { |line|
  fuel = ((line.to_i)/3)-2
  sum += fuel
  while fuel > 6
  fuel = ((fuel)/3)-2
  sum +=fuel

end

}

puts sum



# while the answer is divisible by 3, do the math on the mass and add itt o the sum
