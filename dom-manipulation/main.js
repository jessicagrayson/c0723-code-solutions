const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelectorAll('.click-count');
let $counter = 0;

function handleClick() {
  $counter++;
  $clickCount.textContent = $counter;
}

// let $clickCount = document.getElementsByClassName('.click-count').textContent;

$hotButton.addEventListener('click', handleClick());
