import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  try {
    const msg = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral() {
  try {
    const msg = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', msg);
    const msg2 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', msg2);
    const msg3 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained() {
  try {
    const msg1 = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg1);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
