# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?: A field or set of fields (often a numerical id) in a database table that is used to establish a link between the data in the two separate tables. The counterpart to the foreign key is the primary key.

- How do you join two SQL tables? (Provide at least two syntaxes.): With the join keyword being used in the select statement along with the aforementioned "link" (foreign and primary keys) between the two tables and with this syntax the primary and foreign keys MUST have the same name. If they do NOT have the same name, we can join instead join them by specifying which columns we want to use for the joining. Example: join suppliers on products.supplierId = suppliers.supplierId.

- How do you temporarily rename columns or tables in a SQL statement?: By using aliases which allow us to specify something like select column_name AS alias_name, with the alias_name now being the name it will have in the query result.

- How do you create a one-to-many relationship between two tables?: In one table (parent table) we createa primary key which is the one and then with the child table create a foreign key which establishes the relationship between the two.

- How do you create a many-to-many relationship between two tables?: By creating the two tables we want ot connect with each having its own primary key, then we create a junction table with two or more columns with each of these being a foreign key referencing the primary key of our two tables.

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
