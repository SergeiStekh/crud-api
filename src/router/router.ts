import http from 'http';
import { RoutesInterface } from './routes';
import url from 'url';

type RouterType = {
  new(routes: RoutesInterface[]): { routes: RoutesInterface[]},
}

const Router: RouterType = class {
  routes: RoutesInterface[];

  constructor(routes: RoutesInterface[]) {
    this.routes = routes;
  }

  makeRequest(req: http.IncomingMessage, res: http.ServerResponse) {
    const { method, url} = req;
    const route = this.getRoute(method, url);
    if (route) {
      route.handleRoute(req, res);
    } else {
      res.end(JSON.stringify({ 'message': '500 Internal Server Error' }));
    }
  }

  getRoute(method: string | string[] | undefined, url: string | string[] | undefined) {
    const routeId = this.getRouteId(url);
    const route = this.routes.filter(route => {
      if (routeId && route.url.includes(':')) {
        route.url = this.getSingleRoute(route.url, url);
      }
      return route.method === method && route.url === url;
    })[0];
    return route ? route : null;
  }

  getRouteId(route: string | string[] | undefined) {
    if (typeof route !== 'string') {
      return '';
    }
    const routeUrl = url.parse(route);
    const path = routeUrl.pathname;
    const id = path?.split('/').slice(1)[1];
    return id || '';
  }

  getSingleRoute(routeUrl: string, url: string | string[] | undefined) {
    return routeUrl.split(':')[0] + this.getRouteId(url);
  }
}

export { Router };
export type { RouterType };