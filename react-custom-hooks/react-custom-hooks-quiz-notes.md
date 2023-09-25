# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?: A JavaScript function that uses built-in hooks to encapsulate and reuse state logic along with logic related to side effects or other functionality inside of a React component.

- When are custom hooks useful? When are they not required?: They are useful when you want to reuse the aforementioned logic and share it across different components. They're not required if there is already a Hook available or if your function doesn't need a Hook at all.

- What is the syntax (or naming convention) for writing a custom hook?: It must start with the word "use" followed by a capital letter before a word that describes what it does (ie useState)

- How do you call a custom hook?: You must first import the custom hook, then you simply call it like any other function.

- When do custom hooks execute?: Upon the first render and then every following re-render so that they always receive the most current props and state values.

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
