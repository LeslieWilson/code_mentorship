// directions: make a larisa object, it initializes with a mood, has a couple  methoods, eat birthday cake,  complain about  sunscreen,  and two other methods that effect her mood in some way. Make a method that  has a 50% chance of making  her happy and  making her sad. make an excercise method that if her mood is sad  it makes her happy, if mood  happy  makes her blissful, if  mood bitchy refuses to do it.


class Larisa {
  constructor(mood="neutral"){
    this.mood = mood
  }

  eatBirthdayCake(){
    if (Math.random(this.mood) *  100 < 50){
      this.mood = "happy"
    }
return this.mood
  }

  hearSunscreenComplaint(){
    this.mood = "angry"
  return this.mood
  }

  excercise(){
    if (this.mood  == "happy"){
      this.mood = "blissful"
    }else{
      if (this.mood == "angry"){
        this.mood =  "not angry"
      }
    }

return this.mood
  }
}


const Larisa2 = new Larisa();

console.log(Larisa2.hearSunscreenComplaint())

console.log(Larisa2.excercise())

console.log(Larisa2.eatBirthdayCake())
