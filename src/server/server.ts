import http from 'http';
import url from 'url';
import { RouterType, Router } from '../router/router';
import { RoutesInterface, routes } from '../router/routes';
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
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 'message': '500 Internal Server Error' }));
      }
    });
    this.server = server;
    return server;
  }

  startServer() {
    this.server?.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  }
}

const server = new Server(Router, routes);

export default server;