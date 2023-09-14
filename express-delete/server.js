import express from 'express';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

// Middleware to parse JSON requests
app.use(express.json());

// Route to get grades
app.get('/api/grades', (req, res) => {
  // Convert the grades object to an array of grade objects
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

// Route to delete a grade by ID
app.delete('/api/grades/:id', (req, res) => {
  const gradeId = req.params.id;

  if (grades[gradeId]) {
    // Delete the grade if it exists
    delete grades[gradeId];
    // No content
    return res.sendStatus(204);
  } else {
    // Send a 404 response if the grade with the specified ID is not found
    return res.status(404).json({ error: 'Grade not found' });
  }
});

// Start the Express server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
