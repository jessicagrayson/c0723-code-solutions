import { useState } from 'react';

export default function HotButton() {
  const [count, setCount] = useState(0);

  let buttonColor = '';
  let textColor = '';

  if (count < 3) {
    buttonColor = '#351c75';
    textColor = '#fff';
  } else if (count < 6) {
    buttonColor = '#674ea7';
    textColor = '#fff';
  } else if (count < 9) {
    buttonColor = '#e06666';
    textColor = '#fff';
  } else if (count < 12) {
    buttonColor = '#f6b26b';
    textColor = '#000';
  } else if (count < 15) {
    buttonColor = '#fbff00';
    textColor = '#000';
  } else if (count === 16) {
    buttonColor = '#fff';
    textColor = '#000';
    alert('BOOOOM');
  } else {
    buttonColor = '#fff';
    textColor = '#000';
  }

  return (
    <div>
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{ backgroundColor: buttonColor, color: textColor }}>
        Hot Button
      </button>
      <p>The count is {count}</p>
    </div>
  );
}
