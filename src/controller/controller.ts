import * as http from 'http';
import { getIdFromUrl } from '../utils/getIdFromUrl'

const controller = {
  getUsers: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('getting users')
  },
  addUser: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('adding user')
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