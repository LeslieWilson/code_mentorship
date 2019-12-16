require 'json'

file = File.read('file.json')
json = JSON.parse(file)


# def deep_find_value_with_key(data, desired_key, desired_value, hits = [])
#   case data
#   when Array
#     data.each do |value|
#       deep_find_value_with_key(value, desired_key, desired_value, hits)
#     end
#   when Hash
#       data.each do |key, val|
#         if key = desired_key
#           hits << val
#         else
#         deep_find_value_with_key(val, desired_key, desired_value, hits)
#       end
#     end
#   end
#
#   return hits
# end

#
# def deep_find(data, desired_key, desired_value, hits =[])
#   case data
#   when Array
#     data.each do |item|
#       deep_find(item, desired_key, desired_value, hits)
#     end
#   when Hash
#     data.each do |key, val|
#       if key == desired_key
#         if val == desired_value
#         hits << val
#         puts hits
# end
#       else
#         deep_find(val, desired_key, desired_value, hits)
#       end
#
#     end
#   end
#   return hits
# end
#
# puts deep_find(json, 'class', 'StackView')



def deepFind(data, desired_key, desired_value, hits=[])
  case data
  when Array
    data.each do |item|
      deepFind(item, desired_key, desired_value, hits)
    end
  when Hash
    data.each do |key, val|
      if key == desired_key
        if val == desired_value
          hits << val
        end
        if val == Array
          val.each do |item|
            if item == desired_value
            hits << item
          end
        end
      end
      else
        deepFind(val, desired_key, desired_value, hits)
      end
    end
  end
    return hits
  end

  def program(data)
    puts "what do you want to search for?"
    response = gets.chomp
    puts "\n"
    if response.include?(".")
      response.slice[0]
    result = deepFind(data, 'className', response)
    elsif response.include?("#")
      response.slice[0]
      result = deepFind(data, 'identifier', response)
    else
      result = deepFind(data, 'class', response)
    end
    return result
  end


puts program(json)
