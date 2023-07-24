# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?: So we can see and review them for debugging and to check our codeß

- What is a "model"?: A representation of objects that can be modified

- Which "document" is being referred to in the phrase Document Object Model?: The current webpage/HTML file

- What is the word "object" referring to in the phrase Document Object Model?: HTML content that is represented as an object in the DOM and can be manipulated.

- What is a DOM Tree?: A tree-like structure where all elements in the DOM are represented as nodes with children.

- Give two examples of `document` methods that retrieve a single element from the DOM.: If an element has the id attribute we can get the element using method document.getElementById(id) and elem.querySelector(css) which returns the first element for the given CSS selector.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.: elem.querySelectorAll(css) which will return all elements inside elem matching the given CSS selector.

- Why might you want to assign the return value of a DOM query to a variable?: So it can easily be printed to the console or manipulate it in some other manner.

- What `console` method allows you to inspect the properties of a DOM element object?: console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?: So it can parse all of the elements in the HTML

- What does `document.querySelector()` take as its argument and what does it return?: It takes CSS selectors and its first match.

- What does `document.querySelectorAll()` take as its argument and what does it return?: It takes a CSS selector as its arguement and returns a static (NOT live) NodeList representing a list of the element's that match the specified group of selectors.

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
