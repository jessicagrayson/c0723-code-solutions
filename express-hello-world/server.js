import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Request Method:', req.method);
  res.send('Hello, Express Server! ');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
