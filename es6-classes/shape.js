/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This shape has an area of ${this.area} and a perimeter of ${this.perimeter}`;
  }
}

const newShape = new Shape(100, 200);
console.log(newShape.describe());
