import { readFile } from 'node:fs/promises';

async function readAnyFileAsync() {
  try {
    if (process.argv.length < 0) {
      console.error('Usage: node yourScript.js <filename>');
      return;
    }
    const filename = process.argv[2];
    const data = await readFile(filename, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

readAnyFileAsync();
