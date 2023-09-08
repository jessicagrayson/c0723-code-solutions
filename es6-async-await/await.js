import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  try {
    const response = await fetch('foo/bar.html');
    const msg = await response;
    console.log(elapsed(), 'fetchOnce:', msg);
  } catch (error) {
    console.log('Error:', error);
  }
}

async function fetchSeveral() {
  try {
    const response = await fetch('foo1/bar.html');
    const msg = await response;
    console.log(elapsed(), 'fetchSeveral1:', msg);
  } catch (error) {
    console.log('Error:', error);
  }
  try {
    const response = await fetch('foo2/bar.html');
    const msg = await response;
    console.log(elapsed(), 'fetchSeveral2:', msg);
  } catch (error) {
    console.log('Error2:', error);
  }
  try {
    const response = await fetch('foo3/bar.html');
    const msg = await response;
    console.log(elapsed(), 'fetchSeveral3:', msg);
  } catch (error) {
    console.log('Error3:', error);
  }
}

async function fetchChained() {
  try {
    const response = await fetch('foo-chain/bar.html');
    const msg1 = await response;
    console.log(elapsed(), 'fetchChained1:', msg1);
  } catch (error) {
    console.log('Error:', error);
  }
  try {
    const response = await fetch('foo-chain/bar.html');
    const msg2 = await response;
    console.log(elapsed(), 'fetchChained2:', msg2);
  } catch (error) {
    console.log('Error:', error);
  }
  try {
    const response = await fetch('foo-chain/bar.html');
    const msg3 = await response;
    console.log(elapsed(), 'fetchChain3:', msg3);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchOnce()
  .then(() => fetchSeveral())
  .then(() => fetchChained());
