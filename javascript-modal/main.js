const $openButton = document.querySelector('.open-btn');
const $closeButton = document.querySelector('.pop-btn');
const $popStatus = document.querySelector('.pop-container');
const $backStatus = document.querySelector('.background');

function popUpOn(event) {
  // Function toggles pop-up ON
  $popStatus.classList.remove('pop-container');
  $popStatus.classList.add('pop-container-clicked');

  $backStatus.classList.remove('background');
  $backStatus.classList.add('background-clicked');

  $openButton.classList.remove('open-btn');
  $openButton.classList.add('open-btn-clicked');
}

$openButton.addEventListener('click', popUpOn);

function popUpOff(event) {
  // Function toggles pop-on OFF
  $popStatus.classList.remove('pop-container-clicked');
  $popStatus.classList.add('pop-container');

  $backStatus.classList.remove('background-clicked');
  $backStatus.classList.add('background');

  $openButton.classList.remove('open-btn-clicked');
  $openButton.classList.add('open-btn');
}

$closeButton.addEventListener('click', popUpOff);
