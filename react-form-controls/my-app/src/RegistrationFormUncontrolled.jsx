export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    // prevents browser from reloading page
    event.preventDefault();

    // read form data
    const form = event.target;
    const formData = new FormData(form);

    // converts form data to an object
    const formValues = Object.fromEntries(formData.entries());
    console.log('Uncontrolled input:', formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="userName"></input>
      </label>
      <label>
        Password:
        <input name="password" type="password"></input>
      </label>
      <button className="submitButton" type="submit">
        Sign Up
      </button>
    </form>
  );
}
