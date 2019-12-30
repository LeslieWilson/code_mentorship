// # complete vowlesAndConsonents functions. It takes a string. It prints each vowel on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared. Second, print each consonant (i.e., non-vowel) on a new line in the same order as it appeared in in the input format
//
// var test1 = conditions.some(el => str.includes(el));
// return test1
// console.log(str, ' ===> ', test1);



str = "hellothere"


function vowelsAndConsonents(str){
  var vowels = ["a", "e", "i", "o", "u"]
  let arr = []
    for (var i = 0; i < str.length; i++){
      vowels.forEach(function(vowel){
        if (str[i].includes(vowel)){
        console.log(str.charAt(i));
      }else{
        arr.push(str[i])
      }

    })
  }
    console.log(arr)
}


console.log(vowelsAndConsonents(str))
