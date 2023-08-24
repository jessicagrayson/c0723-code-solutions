// Query DOM for #user-list
const userList = document.querySelector('#user-list');
// Create new XMLHttPRequest
const xhr = new XMLHttpRequest();
// Open() the xhr object
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// Set xhr responseType
xhr.responseType = 'json';
// addEventListener added to xhr to listen for load event
xhr.addEventListener('load', () => {
  // Log xhr status
  console.log('Status:', xhr.status);
  // Log xhr response
  console.log('Response:', xhr.response);
  // Loop through response of xhr request
  xhr.response.forEach((user) => {
    // Create an li for each
    const li = document.createElement('li');
    // Set li textContent
    li.textContent = user.name;
    // Append li to userList
    userList.appendChild(li);
  });
});
// Send xhr request
xhr.send();
