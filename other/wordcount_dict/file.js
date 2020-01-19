// write a function that takes in a string and returns a dictionary of the frequency count of words

// the word is the key and the value is how many times that word showed up

sentence = "why am i up so early i am tired"

function dictionary(sentence){
  let sum = 0
  let dict = {}
  let newSentence=sentence.split(" ")
for (let i=0; i<newSentence.length; i++){
  if(typeof dict[newSentence[i]]== "undefined" && dict[newSentence[i]] != ' '){
    dict[newSentence[i]] = 1
  }else{
    dict[newSentence[i]] +=1
  }
}
console.log(dict)

}

console.log(dictionary(sentence))
