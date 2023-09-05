// import './App.css';
import AppDrawer from './AppDrawer';
import { useState } from 'react';

const items = ['About', 'Get Started', 'Sign In'];

function App() {
  const [item, setItem] = useState('no menu selected');
  return (
    <>
      <AppDrawer header="Menu" items={items} onSelect={setItem} />
      <h1>{item}</h1>
    </>
  );
}

export default App;
