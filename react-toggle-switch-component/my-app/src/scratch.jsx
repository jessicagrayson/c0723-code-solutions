import { useState } from 'react';

export const ToggleSwitch = ({ label, toggled, onClick }) => {
  const [isToggled, setToggle] = useState(toggled);

  const handleToggle = () => {
    setToggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={handleToggle}
      />
      <span />
      <strong>{label}</strong>
    </label>
  );
};
