require 'json'

file = File.read('file.json')
json = JSON.parse(file)

def deep_search(data, desired_key, desired_value, hits=[])
  case data
  when Array
    data.each do |item|
      deep_search(item, desired_key, desired_value, hits=[])
    end
  when Hash
    data.each do |key, value|
      if key = desired_key
        if value = desired_value
          hits << value
        end
        if value == Array
          value.each do |i|
            if i == desired_value
              hits << i
            end
          end
        end
          else
            deep_search(value, desired_key, desired_value, hits)
      end
    end
  end
  return hits
end
