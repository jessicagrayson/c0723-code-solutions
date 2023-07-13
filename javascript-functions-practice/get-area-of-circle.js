/* exported getAreaOfCircle */

function getAreaOfCircle(radius) {
  const area = Math.PI * (radius * radius);
  return area;
}

console.log('value of getAreaOfCircle:', getAreaOfCircle(78));
console.log('value of getAreaOfCircle:', getAreaOfCircle(22));
console.log('value of getAreaOfCircle:', getAreaOfCircle(3));
