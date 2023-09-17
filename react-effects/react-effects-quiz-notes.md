# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?: When it has been created and rendered to the DOM for the first time, this usually occurs when the component is initially added to the component tree and the content is visible in browser.

- What is a React Effect?: A function that allows you to perform "side effects" in a functional component. It can be used for data fetching, DOM manipulation, subscriptions, and more. The useEffect Hook defines and manages these "side effects".

- When should you use an Effect and when should you not use an Effect?: We should use an Effect when we want to perform "side effects" in response to component events, state changes, or prop changes. We do not want to use it for simple rendering logic or setting initial state values.

- When do Effects run?: After the render phase in React components. They run after the initial render and then after every update to their dependencies.

- What function is used to declare an Effect?: useEffect

- What are Effect dependencies and how do you declare them?: They are an array of values that the effect depends on, if any of them change between renders, the effect will be run again. They are declared as an optional argument and are passed as an array such as useEffect(callback, [dep1, dep2])

- Why would you want to clean up from an Effect?: When we need to "clean up" any work or side effects that were performed by an Effect when the component unmounts or its dependencies change. This serves to prevent memory leaks or unpredictable behavior.

- How do you clean up from an Effect?: By returning the a cleanup function from the Effect itself.

- When does the cleanup function run?: When the component unmounts oor when the effect dependencies change - before the effect is re-run.

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
