import React from 'react';
import AppShell from './components/app-shell';

export default class ProjectServer {
  // eslint-disable-next-line
  apply(serverHandler) {
    serverHandler.hooks.renderRoutes.tap('AddAppShell', ({ setRenderedRoutes, getRenderedRoutes }) => {
      setRenderedRoutes(<AppShell>{ getRenderedRoutes() }</AppShell>);
    });
  }
}
