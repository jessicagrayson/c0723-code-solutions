import { writeFile, readFile } from 'node:fs/promises';

readFile('data.json', 'utf8');

const filePath = 'data.json';
const editId = process.argv[2];
const removedEntry = undefined;

async function updateJsonFile() {
  try {
    // Read the JSON file
    const data = await readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    // Check if the entry with the specified ID exists
    if (jsonData.notes[editId.toString()] !== undefined) {
      // Update the content for the specified ID
      jsonData.notes[editId.toString()] = removedEntry;

      // Write the updated JSON back to the file
      await writeFile(filePath, JSON.stringify(jsonData, null, 2));
      console.log('Entry removed in data.json');
    } else {
      console.log(`Entry with ID ${editId} not found in the JSON data.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

updateJsonFile();
