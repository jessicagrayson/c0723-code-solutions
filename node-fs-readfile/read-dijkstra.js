import { readFile } from 'node:fs/promises';

async function readDijkstraFile() {
  try {
    const filePath = new URL('./dijkstra.txt', import.meta.url);
    const data = await readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readDijkstraFile();
