import * as http from 'http';
import { getIdFromUrl } from '../utils/getIdFromUrl';
import { userModel } from '../models/userModel';
import { writeFileToDatabase } from '../utils/writeToDatabase'

async function getBody(req: http.IncomingMessage) {
  return new Promise((resolve, reject) => {
    let body: any[] | any = [];
    req.on('error', (err) => {
      console.error(err);
      reject(err)
    }).on('data', (chunk) => {
    body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      resolve(body);
    });
  })
}

const controller = {
  getUsers: (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const users = userModel.getUsers();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } catch (error: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  },
  addUser: async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const body: any = await getBody(req);
      const { username, age, hobbies } = JSON.parse(body);
      if (username && age && hobbies) {
        const user = await userModel.createUser({ id: '', username, age, hobbies });
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      }
    } catch(error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: '500 Internal Server Error' }));
    }
  },
  getSingleUser: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('getting single user')
    const { url } = req;
    const userId = getIdFromUrl(url);
  },
  editUser: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('editing user')
  }, 
  deleteUser: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('deleting user')
  }
}

export { controller }