import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { MicroFrontEndDefinition } from '../models/micro-front-end-definition';
import { APP_ROUTES } from '../app.routes';

export function buildRoutes(options: MicroFrontEndDefinition[]): Routes {

    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => {
            // console.log("###### route loadchildren loadRemoteModule got m:",o , m)
            return m[o.ngModuleName]
        })
    }));    

    return [...APP_ROUTES, ...lazyRoutes];    
}