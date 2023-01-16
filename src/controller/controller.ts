import * as http from 'http';
import { getIdFromUrl } from '../utils/getIdFromUrl';
import { userModel } from '../models/userModel';
import { writeNotFound, writeServerError, writeCreated, writeSuccess } from '../utils/writeResponse';
import { getBody } from '../utils/getBody';

const controller = {
  getUsers: (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const users = userModel.getUsers();
      writeSuccess(res, users);
    } catch (error: any) {
      writeServerError(res, error);
    }
  },
  addUser: async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const body: any = await getBody(req);
      const { username, age, hobbies } = JSON.parse(body);
      if (username && age && hobbies) {
        const user = await userModel.createUser({ id: '', username, age, hobbies });
        writeCreated(res, user);
      }
    } catch(error) {
      writeServerError(res, error);
    }
  },
  getSingleUser: async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const { url } = req;
    const userId = getIdFromUrl(url);
    if (userId) {
      const singleUser = userModel.getUserByUserId(userId);
      if (singleUser) {
        writeSuccess(res, singleUser);
      } else {
        writeNotFound(res, userId);
      }
    } else {
      writeNotFound(res, userId);
    }
  },
  editUser: async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const { url } = req;
    const userId = getIdFromUrl(url);
    if (!userId) {
      writeNotFound(res, userId);
    } else {
      const user = userModel.getUserByUserId(userId);
      if (!user) {
        writeNotFound(res, userId);
      }
      try {
        const body: any = await getBody(req);
        const updatedUserData = JSON.parse(body);
        if (updatedUserData.username || updatedUserData.age || updatedUserData.hobbies) {
          const updatedUserFields = {
            id: '',
            username: updatedUserData.username || user?.username,
            age: updatedUserData.age || user?.age,
            hobbies: updatedUserData.hobbies || user?.hobbies
          };
          const updatedUser = userModel.updateUser(userId, updatedUserFields);
          writeSuccess(res, updatedUser);
        }
      } catch(error) {
        writeServerError(res, error);
      }
    }
  }, 
  deleteUser: (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('deleting user')
  }
}

export { controller }