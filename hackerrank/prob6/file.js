// make some javascript objects


class Circle {
  constructor(r){
  this.radius = r
}

area(){
  return (this.radius * this.radius) * 3.14
}
}

const circle = new Circle(4)

console.log(circle.radius)
console.log(circle.area())




class Rectangle {
  constructor(a,b){
    this.length = a
    this.width = b
  }

  perimeter() {
    return 2*(this.length+ this.width)
  }

  area(){
    return this.length*this.width
  }
}


const rec = new Rectangle(4,5)

console.log(rec.length)
console.log(rec.width)
console.log(rec.perimeter())
// console.log(rec.area())
