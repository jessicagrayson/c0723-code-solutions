/* exported initial */

const cookingTools = ['pan', 'pot', 'spatula', 'knife', 'spoon'];

function initial(array) {
  const drawer = [];

  for (let i = 0; i < array.length - 1; i++) {
    const currentTool = array[i];
    drawer.push(currentTool);
  }
  return drawer;
}

console.log(initial(cookingTools));
