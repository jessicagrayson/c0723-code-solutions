import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(req, res, next) {
  // Gets the auth header from request and separates the token from the header
  const token = req.get('authorization')?.split('Bearer')[1];
  // If there is no valid token, throws an error
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  // Verifies the jwt token and extracts the payload
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);
  // Assigns the payloadto the user property of the HTTP request object
  req.user = payload;
  // Calls next() indicating Express is okay to proceed to next route or middleware
  next();
}
