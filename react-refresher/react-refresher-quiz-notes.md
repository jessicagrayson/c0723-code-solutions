# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?: We define it as a JS function, but the name has to start with a capital letter.

- How do you use JSX in a React component?: By returning it - you must first write return and wrap your JSX in parantheses

- How do you declare the props a React component needs?: Give the component function a props object as a parameter, then you declare the props within the component by assigning them to the prop, example would be {props.color}

- How do you pass props to a React component?: Once a function has received its props object and the properties were assigned to that object, you can then render the component and add a value to the prop it has such as color='red' and now the rendered component will be red.

- How do you include JavaScript expressions in JSX?: You need to return a single root element/parent tag, so you would want to wrap all of your JSX in a parent <div> or empty fragment </>

- What are React hooks and what are the three "Rules of Hooks"?: They are unique functions that are only available while React is rendering and are identifable by the word use such as useState. 1) Can only be called at the top level of your components 2) They cannot be called inside conditions, loops, or other nested functions - only in React function components 3) They cannot be conditional

- How do you manage state in a React component?: By structuring it well and maintaining proper state logic - identify all visual states, determine what triggers state changes (clicking, hovering, etc), declare a state variable to represent one of the visual states you want to display, remove non-essential state variables to avoid bugs caused by redundant or duplicated state, and connect the proper event handlers to manage/update state.

- How do you handle events in React?: By adding event handler functions which are passed to an element like a prop - treat it the way you'd treat color, or size, etc.

- How do you let a parent component know that an event happened?: Using event propagation by calling the event handler prop function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

- When you call stateSetter two things happen - React updates its cache and triggers a re-render of the component. React does not have access to the variable so it ONLY updates its cache and then upon re-render the variable value gets updated

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
