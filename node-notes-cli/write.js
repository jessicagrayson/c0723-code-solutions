import { writeFile, readFile } from 'node:fs/promises';

const note = process.argv[2];

(async () => {
  try {
    // Read the existing JSON data from 'data.json'
    const existingData = await readFile('data.json', 'utf8');
    const data = JSON.parse(existingData);

    // Append the new note to the 'notes' object
    const nextId = data.nextId++;
    data.notes[nextId] = note;

    // Write the updated data back to 'data.json'
    await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Note added successfully.');
    // error handling
  } catch (error) {
    console.error('Error:', error);
  }
})();
