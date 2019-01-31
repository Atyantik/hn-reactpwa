import React from 'react';
import AppShell from './components/app-shell';

// Import icons for Apple touch icon
import Icon150 from './resources/pwa-icons/reactpwa-hn-150x150.png';
import Icon168 from './resources/pwa-icons/reactpwa-hn-168x168.png';
import Icon192 from './resources/pwa-icons/reactpwa-hn-192x192.png';
import FaviconIco from './public/favicon.ico';
import FaviconPng from './resources/favicon.png';

export default class ProjectServer {
  // eslint-disable-next-line
  apply(serverHandler) {
    // Add application shell
    serverHandler.hooks.renderRoutes.tap('AddAppShell', ({ setRenderedRoutes, getRenderedRoutes }) => {
      setRenderedRoutes(<AppShell>{ getRenderedRoutes() }</AppShell>);
    });

    serverHandler.hooks.beforeHtmlRender.tapPromise('DSNPreCache', async (Application) => {
      const { htmlProps: { head } } = Application;
      // Add dns precache for hn firebase api
      head.push(<link key="dns-precache-hn-firebase-api" rel="preconnect" href="https://hacker-news.firebaseio.com" />);

      // Add dns precache for CDN
      head.push(<link key="dns-precache-cloudinary-cdn" rel="preconnect" href="https://res.cloudinary.com" />);

      // Add meta theme color explicitly
      head.push(<meta key="meta-theme-color" name="theme-color" content="#0c525d" />);

      // Add apple touch icon
      head.push(<link key="apple-touch-icon-150" rel="apple-touch-icon" sizes="150x150" href={Icon150} />);
      head.push(<link key="apple-touch-icon-168" rel="apple-touch-icon" sizes="168x168" href={Icon168} />);
      head.push(<link key="apple-touch-icon-192" rel="apple-touch-icon" sizes="192x192" href={Icon192} />);

      // Add favicons
      head.push(<link key="favicon-ico" rel="icon" type="image/x-icon" href={FaviconIco} />);
      head.push(<link key="favicon-png" rel="icon" type="image/png" href={FaviconPng} />);
    });
  }
}
