import http from 'http';
import { controller } from '../controller/controller';

interface RoutesInterface {
  url: string,
  method: string,
  handleRoute: (req: http.IncomingMessage, res: http.ServerResponse) => void;
}

const routes: RoutesInterface[] = [
  {
    url: '/users/',
    method: 'GET',
    handleRoute: controller.getUsers
  },
  {
    url: '/users',
    method: 'GET',
    handleRoute: controller.getUsers
  },
  {
    url: '/users/:id',
    method: 'GET',
    handleRoute: controller.getSingleUser
  },
  {
    url: '/users/',
    method: 'POST',
    handleRoute: controller.addUser
  },
  {
    url: '/users',
    method: 'POST',
    handleRoute: controller.addUser
  },
  {
    url: '/users/:id',
    method: 'PUT',
    handleRoute: controller.editUser
  },
  {
    url: '/users/:id/',
    method: 'PUT',
    handleRoute: controller.editUser
  },
  {
    url: '/users/:id',
    method: 'DELETE',
    handleRoute: controller.deleteUser
  },
  {
    url: '/users/:id/',
    method: 'DELETE',
    handleRoute: controller.deleteUser
  }
]

export { routes };
export type { RoutesInterface };
