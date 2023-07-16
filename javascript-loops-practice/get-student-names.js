/* exported getStudentNames */

const musicClass = [
  { name: 'John', hair: 'long' },
  { name: 'Paul', hair: 'medium' },
  { name: 'George', hair: 'very long' },
  { name: 'Ringo', hair: 'none' },
];

function getStudentNames(students) {
  const empty = [];
  for (let i = 0; i < students.length; i++) {
    const hershey = students[i].name;
    empty.push(hershey);
  }
  return empty;
}

console.log(getStudentNames(musicClass));
