# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?: A service requester which communicates with a server to request access to its resources - usually a computer or webpage. Usually does not share its own resources.

- What is a server?: A computer program or device that provides service to clients that request its resources. They provide a function or service to many clients and await requests from the client to share.

- Which HTTP method does a browser issue to a web server when you visit a URL?: The GET method which requests a representation of the specified resource. Only used to request data.

- What three things are on the start-line of an HTTP **request** message?: 1. An HTTP method, a verb such as GET, PUT or POST, or a noun like HEAD or OPTIONS. 2. Then the request target - usually a URL or the absolute path of the protocol, port, and domain. 3. The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected verson to use for the response.

- What three things are on the start-line of an HTTP **response** message?: 1. The protocol veresion, usually HTTP/1.1. 2. A status code, indicating whether the request was successful or a failure. 3. A status text which is a brief, purely informational textual description of the status code to help a human to understand the HTTP message.

- What are HTTP headers?: They specify the request or the describe the message body - they give useful information about the request/response.

- Where would you go if you wanted to learn more about a specific HTTP Header?

- Is a body required for a valid HTTP request or response message?: No, but it is useful to provide more info.

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
