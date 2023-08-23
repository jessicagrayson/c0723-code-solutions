# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?: They are logical operators that can be used outside of 'if' statements to provide a default value. For example, we could indicate that const name = user.name || 'guest' so that if there is no user.name, the user is a guest.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?: For || if the first operand is true, the second never gets evaluated, for && if the first one is falsy, the second will never be evaluated.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?: Nullish coalescing is similar to || but differs in that || returns the right side value if the left is ANY falsy value, while ?? only does this when the leftside is null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?: A ternary operator is a single statement compared to if/else's block of code - as such, ternary operator is faster than if/else and can be used in places where if/else is not allowed. Is also more readable than if/else blocks.

- What is the `?.` (optional chaining) operator? When would you use it?: It is a way to access nested properties of an object. It can be used in lieu of writing multiple nested checks and/or using if/else statements, you can more easily verify whether a property is null or undefined and if paired with ?? you can provide a fallback message or code to execute.

- What is `...` (spread) syntax? How do you use it with arrays and objects?: It allows you to copy elements of an array or object for use in a new array or object. If you use spread syntax with the variable you wish to copy values from you can put them in a new array or object. Example: const x = [1,2,3], const y = [...x, 4, 5, 6]

- What data types can be spread into an array? Into an object?: For arrays, an iterable object (array, string, etc). For objects, you can spread properties of an object into another object

- How does spread syntax differ from rest syntax?: Rest syntax condenses multiple elements into one, whereas spread syntax expands the elements it is applied to.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
