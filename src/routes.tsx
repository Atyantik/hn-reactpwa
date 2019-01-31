import RouterHandler from '@pawjs/pawjs/src/router/handler';
import ask from './pages/ask';
import jobs from './pages/jobs';
import newarticles from './pages/new';
import show from './pages/show';
import top from './pages/top';
import user from './pages/user';
import story from './pages/story';

// PWA icon set
import Icon1024 from './resources/pwa-icons/reactpwa-hn-1024x1024.png';
import Icon114 from './resources/pwa-icons/reactpwa-hn-114x114.png';
import Icon128 from './resources/pwa-icons/reactpwa-hn-128x128.png';
import Icon144 from './resources/pwa-icons/reactpwa-hn-144x144.png';
import Icon150 from './resources/pwa-icons/reactpwa-hn-150x150.png';
import Icon168 from './resources/pwa-icons/reactpwa-hn-168x168.png';
import Icon192 from './resources/pwa-icons/reactpwa-hn-192x192.png';
import Icon2048 from './resources/pwa-icons/reactpwa-hn-2048x2048.png';
import Icon48 from './resources/pwa-icons/reactpwa-hn-48x48.png';
import Icon512 from './resources/pwa-icons/reactpwa-hn-512x512.png';
import Icon72 from './resources/pwa-icons/reactpwa-hn-72x72.png';
import Icon96 from './resources/pwa-icons/reactpwa-hn-96x96.png';

// Get application routes and merge them with spread operator
const appRoutes = [
  ...top,
  ...newarticles,
  ...show,
  ...ask,
  ...jobs,
  ...user,
  ...story,
];

export default class Routes {
  // eslint-disable-next-line
  public apply(routeHandler: RouterHandler) {
    // PWA Schema
    routeHandler.setPwaSchema({
      background_color: '#0c525d',
      description: 'Hacker News progressive web application, PWA, built using ReactPWA & PawJS',
      // Possible values ltr(left to right)/rtl(right to left)
      dir: 'ltr',
      display: 'standalone',
      icons: [
        {
          sizes: '2048x2048',
          src: Icon2048,
        },
        {
          sizes: '1024x1024',
          src: Icon1024,
        },
        {
          sizes: '512x512',
          src: Icon512,
        },
        {
          sizes: '192x192',
          src: Icon192,
        },
        {
          sizes: '168x168',
          src: Icon168,
        },
        {
          sizes: '150x150',
          src: Icon150,
        },
        {
          sizes: '144x144',
          src: Icon144,
        },
        {
          sizes: '128x128',
          src: Icon128,
        },
        {
          sizes: '114x114',
          src: Icon114,
        },
        {
          sizes: '96x96',
          src: Icon96,
        },
        {
          sizes: '72x72',
          src: Icon72,
        },
        {
          sizes: '48x48',
          src: Icon48,
        },
      ],
      // language: Default en-US
      lang: 'en-US',
      name: 'HN: ReactPWA',
      orientation: 'any',
      short_name: 'HN ReactPWA',
      // Orientation of web-app possible:
      // any, natural, landscape, landscape-primary, landscape-secondary,
      // portrait, portrait-primary, portrait-secondary
      start_url: '/',
      theme_color: '#0c525d',

    });

    // SEO Schema
    routeHandler.setDefaultSeoSchema({
      description: 'Hacker News progressive web application, PWA, built using ReactPWA & PawJS',
      facebook: {
        admins: [
          '478476795529955',
          '1501220844',
          '765904161',
        ],
      },
      image: Icon1024,
      keywords: [
        'react',
        'hacker',
        'hacker news',
        'news', 'pwa',
        'hacker news pwa',
        'hnpwa',
        'hn pwa',
        'hn',
      ],
      site_name: 'HN ReactPWA',
      title: 'HN ReactPWA',
      twitter: {
        creator: '@atyantik_tech',
        site: 'https://www.atyantik.com',
      },
    });

    // Setting Delay option to 0 so that skeleton loading works seamless
    routeHandler.setDefaultAllowedLoadDelay(0);

    // On initialization of routes, add application routes
    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      return routeHandler.addRoutes(appRoutes);
    });
  }
}
