const $message = document.querySelector('.message');

function changeHeading(string) {
  $message.textContent = string;
}

setTimeout(changeHeading, 2000, 'hello there');
