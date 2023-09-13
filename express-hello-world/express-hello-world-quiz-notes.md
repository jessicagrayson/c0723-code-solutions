# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?: Functions that "sit" between the web server and final route handler which allows us to execute functions and tasks during the request-response cycle.

- What is Express middleware useful for?: Access to the response and request objects, the ability to call the next function as a callback, and orderly execution of middleware functions and route handleres.

- How do you mount a middleware with an Express application?: With app.use which allows you to specify a path and a callback function, which specifies which urls should receive the behavior in that callback. Example: if your path points to admin pages, the callback functions can grant certain privileges to the admin pages.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?: The request and repsonse objects. This allows us to manipulate them and complete tasks during the request-response lifecycle.

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
