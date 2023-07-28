function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const $clickEvent = document.querySelector('.click-button');

$clickEvent.addEventListener('click', handleClick);

// Mouseover Event

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $hoverEvent = document.querySelector('.hover-button');

$hoverEvent.addEventListener('mouseover', handleMouseover);

// Double-click Event

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.property);
}

const $clickClick = document.querySelector('.double-click-button');

$clickClick.addEventListener('dblclick', handleDoubleClick);
