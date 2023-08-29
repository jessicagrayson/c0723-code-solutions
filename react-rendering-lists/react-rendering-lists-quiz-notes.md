# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?: When building interfaces we may want to show multiple instances of the same component that is nearly identical, but has different data.

- Why is it important for React components to be data-driven?: So that they will dynamically update on the page any time we change what is inside of our code.

- Where in the component code would a list of React components typically be built?: Inside of the return statement so that we can see it on the page.

- What `Array` method is commonly used to create a list of React components?: Map because it allows you to do something to each item in an array and then returns a new array of the results.

- Why do components in a list need to have unique keys?: Because otherwise, they will be assigned their index as a key - this can cause problems because other list items might get deleted or moved around causing a particular item's index to change.

- What is the best value to use as a "key" prop when rendering lists?: It depends - if our data is coming from a database it would be best to use the database keys/IDs because they are unique. If our data is locally generated (think notes or to-do app lists), we could use an incrementing counter so each new item gets a new, unique numbered ID.

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
