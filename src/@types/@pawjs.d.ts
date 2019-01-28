declare module '@pawjs/pawjs/src/router/handler' {
    import { AsyncSeriesHook } from 'tapable';
    class RouteHandler {
      public hooks: {
        initRoutes: AsyncSeriesHook<any []>;
      };
      public addRoutes(routes: any []): void;
      public setPwaSchema(schema: any): void;
      public setDefaultSeoSchema(schema: any): void;
      public setDefaultAllowedLoadDelay(delay: number): void;
    }
    export default RouteHandler;
}
