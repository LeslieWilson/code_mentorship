require 'json'

file = File.read('file.rb')
json = JSON.parse(file)

def second_search(data, search_key, search_value, hits = [])
  case data
  when Array
    data.each do |item|
      second_search(item, search_key, search_value, hits)
    end
  when Hash
    data.each do |key, value|
      if key == search_key
        if value == search_value
          hits << value
        end
        if value == Array
          value.each do |item|
            if item == search_value
              hits << item
            end
          end
        end
      else

            second_search(value,search_key,search_value,hits)
end
end
end
return hits
end

puts second_search(json, 'class', 'StackView')
