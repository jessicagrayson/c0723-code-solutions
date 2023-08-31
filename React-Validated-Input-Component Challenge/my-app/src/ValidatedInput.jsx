import { useState } from 'react';

export default function ValidatedInput() {
  const [input, setInput] = useState('');

  function isValidPassword() {
    if (input.trim().length < 8) return false;
    return true;
  }

  const isValid = isValidPassword();
  return (
    <div className="form-group position-relative m-5">
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`form-control ${isValid ? 'is-valid' : 'is-invalid'}`}
        />
        {isValid ? null : <div style={{ color: 'red' }}>Password invalid</div>}
      </label>
    </div>
  );
}
