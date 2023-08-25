# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?: Functions provided by React that allow you to use state and other features in functional components. They allow you to reuse state logic. Start with "use" and are only available during the rendering cycle. Should be at top of component.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory)): 1. Hooks can only be used at the top level of functional components or other hooks, 2. They cannot be called conditionally - should always be called in the same order. 3. Should not be called in regular JS functions. 4. Can only be called on React components.

- What is the purpose of state in React?: Used to manage data that can change over time and affect rendering of the component. It lets you store and updates values that will trigger the component to re-render when a change is made.

- Why can't we just maintain state in a local variable?: Normal variables can't trigger components to re-render when their values change.

- What two actions happen when you call a `state setter` function?: 1. The new state value is set - indicates data we want to update. 2. Component is re-rendered tp reflect the changes.

- When does the local `state variable` get updated with the new value?: When function gets recalled and triggers re-render it runs again and updates values.

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
