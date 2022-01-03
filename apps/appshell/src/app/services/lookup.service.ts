import { Injectable } from '@angular/core';
import { MicroFrontEndDefinition } from '../models/micro-front-end-definition';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<MicroFrontEndDefinition[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'mfe app 1',
                remoteName: 'mfe-app1',
                routePath: 'mfe-app1',
                ngModuleName: 'RemoteEntryModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'mfe app 2',
                routePath: 'mfe-app2',
                ngModuleName: 'RemoteEntryModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:4203/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'mfe app 3',
                routePath: 'mfe-app3',
                ngModuleName: 'RemoteEntryModule'
            },
        ] as MicroFrontEndDefinition[]);
    }
}

// 'mfe-app1': 'http://localhost:4201/remoteEntry.js',
// 'mfe-app2': 'http://localhost:4202/remoteEntry.js',
// 'mfe-app3': 'http://localhost:4203/remoteEntry.js',
