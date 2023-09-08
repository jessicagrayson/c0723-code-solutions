# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?: Async is used to define a function as asynchronous which means it will return a new Promise. The await keyword is used in an async function to pause the execution of the function until that Promise is resolved.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?: Async/await is more concise than Promise.then/Promise.catch, and also looks more like synchronous code which improves readability.

- When do you use `async`?: When defining a function that contains asynchronous code or awaits a Promise. Required any time we want to use await.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?): Await is used inside of an async function and should NOT be used in a synchronous function because it can cause unexepcted behavior.

- How do you handle errors with `await`?: You can use a try...catch code block the same way we would with a synchronous function.

- What do `try`, `catch` and `throw` do? When do you use them?: Try defines a block of code that will be tested for errors, catch is used to define a block of code to be executed if an error occurs in the try code block and throw creates a custom error and throw it when a specific condition is met. Throw also causes execution to stop and immediately goes to the catch block.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?: The function will continue executing and will run concurrently without waiting for it to resolve which can cause problems.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?: async/await because it looks cleaner.

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
