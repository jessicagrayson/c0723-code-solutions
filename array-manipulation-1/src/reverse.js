/* exported reverse */

const instruments = ['guitar', 'bass', 'piano', 'drums', 'vocals'];

function reverse(array) {
  const recording = [];
  const currentInstrument = array.length;

  for (let i = currentInstrument - 1; i >= 0; i--) {
    const track = array[i];
    recording.push(track);
  }
  return recording;
}

console.log('test:', reverse(instruments));
