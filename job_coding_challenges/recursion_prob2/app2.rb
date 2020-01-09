require 'json'

file = File.read('file.json')
json = JSON.parse(file)

def deep_search(data, wanted_key, wanted_value, hits=[])
  case data
  when Array
    data.each do |item|
      deep_search(item, wanted_key, wanted_value, hits)
    end
  when Hash
    data.each do |key, val|
      if key == wanted_key
        if val == wanted_value
          hits << val
        end
        if val == Array
          val.each do |item|
            if item == wanted_value
              hits << item
            end
          end
        end
      else
          deep_search(val, wanted_key, wanted_value, hits)
        end
      end
    end
    return hits
  end


puts deep_search(json, 'class', "StackView")



  # def commandlineprog(data)
  #   puts "enter search criteria"
  #   response = gets.chomp
  #   if response.include?(".")
  #    response.slice[0]
  #     result = deep_search(data, 'className', response)
  #   elsif response.include?("#")
  #     response.slice[0]
  #     result = deep_search(data, 'Identifier', response)
  #   else
  #     result = deep_search(data, 'class', response)
  #  end
  #  return result
  #  end
  #
  #
  #  puts commandlineprog(json)
