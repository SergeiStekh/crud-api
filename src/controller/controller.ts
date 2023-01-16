import * as http from 'http';
import { getIdFromUrl } from '../utils/getIdFromUrl';
import { userModel } from '../models/userModel';
import { writeNotFound, writeServerError, writeCreated, writeSuccess, writeDeleted, writeInvalidUUID } from '../utils/writeResponse';
import { getBody } from '../utils/getBody';
import { checkIfValidUUID } from '../utils/checkIfValidUUID'

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
      const isValidId = checkIfValidUUID(userId);
      if (!isValidId) {
        writeInvalidUUID(res);
        return;
      }
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
      const isValidId = checkIfValidUUID(userId);
      if (!isValidId) {
        writeInvalidUUID(res);
        return;
      }
      const user = userModel.getUserByUserId(userId);
      if (!user) {
        writeNotFound(res, userId);
        return;
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
    const { url } = req;
    const userId = getIdFromUrl(url);
    if (!userId) {
      writeNotFound(res, userId);
      return;
    } else {
      const isValidId = checkIfValidUUID(userId);
      if (!isValidId) {
        writeInvalidUUID(res);
        return;
      }
      try {
        const deletingUser = userModel.getUserByUserId(userId);
        if (!deletingUser) {
          writeNotFound(res, userId);
        } else {
          const deletedUser = userModel.deleteUser(userId);
          writeDeleted(res, deletedUser);
        }
      } catch(error) {
        writeServerError(res, error);
      }
    }
  }
}

export { controller }