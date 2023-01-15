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
    url: '/users/:id/',
    method: 'GET',
    handleRoute: controller.getSingleUser
  }
]

export { routes };
export type { RoutesInterface };
