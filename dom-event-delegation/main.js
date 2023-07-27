const $taskList = document.querySelector('.task-list');

function callback(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  // test code below
  if (event.target.tagName === 'BUTTON') {
    // console.log(event.target.closest('.task-list-item'));
    const $eventTarget = event.target;
    const $closestLi = $eventTarget.closest('.task-list-item');
    $closestLi.remove();
  }
}

$taskList.addEventListener('click', callback);
