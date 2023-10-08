# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?: It provides a cleaner and less verbose way for a parent component to pass data to the entire component tree below it without needing to pass props.

- What values can be stored in context?: Anything. Specifically, any valid JavaScript data type such as strings, arrays, objects, functions, booleans, etc.

- How do you create context and make it available to the components?: You need to create the Context using the built-in createContext function that is provided by React. It is best to do this inside of its own file so that it can be exported out to and wrapped around the components that need it. It will also receive a default value as its argument.

- How do you access the context values?: With the useContext hook

- When would you use context? (in addition to the best answer: "rarely"): Context works well for theming, when we want to allow the user to change the appearance of the app and then ensure that the look stays consistent throughout the app. It also works for account-based projects so that each component can know whether the user has logged in and behave accordingly. It is also useful for routing so that each ink "knows" whether it is active, and finally, it is good for managing state for larger projects where there may be a lot of state up top with many descendent components who need to change state - we can use Context to make that information more readily available.

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
