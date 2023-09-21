/* Query the database to find the "userId" and "hashedPassword" for the "username".
 * If no user is found,
 *   throw a 401: 'invalid login' error.
 * If a user is found,
 *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
 *   If the password does not match,
 *     throw a 401: 'invalid login' error.
 *   If the password does match,
 *     Create a payload object containing the user's "userId" and "username".
 *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
 *     Send the client a 200 response containing the payload and the token.
 */
