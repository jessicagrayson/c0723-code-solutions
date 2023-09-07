# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?: 1. A Promise is created and the task is synchronously put into the Event Queue, 2. Synchronous execution of the calling continues until function neds, 3. When the current functions complete, the Event Loop runs 4. The Promise tasks is taken from the Event Queue and executes 5. If the Promise completes and is successful it calls the then handler, if it completes with an error it calls the .catch handler and then no matter the outcome, it calls the finally handler.

- What are the three states a Promise can be in?: Pending which is its initial state before it is fulfilled or rejected, fulfilled which means the operation was successfully completed, and rejected meaning that the operation was unsuccessful.

- How do you handle the fulfillment of a Promise?: Using .then() which has two arguments - a callback function for the fulfilled Promise and an optional function for the rejected Promise.

- How do you handle the rejection of a Promise?: Using the .catch() method which schedules a function to be called when a Promise is rejected. Because of .catch() we don't have to specify a callback for a rejected Promise when using the .then() method. An example of a .catch() callback function could be a function that throws an error so the user knows something went wrong.

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
