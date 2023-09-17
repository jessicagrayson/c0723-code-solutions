# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?: When a function is created. When a function is defined, it "captures" its surrounding environment including variables, which defines the scope of the function.

- What allows JavaScript functions to "remember" variables from their surroundings?: Closures allow function to "remember" their surroundings because a closure is essentially a function bundled together with its captured lexical scope as it exists when that function is created.

- What values does a closure contain?: The function itself and a reference to the lexical environment (scope) in which the function was created.

- When is a closure created?: Whenever a function is defined (aka nested) within another function. The inner function can then reference variables or functions from its outer function and that outer function's outer function and so it goes...essentially, a closure captures the entire "scope chain" including all levels of nesting so that inner function can access variables from anywhere inside of its closure.

- How can you tell if a function will be created with a closure?: A function will create a closure when it is defined within another function and relies on variables and functions from the outer function's scope.

- In React, what is one important case where you need to know if a closure was created?: We need to know when a closure is created when defining event handlers within components because unexpected behavior can occur if the event handler references outdated values of stte or props as they existed when "captured" by the closure.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
