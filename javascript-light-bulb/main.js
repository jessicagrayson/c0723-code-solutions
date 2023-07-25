const $lightBulb = document.querySelector('.circle-light');
const $background = document.querySelector('.light-mode');

$lightBulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  if ($lightBulb.className === 'circle-light') {
    $lightBulb.classList.remove('circle-light');
    $lightBulb.classList.add('circle-dark');
    $background.classList.remove('light-mode');
    $background.classList.add('dark-mode');
  } else if ($lightBulb.className === 'circle-dark') {
    $lightBulb.classList.remove('circle-dark');
    $lightBulb.classList.add('circle-light');
    $background.classList.remove('dark-mode');
    $background.classList.add('light-mode');
  }
}
