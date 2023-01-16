import { uuid } from 'uuidv4';
import users from '../data/data.json';

export type UserType = {
  id: string, 
  username: string,
  age: number,
  hobbies: string[]
}

let usersForUserModal: UserType[] = users;

const userModel = {
  getUsers: () => {
    return usersForUserModal;
  },
  getUserByUserId: (id: string) => {
    const user = usersForUserModal.find(user => user.id == id);
    return user;
  },
  createUser: async (userData: UserType) => {
    const user = {
      ...userData,
      id: uuid()
    };
    usersForUserModal.push(user);
    return user
  },
  updateUser: (id: string, userData: UserType) => {
    const userIndex = usersForUserModal.findIndex(user => user.id === id);
    const existingUser = usersForUserModal[userIndex];
    usersForUserModal[userIndex] = {...existingUser, ...userData};
    usersForUserModal[userIndex].id = existingUser.id;
    return usersForUserModal[userIndex];
  },
  deleteUser: (id: string) => {
    const userIndex = usersForUserModal.findIndex(user => user.id === id);
    const deletedUser = usersForUserModal[userIndex];
    usersForUserModal = usersForUserModal.filter(user => user.id !== id);
    return deletedUser;
  }
}

export { userModel }