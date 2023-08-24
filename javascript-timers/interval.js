const headingElement = document.querySelector('.countdown-display');

function countdown() {
  let count = 4;

  const timerId = setInterval(() => {
    if (count === 0) {
      clearInterval(timerId);
      headingElement.textContent = '~Earth Beeeelooowww Us~';
    } else {
      headingElement.textContent = count;
      count--;
    }
  }, 1000);
}

countdown();
