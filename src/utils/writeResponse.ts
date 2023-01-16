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

export { writeNotFound, writeServerError, writeCreated, writeSuccess }