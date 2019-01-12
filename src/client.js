import React from 'react';
import AppShell from './components/app-shell';
import './resources/css/app.scss';

export default class ProjectClient {
  // eslint-disable-next-line
  apply(clientHandler){
    clientHandler.hooks.renderRoutes.tapPromise('AddAppShell', async ({ setRenderedRoutes, getRenderedRoutes }) => {
      setRenderedRoutes(<AppShell>{ getRenderedRoutes() }</AppShell>);
    });
  }
}
