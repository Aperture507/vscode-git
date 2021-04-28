class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    draw() {
      console.log(`drawing ${this.color} color!`);
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Rectangle extends Shape {}
  class Triangle extends Shape {}

  
  const rectangle = new Rectangle(20, 20, 'blue');

  rectangle.draw();
  console.log(rectangle.getArea());
 