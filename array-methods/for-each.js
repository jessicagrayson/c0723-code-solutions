const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => console.log('in order:', value));

values.slice().forEach((value, index, array) => {
  const reversedIndex = array.length - 1 - index;
  console.log('reverse order:', array[reversedIndex]);
});
