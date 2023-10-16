# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?: A promise that is fulfilled once the response is available. It resolves to a response object.

- What is the default request method used by `fetch()`?: GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?: By passing it as an object parameter. These are optional and would look like fetch('api/example', {method: 'GET'})

- How does `fetch` report errors?: A fetch() promise does not reject on HTTP errors, instead, a then() handler must check the response.ok and/or the response.status properties. The value of response.ok will be a boolean while the value of response.status will be the appropriate response status code.

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
