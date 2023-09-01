import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button className={isOn ? 'on' : 'off'} onClick={handleToggle}></button>
      {isOn ? 'on' : 'off'}
    </div>
  );
}
