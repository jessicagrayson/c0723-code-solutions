// DOM queries:
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

// Click event function:
function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      const tabElement = $tabElements[i];
      if (tabElement === event.target) {
        tabElement.classList.add('active');
      } else {
        tabElement.classList.remove('active');
      }
    }

    const dataViewValue = event.target.getAttribute('data-view');

    for (let i = 0; i < $viewElements.length; i++) {
      const viewElement = $viewElements[i];
      if (viewElement.getAttribute('data-view') === dataViewValue) {
        viewElement.classList.remove('hidden');
      } else {
        viewElement.classList.add('hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
