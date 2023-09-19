# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?: useEffect can be used in React to perform "side effects", including loading data from a server. So, we can define a function inside useEffect that fetches or processes the data and then it will run when the component mounts or when dependencies change.

- What browser function can be used to make HTTP requests to a server in React?: The fetch function is a built-in browser function that we can use to fetch resources (usually data) from a URL.

- How do you use `useEffect` to load component data just once when the component mounts?: You pass an empty dependency array as the second argument to the useEffect which ensures that the effect will only run after the initial render.

- How do you use `useEffect` to load component data every time the data key changes?: You include it in the dependency array which gets passed as a second argument to the useEffect function.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?: Using a third-party data management library such as React Query and Vercel SWR. These are useful for large scale apps that may have excessive network traffic.

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
