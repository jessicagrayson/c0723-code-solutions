// import './Form.css';
import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    // prevents browser from reloading page
    event.preventDefault();
    console.log('Controlled input:', { userName, password });
  }

  // returns two text inputs and one button
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="userName"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <button className="submitButton" type="submit">
        Sign Up
      </button>
    </form>
  );
}
