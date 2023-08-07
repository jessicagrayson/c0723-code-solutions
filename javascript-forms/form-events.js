const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('handleFocus:', 'focus event fired');
  console.log(event.target.name);
}

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

function handleBlur(event) {
  console.log('handleBlur:', 'blur event fired');
  console.log(event.target.name);
}

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

function handleInput(event) {
  console.log('handleInput:', event.target.name, event.target.value);
}

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
