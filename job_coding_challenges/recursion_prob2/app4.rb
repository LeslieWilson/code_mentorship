require 'json'
file = File.read('file.json')
json = JSON.parse(file)


def search_className(data, s_key, s_value, bucket=[])
  case data
  when Array
    data.each do |item|
      search_className(item, s_key, s_value, bucket)
    end
  when Hash
    data.each do |k, v|
      if k == s_key
        if v == s_value
          bucket <<  v
        end
    if v == Array
      v.each do |i|
        if i == s_value
        bucket << i
      end
    end
  end
      else
        search_className(v, s_key, s_value, bucket)
      end
    end
  end
  return bucket
end

puts search_className(json,'class', "StackView")

.container
