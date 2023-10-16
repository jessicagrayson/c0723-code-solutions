import { readFile } from 'node:fs/promises';

// const note = process.argv[2];

(async () => {
  try {
    // Read the existing JSON data from 'data.json'
    const existingData = await readFile('data.json', 'utf8');
    const data = JSON.parse(existingData);
    console.log(data);
    // error handling
  } catch (error) {
    console.error('Error:', error);
  }
})();
