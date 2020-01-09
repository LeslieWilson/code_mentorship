a=[5,6,7]
b=[3,6,10]

def compareTriplets(a, b)
returnArray = []
  i = 0
  sum1 = 0
  sum2 = 0
while i < a.length
  if a[i] > b[i]
    sum1 += 1
  elsif
    a[i] < b[i]
    sum2 += 1
  end
      i += 1
  end
  returnArray << sum1
  returnArray<< sum2
  return returnArray
end

  print compareTriplets(a, b)




  # sumB=0
  # sumA=0
  #   a.each do |anum|
  #       if
  #         anum > bnum
  #         sumA += 1
  #       elsif
  #         bnum == anum
  #       end
  #
  #     end
  #
  #   b.each do |bnum|
  #     if
  #       bnum > anum
  #       sumB += 1
  #     elsif
  #       anum == bnum
  #     end
  #   end
  #   score = [sumA, sumB]
  #   return score
