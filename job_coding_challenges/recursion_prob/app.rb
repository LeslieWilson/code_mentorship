require 'json'

file = open("file.json")
json = file.read
parsed = JSON.parse(json)


def deep_find_value_with_key(data, desired_key, desired_value, hits = [])
  case data
  when Array
    data.each do |item|
      deep_find_value_with_key(item, desired_key, desired_value, hits)
    end
  when Hash
      data.each do |key, val|
        if key == desired_key
          if val = desired_value
        hits << val
        end
      end

        deep_find_value_with_key(val, desired_key, desired_value, hits)
  end
end

  return hits

end

def find_special_charecters(parsed)
  puts "please type your search"
  response = gets.chomp
  if response.include?"."
    response.slice[0]
    result = deep_find_value_with_key(parsed,'className', response)
  elsif response.include?'#'
    response.slice[0]
    result = deep_find_value_with_key(parsed, 'identifier', response)
  else
    result = deep_find_value_with_key(parsed, 'class', response)
end
return result
end

print find_special_charecters(parsed)
