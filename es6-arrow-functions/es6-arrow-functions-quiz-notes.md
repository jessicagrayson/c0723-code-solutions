# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?: The parameter (parentheses may not be necessary) followed by an arrow => pointing to the expression (curly braces may not be necessary)

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?: The function must directly return an expression - additional processing will not be possible.

- When using _concise body syntax_, how do you return an object literal?: By wrapping the object literal in parentheses

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  - How many arguments does the arrow function take?: One which is () => 42

  - What value does it return?: 42

  - How many arguments are passed to the function `foo`?: One

  - What type of argument is passed to the function `foo`?: Arrow function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function: (y) => ()

  - How many arguments does the arrow function take?: One argument - 'y'

  - What value does it return?: It just has a console log

  - How many arguments are passed to the function `bar`?: One

  - What type of argument is passed to the function `bar`?: A function

  - When does the arrow function's code get executed?: When bar is called

- How does the value of `this` differ between standard functions and arrow functions?: In standard functions, the value of this is determined by how the function is called. Arrow functions do not have their own this, so they inherit it from the parent scope.

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
