/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const perimeter = 4 * width;

    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `${super.describe()} This is a square with a width of ${
      this.width
    }.`;
  }
}

const newSquare = new Square(5);
console.log(newSquare.describe());
