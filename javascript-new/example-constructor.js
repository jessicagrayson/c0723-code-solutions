function ExampleConstructor() {}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('type of ExampleConstructor:', typeof ExampleConstructor);

const constructorVariable = new ExampleConstructor();
console.log('value of function variable:', constructorVariable);

const expressionVariable = constructorVariable instanceof ExampleConstructor;
console.log(expressionVariable);
