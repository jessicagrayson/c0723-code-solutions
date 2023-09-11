# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?: A service "requester", sends a request for information to the server which then responds.

- What is a server?: The server provides a resource, service, or function, often to many clients, and responds to requests from those clients.

- Which HTTP method does a browser issue to a web server when you visit a URL?: GET - indicating that a resource should be fetched.

- What is on the first line of an HTTP **request** message?: A start line which contains the HTTP method (GET, PUT, POST, etc) that describes the action to be performed, the request target which is usually a URL or the absolute path of a protocal, domain or port, and the HTTP version which defines the structure of the remaining message.

- What is on the first line of an HTTP **response** message?: The status line which contains the protocal version, usually HTTP/1.1, a status code indicating success or failure of the request - common codes are 200, 404 and 302, and a status text which is a brief textual description of the status code that provides human readability. An example status would be: HTTP/1.1 404 Not Found.

- What are HTTP headers?: A field of an HTTP message that passes additional context and metadata about the response or request. For example, a request header can indicate its preferrred media formats while the response header can indicate the media format being returned.

- Is a body required for a valid HTTP message?: No, but when they are present they contain data associated with the requested such as the content of an HTML form. Requests fetching resources using GET, HEAD, DELETE, or OPTIONS usually don't need one.

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
