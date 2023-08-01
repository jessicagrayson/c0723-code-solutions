const library = [
  { isbn: '1234567', title: 'It', author: 'Stephen King' },
  { isbn: '789234', title: 'East of Eden', author: 'John Steinbeck' },
  { isbn: '104324', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

console.log('JSON:', JSON.stringify(library));

const stringVar = '{"id" : 147895, "name": "John"}';

console.log('type:', typeof stringVar);

const hershey = JSON.parse(stringVar);

console.log('type:', typeof hershey);
