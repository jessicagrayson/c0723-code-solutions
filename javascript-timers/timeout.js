function changeHeading(string) {
  document.querySelector('.message').textContent = string;
}

setTimeout(changeHeading, 2000, 'hello there');
