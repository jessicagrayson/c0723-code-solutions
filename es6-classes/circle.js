/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * (radius * radius);
    const perimeter = 2 * Math.PI * radius;

    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `This is a circle with a radius of ${this.radius}.`;
  }
}

const newCircle = new Circle(5);
console.log(newCircle.describe());
