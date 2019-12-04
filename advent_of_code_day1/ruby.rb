# Description:
# excercise from advent of code, this is day one, assignment was to make a program that calculates a fule amount based off a 'mass amount' in the input.txt file. day 2 was to take what I made and make it loop on itself to produce a different final number and exclude numbers below 0.
# https://adventofcode.com/2019/day/1

# NOTES
# for every number, divide by 3. round down and subtract  2 to get the fuel requirement and then add all the fuel requiremnets
# 1. I want something to read input.txt line by line
  # File.foreach("input.txt") { |line| puts line }
# 2. I want something that converts it to an integer, rounds it down and divides each line by 3
# File.foreach("input.txt") { |line| puts (line.to_i)/3}
# 3. want something that subtracts 2
# File.foreach("input.txt") { |line| puts ((line.to_i)/3)-2}
# 4. want something that adds them all together

def sumcalculator(filename)
  sum = 0
  File.foreach(filename) { |line|
    fuel = ((line.to_i)/3)-2
    sum += fuel
    while fuel > 6
      fuel = ((fuel)/3)-2
      sum += fuel
    end
  }
end

puts sumcalculator("input.txt")
