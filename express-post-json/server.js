import express from 'express';

const app = express();
const port = 8080;
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  // Convert grades object to an array
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId++;
  grades[newGrade.id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
