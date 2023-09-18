# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

- How do you add a row to a SQL table?: By using the insert keyword while specifying the categories and values you want to add. The values should be written in a set of parentheses. It is also important that the categories and values are written IN THE SAME ORDER.

- How do you add multiple rows to a SQL table at once?: The same as above, but you include multiple sets of values inside of their own parentheses, separated by commas.

- How do you update rows in a database table?: By using the update keyword, which table you wish to update, what you want the updated value to be AND you have to specify which items you want to update with the "where" keyword. Example: update "products", set "price" = 100, where "productId" = 24.

- How do you delete rows from a database table?: Using the delete keyword.

- Why is it important to include a `where` clause in your `update` and `delete` statements?: So that you can ensure that you are only updating or deleting the rows you intend to manipulate.

- How do you accidentally delete or update all rows in a table?: If you don't specify where in an update statement you will give each row that same value so all prices would be updated to 100, in the previous example if we didn't specify that it should only be id 24, all products would be given 100 as their price. With delete statements this is even more important because you can't undo delete, so if you aren't careful you could accidentally delete everything.

- How do you get back the modified row without a separate `select` statement?: With an optional returning clause where you can specify \* if you want to return all of the values in the modified row.

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
