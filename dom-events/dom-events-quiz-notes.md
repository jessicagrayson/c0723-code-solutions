# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?: For review and debugging

- What is the purpose of events and event handling?: It enables a program to automatically run a block of code when and event such as a click occurs.

- Are all possible parameters required to use a JavaScript method or function?: No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?: addEventListener()

- What is a callback function?: A function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?: Another function

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?: It is a reference to the element the event occurred upon. You can find out by using console.log(event.property)

- What is the difference between these two snippets of code?: The first one a variable is being called as one of the arguments and in the second, a function is being called as an argument which will execute the function.
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

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
