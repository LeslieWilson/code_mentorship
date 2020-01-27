// LINK: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?fbclid=IwAR3aFxQHWzKA5RfQqyR9SX5qllyC7hrvgAAeyHmzIkxhI2zKYaKNKCLCmrs
//
// DIRECTIONS: Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.designerPdfViewer has the following parameter(s): h: an array of integers representing the heights of each letter
// word: a string

function designerPDFViewer(h,word){
  let string = "abcdefghijklmnopqrstuvwxyz"
  let letters = string.split("")
  let dict = {}
  let array = []
  for(let i = 0; i< h.length; i++){
    dict[letters[i]] = h[i]
  }
  let letterArray = word.split("")
  letterArray.forEach(function(letter){
    array.push(dict[letter])
  })
  let largest = Math.max(...array)
  return(largest * array.length)
}
let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
console.log(designerPDFViewer(h,"hello"))
