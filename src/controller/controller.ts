import * as http from 'http';
import { getIdFromUrl } from '../utils/getIdFromUrl'

const controller = {
  getUsers: (req: any, res: any) => {
    console.log('getting users')
  },
  getSingleUser: (req: any, res: any) => {
    console.log('getting single user')
    const { url } = req;
    const userId = getIdFromUrl(url);
    console.log('user id is ' + userId)
  }
}

export { controller }