


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
