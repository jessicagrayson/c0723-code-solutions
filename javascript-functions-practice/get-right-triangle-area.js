/* exported getRightTriangleArea */

function getRightTriangleArea(base, height) {
  const sum = base * height;
  const area = sum / 2;
  return area;
}

console.log(getRightTriangleArea(3, 4));
