import path from 'path';

export default class ResolverWebpack {
  // eslint-disable-next-line
  apply(webpackHandler) {
    webpackHandler.hooks.beforeConfig.tap('ResolvePath', (env, type, config) => {
      try {
        let conf = config;

        if (!Array.isArray(config)) {
          conf = [config];
        }
        conf.forEach((c) => {
          if (c.resolve && c.resolve.alias) {
            // eslint-disable-next-line no-param-reassign
            c.resolve.alias = {
              ...c.resolve.alias,
              '@components': path.resolve(__dirname, './components/'),
            };
          }
        });
      } catch (ex) {
        // eslint-disable-next-line
        console.log(ex);
      }
    });
  }
}
