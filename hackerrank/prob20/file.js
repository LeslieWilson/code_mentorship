// DIRECTIONS:You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.
//
// For example, assume your bird sightings are of types arr= [1,1,2,2,3]. There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1 .
//
// LINK FOR FULL DIRECTIONS: https://www.hackerrank.com/challenges/migratory-birds/problem?fbclid=IwAR1obcix_JhqfAHE8sIxpikHcfanvJLiqKBDYOP0-Wr_DyhDAFJGu8uyI9Yß
// an array of duplicates and keep track of the numbe rof times something shows up



let arr = [7,6,1,1,2,3,3,3,3,5,5]

function migratoryBirds(arr){
  let sum = 0
  let dict ={}
  for(let i=0; i<arr.length; i++){
  if(typeof dict[arr[i]]=="undefined"){
    dict[arr[i]] = 1
  }else{
    dict[arr[i]] += 1
  }
  }
  greatestNum = 0
  greatestBird = []

  for (const [key, value] of Object.entries(dict)) {
      if(value > greatestNum){
        greatestNum = value
        greatestBird = key
      }
  }
console.log(greatestBird)
}

console.log(migratoryBirds(arr))
