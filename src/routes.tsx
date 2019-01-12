import React from 'react';
import RouterHandler from '@pawjs/pawjs/src/router/handler';
import top from './pages/top';
import newarticles from './pages/new';
import show from './pages/show';
import ask from './pages/ask';
import jobs from './pages/jobs';

const appRoutes = [
  ...top,
  ...newarticles,
  ...show,
  ...ask,
  ...jobs,
];

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler: RouterHandler) {

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      return routeHandler.addRoutes(appRoutes);
    });
  }
}
