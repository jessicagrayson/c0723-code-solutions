import { useState } from 'react';

const counterStyle = {
  height: '10rem',
  width: '10rem',
};

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={counterStyle}>
      <button onClick={() => setCount(count - 1)}>Down</button>
      {count}
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}
