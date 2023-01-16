import http from 'http';
import { UserType } from 'src/models/userModel';

function writeNotFound(res: http.ServerResponse, userId: string | null) {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: `User with id ${userId} not found` }));
}

function writeServerError(res: http.ServerResponse, error: any) {
  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: error.message }));
}

function writeCreated(res: http.ServerResponse, user: UserType) {
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(user));
}

function writeSuccess(res: http.ServerResponse, data: UserType[] | UserType) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function writeDeleted(res: http.ServerResponse, data: UserType) {
  res.writeHead(204, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function writeInvalidUUID(res: http.ServerResponse) {
  res.writeHead(400, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'User id has invalid formatting' }));
}

export { writeNotFound, writeServerError, writeCreated, writeSuccess, writeDeleted, writeInvalidUUID }