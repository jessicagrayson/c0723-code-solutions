function changeHeading(string) {
  document.querySelector('.message').innerHTML = string;
}

setTimeout(changeHeading, 2000, 'hello there');
