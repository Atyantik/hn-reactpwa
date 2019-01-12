declare module '@pawjs/pawjs/src/router/handler' {
    import { AsyncSeriesHook } from 'tapable';
    
    class RouteHandler {
        hooks: {
            initRoutes: AsyncSeriesHook<any []>;
        };
        addRoutes(routes: any []): void;
    }
    export default RouteHandler;
}