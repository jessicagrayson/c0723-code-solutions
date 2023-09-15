// imports
import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

// Global variables
const app = express();
const filePath = 'data.json';

// reads data from data.json
const data = await readFile(filePath, 'utf8');
const jsonData = JSON.parse(data);

// applies middleware to parse json data in request bodies
app.use(express.json());

// GETS a list of all notes from data.json
app.get('/api/notes', async (req, res) => {
  try {
    res.json(jsonData);
  } catch (error) {
    // handles errors
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Unable to read data' });
  }
});

// GETS a specific note by its id
app.get('/api/notes/:id', async (req, res) => {
  try {
    // get the id param from the URL
    const id = parseInt(req.params.id);
    // check if 'id' is a valid integer
    if (isNaN(id) || id < 0 || !Number.isInteger(id)) {
      // respond w/ 400 request if not a positive integer
      return res.status(400).json({ error: 'Id must be a positive integer' });
    }
    // look up note with specified id in data.json
    const note = jsonData.notes[id];

    if (!note) {
      // return 404 not found if id does not exist
      return res.status(404).json({ error: 'Note not found' });
    }
    // return found note
    return res.json(note);
  } catch (error) {
    // handles any unexpected errors
    console.error('An unexpected error occurred:', error);
    res.status(500).json({ error: 'An unexpected error occurredd' });
  }
});

// POSTS new note to data.json
app.post('/api/notes', async (req, res) => {
  // defines content
  const content = req.body.content;
  // if no content, returns 400 error
  if (!content) {
    return res.status(400).json({ error: 'The "Content" property is missing' });
  }
  // defines new note object
  const newNote = {
    id: jsonData.nextId++,
    content,
  };
  // add the newNote to the "notes" object
  jsonData.notes[newNote.id] = newNote;

  try {
    // writes updated data back to file
    await writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    // responds w/ 201 created status code and newly created note
    res.status(201).json(newNote);
  } catch (error) {
    // handles errors
    console.error('Error writing data:', error);
    // sends 500 internal server error response for unexpected errors
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// DELETES a note by its id
app.delete('/api/notes/:id', async (req, res) => {
  try {
    // get the id param from the URL and parse as integer
    const id = parseInt(req.params.id);

    // checks if id is a postive integer
    if (!(Number.isInteger(id) && id > 0)) {
      return res.status(400).json({ error: 'Id must be a positive integer' });
    }

    // checks if note w/ specified id exists
    if (!jsonData.notes[id]) {
      // if note w/ id does not exist, returns 404 error
      return res.status(404).json({ error: 'Note not found' });
    }

    // if note w/ id does exist, deletes
    delete jsonData.notes[id];

    // saves the updated updated jsonData to data.json
    await writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

    // respond with 204 to indicate successful deletion
    res.status(204).json();
    // handles any unexpected errors
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// PUTS (replaces) note by id
app.put('/api/notes/:id', async (req, res) => {
  try {
    // get the id param from the URL and parse as integer
    const id = parseInt(req.params.id);

    // checks if id ia positive integer
    if (!(Number.isInteger(id) && id > 0)) {
      return res.status(400).json({ error: 'Id must be a positive integer' });
    }
    // checks if content is included in request body
    if (!req.body.content) {
      return res.status(400).json({ error: 'Content must be included' });
    }

    // checks if a note with the specified id exists
    if (!jsonData.notes[id]) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // updates the content of the existing note in data.json
    jsonData.notes[id].content = req.body.content;

    // saves the updated jsonData to the data.json file
    await writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');

    // responds w/ a 200 success status and the updated note
    res.status(200).json(jsonData.notes[id]);
  } catch (error) {
    // handles unexpected errors
    console.error('An unexpected error occurred:', error);
    res.status(500).json({ error: 'An unexpected occurred' });
  }
});

// starts web server and listens for requests
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
