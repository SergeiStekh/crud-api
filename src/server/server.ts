import http from 'http';
import { RouterType, Router } from '../router/router';
import { RoutesInterface, routes } from '../router/routes';
import { writeServerError } from '../utils/writeResponse';
import { logServerIsRunning } from '../utils/logServerIsRunning'
const PORT = process.env.PORT || 3000;

class Server {
  server: null | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  router: any;
  constructor(Router: RouterType, routes: RoutesInterface[]) {
    this.router = new Router(routes);
    this.server = null;
    this.createServer();
  }

  createServer() {
    const server = http.createServer((req, res) => {
      try {
        this.router.makeRequest(req, res);
      } catch (err) {
        writeServerError(res, err);
      }
    });
    this.server = server;
    return server;
  }

  startServer() {
    this.server?.listen(PORT, () => {
      logServerIsRunning(PORT);
    });
  }
}

const server = new Server(Router, routes);

export default server;