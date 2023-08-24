function ExampleConstructor() {}

console.log('value of protoype:', ExampleConstructor.prototype);
console.log(
  'type of ExampleConstructor.prototype:',
  typeof ExampleConstructor.prototype
);

const constructorVariable = new ExampleConstructor();
console.log('value of function variable:', constructorVariable);

const expressionVariable = constructorVariable instanceof ExampleConstructor;
console.log(expressionVariable);
